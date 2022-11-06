import React, { useContext } from "react";
import "./landing.scss";
import { useNavigate } from "react-router-dom";

// components
import Navbar from "../../components/navbar/Navbar";

// context
import { AuthContext } from "../../context/AuthContext";

const Landing = () => {
  const navigate = useNavigate();

  const { authenticated } = useContext(AuthContext);

  const handleOnClick = (e) => {
    e.preventDefault();
    authenticated ? navigate("/dashboard") : navigate("/signup");
  };

  return (
    <div className="landing-container">
      <Navbar />
      <div className="hero-section">
        <h1 className="hero-title">poiso</h1>
        <p className="hero-description">
          serving freshly brewed updates in the currency markets
        </p>
        <button className="hero-btn" onClick={handleOnClick}>
          peek-a-boo?
        </button>
      </div>
    </div>
  );
};

export default Landing;
