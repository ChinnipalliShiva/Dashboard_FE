import {
  DownloadOutlined,
  Email,
  PersonAdd,
  PointOfSale,
  Traffic,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import BreakdownChart from "components/breakdownChart";
import FlexBetween from "components/felxBetween";
import Header from "components/Header";
import OverViewChart from "components/OverViewChart";
import React from "react";
import { useGetDashboardQuery } from "state/api";

const Dashboard = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width:1200px)");
  const { data, isLoading } = useGetDashboardQuery();
  // console.log("data in dashboard", data?.data);

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "userId",
      headerName: "User ID",
      flex: 1,
    },
    {
      field: "createdAt",
      headerName: "crearedAt",
      flex: 1,
    },
    {
      field: "products",
      headerName: "No.of Products",
      flex: 0.5,
      sortable: false,
      renderCell: (params) => params.value.length,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
  ];
  return <Box m="1.5rem 2.5rem">
    <FlexBetween>
      <Header title="Dashboard" subtitle="Welcome to your dashboard"/>
      <Box>
        <Button
        sx={{
          backgroundColor:theme.palette.secondary.light,
          color : theme.palette.background.alt ,
          fontSize:"14px",
          fontWeight:"bold",
          padding:"10px 20px"
        }}>
          <DownloadOutlined sx={{mr:"10px"}}/>
          Download Reports
        </Button>
      </Box>
    </FlexBetween>
  </Box>;
};

export default Dashboard;
