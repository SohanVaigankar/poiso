import React, { useState, useContext } from "react";
import axios from "axios";

// API functions
import { currencySymbols } from "../../utils/apiURL";

// material ui
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// context
import { CurrencyContext } from "../../context/CurrencyContext";
import { BASE_CURRENCY, LOAD_SYMBOLS } from "../../context/action.types";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 50,
    },
  },
};

function getStyles(symbol, currency, theme) {
  return {
    fontWeight:
      currency.indexOf(symbol) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

// fn to load list of currency symbols
const loadCurrencies = async (dispatch) => {
  try {
    const response = await fetch(currencySymbols());
    const data = await response.json();
    await dispatch({ type: LOAD_SYMBOLS, payload: { symbolsData: data.base } });
  } catch (error) {
    console.error(error);
  }
};

const CountryList = () => {
  // context
  const { dispatch, isSymbolsDataLoaded, symbolsData, baseCurrency } =
    useContext(CurrencyContext);

  const symbols = ["INR", "USD", "AED", "CAD", "JPY", "CNY"];

  //   load symbols data if it is not loaded already
  !isSymbolsDataLoaded ? loadCurrencies(dispatch) : "";

  const theme = useTheme();

  return (
    <div className="symbol-container">
      <FormControl sx={{ m: 1, width: 100 }} className="symbol-form">
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={baseCurrency}
          onChange={(e) => {
            dispatch({
              type: BASE_CURRENCY,
              payload: { baseCurrency: e.target.value },
            });
          }}
          input={<OutlinedInput label="symbol" />}
          MenuProps={MenuProps}
          className="symbol-select-menu"
        >
          {symbols.map((symbol) => (
            <MenuItem
              key={symbol}
              value={symbol}
              style={getStyles(symbol, baseCurrency, theme)}
              className="symbol-menu-item"
            >
              {symbol}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default CountryList;
