import { createContext, useReducer } from "react";

// reducer
import { CurrencyReducer } from "./CurrencyReducer";

// initialState
const initialState = {
  isSymbolsDataLoaded: false,
  symbolsData: {},
  baseCurrency: "USD",
};

export const CurrencyContext = createContext(initialState);

export const CurrencyContextProvider = ({ children }) => {
  // reducer
  const [state, dispatch] = useReducer(CurrencyReducer, initialState);
  const values = {
    isSymbolsDataLoaded: state.isSymbolsDataLoaded,
    symbolsData: state.symbolsData,
    baseCurrency: state.baseCurrency,
    dispatch,
  };
  return (
    <CurrencyContext.Provider value={values}>
      {children}
    </CurrencyContext.Provider>
  );
};
