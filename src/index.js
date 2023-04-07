import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import App_2 from "./App_2";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <StrictMode>
    <App_2 />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
