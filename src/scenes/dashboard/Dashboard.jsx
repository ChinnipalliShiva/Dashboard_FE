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
import Card from "components/Card";
import OverViewChart from "components/OverViewChart";
import React from "react";
import { useGetDashboardQuery } from "state/api";

const Dashboard = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width:1200px)");
  const { data, isLoading } = useGetDashboardQuery();
  console.log("data in dashboard", data?.data[0]);

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
  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="Dashboard" subtitle="Welcome to your dashboard" />
        <Box>
          <Button
            sx={{
              backgroundColor: theme.palette.secondary.light,
              color: theme.palette.background.alt,
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlined sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </FlexBetween>
      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12,1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
        }}
      >
        {/* row - 1 */}
        <Card
          title="Total Customers"
          value={data?.data[0]?.totalCustomers}
          increase="+14%"
          description="Since last month"
          icon={
            <Email
              sx={{
                color: theme.palette.secondary[300],
                fontSize: "26px",
              }}
            />
          }
        />
        <Card
          title="Sales Today"
          value={data?.data[0]?.todayStats?.totalSales}
          increase="+21%"
          description="Since last month"
          icon={
            <PointOfSale
              sx={{
                color: theme.palette.secondary[300],
                fontSize: "26px",
              }}
            />
          }
        />
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
        >
          <OverViewChart view="sales" isDashboard={true} />
        </Box>
        <Card
          title="Monthly Sales"
          value={data?.data[0]?.thisMonthStats?.totalSales}
          increase="+5%"
          description="Since last month"
          icon={
            <PersonAdd
              sx={{
                color: theme.palette.secondary[300],
                fontSize: "26px",
              }}
            />
          }
        />
        <Card
          title="Yearly Sales"
          value={data?.data[0]?.yearlySalesTotal}
          increase="+44%"
          description="Since last month"
          icon={
            <Traffic
              sx={{
                color: theme.palette.secondary[300],
                fontSize: "26px",
              }}
            />
          }
        />

        {/* row -2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 3"
          sx={{
            "& .MuiDataGrid-root": {
              border: "2px solid black",
              // borderRadius: "5rem",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderBottom: "none",
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: theme.palette.background.alt,
            },
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: theme.palette.background.alt,
              color: theme.palette.secondary[100],
              borderTop: "none",
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
              color: `${theme.palette.secondary[200]} !important`,
            },
          }}
        >
          <DataGrid
            loading={isLoading}
            getRowId={(row) => row._id}
            rows={data?.data[0]?.recentTransactions || []}
            columns={columns}
          />
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 3"
          backgroundColor={theme.palette.background.alt}
          p="1.5rem"
          borderRadius="0.55rem"
        >
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.secondary[100],
            }}
          >
            Sales By Category
          </Typography>
          <BreakdownChart isDashboard={true} />
          <Typography
            p="0 0.6rem"
            fontSize="0.8rem"
            sx={{ color: theme.palette.secondary[200] }}
          >
            Breakdown of real states and information via category for revenue
            made for this year and total sales.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
