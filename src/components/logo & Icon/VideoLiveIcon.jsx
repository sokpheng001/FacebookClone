import React from "react";

export default function VideoLiveIcon({ content }) {
  return (
    <div className=" hover:bg-[#58585a] rounded-md p-2 flex justify-center -mt-2 items-center">
      <button className="flex justify-center gap-2 text-white">
        <img
          height="24"
          width="24"
          alt="live video"
          referrerPolicy="origin-when-cross-origin"
          src="https://static.xx.fbcdn.net/rsrc.php/v3/yF/r/v1iF2605Cb5.png?_nc_eui2=AeEoK3Hc7Gp9AuquBZXucqHw3Eh3Wgl8GJPcSHdaCXwYkxhZBhPYu5WiPeGO-N-zcDmTYmDIa_EuHucyrbGfXJVu"
        />
        <p>{content ? content : "Live video"}</p>
      </button>
    </div>
  );
}
