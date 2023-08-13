import React from "react";

export default function AvatarWithName({userName,profileImageUrl}) {
  return (
    <div className="text-white rounded-full flex gap-4 items-center">
      <img
        src={profileImageUrl ? profileImageUrl : "/images/sokpheng2.jpg"}
        alt="profile"
        className="w-10 h-10 rounded-full object-cover"
      />
      <p>{userName? userName: "Kim Chansokpheng"}</p>
    </div>
  );
}
