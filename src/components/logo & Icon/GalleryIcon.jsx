import React from "react";

export default function GalleryIcon({ content }) {
  return (
    <div className="hover:bg-[#58585a] rounded-md p-2 flex justify-center -mt-2 items-center">
      <button className="flex justify-center gap-2 text-white">
        <img
          height="24"
          width="24"
          alt="Gallery"
          referrerPolicy="origin-when-cross-origin"
          src="https://static.xx.fbcdn.net/rsrc.php/v3/yC/r/a6OjkIIE-R0.png?_nc_eui2=AeEnybmZX52zJ-PmGbPPWhd5fK5Z1qDG7FV8rlnWoMbsVVZsEPNXDAKgHPU9jVuX9crUh38tXo0ePDmUH4z_i4Mo"
        />
        <p>{content ? content : "Photo/Video"}</p>
      </button>
    </div>
  );
}
