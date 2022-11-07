import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.scss";

// context
import { AuthContext } from "../../context/AuthContext";
import { SIGN_OUT } from "../../context/action.types";

// components
import CountryList from "../country_list/CountryList";

const Navbar = () => {
  const navigate = useNavigate();

  // context
  const { authenticated, dispatch } = useContext(AuthContext);

  const handleSignOut = async (e) => {
    e.preventDefault();
    await dispatch({ type: SIGN_OUT });
    navigate("/");
  };
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/" className="logo-link">
          poiso
        </Link>
      </div>
      <ul className="nav-link-container">
        {!authenticated ? (
          <Link to="/dashboard" className="nav-link">
            dashboard
          </Link>
        ) : (
          ""
        )}
        {authenticated ? (
          <>
            <CountryList title="base currency" />
            <Link to="/signup" onClick={handleSignOut} className="nav-link">
              signout
            </Link>
          </>
        ) : (
          <Link to="/signup" className="nav-link">
            signup
          </Link>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
