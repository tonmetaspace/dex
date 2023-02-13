import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PoolInfo } from "services/api/addresses";
import { RootState } from "store/store";
import { addToken } from "./reducer";

export function useTokensStore() {
  const data = useSelector((state: RootState) => state.tokens);

  return data;
}

export const useTokensActions = (): {
  addToken: (token: PoolInfo) => void;
  getTokenById: (id: string) => PoolInfo | undefined;
} => {
  const {tokens} = useTokensStore()
  const dispatch = useDispatch();

  const add = useCallback(
    (token: PoolInfo) => {
      dispatch(addToken(token));
    },
    [dispatch]
  );

  
  const getTokenById = useCallback(
    (id: string) => {
      return tokens.find(t => t.tokenMinter === id)
    },
    [tokens]
  );

  


  return { addToken: add, getTokenById };
};
