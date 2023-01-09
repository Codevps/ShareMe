import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { reducers } from "./reducers";
import { clientId } from "./secret";

const store = createStore(reducers, compose(applyMiddleware(thunk)));
ReactDom.render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId={clientId}>
      <App />
    </GoogleOAuthProvider>
  </Provider>,
  document.getElementById("root")
);
