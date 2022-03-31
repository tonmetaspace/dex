import { Box, Grid, Typography } from "@mui/material";
import { NumberInput } from "components/NumberInput";
import { Token } from "types";
import ContentLoader from "components/ContentLoader";
import { useStyles } from "./styles";

interface Props {
  inputAmount?: number;
  availableAmount: number;
  onChange: (val: string) => void;
  maxAmount: number;
  token: Token;
  usdPrice: number;
  usdLoading: boolean;
  isLoading?: boolean;
  availableAmountLoading: boolean;
}

function SwapCard({
  inputAmount,
  availableAmount,
  onChange,
  maxAmount,
  token,
  usdPrice,
  usdLoading,
  isLoading,
  availableAmountLoading,
}: Props) {
  const classes = useStyles({ color: token.color });

  return (
    <Box className={classes.root}>
      <Box className={classes.tokenImage}>
        <img src={token.image} />
      </Box>
      <Typography fontSize="14px" marginBottom="4px" fontWeight={500}>
        {token.displayName}
      </Typography>

      <Box className={classes.inputBox}>
        <NumberInput
          isLoading={isLoading}
          title="Enter Amount"
          maxAmount={maxAmount}
          value={inputAmount}
          onChange={(val) => onChange(val)}
        />
      </Box>

      <Grid container className={classes.bottomBox}>
        <Grid item xs={6}>
          {isLoading || usdLoading ? (
            <ContentLoader width={40} height="15px" borderRadius="4px" />
          ) : (
            <Typography component="p">~${usdPrice}</Typography>
          )}
        </Grid>
        <Grid item xs={6} justifyContent="flex-end">
          {availableAmountLoading ? (
            <ContentLoader width={40} height="18px" borderRadius="4px" style={{marginLeft:'auto',  marginRight:'5px'}} 
           
            />
          ) : (
            <Typography component="p" textAlign="right">
              <strong>Available:</strong>{" "}
              {availableAmount.toLocaleString("en-US", {
                maximumFractionDigits: 4,
              })}{" "}
              {token.displayName}
            </Typography>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}

export default SwapCard;
