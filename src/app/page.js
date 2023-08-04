import OpenButton from "@/components/button/OpenButton";

export const metadata = {
  title: "Open-Pagraph",
};

export default function Home() {
  return (
    <main className="flex justify-center flex-col items-center gap-3 bg-[url('/background/background.jpg')] bg-cover h-screen">
      <section className="animate-scale-up flex gap-1 md:gap-2 text-3xl md:text-5xl lg:text-7xl  text-white">
        <p>O</p>
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
        <p>H</p>
      </section>
      {/*  */}
      <section className="flex gap-16">
        <OpenButton />
      </section>
    </main>
  );
}

// className = "flex min-h-screen flex-col items-center justify-between p-24";
// bg-gradient-to-r from-sky-400 to-indigo-400
