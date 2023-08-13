

import React from "react";
import {BiSolidSave} from "react-icons/bi"

export default function TextDetailCard({title}) {
  return (
    <div className=" bg-white rounded-md h-full flex justify-center items-center duration-300 cursor-pointer">
      <div className="w-full m-8 gap-4 flex justify-center">
        <BiSolidSave className="mt-1"/>
        <p className=""> {title ? title : "No title"}</p>
      </div>
    </div>
  );
}
