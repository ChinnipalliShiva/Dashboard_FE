import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { themeSettings } from "theme";
import Layout from "scenes/layout/Layout";
import Dashboard from "scenes/dashboard/Dashboard";
import Products from "scenes/products/products";
import Customers from "scenes/customers/customers";
import Transcations from "scenes/transcations/transcations";

function App() {
  const mode = useSelector((state) => state.global.mode);
  console.log("mode", mode);
  const theme = useMemo(() => {
    return createTheme(themeSettings(mode));
  }, [mode]);
  console.log(theme, ",theme");
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/transactions" element={<Transcations />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
