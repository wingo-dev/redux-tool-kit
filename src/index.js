import "./global.css";

import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import store from "./store/index";

import { MantineProvider } from "@mantine/core";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MantineProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </MantineProvider>
);
