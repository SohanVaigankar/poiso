import React, { useContext, useEffect } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";

import { comparePerformance } from "../../utils/apiURL";
import { CurrencyContext } from "../../context/CurrencyContext";
import { COMPARE_CURRENCIES } from "../../context/action.types";

const loadPastPerformance = async (dispatch, baseCurrency, currencyList) => {
  try {
    const response = await fetch(
      comparePerformance(baseCurrency, currencyList)
    );
    const data = await response.json();
    await dispatch({
      type: COMPARE_CURRENCIES,
      payload: {
        startDate: data.startDate,
        endDate: data.endDate,
        performanceDetails: data.details,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

const Barchart = () => {
  const {
    dispatch,
    baseCurrency,
    performanceDetails,
    startDatePerformance,
    endDatePerformance,
  } = useContext(CurrencyContext);

  useEffect(() => {
    loadPastPerformance(dispatch, baseCurrency, `USD,CAD,CNY,EUR,JPY`);
  }, [baseCurrency]);

  console.log("baseCurrency:" + baseCurrency);
  console.log("startDatePerformance:" + startDatePerformance);
  console.log("endDatePerformance:" + endDatePerformance);
  console.log(performanceDetails);

  const data = [];

  for (const symbol in performanceDetails) {
    data.push({
      title: `${baseCurrency}/${symbol}`,
      start: performanceDetails[symbol].start_rate,
      end: performanceDetails[symbol].end_rate,
      percentage: (performanceDetails[symbol].change_pct * 100).toFixed(2),
    });
  }

  console.log("data");
  console.log(data);

  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="title" />
      <YAxis />
      <Tooltip />
      <Legend />
      <ReferenceLine y={0} stroke="#000" />
      <Bar dataKey="percentage" fill="#8884d8" />
    </BarChart>
  );
};

export default Barchart;
