
import AvatarWithName from "@/components/Profile/AvatarWithName";
import ProfileWhenPost from "@/components/Profile/ProfileWhenPost";
import CardUploadStory from "@/components/card/storyCard/CardUploadStory";
import StoryCard from "@/components/card/storyCard/StoryCard";
import CreateFeed from "@/components/createFeed/CreateFeed";

import FacebookNavbar from "@/components/navbar/FacebookNavbar";
import React from "react";

export default function Facebook() {
  return (
    <main className="bg-[#18191a] h-screen">
      <FacebookNavbar />
      {/*  */}
      <section className="mt-6 grid grid-cols-12">
        {/*  */}
        <div className="col-span-4 pl-4">
          <AvatarWithName/>
        </div>
        {/*  */}
        <div className="col-span-4 flex flex-col gap-4 ">
          {/* story */}
          <div className="flex gap-2 overflow-hidden">
            <div>
              <CardUploadStory />
            </div>
            {[1, 2, 4, 5, 6].map((e) => (
              <StoryCard key={e} />
            ))}
          </div>
          {/* create feed */}
          <CreateFeed />
          {/* post */}
          <div className="w-full h-96 bg-[#242526] rounded-xl flex flex-col gap-2 p-4">
            {/* profile */}
            <ProfileWhenPost />
          </div>
        </div>
        {/*  */}
        <div className="col-span-4">
          {/* sponsor */}
          <div className="flex justify-center">
            <p className="text-gray-500 font-bold">Sponsored</p>
          </div>
        </div>
      </section>
    </main>
  );
}
