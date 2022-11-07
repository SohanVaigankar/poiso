import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// react router
import { BrowserRouter as Router } from "react-router-dom";

// context
import { AuthContextProvider } from "./context/AuthContext";
import { CurrencyContextProvider } from "./context/CurrencyContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <CurrencyContextProvider>
          <App />
        </CurrencyContextProvider>
      </AuthContextProvider>
    </Router>
  </React.StrictMode>
);
