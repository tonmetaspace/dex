import { createSlice } from '@reduxjs/toolkit'
import { setPoolInfo, setTokenDetails } from 'store/pool-info/actions'

export interface PoolInfoExtended {
  liquidity?: string
  lpTokenName?: string
  totalLPTokenAmount?: string
  poolTonAmount?: string
  poolTokenAmount?: string
  userLPTokenAmount?: string
  userShareOfLiquidityPool?: string
  userTonAmount?: string
  userTokenAmount?: string
  userUSDValueAmount?: string
}

interface IStore {
  totalSupply?: string,
  jettonWalletAddress?: string,
  mintable?: string,
  tonReserves?: string,
  tokenReserves?: string

  isLoading?: boolean

  extendedInfo: PoolInfoExtended
}

const initialState: IStore = { extendedInfo: {} }

const poolInfoSlice = createSlice({
  name: 'poolInfo',
  initialState,
  reducers: {
    clearPoolInfo(state) {
      state.tokenReserves = undefined
      state.jettonWalletAddress = undefined
      state.tonReserves = undefined
      state.mintable = undefined
      state.totalSupply = undefined
      state.extendedInfo = {}

      state.isLoading = false
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(setPoolInfo.rejected, (state) => {
      state.isLoading = false
    })
    .addCase(setPoolInfo.pending, (state) => {
      state.isLoading = true
    })
    .addCase(setPoolInfo.fulfilled, (state, action) => {
      state.tokenReserves = action.payload.tokenReserves
      state.jettonWalletAddress = action.payload.jettonWalletAddress
      state.tonReserves = action.payload.tonReserves
      state.mintable = action.payload.mintable
      state.totalSupply = action.payload.totalSupply

      state.extendedInfo.liquidity = action.payload.extendedInfo?.liquidity
      state.extendedInfo.lpTokenName = action.payload.extendedInfo?.lpTokenName
      state.extendedInfo.totalLPTokenAmount = action.payload.extendedInfo?.totalLPTokenAmount
      state.extendedInfo.poolTonAmount = action.payload.extendedInfo?.poolTonAmount
      state.extendedInfo.poolTokenAmount = action.payload.extendedInfo?.poolTokenAmount

      state.isLoading = false
    })
    .addCase(setTokenDetails.rejected, (state) => {
      state.isLoading = false
    })
    .addCase(setTokenDetails.pending, (state) => {
      state.isLoading = true
    })
    .addCase(setTokenDetails.fulfilled, (state, action) => {
      const {
        userLPTokenAmount,
        userTonAmount,
        userTokenAmount,
        lpTokenName,
        liquidity,
        totalLPTokenAmount,
        poolTokenAmount,
        poolTonAmount,
        userUSDValueAmount,
        userShareOfLiquidityPool,
      } = action.payload
      state.extendedInfo.lpTokenName = lpTokenName
      state.extendedInfo.userLPTokenAmount = userLPTokenAmount
      state.extendedInfo.userTokenAmount = userTokenAmount
      state.extendedInfo.userTonAmount = userTonAmount
      state.extendedInfo.liquidity = liquidity
      state.extendedInfo.totalLPTokenAmount = totalLPTokenAmount
      state.extendedInfo.poolTonAmount = poolTonAmount
      state.extendedInfo.poolTokenAmount = poolTokenAmount
      state.extendedInfo.userUSDValueAmount = userUSDValueAmount
      state.extendedInfo.userShareOfLiquidityPool = userShareOfLiquidityPool
      state.isLoading = false
    })
  },
})

export const { clearPoolInfo } = poolInfoSlice.actions

export default poolInfoSlice.reducer