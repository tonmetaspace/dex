import { Cell, TonClient, Address } from "ton";
import Ton from "assets/images/tokens/ton.svg";

import { localStorageTokensToObject } from "utils";
import { PoolInfo } from 'components/PoolInfo'
import { FOUND_JETTON } from 'consts'

export type PoolInfo = {
    ammMinter: string;
    tokenMinter: string;
    image?: string;
    displayName: string;
    color: string;
    name: string;
    isCustom?: boolean;
    isDisabled?: boolean;
    decimals: number;
    ammVersion?: number;
};

export type PoolInfoRaw = {
    ammMinter?: string;
    tokenMinter?: string;
    image: string;
    displayName: string;
    color: string;
    name: string;
};

export const MainNetPoolsRoot: { [key: string]: PoolInfo } = {
    "EQC61IQRl0_la95t27xhIpjxZt32vl1QQVF2UgTNuvD18W-4": {
        ammMinter: "EQDnLbES4CER47LYR45Ti0cw4ScvPUJ3HShtH9FbIFGDACkj",
        tokenMinter: "EQC61IQRl0_la95t27xhIpjxZt32vl1QQVF2UgTNuvD18W-4",
        image: "https://raw.githubusercontent.com/orbit-chain/bridge-token-image/main/ton/usdc.png",
        displayName: "oUSDC",
        color: "#3EAAB1",
        name: "Orbit Bridge TON USD Coin",
        decimals: 6,
    },
    "EQAW42HutyDem98Be1f27PoXobghh81umTQ-cGgaKVmRLS7-": {
        ammMinter: "EQDXAi23o05pbnxMGIQVFDrZt6fdPeRZlMQ0sPPm0tpEju5I",
        tokenMinter: "EQAW42HutyDem98Be1f27PoXobghh81umTQ-cGgaKVmRLS7-",
        image: "https://raw.githubusercontent.com/orbit-chain/bridge-token-image/main/ton/eth.png",
        displayName: "oETH",
        color: "#3EAAB1",
        name: "Orbit Bridge TON Ethereum",
        decimals: 18,
    },
    EQANasbzD5wdVx0qikebkchrH64zNgsB38oC9PVu7rG16qNB: {
        ammMinter: "EQA0b9fTX2eVTV8QfdyGlGUO6uTc2wWOs-7IsxqmU2FuOvvC",
        tokenMinter: "EQANasbzD5wdVx0qikebkchrH64zNgsB38oC9PVu7rG16qNB",
        image: "https://raw.githubusercontent.com/orbit-chain/bridge-token-image/main/ton/wbtc.png",
        displayName: "oWBTC",
        color: "#3EAAB1",
        name: "Orbit Bridge TON WBTC",
        decimals: 8,
    },
    "EQAwr5lcbQcLKTAg_SQ-dpKWNQZpO1MGnrAs53bf1gkKTVHx": {
        ammMinter: "EQAoFEOWRZt9rZlJDv60ErW-BlaXsI4Q1yLSAdzqcYuwkg0j",
        tokenMinter: "EQAwr5lcbQcLKTAg_SQ-dpKWNQZpO1MGnrAs53bf1gkKTVHx",
        image: "https://raw.githubusercontent.com/orbit-chain/bridge-token-image/main/ton/orbs.png",
        displayName: "oORBS",
        color: "#3EAAB1",
        name: "Orbit Bridge TON Orbs",
        decimals: 18,
    },
    "EQDCJL0iQHofcBBvFBHdVG233Ri2V4kCNFgfRT-gqAd3Oc86": {
        ammMinter: "EQCiC_tXfU9p5oACQY0naMZi0tZz-1oeKdB1mh3KjvpogFgB",
        tokenMinter: "EQDCJL0iQHofcBBvFBHdVG233Ri2V4kCNFgfRT-gqAd3Oc86",
        image: "https://media.fanz.ee/images/91ee938a92934656a01131c569b377b6.png",
        displayName: "FNZ",
        color: "#CCAAFF",
        name: "Fanzee Token",
        isCustom: false,
        decimals: 9,
    },
    "EQCcLAW537KnRg_aSPrnQJoyYjOZkzqYp6FVmRUvN1crSazV": {
        ammMinter: "EQB8Fmy0fbDNyEP_j0lZLbJqbEORgyWLEmJPJWMNbPy-vS_7",
        tokenMinter: "EQCcLAW537KnRg_aSPrnQJoyYjOZkzqYp6FVmRUvN1crSazV",
        image: "https://bafkreie6ydxbcmq7xqalyxvqo6tq4fo7ecycv5jy2dwafn2yhelcubjaeq.ipfs.nftstorage.link/",
        displayName: "AMBR",
        color: "#F8BD58",
        name: "Ambra",
        isCustom: false,
        decimals: 9,
    },
    "EQBl3gg6AAdjgjO2ZoNU5Q5EzUIl8XMNZrix8Z5dJmkHUfxI": {
        ammMinter: "EQB83OCEDal8X493MPol9owHgHpxsAsm2W02iu8uZXckOFGH",
        tokenMinter: "EQBl3gg6AAdjgjO2ZoNU5Q5EzUIl8XMNZrix8Z5dJmkHUfxI",
        image: "https://bafkreig3d3barh2mruuygsugy7e2ebtkkazs7hxob6ghcqmcpqg67konca.ipfs.nftstorage.link/",
        displayName: "LAVE",
        color: "#CDB8D7",
        name: "Lavandos",
        decimals: 9,
    },
    "EQAvDfWFG0oYX19jwNDNBBL1rKNT9XfaGP9HyTb5nb2Eml6y": {
        ammMinter: "EQB3jfFvpzv8ZC0CjFgxX4-d1XsoZaVJ3mlfp8EfFdrpqqzt",
        tokenMinter: "EQAvDfWFG0oYX19jwNDNBBL1rKNT9XfaGP9HyTb5nb2Eml6y",
        image: "https://bafkreihafcr35l764lbwllejvdgux2anmhkyi7kab7ytqxn2cjq44ukhoa.ipfs.nftstorage.link/",
        displayName: "TGR",
        color: "#69ABE8",
        ammVersion: 1.1,
        name: "Tegro Token",
        decimals: 9,
    },
    "EQBzyesZ3p1WGNrggNSJi6JFK3vr0GhqJp4gxker9oujjcuv": {
        name: "TonTake",
        ammMinter: "EQASiflLNONDlfvj4ZO6Vt7P1tB7yJ6s8BeW2GEEKODmOU_w",
        tokenMinter: "EQBzyesZ3p1WGNrggNSJi6JFK3vr0GhqJp4gxker9oujjcuv",
        displayName: "TAKE",
        image: "https://bafkreifj24zj44pu6zqq2u2wainycswqpafhwal4ttqhjt4t4yzgibipua.ipfs.nftstorage.link/",
        color: "#83ABCD",
        decimals: 9,
    },
    "EQB-ajMyi5-WKIgOHnbOGApfckUGbl6tDk3Qt8PKmb-xLAvp": {
        name: "TonexCoin",
        ammMinter: "EQBLNl0ixeqsDRCGOGEjA9Zsbf7Pjqpjjb0FqBkFjLktXO7E",
        tokenMinter: "EQB-ajMyi5-WKIgOHnbOGApfckUGbl6tDk3Qt8PKmb-xLAvp",
        displayName: "TNX",
        image: "https://bafkreiej6elbgpxhx65ej4swf4vlvrxmgavtv3rafq37q7zp5j42tjpn6y.ipfs.nftstorage.link/",
        color: "#234054",
        decimals: 9,
    },
    "EQD0vdSA_NedR9uvbgN9EikRX-suesDxGeFg69XQMavfLqIw": {
        name: "Huebel Bolt",
        ammMinter: "EQBIzHiopIkaXdXdSZ6Sm57kZV0y_5tZjnGO4fTUsMT0lOUz",
        tokenMinter: "EQD0vdSA_NedR9uvbgN9EikRX-suesDxGeFg69XQMavfLqIw",
        displayName: "BOLT",
        image: "https://bafkreibl2zdu5enctuaygly4xs2zi6z2tqtyaeb5whpnwzjabryitshroa.ipfs.nftstorage.link/",
        color: "#7c7c7c",
        decimals: 9,
    },
    "EQDKXqUJ2YE_NhLehOLZBkSp-mPDI1T7ih1VsGqxJCwNoWg6": {
        name: "LifeBlood Coin",
        ammMinter: "EQCq4FMdgxhaKbSCS-vRsrrg-y6n78om3aGwBAPqAmEj5mch",
        tokenMinter: "EQDKXqUJ2YE_NhLehOLZBkSp-mPDI1T7ih1VsGqxJCwNoWg6",
        displayName: "LBC",
        image: "https://bafkreicptoxshksqauofgcau4vexo3gqeogx4sjug66rwj235tly4xpypa.ipfs.nftstorage.link/",
        color: "#FF6800",
        decimals: 9,
    },
    "EQA5JQIavp8-1053-23xry7B0-18-0uTubhPSX2VhTELe-RP": {
        ammMinter: "EQAt_yq_KS7I8-EKyC9c6LZ5OzSkDmmZxWMUTb0l7pf94AyZ",
        tokenMinter: "EQA5JQIavp8-1053-23xry7B0-18-0uTubhPSX2VhTELe-RP",
        image: "https://bafkreid74uh3urooz4oib7dx5kr7i7zwmpdbx72vdq4ffb3slvhluhegna.ipfs.nftstorage.link/",
        displayName: "BKN",
        color: "#EDBC7A",
        name: "BookN",
        decimals: 9,
    },
};

