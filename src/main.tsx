import React from "react";
import ReactDOM from "react-dom";
import { globalCss } from "@stitches/react";
import App from "./App";
const globalStyles = globalCss({
  "*": { margin: 0, padding: 0 },
});
globalStyles();
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
