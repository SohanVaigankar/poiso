const api = "https://poiso-backend.vercel.app";

// funtion to get day
const getCurrentDate = () => {
  const date = new Date().getDate() -1;
  return date < 10 ? `0${date}` : date;
};

// funtion to get month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  return month < 10 ? `0${month}` : month;
};

// funtion to get month
const getCurrentYear = new Date().getFullYear();

export const lastYearDate = `${
  getCurrentYear - 1
}-${getCurrentMonth()}-${getCurrentDate()}`;
export const currentYearDate = `${getCurrentYear}-${getCurrentMonth()}-${getCurrentDate()}`;



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
  currencyList
) => {
  const path = `${api}/compare-performance/from=${lastYearDate}&to=${currentYearDate}&base=${baseCurrency}&currencies=${currencyList}`;
  return path;
};

// fn to get individual performance data
export const currencyPerformance = (
  baseCurrency,
  againstCurrency
) => {
  const path = `${api}/performance/from=${lastYearDate}&to=${currentYearDate}&base=${baseCurrency}&against=${againstCurrency}`;
  return path;
};
