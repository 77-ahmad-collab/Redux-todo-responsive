import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createStore } from "redux";
import { Provider } from "react-redux";
import Storereducer from "./Reduxstore/Storereducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(Storereducer, composeWithDevTools());
console.log(store.getState);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
