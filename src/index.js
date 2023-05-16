import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import { Router } from "react-router-dom";

import { createStore } from "./app/store/createStore";
import { Provider } from "react-redux";

import history from "./app/utils/history";
import App from "./app/App";

const store = createStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
