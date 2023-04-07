import React from "react";
import ReactDOM from "react-dom/client";
import { AppProvider } from './Context/AppContext';
import App from "./App";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </AppProvider>
);
