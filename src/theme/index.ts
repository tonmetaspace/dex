import { Theme } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

declare module '@mui/styles' {
  interface DefaultTheme extends Theme {}
}

// A custom theme for this app
let theme = createTheme({
  palette: {
    primary: {
      main: "#2188ff",
      contrastText: "#fff",
    },
    

    secondary: {
      main: "#313855",
    },

    text: {
      primary: "#2188ff",
      secondary: "#00000",
    },
    error: {
      main: "#FF5147",
    },
  
    action: {
      active: "#ffffff",
      hover: "#00000",
      disabledBackground: "#B2B2B2",
      disabled: "",
    },
  },
  typography: {
    fontFamily: '"Mulish"',
    button: {
      textTransform: "none",
    },
  },
});


export default theme;
