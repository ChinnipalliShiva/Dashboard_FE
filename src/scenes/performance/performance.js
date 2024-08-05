import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
// import CustomColumnMenu from "components/dataGridCusttomColumnMenu";
import Header from "components/Header";
import React from "react";
import { useSelector } from "react-redux";
import { useGetUserPerformanceQuery } from "state/api";

const Performance = () => {
  const theme = useTheme();
  const userId = useSelector((state) => state.global.userId);

  console.log("userid in performance", userId);
  const { data, isLoading } = useGetUserPerformanceQuery(userId);
  console.log("data in performance page", data?.data);

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "userId",
      headerName: "User Id",
      flex: 1,
    },
    {
      field: "createdAt",
      headerName: "CreatedAt",
      flex: 1,
    },
    {
      field: "products",
      headerName: "# of Products",
      flex: 0.5,
      sortable: false,
      rendercell: (params) => params.value.length,
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      rendercell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
  ];

  if (!data?.data || isLoading) return "Loading...";
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Performance" subtitle="Track your affiliate sales" />
      <Box
        mt="1rem"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
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
            backgroundColor: theme.palette.primary.light,
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
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={data?.data?.sales || []}
          columns={columns}
          //   slots={{
          //     columnMenu: CustomColumnMenu,
          //   }}
        />
      </Box>
    </Box>
  );
};

export default Performance;
