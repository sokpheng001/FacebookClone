import AvatarWithName from "@/components/Profile/AvatarWithName";
import ProfileWhenPost from "@/components/Profile/ProfileWhenPost";
import CardUploadStory from "@/components/card/storyCard/CardUploadStory";
import StoryCard from "@/components/card/storyCard/StoryCard";
import CreateFeed from "@/components/createFeed/CreateFeed";
import FeedsIcon from "@/components/logo & Icon/FeedsIcon";
import FriendsIcon from "@/components/logo & Icon/FriendsIcon";
import GroupIcon from "@/components/logo & Icon/GroupIcon";
import MarketIcon from "@/components/logo & Icon/MarketIcon";
import MemoriesIcon from "@/components/logo & Icon/MemoriesIcon";
import VideoIcon2 from "@/components/logo & Icon/VideoIcon2";
import SavedIcon from "@/components/logo & Icon/savedIcon";

import FacebookNavbar from "@/components/navbar/FacebookNavbar";
import React from "react";

export default function Facebook() {
  return (
    <main className="bg-[#18191a] h-screen">
      <FacebookNavbar />
      {/*  */}
      <section className="mt-6 lg:grid lg:grid-cols-12 flex justify-center">
        {/*  */}
        <div className="col-span-4 lg:flex lg:flex-col xl:block hidden">
          <AvatarWithName />
          <FriendsIcon />
          <MemoriesIcon />
          <SavedIcon />
          <GroupIcon />
          <VideoIcon2 />
          <MarketIcon />
          <FeedsIcon />
        </div>
        {/*  */}
        {/* feeds */}
        <div className="w-[625px] col-span-4 flex flex-col gap-4 ">
          {/* story */}
          <div className="flex gap-2 overflow-hidden">
            <div>
              <CardUploadStory />
            </div>
            {[1, 2,3,4,5,6].map((e) => (
              <StoryCard key={e} />
            ))}
          </div>
          {/* create feed */}
          <CreateFeed />
          {/* post */}
          <div className="w-full h-96 bg-[#242526] rounded-lg flex flex-col gap-2 p-4">
            {/* profile */}
            <ProfileWhenPost />
          </div>
        </div>
        {/*  */}
        <div className="col-span-4 xl:block hidden ">
          {/* sponsor */}
          <div className="flex justify-center">
            <p className="text-gray-500 font-bold">Sponsored</p>
          </div>
        </div>
      </section>
    </main>
  );
}
