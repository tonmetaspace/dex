import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useStyles } from "./styles";
import TonLogo from "assets/images/shared/ton-logo_.svg";
import { styled } from "@mui/system";
import { useTokenOperationsStore } from "store/token-operations/hooks";
import { ROUTES } from "router/routes";
import useNavigateWithParams from "hooks/useNavigateWithParams";
import { useApplicationStore } from "store/application/hooks";
import { OperationType } from "store/application/reducer";

const StyledText = styled(Typography)(({ theme }) => ({
  fontSize: 18,
  color: "#1b1f23",
  [theme.breakpoints.down("sm")]: {
    fontSize: 15,
  },
}));

const LogoWithText = () => {
  const classes = useStyles();
  const { selectedToken } = useTokenOperationsStore();
  const navigate = useNavigateWithParams();
  const { operationType } = useApplicationStore()

  const onClick = () => {
    if (!selectedToken) {
      return;
    }
    if (operationType === OperationType.SWAP) {
      navigate(ROUTES.swap.navigateToTokens);
      return;
    }
    if (operationType === OperationType.MANAGE_LIQUIDITY) {
      navigate(ROUTES.manageLiquidity.navigateToTokens);
      return;
    }
  };

  return (
    <Box
      style={{ cursor: selectedToken ? "pointer" : "" }}
      onClick={onClick}
      className={classes.logoBox}
    >
      <img className={classes.logo} src={TonLogo} alt="" />
      <StyledText>
        <strong>DEX</strong>
      </StyledText>
    </Box>
  );
};

export default LogoWithText;
