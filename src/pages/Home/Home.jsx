import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero/Hero";
import Intro from "@/components/sections/Intro/Intro";
import SpecialitiesSection from "../../components/sections/Hero/SpecialitiesSection";
import JourneySection from "../../components/sections/Hero/JourneySection";
import TeaBreakSection from "../../components/sections/Hero/TeabreakSection";
import ExploreMenuSection from "../../components/sections/Hero/IngredientsSection";
import ContactPopup from "../../components/common/ContactPopup";


function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-x-clip bg-[#f7f2ea] text-[#2c1810] ">
        <Hero />
        <Intro />
        <SpecialitiesSection />
        <JourneySection />
        <TeaBreakSection />
        <ExploreMenuSection/>
      </main>
      <ContactPopup />
    </>
  );
}

export default Home;