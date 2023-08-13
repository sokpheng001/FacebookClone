import React from "react";

export default function Avatar({ profileImageUrl }) {
  return (
    <div className="bg-[#4f4f51] hover:bg-[#58585a] cursor-pointer rounded-full ">
      <img
        src={profileImageUrl ? profileImageUrl : "/images/sokpheng2.jpg"}
        alt="profile"
        className="w-10 h-10 rounded-full object-cover"
      />
    </div>
  );
}
