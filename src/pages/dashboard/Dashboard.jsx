import React, { useContext } from "react";
import "./dashboard.scss";
import { useNavigate } from "react-router-dom";

// context
import { AuthContext } from "../../context/AuthContext";

// components
import Navbar from "../../components/navbar/Navbar";

// currency data
import { currencyCMP } from "../../utils/apiURL";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="dashboard-container">{currencyCMP("USD")}</div>
    </div>
  );
};

export default Dashboard;