export let MainNetPools = (): { [key: string]: PoolInfo } => MainNetPoolsRoot;

export const UsersPools = (): { [key: string]: PoolInfo } => {
    return  {...localStorageTokensToObject()}
};

export const TemporaryPool = (): { [key: string]: PoolInfo } => {
    const temporaryPool = JSON.parse(localStorage.getItem(FOUND_JETTON) || '{}')
    const result: any = {}
    result[temporaryPool?.tokenMinter] = temporaryPool
    return result
}


export const ton: PoolInfo = {
    isCustom: false,
    image: Ton,
    displayName: "TON",
    name: "ton",
    color: "#1490CD",
    ammMinter: "ton",
    tokenMinter: "ton",
    decimals: 9,
};

let isTestNet = true;
export const Pools = () => {
    return { ...MainNetPools(), ...UsersPools() };
};

const tokenCache: { [key: string]: Address } = {};

export function addToken(key: string, pool: PoolInfo) {
    const pools = Pools();
    pools[key] = pool;
}

async function fetchAndCache(fn: Promise<Address>, cacheKey: string) {
    const res = await fn;
    tokenCache[cacheKey] = res;
    return res;
}

export async function getToken(client: TonClient, token: string, owner: Address) {
    const jettonWalletKey = `${token}:jettonWallet:${owner}`;
    const jettonWallet = tokenCache[jettonWalletKey] || (await fetchAndCache(resolveJettonWallet(client, owner, Address.parse(Pools()[token].tokenMinter!!)), jettonWalletKey));
    const lpWalletKey = `${token}:lpWallet`;
    const lpWallet = tokenCache[lpWalletKey] || (await fetchAndCache(resolveJettonWallet(client, owner, Address.parse(Pools()[token].ammMinter!!)), lpWalletKey));

    return {
        ...Pools()[token],
        jettonWallet,
        lpWallet,
    };
}

