import CreateIcon from "@/components/logo & Icon/CreateIcon";
import Link from "next/link";
import React from "react";

export default function CardUploadStory() {
  return (
    <div
      id="card1"
      className={
        "h-64 w-36 rounded-xl flex  flex-col bg-cover bg-[url('/images/sokpheng2.jpg')] justify-end"
      }
    >
      {/* created button */}
      <div className="bg-[#242526] h-1/5 w-full flex flex-col items-center text-white rounded-b-xl ">
        <div className="-mt-5">
          <Link href={`/`}>
            <CreateIcon />
          </Link>
        </div>
        <p>Create story</p>
      </div>
    </div>
  );
}
