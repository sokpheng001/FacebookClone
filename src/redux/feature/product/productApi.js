import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "products",
    }),
    deleteProduct: builder.query({
      query:({id})=>({
        url:`products/${id}`,
        method:"DELETE",
      })
    }),
    updateProduct: builder.query({
      query:({id,...row}) =>({
        url:`products/${id}`,
        method:"PUT",
        body: row,
      })
    }),
  }),
  tagTypes: "Product",
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProductsQuery,useDeleteProductQuery,useUpdateProductQuery } = productsApi;
