'use client'

import SelectFilterByPrice from "@/components/filter/SelectFilterByPrice";
import AllProducts from "@/components/product/AllProducts";
import React from "react";

export const metadata = {
  title: "Go | Open-Pagraph",
};

export default function Go() {
  let a = 0;
  const price = (value) => {
    a=value;g
  };
  console.log(a);
  return (
    <main className="container m-auto">
      <div className="flex flex-col gap-4 m-8">
        <section className="w-full">
          {/* <SelectFilterByPrice price={price} /> */}
        </section>
        <section className="">
          <AllProducts price={12}/>
        </section>
      </div>
    </main>
  );
}
