import { ton } from "services/api/addresses";
import { Box, SvgIcon } from "@mui/material";
import { observer } from "mobx-react";
import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import TokenOperations from "screens/components/TokenOperations";
import * as API from "services/api";
import { ReactComponent as Plus } from "assets/images/shared/plus.svg";
import { useTokenOperationsStore } from "store/token-operations/hooks";
import { useTokensStore } from "store/tokens/hooks";
import useTokenFromParams from "hooks/useTokenFromParams";
import { ActionCategory, ActionType } from "services/wallets/types";
import { fromNano } from "ton";

const useStyles = makeStyles((theme: Theme) => ({
  subTitle: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    "& img": {
      marginRight: 10,
      position: "relative",
      top: 2,
    },
    "& p": {
      fontSize: 18,
      fontWeight: 700,
      "& strong": {
        fontSize: 22,
        color: "#E42473",
      },
    },
  },
}));


const AddLiquidity =  () => {
  const classes = useStyles();
  const { selectedToken } = useTokensStore();
  const { srcTokenAmount, destTokenAmount, totalBalances } =
    useTokenOperationsStore();

  const getTxRequest = () => {
    if (selectedToken) {
      return API.generateAddLiquidityLink(
        selectedToken?.name,
        srcTokenAmount,
        destTokenAmount
      );
    }
  };

  const getAmountOut = async (
    srcToken: string,
    destToken: string,
    srcAmount: string | null,
    destAmount: string | null
  ) => {
    if (!selectedToken?.name) {
      return;
    }
    let data = await API.getPoolInfo(selectedToken?.name);
    if (
      data.tokenReserves.toNumber() == 0 &&
      data.tonReserves.toNumber() == 0
    ) {
      return 0;
    }

    let res = await API.getLiquidityAmount(srcToken, destToken, srcAmount, destAmount);
    console.log(res);
    
    return res;
  };

  const getBalances = () => {
    return Promise.all([
      API.getTonBalance(),
      API.getTokenBalance(selectedToken!!),
    ]);
  };

  const createSuccessMessage = () => {
    return `Successfully added ${srcTokenAmount} TON and ${destTokenAmount} ${selectedToken?.displayName} liquidity`;
  };

  const isInsufficientFunds = (src: number, dest: number) => {
    if (!src || !dest) {
      return false;
    }
    if (src > totalBalances.srcBalance || dest > totalBalances.destBalance) {
      return true;
    }
    return false;
  };

  useTokenFromParams();

  if (!selectedToken) {
    return null;
  }

  return (
    <TokenOperations
      createSuccessMessage={createSuccessMessage}
      icon={<SvgIcon component={Plus} viewBox="0 0 13 22" />}
      getAmountFunc={getAmountOut}
      getBalances={getBalances}
      srcToken={ton}
      getTxRequest={getTxRequest}
      destToken={selectedToken}
      submitButtonText={`Add TON/${selectedToken?.displayName} liquidity`}
      isInsufficientFunds={isInsufficientFunds}
      refreshAmountsOnActionChange={true}
      actionCategory={ActionCategory.MANAGE_LIQUIDITY}
      actionType ={ActionType.ADD_LIQUIDITY}
    />
  );
}


export default AddLiquidity
