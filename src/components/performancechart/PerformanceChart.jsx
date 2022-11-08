import React, { useContext, useEffect } from "react";
import "./performancechart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import {
  currencyPerformance,
  lastYearDate,
  currentYearDate,
} from "../../utils/apiURL";
import { CurrencyContext } from "../../context/CurrencyContext";
import { CURRENCY_PERFORMANCE } from "../../context/action.types";

const loadCurrencyHistory = async (dispatch, baseCurrency, againstCurrency) => {
  try {
    const response = await fetch(
      currencyPerformance(baseCurrency, againstCurrency)
    );
    const data = await response.json();

    const trend =
      data.details[String(lastYearDate)][againstCurrency] >
      data.details[String(currentYearDate)][againstCurrency]
        ? "negative"
        : "positive";

    await dispatch({
      type: CURRENCY_PERFORMANCE,
      payload: {
        historyTrend: trend,
        historyAgainstCurrency: againstCurrency,
        historyStartDate: data.startDate,
        historyEndDate: data.endDate,
        historyDetails: data.details,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

const PerformanceChart = () => {
  const {
    dispatch,
    baseCurrency,
    historyStartDate,
    historyEndDate,
    historyDetails,
    historyTrend,
    historyAgainstCurrency,
  } = useContext(CurrencyContext);

  useEffect(() => {
    loadCurrencyHistory(dispatch, baseCurrency, historyAgainstCurrency);
  }, [baseCurrency, historyAgainstCurrency]);

  const data = [];

  for (const symbolDate in historyDetails) {
    data.push({
      against: "INR",
      date: symbolDate,
      rate: Number(
        historyDetails[symbolDate][historyAgainstCurrency].toFixed(2)
      ),
    });
  }

  return (
    <AreaChart
      height={300}
      width={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="symbolDate" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="rate"
        stroke={historyTrend === "negative" ? "#ea1940" : "#2cb71d"}
        fill={historyTrend === "negative" ? "#ea4d50" : "#8ce582"}
      />
    </AreaChart>
  );
};

export default PerformanceChart;
