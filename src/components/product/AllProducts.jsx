"use client";

import { useGetAllProductsQuery } from "@/redux/feature/product/productApi";

import React, { useState } from "react";
import ProductCard from "../card/productCard/ProductCard";

export default function AllProducts({ price }) {
  const [priceRole,setPrice] = useState(price);
  const { data, isLoading, refetch } = useGetAllProductsQuery();
  console.log(price);
  return (
    <div>
      {isLoading ? (
        <div className="flex gap-4 justify-center h-screen items-center">
          <div className="w-4 h-4 bg-gray-300 rounded-lg animate-bounce"></div>
          <div className="w-4 h-4 bg-green-300 rounded-lg animate-bounce"></div>
          <div className="w-4 h-4 bg-gray-400 rounded-lg animate-bounce"></div>
          <div className="w-4 h-4 bg-green-400 rounded-lg animate-bounce"></div>
        </div>
      ) : (
        <div className="rounded-lg p-4 flex gap-6 justify-between items-center flex-wrap">
          {data
            .filter((product, index) => (product?.price) !== priceRole)
            .map((product) => (
              <ProductCard
                key={product?.id}
                title={product?.title}
                imgUrl={product?.image}
                price={price}
              />
            ))}
        </div>
      )}
    </div>
  );
}
