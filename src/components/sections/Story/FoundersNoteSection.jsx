import { motion } from "framer-motion";

import vintageLetter from "@/assets/images/contact/vintage-letter1.png";
import founderImage from "@/assets/images/story/leaf.png"; // e.g. oldman2 or similar
import chaiGlass from "@/assets/images/story/leaf.png";
import dtoryBG from "@/assets/images/story/story-bg.png";

export default function FoundersNoteSection() {
  return (
    <section className="relative overflow-hidden bg-[#FBF1E5] py-14 text-[#4B2A16] sm:py-18 lg:py-20">
      {/* subtle background texture */}
      <div className="absolute inset-0">
        <div
          className="h-full w-full "
          style={{
            backgroundImage: `url(${dtoryBG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.75,
          }}
        />
      </div>

    
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-5 sm:px-8 lg:flex-row lg:items-stretch lg:justify-between lg:px-10">
        {/* LEFT: founder illustration */}
      

        {/* RIGHT: letter with founder note */}
        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="relative w-full max-w-[700px] lg:left-120 lg:w-[62%]"
        >
          {/* letter background image */}
          <img
            src={vintageLetter}
            alt="Founder's letter"
            className="mx-auto h-auto w-full max-w-[700px] select-none object-contain"
          />

          {/* content printed on letter */}
          <div className="pointer-events-auto absolute inset-0 mx-auto flex max-w-[78%] flex-col justify-center gap-4 px-4 pt-[20%] sm:max-w-[72%] sm:px-0 sm:pt-[18%] lg:pt-[20%]">
            {/* label */}
            <p className="text-[0.76rem] font-semibold uppercase tracking-[0.26em] text-[#A16635]">
              Founder&apos;s Note
            </p>

            {/* main quote */}
            <p
              className="text-[1.8rem] leading-snug text-[#3D2413] sm:text-[2.1rem] lg:text-[2.4rem]"
              style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 600 }}
            >
              “My dream is simple – to serve the best tea and build the biggest
              customer family in the world.”
            </p>

            {/* body copy */}
            <p className="mt-1 text-[0.96rem] leading-7 text-[#5E4637] sm:text-[1rem]">
              It all started with a small stall, a boiling kettle and a belief:
              tea tastes better when shared like it&apos;s at home. Every cup we
              serve today still carries that same warmth, story and smile.
            </p>
            <p className="text-[0.96rem] leading-7 text-[#5E4637] sm:text-[1rem]">
              Thank you for making Thatha Tea more than a café – for turning it
              into a place where friendships brew, families meet, and new
              memories are poured every day.
            </p>

            {/* signature */}
            <div className="mt-4 flex flex-col items-end">
              <p
                className="text-[1.5rem] text-[#C46F2C]"
                style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 600 }}
              >
                – Thatha
              </p>
              <p className="mt-1 text-[0.8rem] uppercase tracking-[0.18em] text-[#A16635]">
                Founder, Thatha Tea
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}