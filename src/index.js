import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Container/App";
import { Context } from "./contextapi/Context";
ReactDOM.render(
  <Context>
    <App />
  </Context>,
  document.getElementById("root")
);
