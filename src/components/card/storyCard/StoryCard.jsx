import StoryAvatar from "@/components/Profile/StoryAvatar";
import React from "react";

export default function StoryCard({ userName, profileImageUrl,storyContent }) {
  return (
    <div
      id="card"
      className={
        "h-64 w-36 rounded-xl p-3 flex flex-col justify-between  bg-cover bg-[url('/images/sokpheng.jpg')]"
      }
    >
      <StoryAvatar profileImageUrl={profileImageUrl} />
      <p className="text-white">{userName ? userName : "Kim Chansokpheng"}</p>
    </div>
  );
}
