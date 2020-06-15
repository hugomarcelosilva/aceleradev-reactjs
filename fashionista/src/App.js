import React from "react";

import { Provider } from "react-redux";

import store from "./store";

import GlobalStyles from "./styles/global";
import Routes from "./routes";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
}
