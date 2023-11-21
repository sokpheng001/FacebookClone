import React from "react";

export default function AvatarWithName({ userName, profileImageUrl }) {
  return (
    <div className="ml-3 p-2 text-white rounded-lg flex gap-4 items-center hover:bg-[#58585a] cursor-pointer w-3/5">
      <img
        src={profileImageUrl ? profileImageUrl : "/images/sokpheng2.jpg"}
        alt="profile"
        className="w-10 h-10 rounded-full object-cover"
      />
      <p>{userName ? userName : "Kim Chansokpheng"}</p>
    </div>
  );
}
