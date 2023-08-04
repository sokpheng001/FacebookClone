import React from "react";

export default function TextAreaComponent({textValue}) {
  return (
    <div className="">
      <textarea
        placeholder="Text here..."
        className="shadow-md p-4 w-80 focus:outline-indigo-300 rounded-md"
        onChange={(event) => {
          setText(event.target.value);
        }}
      ></textarea>
      <div className="flex gap-2"></div>
    </div>
  );
}
