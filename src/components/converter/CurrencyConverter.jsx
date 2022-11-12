import React from "react";
import "./currencyconverter.scss";

// material ui
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import AccountCircle from "@mui/icons-material/AccountCircle";

const CurrencyConverter = () => {
  return (
    <div className="currency-converter-container">
      <div className="converter">
        <div className="left">
          <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
              Enter the amount
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
        <div className="center"></div>
        <div className="right">
          <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
              With a start adornment
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
      </div>
      <div className="details"></div>
    </div>
  );
};

export default CurrencyConverter;
