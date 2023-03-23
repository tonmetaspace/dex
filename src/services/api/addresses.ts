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
    "EQB9Op5MAUoymk6Y_4x5IX3qdGHhUhSmMmsVoEA-jzOYI7g-": {
        ammMinter: "EQDfNXyqvcRNn5ecJ_HDXu8eFJ8A3l4zUPoNguBE9guoCIc0",
        tokenMinter: "EQB9Op5MAUoymk6Y_4x5IX3qdGHhUhSmMmsVoEA-jzOYI7g-",
        image: "https://cache.tonapi.io/imgproxy/419-dLlmMDdiRHFzEJAllekr20jczVl0Y2v-r64D3dw/rs:fill:200:200:1/g:no/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvYmFmeWJlaWVoYnh4MjV1ZmxlY3ozdHBzN2RmeHp5NzZycWRrN2kyb2Q1ZnJjdm4yc2cyaWs1bGlrZ2EvP2ZpbGVuYW1lPWxvZ29fY29uLnBuZw.webp",
        displayName: "kON",
        color: "#1b1f23",
        name: "kON",
        decimals: 9,
    },
    "EQDEcJlTPBymzUqOJ15QR44vIlPIHhsWllrIafWpPdeHiuNR": {
        ammMinter: "EQAm79IxsggEDUBArrw3yXlbKmapvCj2rlzKNoj5tCsgMnZ1",
        tokenMinter: "EQDEcJlTPBymzUqOJ15QR44vIlPIHhsWllrIafWpPdeHiuNR",
        image: "https://cache.tonapi.io/imgproxy/FDcUw2JFUphF2irJPrZdQP-Uz9R2urTvJtvjAaXFDNE/rs:fill:200:200:1/g:no/aHR0cHM6Ly9pcGZzLmlvL2lwZnMvYmFma3JlaWhwcW5ramNmd2ZpcGVrZ2o3Z3RwY2hiNmFkbm83czZ5ZGlnb25iaHN2d3hkbWV4NWF3YXU.webp",
        displayName: "DON",
        color: "#0061d2",
        name: "Donation",
        decimals: 9,
    },
    "EQAgkc5YfAA1Hc75QXcZJrL15l3LXoQr0CaK4sqcpHRFXFxh": {
        ammMinter: "EQDXjFixseiUM1Y2NMpxfRNEhfj7zHHe68qP1N9DCBrOo8sO",
        tokenMinter: "EQAgkc5YfAA1Hc75QXcZJrL15l3LXoQr0CaK4sqcpHRFXFxh",
        image: "https://cache.tonapi.io/imgproxy/BJDj9oHHl_JVNVc6c7x72g0Kxy98miugZO8vwZMed4Q/rs:fill:200:200:1/g:no/aHR0cHM6Ly9iYWZrcmVpY28zeGdyYWxidmUzNzRsN29zeWpiM2s3dXh1eWFrcWxzeGcyeTZpYW5veGcyaXJ0ZnZqeS5pcGZzLm5mdHN0b3JhZ2UubGluay8.webp",
        displayName: "Svet",
        color: "#390075",
        name: "TON Svet",
        decimals: 9,
    },
};

export let MainNetPools = (): { [key: string]: PoolInfo } => MainNetPoolsRoot;

export const UsersPools = (): { [key: string]: PoolInfo } => {
    return { ...localStorageTokensToObject() }
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
