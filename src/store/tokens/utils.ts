import { MainNetPools, PoolInfo } from 'services/api/addresses'
import { TOKENS_IN_LOCAL_STORAGE } from 'consts'

export function poolInfoStringify(pools: PoolInfo[]) {
    let list = pools.map((pi) => {
        return {
            ammMinter: pi.ammMinter,
            tokenMinter: pi.tokenMinter,
            image: pi.image,
            displayName: pi.displayName,
            color: pi.color,
            name: pi.name,
            isCustom: true,
            decimals: pi.decimals,
        };
    });

    return JSON.stringify(list);
}

export const getTokens = (): PoolInfo[] => {
    const pools = MainNetPools();
    const usersPools = JSON.parse(localStorage.getItem(TOKENS_IN_LOCAL_STORAGE) || '[]')

    return [...usersPools, ...Object.keys(pools).map((key) => {
        return {
            ...pools[key],
            name: pools[key].name,
        };
    })]
};