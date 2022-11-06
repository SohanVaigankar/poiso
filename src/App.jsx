import React from "react";
import "./styles/app.scss";
import { Routes, Route } from "react-router-dom";

// pages
import Dashboard from "./pages/dashboard/Dashboard";
import Landing from "./pages/landing/Landing";
import SignUp from "./pages/signup/SignUp";
import { LoginRoute } from "./routes/PrivateRoutes";

import { AuthContextProvider } from "./context/AuthContext";

const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route
          exact
          path="/dashboard"
          element={
            <LoginRoute>
              <Dashboard />
            </LoginRoute>
          }
        />
      </Routes>
    
  );
};

export default App;
