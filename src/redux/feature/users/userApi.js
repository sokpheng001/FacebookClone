import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.escuelajs.co/api/v1/users?",
  }),
  endpoints: (builder) => ({
    getUserByAmount: builder.query({
      query: (amonunt) => `limit=${amonunt}`,
    }),
  }),
  tagTypes: "Pokemon",
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { UseGetUserByAmount } = userApi;
