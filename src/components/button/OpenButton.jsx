import Link from "next/link";
import { Suspense } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function OpenButton({ value }) {
  return (
    <Suspense fallback={<>Loading</>}>
      <Link
        className="rounded-full lg:p-3 lg:w-44 md:w-40 p-2 w-36 
    border border-indigo-400 text-white 
    hover:bg-gradient-to-r from-sky-500 to-indigo-500
    active:from-sky-400 active:to-indigo-400 flex gap-2 justify-center
    shadow-lg shadow-sky-500/20
    
    "
        href={"/gone"}
      >
        <p>Open</p>
        <AiOutlineArrowRight className="mt-1" />
      </Link>
    </Suspense>
  );
}
