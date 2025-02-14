import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
// import { Provider } from "react-redux";
// import { setupStore } from "./redux/store";

// const store = setupStore();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    {/* <Provider store={store}> */}

    {/* </Provider> */}
  </React.StrictMode>
);
