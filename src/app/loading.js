import React from 'react'

export default function Loading() {
  return (
    <main className="flex justify-center flex-col items-center gap-3 bg-white bg-cover h-screen">
      <section className="animate-scale-up flex gap-1 md:gap-2 text-3xl md:text-5xl lg:text-7xl  text-white">
        {/* <p>O</p>
        <p>P</p>
        <p>E</p>
        <p>N</p>
        <p>-</p>
        <p>P</p>
        <p>A</p>
        <p>G</p>
        <p>R</p>
        <p>A</p>
        <p>P</p>
        <p>H</p> */}
      </section>
      <div className="w-1/2 flex flex-col justify-center gap-4 items-center">
        <div class="h-2 bg-slate-400 rounded w-full animate-pulse"></div>
        <div class="h-2 bg-slate-400 rounded w-1/2 animate-pulse"></div>
      </div>
      {/*  */}
      <section className="flex gap-16">{/* <OpenButton /> */}</section>
    </main>
  );
}
