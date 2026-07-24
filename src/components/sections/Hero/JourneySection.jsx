import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Leaf,
  CupSoda,
  Heart,
  Users,
  Sparkles,
} from "lucide-react";

import cha from "@/assets/images/cap.png";
import cake from "@/assets/videos/cake.mp4";
import coffeebeans from "@/assets/videos/coffeebeens.mp4";
import cookies from "@/assets/videos/cookie.mp4";

const reasons = [
  {
    title: "Freshly brewed, never rushed",
    text: "Every cup is prepared to feel warm, familiar, and satisfying — the way a proper tea break should.",
    icon: CupSoda,
  },
  {
    title: "Familiar recipes, everyday comfort",
    text: "The menu is shaped around the kind of flavours people come back to again and again.",
    icon: Heart,
  },
  {
    title: "Better ingredients, cleaner process",
    text: "Care in sourcing, preparation, and hygiene helps every outlet feel dependable and consistent.",
    icon: Leaf,
  },
  {
    title: "A place people trust",
    text: "What keeps customers returning is not only the tea, but the comfort, warmth, and familiarity around it.",
    icon: Users,
  },
];

function SteamLines() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 260 220"
      className="pointer-events-none absolute left-[14%] top-[4%] h-36 w-36 text-[#d9a05c]/50 sm:h-44 sm:w-44 lg:left-[10%] lg:top-[2%] lg:h-56 lg:w-56"
      fill="none"
    >
      <motion.path
        d="M84 190C74 160 82 150 95 132C109 113 110 93 98 72"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0.35, opacity: 0.18, y: 8 }}
        animate={{ pathLength: 1, opacity: 0.6, y: [8, 0, 8] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d="M126 192C116 163 127 150 141 132C153 116 156 95 146 77"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0.35, opacity: 0.16, y: 10 }}
        animate={{ pathLength: 1, opacity: 0.48, y: [10, 0, 10] }}
        transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      />
      <motion.path
        d="M168 188C160 164 170 152 182 136C194 119 195 100 186 83"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0.35, opacity: 0.14, y: 6 }}
        animate={{ pathLength: 1, opacity: 0.4, y: [6, 0, 6] }}
        transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      />
    </svg>
  );
}

