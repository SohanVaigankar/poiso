import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/" className="logo-link">poiso</Link>
      </div>
      <ul className="nav-link-container">
        <Link to="/dashboard" className="nav-link">dashboard</Link>
        <Link to="/signup" className="nav-link">signup</Link>
      </ul>
    </div>
  );
};

export default Navbar;
