import BN from "bn.js";
import BigNumber from "bignumber.js";
import { Address, Cell, RawCurrencyCollection, RawMessage, Slice, toNano } from "ton";
import { colors, TELEGRAM_WEBAPP_PARAM, TEST_MODE, TOKENS_IN_LOCAL_STORAGE } from "consts";
import { PoolInfo } from "services/api/addresses";
var Buffer = require("buffer/").Buffer; // note: the trailing slash is important!
global.Buffer = Buffer;

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const splitToGroups = (arr: any, size: number) => {
    const arrayOfArrays = [];
    for (let i = 0; i < arr.length; i += size) {
        arrayOfArrays.push(arr.slice(i, i + size));
    }
    return arrayOfArrays;
};

const getToken = (tokens: PoolInfo[], tokenId: string) => {
    return tokens.find((t) => t.name === tokenId);
};

const getIsSelectedTokenMobile = (group: PoolInfo[], selected?: string) => {
    return group.find((g) => g.name === selected);
};

export const customToFixed = (num: number, padding?: number) => {
    try {
        var re = new RegExp("^-?\\d+(?:.\\d{0," + (Number(padding) === 0 ? -1 : padding ? padding : 2) + "})?");
        return num
            .toString()
            .match(re)!![0]
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } catch (error) {
        return "0";
    }
};

export type SendMsgOutAction = {
    type: "send_msg";
    message: RawMessage;
    mode: number;
};
export type ReserveCurrencyAction = {
    type: "reserve_currency";
    mode: number;
    currency: RawCurrencyCollection;
};
export type UnknownOutAction = { type: "unknown" };
const decimals = new BN("1000000000");

export type OutAction = SendMsgOutAction | ReserveCurrencyAction | UnknownOutAction;

export function parseTrc20Transfer(msgBody: Cell) {
    let slice = msgBody.beginParse();
    var op = slice.readUint(32);
    var query = slice.readUint(64);
    var to = sliceToAddress(slice);
    var grams = slice.readCoins();
    console.log("parseTrc20Transfer amount", grams.toString(10));
    console.log("parseTrc20Transfer", to);
    return {
        op: op.toString(10),
        query: query.toString(10),
        to: to,
        amount: grams,
        // amount: fees
    };
}

export function parseTrc20TransferRecipt(msgBody: Cell) {
    let slice = msgBody.beginParse();
    var op = slice.readUint(32);
    var query = slice.readUint(64);
    var to = sliceToAddress(slice);

    var grams = slice.readCoins();
    console.log("parseTrc20Transfer amount", grams.toString(10));
    console.log("parseTrc20Transfer", to);
    return {
        op: op.toString(10),
        query: query.toString(10),
        to: to,
        amount: grams,
        // amount: fees
    };
}

export function toUnixTime(timeInMS: number) {
    return Math.round(timeInMS / 1000);
}

export function sliceToString(s: Slice) {
    let data = s.readRemaining();
    return data.buffer.slice(0, Math.ceil(data.cursor / 8)).toString();
}

export function cellToString(s: Cell) {
    let data = s.beginParse().readRemaining();
    return data.buffer.slice(0, Math.ceil(data.cursor / 8)).toString();
}

export function base64StrToCell(str: string): Cell[] {
    let buf = Buffer.from(str, "base64");
    return Cell.fromBoc(buf);
}

export function addressToSlice264(a: Address) {
    let c = new Cell();
    c.bits.writeAddress(a);
    const s = c.beginParse();
    s.readUint(3);
    const addr = s.readUint(264);
    return addr;
}

export function sliceToAddress267(s: Slice) {
    new BN(s.readUint(3)); //ignore anycast bits
    return sliceToAddress(s);
}

export function sliceToAddress(s: Slice) {
    const wc = new BN(s.readUint(8));
    const addr = s.readUint(256);
    new Address(wc.toNumber(), addr.toBuffer());
    return "address";
}

export function hexToBn(num: string) {
    return new BN(BigInt(num).toString());
}

function bnFmt(num: BN | BigInt) {
    let str = num.toString();
    return `${BigInt(str) / BigInt(1e9)}.${BigInt(str) % BigInt(1e9)} `;
}

const ten = new BigNumber(10);

export function toDecimals(num: number | string | BN, decimals: number | string): BN {
    return new BN(BigNumber(num.toString()).multipliedBy(ten.pow(decimals)).toFixed(0));
}

