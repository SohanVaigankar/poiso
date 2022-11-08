import { createContext, useReducer } from "react";

// reducer
import { CurrencyReducer } from "./CurrencyReducer";

// initialState
const initialState = {
  isSymbolsDataLoaded: false,
  symbolsData: {},
  baseCurrency: "USD",
  startDatePerformance: "",
  endDatePerformance: "",
  performanceDetails: {},
  historyAgainstCurrency: "INR",
  historyStartDate: "",
  historyEndDate: "",
  historyDetails: {},
  historyTrend: "",
};

// currency context
export const CurrencyContext = createContext(initialState);

// currency context provider
export const CurrencyContextProvider = ({ children }) => {
  // reducer
  const [state, dispatch] = useReducer(CurrencyReducer, initialState);
  const values = {
    isSymbolsDataLoaded: state.isSymbolsDataLoaded,
    symbolsData: state.symbolsData,
    baseCurrency: state.baseCurrency,
    startDatePerformance: state.startDatePerformance,
    endDatePerformance: state.endDatePerformance,
    performanceDetails: state.performanceDetails,
    historyAgainstCurrency: state.historyAgainstCurrency,
    historyStartDate: state.historyStartDate,
    historyEndDate: state.historyEndDate,
    historyDetails: state.historyDetails,
    historyTrend: state.historyTrend,
    dispatch,
  };
  return (
    <CurrencyContext.Provider value={values}>
      {children}
    </CurrencyContext.Provider>
  );
};
