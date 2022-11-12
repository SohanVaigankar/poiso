import React, { useContext } from "react";
import "./dashboard.scss";
import { useNavigate } from "react-router-dom";

// materialUI
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

// context
import { AuthContext } from "../../context/AuthContext";

// components
import Navbar from "../../components/navbar/Navbar";
import ComparisonChart from "../../components/comparisonchart/ComparisonChart";
import PerformanceChart from "../../components/performancechart/PerformanceChart";
import CurrencyConverter from "../../components/converter/CurrencyConverter";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="dashboard-container">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={4}>
              <Item>xs=4</Item>
            </Grid>
            <Grid xs={5}>
              <Item>
                <CurrencyConverter />
              </Item>
            </Grid>
            <Grid xs={6} className="bar-chart">
              <Item>
                <ComparisonChart />
              </Item>
            </Grid>
            <Grid xs={6}>
              <Item>
                <PerformanceChart />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Dashboard;
