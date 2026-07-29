import { motion } from "framer-motion";
import oldmanteaPng from "@/assets/images/story/oldman-tea.png";
import vintageLetter from "@/assets/images/story/vintage-letter.png";
import teaCupPng from "@/assets/images/story/tea-hero1.png";
import bgimage from "@/assets/images/paper-bg.webp";

const ACCENT = "#b56322";

function HeartDivider() {
  return (
    <div className="flex items-center gap-3 text-[#8e6a53]">
      <span className="h-px w-10 sm:w-12 lg:w-16 bg-current/50" />
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-4 w-4"
        fill="none"
      >
        <path
          d="M12 19s-6.5-4.2-6.5-9.1A3.9 3.9 0 0 1 12 7.4a3.9 3.9 0 0 1 6.5 2.5C18.5 14.8 12 19 12 19Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
      <span className="h-px w-10 sm:w-12 lg:w-16 bg-current/50" />
    </div>
  );
}

function VintageNoteCard() {
  return (
    <div className="relative w-full h-full">
      <img
        src={vintageLetter}
        alt="Vintage paper note"
        width={700}
        height={900}
        loading="lazy"
        className="h-full w-full object-contain drop-shadow-[0_18px_28px_rgba(66,39,24,0.16)] lg:drop-shadow-[0_22px_34px_rgba(66,39,24,0.18)]"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 py-8 text-center sm:px-8 sm:py-10">
        <div className="mb-3 text-[#8d4e1f] text-[2.1rem] leading-none sm:text-[2.4rem] lg:mb-4 lg:text-[2.8rem]">
          ❝
        </div>

        <p
          className="text-[1rem] leading-[1.45] text-[#4a2f20] sm:text-[1.12rem] sm:leading-[1.5] lg:text-[1.35rem] lg:leading-[1.55]"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
          }}
        >
          From a humble
          <br />
          beginning to
          <br />
          hundreds of hearts,
          <br />
          our journey is
          <br />
          steeped in trust,
          <br />
          tradition &amp; taste.
        </p>

        <div className="mt-4 text-[#6e4731] lg:mt-6">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-6 w-6 lg:h-8 lg:w-8"
            fill="none"
          >
            <path
              d="M12 19s-6.5-4.2-6.5-9.1A3.9 3.9 0 0 1 12 7.4a3.9 3.9 0 0 1 6.5 2.5C18.5 14.8 12 19 12 19Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function StoryHeroSection({ reduceMotion = false }) {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#f6efe6]"
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${bgimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-[#f6efe6]/72 lg:bg-[#f6efe6]/58" />

      <div className="relative mx-auto w-full max-w-[1600px] px-4 pt-10 pb-12 sm:px-6 sm:pt-14 sm:pb-16 md:px-8 lg:min-h-screen lg:px-14 lg:pt-0 lg:pb-0">
        {/* MOBILE + TABLET STACK */}
        <div className="flex flex-col lg:block">
          {/* TEXT */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -24 }}
            whileInView={reduceMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="relative z-30 w-full lg:flex lg:min-h-screen lg:items-start"
          >
            <div className="mx-auto w-full max-w-[520px] lg:mx-0 lg:max-w-[500px] lg:pt-[120px]">
              <p
                className="flex items-center gap-2 text-[0.76rem] font-bold uppercase tracking-[0.18em] text-[#ab6230] sm:text-[0.82rem] lg:text-[0.85rem]"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="h-4 w-4"
                  fill="none"
                >
                  <path
                    d="M12 20c4.5-2.2 7-6 7-11-5 0-8.8 2.4-11 7-1 2-1.2 3.1-1.5 4 1-.2 2.3-.4 4-.9 4.2-1.2 6.7-4 8.2-7.7"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Our story
              </p>

              <h1
                className="mt-5 text-[2.7rem] leading-[0.92] tracking-[-0.02em] text-[#24140d] sm:text-[3.5rem] md:text-[4.2rem] lg:mt-7 lg:text-[6.3rem]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                A LEGACY
                <br />
                BREWED
              </h1>

              <h2
                className="mt-1 text-[2.7rem] leading-[0.92] tracking-[-0.02em] sm:text-[3.5rem] md:text-[4.2rem] lg:text-[6.3rem]"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  color: ACCENT,
                }}
              >
                WITH LOVE.
              </h2>

              <div className="mt-6 lg:mt-8">
                <HeartDivider />
              </div>

              <p
                className="mt-6 max-w-[340px] text-[0.98rem] leading-[1.8] text-[#3f322b] sm:max-w-[390px] sm:text-[1.05rem] lg:mt-8 lg:text-[1.14rem] lg:leading-[1.85]"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                What began in 1991 as a small tea stall fueled by passion and
                purpose, has today grown into one of India&apos;s most loved tea
                café brands.
              </p>
            </div>
          </motion.div>

          {/* OLD MAN IMAGE - normal flow on mobile */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 24 }}
            whileInView={reduceMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="relative z-20 mx-auto mt-8 w-full max-w-[640px] sm:mt-10 sm:max-w-[720px] lg:absolute lg:right-[1.5%] lg:top-[2.5%] lg:mt-0 lg:w-[47%] lg:max-w-none"
          >
            <img
              src={oldmanteaPng}
              alt="Founder pouring tea and tea stall sketch"
              width={1600}
              height={900}
              loading="lazy"
              className="h-auto w-full object-contain opacity-[0.88] lg:opacity-[0.9]"
            />
          </motion.div>

          {/* TEACUP - normal flow on mobile, absolute on desktop */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative z-40 mx-auto mt-2 flex w-full justify-center sm:mt-4 lg:absolute lg:left-1/2 lg:bottom-[3%] lg:mt-0 lg:-translate-x-1/2"
          >
            <img
              src={teaCupPng}
              alt="Thatha Tea signature clay cup"
              width={900}
              height={1200}
              loading="lazy"
              className="h-[34vh] w-auto max-w-[92vw] object-contain drop-shadow-[0_24px_30px_rgba(58,36,24,0.18)] sm:h-[40vh] md:h-[46vh] lg:h-[60vh] lg:max-w-none lg:drop-shadow-[0_32px_40px_rgba(58,36,24,0.22)]"
            />
          </motion.div>

          {/* NOTE - normal flow on mobile, absolute on desktop */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18, rotate: -3 }}
            whileInView={reduceMotion ? {} : { opacity: 1, y: 0, rotate: -2 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.55 }}
            className="relative z-50 mx-auto mt-6 w-full max-w-[220px] sm:mt-8 sm:max-w-[260px] md:max-w-[290px] lg:absolute lg:right-[3.5%] lg:bottom-[4%] lg:mt-0 lg:w-[20.5%] lg:max-w-[320px]"
          >
            <div className="aspect-[0.78/1] w-full">
              <VintageNoteCard />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}