export async function resolveJettonWallet(client: TonClient, walletAddress: Address, jettonMaster: Address) {
    let cell = new Cell();
    cell.bits.writeAddress(walletAddress);

    // tonweb style - this way its more optimized for browser
    const b64data = bytesToBase64(await cell.toBoc({ idx: false }));
    let res = await client.callGetMethod(jettonMaster, "get_wallet_address", [["tvm.Slice", b64data]]);

    return bytesToAddress(res.stack[0][1].bytes);
}

export function bytesToAddress(bufferB64: string) {
    const buff = Buffer.from(bufferB64, "base64");
    let c2 = Cell.fromBoc(buff);
    return c2[0].beginParse().readAddress() as Address;
}

const base64abc = (() => {
    const abc = [];
    const A = "A".charCodeAt(0);
    const a = "a".charCodeAt(0);
    const n = "0".charCodeAt(0);
    for (let i = 0; i < 26; ++i) {
        abc.push(String.fromCharCode(A + i));
    }
    for (let i = 0; i < 26; ++i) {
        abc.push(String.fromCharCode(a + i));
    }
    for (let i = 0; i < 10; ++i) {
        abc.push(String.fromCharCode(n + i));
    }
    abc.push("+");
    abc.push("/");
    return abc;
})();

/**
 * @param bytes {Uint8Array}
 * @return {string}
 */
export function bytesToBase64(bytes: any) {
    let result = "";
    let i;
    const l = bytes.length;
    for (i = 2; i < l; i += 3) {
        result += base64abc[bytes[i - 2] >> 2];
        result += base64abc[((bytes[i - 2] & 0x03) << 4) | (bytes[i - 1] >> 4)];
        result += base64abc[((bytes[i - 1] & 0x0f) << 2) | (bytes[i] >> 6)];
        result += base64abc[bytes[i] & 0x3f];
    }
    if (i === l + 1) {
        // 1 octet missing
        result += base64abc[bytes[i - 2] >> 2];
        result += base64abc[(bytes[i - 2] & 0x03) << 4];
        result += "==";
    }
    if (i === l) {
        // 2 octets missing
        result += base64abc[bytes[i - 2] >> 2];
        result += base64abc[((bytes[i - 2] & 0x03) << 4) | (bytes[i - 1] >> 4)];
        result += base64abc[(bytes[i - 1] & 0x0f) << 2];
        result += "=";
    }
    return result;
}

// Deployer : https://sandbox.tonwhales.com/explorer/address/EQBdPuDE6-9QE6c7dZZWbfhsE2jS--EfcwfEvGaWjKeW8vfO
// USDC-Minter : https://sandbox.tonwhales.com/explorer/address/EQCDEwcaliIbTcV13eLMfvZ3QAXaIGv9v4mxZbFKYCPRmh8B
// DeployerUSDC : https://sandbox.tonwhales.com/explorer/address/EQD05JqOhN8IY1FU_RspKhx4o9jn5aLlqJouYMZgpIi6ZlTr
// AMM-Minter : https://sandbox.tonwhales.com/explorer/address/EQDZgM7d4EnRkKYPjc1SU34U6PTv1tDz86ct-H_Js-rntnTB
// LP-Wallet : https://sandbox.tonwhales.com/explorer/address/EQAblUXhaGCFlt4kqxZeLNxPYvsI_MWkpnAWqVIpmRayhw4L
