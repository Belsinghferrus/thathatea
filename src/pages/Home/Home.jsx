import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero/Hero";
import Intro from "@/components/sections/Intro/Intro";

function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip bg-[#f7f2ea] text-[#2c1810] ">
        <Hero />
        <Intro />
      </main>
    </>
  );
}

export default Home;