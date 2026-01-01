import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import "./style/tailwind.css"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ToastContainer />
    {/* <App /> */}
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </>
);

reportWebVitals();
