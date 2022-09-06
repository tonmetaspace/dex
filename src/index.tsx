import ReactDOM from "react-dom";
import "setimmediate";

import App from "./App";
//import reportWebVitals from "./reportWebVitals";
import theme from "./theme";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/index.scss";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { ThemeProvider as MakeStylesProvider } from "@mui/styles";
import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";
import store from "store/store";
import { QueryClient, QueryClientProvider } from "react-query";
export const queryClient = new QueryClient();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <MakeStylesProvider theme={theme}>
      <CssBaseline />
      <Router basename={process.env.PUBLIC_URL}>
        <SnackbarProvider maxSnack={3}>
          <Provider store={store}>
            <QueryClientProvider client={queryClient}>
              <App />
            </QueryClientProvider>
          </Provider>
        </SnackbarProvider>
      </Router>
    </MakeStylesProvider>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
