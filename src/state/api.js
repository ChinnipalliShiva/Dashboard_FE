import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// console.log("url", process.env.REACT_APP_BASE_URL);
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "adminApi",
  tagTypes: ["User", "Products", "Customers", "Transcations"],
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
  }),
});

export const {
  useGetUserQuery,
  useGetProductsQuery,
  useGetCustomersQuery,
  useGetTranscationsQuery,
} = api;
