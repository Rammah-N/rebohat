import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// TODO
// 1- Add a filter where users can filter repos displayed based on language.
// 2- Fetch repo languages dynamically (Don't hardcode 'Css' 'Js' etc..) so that the filter doesn't show languages that don't exist.;
// 3- Refactor the code because it looks really ugly.


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
