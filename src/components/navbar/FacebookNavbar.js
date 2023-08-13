import React from "react";
import FacebookLogo from "../logo & Icon/FacebookLogo";
import HomeIcon from "../logo & Icon/HomeIcon";
import VideoIcon from "../logo & Icon/VideoIcon";
import Home2Icon from "../logo & Icon/Home2Icon";
import PeopleIcon from "../logo & Icon/PeopleIcon";
import GameIcon from "../logo & Icon/GameIcon";
import CircleIcon from "../logo & Icon/CircleIcon";
import ChatIcon from "../logo & Icon/ChatIcon";
import NotificationIcon from "../logo & Icon/NotificationIcon";
import Avatar from "../Profile/Avatar";

export default function FacebookNavbar() {
  return (
    <div className="bg-[#242526] w-full h-14 grid grid-cols-12 text-white border-b-[1px] border-gray-500">
      <div className="col-span-4 bg-repeat flex gap-4 m-2">
        <FacebookLogo />
        <input
          type="text"
          className="bg-[#454547] rounded-full pl-10 pr-5 focus:outline-0 font-normal"
          aria-autocomplete="list"
          placeholder={"Search Facebook"}
        />
      </div>
      <div className="col-span-4  grid grid-cols-5 ">
        <HomeIcon />
        {/*  */}
        <VideoIcon />
        {/*  */}
        <Home2Icon />
        {/*  */}
        <PeopleIcon />
        {/*  */}
        <GameIcon />
      </div>
      <div className="col-span-4 flex justify-end items-center mr-4 gap-2">
        <CircleIcon />
        <ChatIcon />
        <NotificationIcon />
        <Avatar />
      </div>
    </div>
  );
}
