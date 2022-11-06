import { createContext, useReducer } from "react";

// reducer
import { CurrencyReducer } from "./CurrencyReducer";

// initialState
const initialState = {};

export const CurrencyContext = createContext(initialState);

export const CurrencyContextProvider = ({ children }) => {
  // reducer
  const [state, dispatch] = useReducer(CurrencyReducer, initialState);
  return (
    <CurrencyContextProvider value={{ state, dispatch }}>
      {children}
    </CurrencyContextProvider>
  );
};
