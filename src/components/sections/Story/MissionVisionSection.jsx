import { motion } from "framer-motion";
import paperBg from "@/assets/images/paper-bg.webp";
import topDripPng from "@/assets/images/story/coffee-top.png";
import bottomDecorPng from "@/assets/images/story/leaf.png";

const ACCENT = "#b56322";
const INK = "#2f1c12";
const BODY = "#5a463a";

export default function MissionVisionSection({ reduceMotion = false }) {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#f6ecdf]"
      style={{
        // backgroundImage: `url(${paperBg})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* top full-width image */}
      <img
        src={topDripPng}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 z-0 w-full min-w-[1200px] -translate-x-1/2 object-contain"
      />

      {/* bottom full-width image */}
      {/* <img
        src={bottomDecorPng}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 z-0 w-full min-w-[1200px] -translate-x-1/2 object-cover opacity-95"
      /> */}

      {/* optional soft overlay for readability */}
      <div className="absolute inset-0 z-0 bg-[#f6ecdf]/72" />

      <div className="relative z-10 mx-auto w-full max-w-[1040px] px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55 }}
        >
          {/* MISSION */}
          <div className="relative">
            <span
              className="pointer-events-none absolute left-0 top-[-18px] text-[5rem] leading-none opacity-[0.13] sm:text-[6rem] lg:left-[-30px] lg:text-[8rem]"
              style={{ color: ACCENT, fontFamily: "'Bebas Neue', sans-serif" }}
            >
              “
            </span>

            <div className="pl-8 sm:pl-12 lg:pl-16">
              <p
                className="text-[0.82rem] font-bold uppercase tracking-[0.22em]"
                style={{ color: "#6a3a20", fontFamily: "'Manrope', sans-serif" }}
              >
                Our mission
              </p>

              <h2
                className="mt-4 text-[2.5rem] leading-[0.95] tracking-[-0.02em] sm:text-[3.4rem] lg:text-[4.6rem]"
                style={{ color: INK, fontFamily: "'Bebas Neue', sans-serif" }}
              >
                SERVING WARMTH,
                <br />
                ONE CUP AT A TIME.
              </h2>

              <p
                className="mt-5 text-[1.2rem] leading-[1.18] sm:text-[1.35rem] lg:text-[1.6rem]"
                style={{
                  color: "#6a3a20",
                  fontFamily: "'Cardamom Script', cursive",
                }}
              >
                Handcrafted tea, honest flavours, and everyday comfort.
              </p>

              <p
                className="mt-4 max-w-[700px] text-[1rem] leading-[1.9] sm:text-[1.05rem] lg:text-[1.1rem]"
                style={{ color: BODY, fontFamily: "'Manrope', sans-serif" }}
              >
                Our mission is to serve quality tea and food with authenticity,
                affordability, and a memorable experience that makes people feel
                welcomed, relaxed, and connected.
              </p>
            </div>

            <span
              className="pointer-events-none absolute bottom-[-14px] right-[4%] text-[4rem] leading-none opacity-[0.11] sm:text-[5rem] lg:text-[6rem]"
              style={{ color: ACCENT, fontFamily: "'Bebas Neue', sans-serif" }}
            >
              ”
            </span>
          </div>

          {/* divider */}
          <div className="my-12 h-px w-full bg-gradient-to-r from-transparent via-[#d8b89d] to-transparent sm:my-14 lg:my-16" />

          {/* VISION */}
          <div className="relative">
            <span
              className="pointer-events-none absolute left-0 top-[-18px] text-[5rem] leading-none opacity-[0.13] sm:text-[6rem] lg:left-[-30px] lg:text-[8rem]"
              style={{ color: "#6a3a20", fontFamily: "'Bebas Neue', sans-serif" }}
            >
              “
            </span>

            <div className="pl-8 sm:pl-12 lg:pl-16">
              <p
                className="text-[0.82rem] font-bold uppercase tracking-[0.22em]"
                style={{ color: "#6a3a20", fontFamily: "'Manrope', sans-serif" }}
              >
                Our vision
              </p>

              <h2
                className="mt-4 text-[2.5rem] leading-[0.95] tracking-[-0.02em] sm:text-[3.4rem] lg:text-[4.6rem]"
                style={{ color: INK, fontFamily: "'Bebas Neue', sans-serif" }}
              >
                BUILDING A TEA
                <br />
                RITUAL PEOPLE LOVE.
              </h2>

              <p
                className="mt-5 text-[1.2rem] leading-[1.18] sm:text-[1.35rem] lg:text-[1.6rem]"
                style={{
                  color: "#6a3a20",
                  fontFamily: "'Cardamom Script', cursive",
                }}
              >
                A trusted café experience across generations and cities.
              </p>

              <p
                className="mt-4 max-w-[700px] text-[1rem] leading-[1.9] sm:text-[1.05rem] lg:text-[1.1rem]"
                style={{ color: BODY, fontFamily: "'Manrope', sans-serif" }}
              >
                We envision becoming India&apos;s most loved tea café brand,
                spreading warmth, happiness, and familiarity through spaces
                people return to as part of their daily lives.
              </p>
            </div>

            <span
              className="pointer-events-none absolute bottom-[-14px] right-[4%] text-[4rem] leading-none opacity-[0.11] sm:text-[5rem] lg:text-[6rem]"
              style={{ color: "#8f9d4c", fontFamily: "'Bebas Neue', sans-serif" }}
            >
              ”
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}