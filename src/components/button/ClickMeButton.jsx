"use client";
import React, { useEffect, useState } from "react";
import ClipboardJS from "clipboard";
import { BsFillClipboardFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ClickMeButton({ textToCopy }) {
  const [toastify, setToastify] = useState(false);
  useEffect(() => {
    const clipboard = new ClipboardJS(buttonRef.current);
    clipboard.on("success", (e) => {
      console.log("Text copied:", e.text);
      setToastify(true);
      toast.info("Copied successfully", {
        theme: "light",
      });
      // You can add additional logic here, such as displaying a success message
    });
    return () => {
      clipboard.destroy();
    };
  }, []);
  const buttonRef = React.useRef(null);
  return (
    <button
      ref={buttonRef}
      className="flex justify-center gap-2 rounded-full shadow p-3 w-24 bg-gradient-to-r from-sky-500 to-indigo-500 text-white"
      data-clipboard-text={textToCopy}
    >
      Copy
      <BsFillClipboardFill className=" mt-1" />
      {toastify ? <ToastContainer autoClose={2000} position="top-center" className={"w-16"}/> : null}
    </button>
  );
}
