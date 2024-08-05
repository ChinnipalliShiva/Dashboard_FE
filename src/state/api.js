import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// console.log("url", process.env.REACT_APP_BASE_URL);
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: [
    "User",
    "Products",
    "Customers",
    "Transcations",
    "Geography",
    "Sales",
    "Admin",
    "Performance",
    "Dashboard",
  ],
  endpoints: (build) => ({
    getUser: build.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),
    getProducts: build.query({
      query: () => "/user/products",
      providesTags: ["Products"],
    }),
    getCustomers: build.query({
      query: () => "/user/customers",
      providesTags: ["Customers"],
    }),
    getTranscations: build.query({
      query: ({ page, pageSize, sort, search }) => ({
        url: "/user/transactions",
        method: "GET",
        params: { page, pageSize, sort, search },
      }),
      providesTags: ["Transcations"],
    }),
    getGeography: build.query({
      query: () => "/user/geography",
      providesTags: ["Geography"],
    }),
    getSales: build.query({
      query: () => "/sales/sales",
      providesTags: ["Sales"],
    }),
    getAdmins: build.query({
      query: () => "/management/admins",
      providesTags: ["Admin"],
    }),
    getUserPerformance: build.query({
      query: (id) => `/management/performance/${id}`,
      providesTags: ["Performance"],
    }),
    getDashboard: build.query({
      query: () => `general/dashboard`,
      providesTags: ["Dashboard"],
    }),
  }),
});

export const {
  useGetUserQuery,
  useGetProductsQuery,
  useGetCustomersQuery,
  useGetTranscationsQuery,
  useGetGeographyQuery,
  useGetSalesQuery,
  useGetAdminsQuery,
  useGetUserPerformanceQuery,
  useGetDashboardQuery,
} = api;
