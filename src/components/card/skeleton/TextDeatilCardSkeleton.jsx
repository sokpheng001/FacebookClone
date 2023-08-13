import React from 'react'

export default function TextDeatilCardSkeleton() {
  return (
    <div className=" bg-gray-100 rounded-md  flex justify-center items-center duration-300 cursor-pointer">
      <div className="w-full m-8 gap-4 flex justify-center">
        <div class="w-1/2 h-2 bg-slate-300 rounded"></div>
      </div>
    </div>
  );
}
