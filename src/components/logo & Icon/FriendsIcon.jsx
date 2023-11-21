import React from "react";

export default function FriendsIcon({content}) {
  return (
    <div className="ml-3 p-2 rounded-lg text-white flex gap-5 items-center hover:bg-[#58585a] cursor-pointer w-3/5">
      <i
        data-visualcompletion="css-img"
        className=""
        style={{
          backgroundImage:
            "url('https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/MXx87JcFKzH.png?_nc_eui2=AeFL0POwS0cinWr32BA2Vv4upjWidniF_5qmNaJ2eIX_mhrKb5HRyK9hMxcRYV22qmcWHVgxaQO8qHn17_9s5D3s');background-position:0 -304px;background-size:38px 570px;width:36px;height:36px;background-repeat:no-repeat;display:inline-block",
        }}
      ></i>
      <p>Frieds</p>
    </div>
  );
}
