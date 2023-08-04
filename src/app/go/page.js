import VideoCard from "@/components/card/videoCard/VideoCard";
import React from "react";

export const metadata = {
  title: "Go | Open-Pagraph",
};

export default function Go() {
  return (
    <main className="grid grid-cols-12 h-screen bg-gradient-to-r  from-sky-400 to-indigo-400">
      <section className="col-span-4 bg-sky-400 md:block hidden"></section>
      <section
        className="col-span-12 md:col-span-4 bg-white h-screen flex justify-center items-center"
        id="video_form"
      >
        <VideoCard />
      </section>
      <section className="col-span-4 bg-indigo-400 md:block hidden"></section>
    </main>
  );
}