export function fromDecimals(num: number | string | BN, decimals: number | string) {
    return BigNumber(num.toString()).div(ten.pow(decimals)).toFixed();
}

export function stripBoc(bocStr: string) {
    //console.log(`parsing boc ${bocStr}`);
    return bocStr.substr(2, bocStr.length - 4);
}

const ENC: any = {
    "+": "-",
    "/": "_",
    "=": ".",
};

export function base64UrlEncode(base64: string) {
    return base64.replace(/[+/=]/g, (m) => {
        return ENC[m];
    });
}

export const getParamsFromUrl = (name: string, search?: string) => {
    const query = new URLSearchParams(search || window.location.search);
    return query.get(name);
};

const isTelegramWebApp = () => {
    return getParamsFromUrl(TELEGRAM_WEBAPP_PARAM);
};

const getLocalStorageTokens = () => {
    const tokenFromLocalStorage = localStorage.getItem(TOKENS_IN_LOCAL_STORAGE);

    if (tokenFromLocalStorage && Array.isArray(JSON.parse(tokenFromLocalStorage))) {
        return JSON.parse(tokenFromLocalStorage);
    }
};

const localStorageTokensToObject = () => {
    const customTokens = getLocalStorageTokens();
    if (!customTokens) {
        return;
    }
    const result: { [key: string]: PoolInfo } = {};
    customTokens.forEach((token: PoolInfo) => {
        result[token.tokenMinter] = token;
    });
    return result;
};

const isDev = () => {
    return process.env.NODE_ENV === "development";
};

const isAllowedToUseApp = () => {
    const isAllowed = localStorage.getItem(TEST_MODE);
    if (isAllowed) {
        return true;
    }

    if (!isAllowed && process.env.NODE_ENV === "development") {
        return true;
    }
    return false;
};

const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
};

function convertToCurrencySystem(value?: string | number) {
    if (!value) {
        return 0;
    }
    // Nine Zeroes for Billions
    return Math.abs(Number(value)) >= 1.0e9
        ? (Math.abs(Number(value)) / 1.0e9).toFixed(2) + "B"
        : // Six Zeroes for Millions
        Math.abs(Number(value)) >= 1.0e6
        ? (Math.abs(Number(value)) / 1.0e6).toFixed(2) + "M"
        : // Three Zeroes for Thousands
        Math.abs(Number(value)) >= 1.0e3
        ? (Math.abs(Number(value)) / 1.0e3).toFixed(2) + "K"
        : Math.abs(Number(value));
}

const getActionFromParams = (value: any) => {
    const result = value["*"].split("/")[0];
    return result.replace("-", " ");
};

export const toNanoSafe = (value?: string | number, decimals = 9): BN => {
    if (!value) {
        return toDecimals("0", decimals);
    }

    let result;
    try {
        result = toDecimals(value, decimals);
    } catch (error) {
        console.log(error);

        result = toDecimals("0", decimals);
    }
    return result;
};

export const calculateDecimals = (val: string) => {
    const n = parseFloat(val)
    let result: string
    if (n > 1) {
        result = n.toFixed(2)
    } else if (n < 0.01) {
        result = n.toFixed(6)
    } else {
        result = n.toFixed(4)
    }
    if(parseFloat(result) > 999) {
        result = parseInt(result).toLocaleString('en-US')
    }
    return result
}

const getUserTokensFromLocalStorage = () => JSON.parse(localStorage.getItem(TOKENS_IN_LOCAL_STORAGE) || '[]')

const addUserTokenToLocalStorage = (foundToken: PoolInfo) => {
    let usersTokens = getUserTokensFromLocalStorage()
    usersTokens = [foundToken, ...usersTokens.filter((token: PoolInfo) => token.tokenMinter !== foundToken?.tokenMinter)]
    window.localStorage.setItem(TOKENS_IN_LOCAL_STORAGE, JSON.stringify(usersTokens))
}

export {
    delay,
    splitToGroups,
    getToken,
    getIsSelectedTokenMobile,
    isTelegramWebApp,
    isAllowedToUseApp,
    isDev,
    getRandomColor,
    localStorageTokensToObject,
    getLocalStorageTokens,
    convertToCurrencySystem,
    getActionFromParams,
  getUserTokensFromLocalStorage,
  addUserTokenToLocalStorage
};
