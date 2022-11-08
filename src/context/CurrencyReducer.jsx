import {
  LOAD_SYMBOLS,
  BASE_CURRENCY,
  GET_CMP,
  CONVERT_CURRENCIES,
  COMPARE_CURRENCIES,
  CURRENCY_PERFORMANCE,
} from "./action.types";

export const CurrencyReducer = (state, action) => {
  switch (action.type) {
    case LOAD_SYMBOLS:
      return {
        ...state,
        isSymbolsDataLoaded: true,
        symbolsData: action.payload.symbolsData,
      };
    case BASE_CURRENCY:
      return { ...state, baseCurrency: action.payload.baseCurrency };
    case GET_CMP:
      return { ...state };
    case COMPARE_CURRENCIES:
      return {
        ...state,
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
        performanceDetails: action.payload.performanceDetails,
      };
    case CONVERT_CURRENCIES:
      return { ...state };
    case CURRENCY_PERFORMANCE:
      return {
        ...state,
        historyTrend : action.payload.historyTrend,
        historyAgainstCurrency: action.payload.historyAgainstCurrency,
        historyStartDate: action.payload.historyStartDate,
        historyEndDate: action.payload.historyEndDate,
        historyDetails: action.payload.historyDetails,
      };
    default:
      return { ...state };
  }
};
