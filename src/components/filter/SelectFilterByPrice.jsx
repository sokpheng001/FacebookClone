"use client";
import { useGetAllProductsQuery } from "@/redux/feature/product/productApi";
import React from "react";

export default function SelectFilterByPrice({ price }) {
  const { data, isLoading, refetch } = useGetAllProductsQuery();
  return (
    <div>
      {isLoading ? (
        // <p className="text-center animate-pulse mb-6">Loading...</p>
        <></>
      ) : (
        <select
          onChange={(event) => {
            price(event.target.value);
            console.log("This is changed value: ", event.target.value);
          }}
          className=" p-4 w-full focus:outline-0 border-4 border-lime-300 shadow-gray-300"
        >
          <option value={0}>Price</option>
          {data.map((product, i) => (
            <option value={product?.price} key={product?.id}>
              {product?.price} $
            </option>
          ))}
        </select>
      )}
    </div>
  );
}
