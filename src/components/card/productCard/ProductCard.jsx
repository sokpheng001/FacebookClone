import React from "react";

export default function ProductCard({ imgUrl, title, price }) {
  return (
    <div className="">
      <div>
        {" "}
        <img src={imgUrl} className="w-72 h-72 object-contain" />
      </div>
      {/* title */}
      <div id="title" className="p-2 w-full">
        <p>Product: {title.substring(0, 10)}</p>
        <p>Price: {price}$</p>
      </div>
    </div>
  );
}
