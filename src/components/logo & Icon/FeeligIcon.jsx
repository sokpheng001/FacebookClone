import React from "react";

export default function FeeligIcon({ content }) {
  return (
    <div className="hover:bg-[#58585a] rounded-md p-2 flex justify-center -mt-2 items-center">
      <button className="flex justify-center text-white gap-2">
        <img
          height="24"
          width="24"
          alt="Feelig"
          referrerPolicy="origin-when-cross-origin"
          src="https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/yMDS19UDsWe.png?_nc_eui2=AeFKljxFMoEJgzg3N-rQ03CYv2_PAiqLvPK_b88CKou88uR1Xuaq_sj-ccTzfO56ddxY-FZMKmhuzuFLfcrjuQ1G"
        />
        <p>{content ? content : "Feeling/activity"}</p>
      </button>
    </div>
  );
}
