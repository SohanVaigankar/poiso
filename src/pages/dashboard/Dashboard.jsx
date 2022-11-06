import React, { useContext } from "react";
import "./dashboard.scss";
import { useNavigate } from "react-router-dom";

// context
import { AuthContext } from "../../context/AuthContext";
import { SIGN_OUT } from "../../context/action.types";

const Dashboard = () => {
  const navigate = useNavigate();

  const { authenticated, dispatch } = useContext(AuthContext);
  const handleSignOut = async (e) => {
    e.preventDefault();
    await dispatch({ type: SIGN_OUT });
    navigate("/");
  };
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Dashboard;
