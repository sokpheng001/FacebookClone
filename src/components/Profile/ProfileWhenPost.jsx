import React from "react";
import ThreeDots from "../logo & Icon/ThreeDots";
import XSymbol from "../logo & Icon/XSymbol";

export default function AvatarWithName({ profileImageUrl, userName }) {
  return (
    <div className=" rounded-full flex gap-2 justify-between">
      <div className="flex gap-2">
        <img
          src={profileImageUrl ? profileImageUrl : "/images/sokpheng2.jpg"}
          alt="profile"
          className="w-10 h-10 rounded-full object-cover"
        />
        {/* name */}
        <div className="text-white">
          <p id="userName" className="">
            {userName ? userName : "Kim Chansokpheng"}
          </p>
          {/* date of posting */}
          <p className="text-gray-500  text-sm">2h</p>
        </div>
      </div>
      {/* cancle */}
      <div className="flex gap-2">
        {/* three dots */}
        <ThreeDots/>
        {/* x symbol */}
        <XSymbol/>
      </div>
    </div>
  );
}
