import Sell from "assets/images/shared/sell.svg";
import AddLiquidityImg from "assets/images/shared/add-liqudity.svg";
import RemoveLiquidityImg from "assets/images/shared/remove-liquidity.svg";
import ClaimRewardImg from "assets/images/shared/claim-rewards.svg";
import Buy from "assets/images/shared/buy.svg";

import SellActive from "assets/images/shared/swap-to-ton.svg";
import AddLiquidityImgActive from "assets/images/shared/add-liqudity.svg";
import RemoveLiquidityImgActive from "assets/images/shared/remove-liquidity.svg";
import ClaimRewardImgActive from "assets/images/shared/claim-reward.svg";
import BuyActive from "assets/images/shared/swap-from-ton.svg";

import { v4 as uuidv4 } from "uuid";
import { NavigateFunction } from "react-router-dom";
import { Token } from "types";
import { ROUTES } from "router/routes";


const createTokenActions = (navigate: NavigateFunction, token?: Token) => {
  if (!token) {
    token = {
      displayName: "",
      name: "tkn",
      image: "",
      color: "",
      isActive: false
    };
  }

  const id = token!!.name;

  return [
    {
      icon: Buy,
      activeIcon: "",
      title: `Buy ${token.displayName}`,
      func: () => navigate(ROUTES.actions.buy.replace(":id", id)),
      id: 'buy',
    },
    {
      icon: Sell,
      activeIcon: "",
      title: `Sell ${token.displayName}`,
      func: () => navigate(ROUTES.actions.sell.replace(":id", id)),
      id: 'sell',
    },
    {
      icon: AddLiquidityImg,
      activeIcon: "",
      title: "Add Liquidity",
      func: () => navigate(ROUTES.actions.addLiquidity.replace(":id", id)),
      id: 'add-liquidity',
    },
    {
      icon: RemoveLiquidityImg,
      activeIcon: "",
      title: "Remove Liquidity",
      func: () => navigate(ROUTES.actions.removeLiquidity.replace(":id", id)),
      id: 'remve-liquidity',
    },
    {
      icon: ClaimRewardImg,
      activeIcon: "",
      title: "Claim Rewards",
      func: () => navigate(ROUTES.actions.claimRewards.replace(":id", id)),
      id: 'claim-rewards',
    },
  ];
};

export { createTokenActions };
