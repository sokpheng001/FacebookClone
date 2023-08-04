"use client";

export default function PostButton({ value }) {
  const handleValue = () => {
    value("Hlleo, sokpheng");
  };
  return (
    <button
      className="rounded-full shadow p-3 w-44 
    bg-gradient-to-r from-sky-500 to-indigo-500 text-white 
    active:from-sky-400 active:to-indigo-400 
    "
      onClick={() => {
        handleValue();
      }}
    >
      Post
    </button>
  );
}
