const api = "https://poiso-backend.vercel.app";

// fn to get list of currency symbols
export const currencySymbols = () => {
  const path = `${api}/symbols`;
  return path;
};

// fn to get latest currency cmp
export const currencyCMP = (baseCurrency) => {
  const path = `${api}/cmp/base=${baseCurrency}`;
  return path;
};

// fn to get currency conversion data
export const convertCurrency = (fcurr, tcurr) => {
  const path = `${api}/convert/from=${fcurr}&to=${tcurr}`;
  return path;
};

// fn to get performance data of multiple currencies against base currency
export const comparePerformance = (
  baseCurrency,
  currencyList,
  startDate,
  endDate
) => {
  const path = `${api}/compare-performance/from=${startDate}&to=${endDate}&base=${baseCurrency}&currencies=${currencyList}`;
  return path;
};

// fn to get individual performance data
export const currencyPerformance = (
  baseCurrency,
  againstCurrency,
  startDate,
  endDate
) => {
  const path = `${api}/performance/from=${startDate}&to=${endDate}&base=${baseCurrency}&against=${againstCurrency}`;
  return path;
};
