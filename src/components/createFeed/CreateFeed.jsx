import React from 'react'
import Avatar from '../Profile/Avatar';
import GalleryIcon from '../logo & Icon/GalleryIcon';
import VideoLiveIcon from '../logo & Icon/VideoLiveIcon';
import FeeligIcon from '../logo & Icon/FeeligIcon';


export default function CreateFeed({profileImageUrl}) {
  return (
    <div className="w-full rounded-xl bg-[#242526] h-32 flex flex-col">
      {/* input */}
      <div className="w-full flex gap-4 p-4  ">
        <div className="w-11">
          <Avatar profileImageUrl={profileImageUrl} />
        </div>
        <div className="w-full text-white">
          <button className="w-full">
            <input
              disabled
              type=""
              className="hover:bg-[#58585a] rounded-full p-2 w-full bg-[#454547] pl-6  focus:outline-0 font-normal cursor-pointer text-white"
              placeholder="What's on your mind, Kim?"
            ></input>
          </button>
        </div>
      </div>
      <hr className="border-b-[1px] border-gray-600 mr-4 ml-4 -mt-1"></hr>
      {/* media */}
      <div className="p-4 grid grid-cols-3 w-full">
        <VideoLiveIcon />
        <GalleryIcon />
        <FeeligIcon />
      </div>
    </div>
  );
}
