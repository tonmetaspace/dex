import { Theme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  logoBox: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    width: 36,
    height: 36,
    marginRight: 10,
    [theme.breakpoints.down("sm")]: {
      width: 30,
      height: 30,
      marginRight: 5,
    },
  },
  menuIcon: {
    color: "#fff",
  },
  leftGrid: {
    display: "flex",
    alignItems: "center",
  },
 
  link: {
    textDecoration:'none',
    color: '#6D6D6D'
  }
}));

export { useStyles };