function MediaVideo({
  src,
  className = "",
  poster = "",
  overlay = true,
  reduceMotion = false,
}) {
  return (
    <motion.div
      className={className}
      whileHover={reduceMotion ? {} : { y: -4, scale: 1.012 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[22px] border border-[#ddc8b2] bg-[#f1e4d3] shadow-[0_18px_40px_rgba(43,26,18,0.08)]">
        <motion.video
          src={src}
          poster={poster}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
          whileHover={reduceMotion ? {} : { scale: 1.04 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        />
        {overlay && (
          <>
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(43,26,18,0.22)_0%,rgba(43,26,18,0.04)_40%,rgba(43,26,18,0.02)_100%)]" />
            <motion.div
              className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.14)_48%,transparent_56%)]"
              animate={reduceMotion ? { opacity: 0 } : { x: ["-30%", "120%"], opacity: [0, 1, 0] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        )}
      </div>
    </motion.div>
  );
}

function JourneySection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#f6eedf] text-[#2b1a12]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(184,117,39,0.10),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(78,49,33,0.06),transparent_30%)]" />
      <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(110,70,43,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(110,70,43,0.14)_1px,transparent_1px)] [background-size:120px_120px]" />

      <svg
        aria-hidden="true"
        viewBox="0 0 220 220"
        className="pointer-events-none absolute left-[-2rem] top-6 h-24 w-24 text-[#b87527]/12 sm:h-28 sm:w-28 lg:left-10 lg:top-12 lg:h-36 lg:w-36"
        fill="none"
      >
        <path
          d="M40 180C48 86 102 34 192 26C182 126 128 172 40 180Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M62 156C88 122 118 82 174 40"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>

      <div className="relative mx-auto max-w-[1560px] px-4 py-12 sm:px-6 sm:py-14 lg:px-14 lg:py-20 xl:px-20">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
          {/* left narrative */}
          <div className="relative max-w-[560px]">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e1d0bc] bg-[#fff8ef]/90 px-3 py-2 text-[#a76024]">
              <Sparkles className="h-[14px] w-[14px]" />
              <p
                className="text-[0.72rem] font-bold uppercase tracking-[0.2em]"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                Our Journey
              </p>
            </div>

            <p
              className="mt-5 text-[0.92rem] italic tracking-[0.01em] text-[#a46027]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              A tea-time story rooted in memory
            </p>

            <h2
              className="mt-2 max-w-[8ch] text-[3rem] uppercase leading-[0.9] tracking-[-0.05em] text-[#2b1a12] sm:text-[3.6rem] lg:text-[4.8rem]"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Brewing memories since 2015
            </h2>

            <div className="mt-5 h-px w-24 bg-[#c98a46]" />

            <div
              className="mt-6 space-y-4 text-[1rem] leading-[1.88] text-[#5d4d42]"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              <p>
                What began as a small tea stall with a big dream slowly grew into
                a place people return to for comfort, routine, and familiar taste.
              </p>

              <p>
                Thatha Tea was shaped around simple things done well — a warm cup,
                honest flavour, dependable quality, and the kind of tea break that
                feels close to home.
              </p>

              <p>
                Even as the brand has grown, that feeling remains at the center of
                every outlet, every visit, and every shared cup.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="/our-story"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-[#d9c3af] bg-[#fff8ef] px-6 text-[0.88rem] font-extrabold uppercase tracking-[0.08em] text-[#2b1a12] transition-colors duration-300 hover:bg-[#f4e7d8]"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                Know our story
                <ArrowRight className="h-[16px] w-[16px]" />
              </a>

              <span
                className="rounded-full border border-[#e1d0bc] px-4 py-2 text-[0.78rem] font-semibold text-[#7b6657]"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                Since 2015
              </span>
            </div>

            <motion.div
              className="mt-8 max-w-[280px] rotate-[-2deg] rounded-[22px] border border-[#e3d4c4] bg-[#fffaf3]/90 px-4 py-4 shadow-[0_14px_30px_rgba(43,26,18,0.05)]"
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 18 }}
              whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55 }}
              whileHover={reduceMotion ? {} : { y: -4, rotate: -1 }}
            >
              <p
                className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[#a46027]"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                House note
              </p>
              <p
                className="mt-2 text-[0.92rem] leading-[1.65] text-[#655449]"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                Built around the kind of everyday warmth people remember long
                after the cup is empty.
              </p>
            </motion.div>
          </div>

          {/* right living collage */}
          <div className="relative">
            <SteamLines />

            <div className="relative mx-auto w-full max-w-[860px]">
              {/* desktop collage */}
              <div className="hidden lg:grid lg:grid-cols-[1.05fr_0.62fr] lg:gap-5">
                <div className="relative">
                  <MediaVideo
                    src={cake}
                    reduceMotion={reduceMotion}
                    className="aspect-[1.08/0.92]"
                  />

                  <motion.div
                    className="absolute -bottom-12 left-[-2.5rem] z-10 w-[39%] max-w-[260px]"
                    animate={reduceMotion ? {} : { y: [0, -8, 0], rotate: [-1, 1, -1] }}
                    transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <img
                      src={cha}
                      alt="Tea cup foreground visual"
                      width={900}
                      height={900}
                      loading="lazy"
                      className="h-auto w-full object-cover drop-shadow-[0_18px_30px_rgba(43,26,18,0.18)]"
                    />
                  </motion.div>

                  <motion.div
                    className="absolute -right-8 top-[62%] z-10 max-w-[270px] rotate-[-2deg] rounded-[22px] border border-[#e3d0bc] bg-[#fff9f1]/95 px-4 py-4 shadow-[0_14px_30px_rgba(43,26,18,0.06)]"
                    initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.45 }}
                    transition={{ duration: 0.45, delay: 0.2 }}
                    whileHover={reduceMotion ? {} : { y: -3, rotate: -1 }}
                  >
                    <p
                      className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#a6672b]"
                      style={{ fontFamily: "'Manrope', sans-serif" }}
                    >
                      Why it feels different
                    </p>
                    <p
                      className="mt-2 text-[0.92rem] leading-[1.66] text-[#5b4b40]"
                      style={{ fontFamily: "'Manrope', sans-serif" }}
                    >
                      Warmth comes from routine, detail, and the feeling of a place
                      that already knows you.
                    </p>
                  </motion.div>
                </div>

                <div className="relative flex flex-col gap-5 pt-10">
                  <MediaVideo
                    src={coffeebeans}
                    reduceMotion={reduceMotion}
                    className="aspect-[0.82/1.06]"
                  />
                  <div className="ml-8 w-[82%]">
                    <MediaVideo
                      src={cookies}
                      reduceMotion={reduceMotion}
                      className="aspect-[1/0.76]"
                    />
                  </div>
                </div>
              </div>

              {/* mobile/tablet collage */}
              {/* mobile/tablet collage */}
              <div className="grid gap-4 lg:hidden">
                <MediaVideo
                  src={cake}
                  reduceMotion={reduceMotion}
                  className="aspect-[1.08/0.92]"
                />

                <div className="grid grid-cols-[0.92fr_1fr] items-end gap-4">
                  <div className="flex flex-col gap-4">
                    <motion.div
                      className="rotate-[-1.5deg] rounded-[22px] border border-[#e3d0bc] bg-[#fff9f1]/96 px-4 py-5 shadow-[0_12px_28px_rgba(43,26,18,0.05)]"
                      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.45 }}
                      transition={{ duration: 0.4 }}
                      whileHover={reduceMotion ? {} : { y: -3, rotate: -1 }}
                    >
                      <p
                        className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#a6672b]"
                        style={{ fontFamily: "'Manrope', sans-serif" }}
                      >
                        A familiar pause
                      </p>

                      <p
                        className="mt-2 text-[1rem] leading-[1.65] text-[#5b4b40]"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        More than tea, it is the kind of everyday warmth people return to
                        without thinking twice.
                      </p>

                      <div className="mt-3 h-px w-16 bg-[#cf9a64]" />

                      <p
                        className="mt-3 text-[0.76rem] font-semibold uppercase tracking-[0.12em] text-[#8b735f]"
                        style={{ fontFamily: "'Manrope', sans-serif" }}
                      >
                        Since 2015
                      </p>
                    </motion.div>

                    <div className="relative">
                      <MediaVideo
                        src={coffeebeans}
                        reduceMotion={reduceMotion}
                        className="aspect-[0.95/1.08]"
                      />

                      <motion.div
                        className="absolute -bottom-8 left-0 z-10 w-[66%] max-w-[220px]"
                        animate={reduceMotion ? {} : { y: [0, -6, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <img
                          src={cha}
                          alt="Tea cup foreground visual"
                          width={900}
                          height={900}
                          loading="lazy"
                          className="h-auto w-full object-cover drop-shadow-[0_18px_30px_rgba(43,26,18,0.18)]"
                        />
                      </motion.div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    <MediaVideo
                      src={cookies}
                      reduceMotion={reduceMotion}
                      className="aspect-[1/1.42]"
                    />

                    <motion.div
                      className="rotate-[-1.5deg] rounded-[20px] border border-[#e3d0bc] bg-[#fff9f1]/95 px-4 py-4 shadow-[0_12px_26px_rgba(43,26,18,0.05)]"
                      initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
                      whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.45 }}
                      transition={{ duration: 0.4 }}
                    >
                      <p
                        className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#a6672b]"
                        style={{ fontFamily: "'Manrope', sans-serif" }}
                      >
                        Why it feels different
                      </p>
                      <p
                        className="mt-2 text-[0.9rem] leading-[1.62] text-[#5b4b40]"
                        style={{ fontFamily: "'Manrope', sans-serif" }}
                      >
                        Familiar flavours, warm pauses, and a place that feels easy to return to.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            {/* reasons */}
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-20">
              {reasons.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    className={[
                      "relative border-t border-[#d8c3af] pt-4",
                      index % 2 === 1 ? "lg:translate-y-8" : "",
                    ].join(" ")}
                    initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 16 }}
                    whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.45 }}
                    transition={{ duration: 0.45, delay: index * 0.06 }}
                    whileHover={reduceMotion ? {} : { x: 6 }}
                  >
                    <div className="flex items-start gap-3">
                      <motion.span
                        className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#dcc7b1] bg-[#fff8ef] text-[#a76024]"
                        whileHover={reduceMotion ? {} : { scale: 1.08, rotate: 8 }}
                        transition={{ duration: 0.25 }}
                      >
                        <Icon className="h-[16px] w-[16px]" />
                      </motion.span>

                      <div>
                        <h3
                          className="text-[1.05rem] font-bold leading-[1.35] text-[#2b1a12]"
                          style={{ fontFamily: "'Manrope', sans-serif" }}
                        >
                          {item.title}
                        </h3>
                        <p
                          className="mt-1 max-w-[30ch] text-[0.94rem] leading-[1.72] text-[#635348]"
                          style={{ fontFamily: "'Manrope', sans-serif" }}
                        >
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JourneySection;