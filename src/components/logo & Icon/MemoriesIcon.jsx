import React from "react";

export default function MemoriesIcon({ content }) {
  return (
    <div className="flex gap-5 hover:bg-[#58585a] cursor-pointer w-3/5 rounded-lg items-center text-white ml-3 p-2">
      <i
        data-visualcompletion="css-img"
        className=""
        style={{
          backgroundImage:
            "url('https://static.xx.fbcdn.net/rsrc.php/v3/y6/r/MXx87JcFKzH.png?_nc_eui2=AeFL0POwS0cinWr32BA2Vv4upjWidniF_5qmNaJ2eIX_mhrKb5HRyK9hMxcRYV22qmcWHVgxaQO8qHn17_9s5D3s');background-position:0 -456px;background-size:38px 570px;width:36px;height:36px;",
        }}
      ></i>
      <p>Memories</p>
    </div>
  );
}
