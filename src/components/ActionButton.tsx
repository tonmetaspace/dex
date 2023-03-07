import { Box } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { ReactNode } from "react";
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/system';



const StyledButton = styled(LoadingButton)({
  height: 50,
  width: "100%",
})

const StyledBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  fontSize: 17,
  fontWeight: 900,
  width: "100%",
  justifyContent: "center",
  gap: 10,
})



type Props = {
  children: string | ReactNode;
  isLoading?: boolean;
  customClassName?: string;
  onClick: () => void;
  isDisabled?: boolean;
};

export function ActionButton({
  children,
  isLoading,
  customClassName = "",
  onClick,
  isDisabled,
}: Props) {
  const theme = useTheme()

  return (
    <StyledButton
      disabled={isDisabled}
      onClick={onClick}
      className={`base-button ${customClassName}`}
      loading={isLoading}
      variant="contained"
      
      color='primary'
      sx={{ boxShadow: "unset", borderRadius: "10px", background:theme.palette.primary.main}}
    >
      <StyledBox style={{color: isDisabled ? '#7D7D7D' : ''}} className='base-button-content'>{children}</StyledBox>
    </StyledButton>
  );
}
