import { motion } from "framer-motion";

import barista from "@/assets/images/mascot.png";

export default function TeaQuoteStrip20vh() {
  return (
    <section className="relative h-[20vh] min-h-[180px] max-h-[260px] overflow-visible bg-[#3B2416] text-[#FCE9D2]">
      {/* subtle texture + moving highlight */}
      <motion.div
        className="absolute inset-0"
        initial={{ x: "-40%" }}
        animate={{ x: "140%" }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "linear",
        }}
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,214,170,0.08) 40%, transparent 80%)",
        }}
      />
      <div className="absolute inset-0 opacity-[0.08] mix-blend-screen">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,240,225,0.3) 1px, transparent 0)",
            backgroundSize: "18px 18px",
          }}
        />
      </div>
      {/* <img
        src={spicesTop}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-16 w-auto opacity-80 sm:h-20 lg:h-22"
      /> */}

      <div className="relative mx-auto flex h-full max-w-6xl items-center px-5 sm:px-8 lg:px-10">
        {/* LEFT: escalated image with subtle bob */}
        <motion.div
          initial={{ opacity: 0, x: -24, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          whileHover={{ scale: 1.02, y: -2 }}
          transition={{ duration: 0.55 }}
          className="hidden h-full items-end lg:flex lg:w-[26%]"
        >
          <motion.img
            src={barista}
            alt="Thatha pouring tea"
            className="h-[180%] w-auto max-w-[260px] translate-y-[10%]  object-contain"
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* CENTER: quote + steam + small story line */}
        <div className="flex w-full flex-col items-center text-center lg:w-[48%]">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative max-w-xl"
          >
            {/* animated steam above quote */}
            <svg
              viewBox="0 0 120 60"
              className="mx-auto mb-1 h-7 w-20 text-[#F0C792]/80"
              fill="none"
            >
              <motion.path
                d="M40 50C32 42 33 36 40 30C47 24 47 18 41 12"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                animate={{ pathLength: [0, 1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.path
                d="M60 52C54 44 55 38 61 32C67 26 67 20 61 14"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                animate={{ pathLength: [0, 1, 1] }}
                transition={{ duration: 3.3, repeat: Infinity, delay: 0.2 }}
              />
              <motion.path
                d="M80 50C74 43 75 38 80 33C86 27 86 22 81 16"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                animate={{ pathLength: [0, 1, 1] }}
                transition={{ duration: 3.6, repeat: Infinity, delay: 0.4 }}
              />
            </svg>

            <p className="text-[0.95rem] leading-relaxed text-[#FDEBD7] sm:text-[1.02rem]">
              “Tea is not just a drink, it&apos;s the story of our mornings,
              the pause in our afternoons, and the warmth of our evenings.”
            </p>
            <p
              className="mt-1 text-[1.25rem] text-[#E7B47F]"
              style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 600 }}
            >
              — Thatha Tea
            </p>

            <p className="mt-1 text-[0.72rem] uppercase tracking-[0.18em] text-[#E2C09B]/90">
              From one cup, many conversations.
            </p>
          </motion.div>
        </div>

        {/* RIGHT: interactive drawn badges */}
        <div className="hidden h-full items-center justify-end lg:flex lg:w-[26%]">
          <div className="flex gap-6">
            <InteractiveBadge
              labelTop="Finest"
              labelBottom="Ingredients"
              svg={LeafBadge}
            />
            <InteractiveBadge
              labelTop="Time-honored"
              labelBottom="Recipes"
              svg={CupBadge}
            />
            <InteractiveBadge
              labelTop="Made"
              labelBottom="with Love"
              svg={HeartBadge}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* Interactive badge with hover lift + subtle glow */
function InteractiveBadge({ labelTop, labelBottom, svg: SvgIcon }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className="flex cursor-pointer flex-col items-center text-center"
    >
      <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-[#D9B07E]/55 bg-[#4A2C1A] text-[#F0C792] shadow-[0_8px_18px_rgba(0,0,0,0.35)]">
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,214,170,0.35),transparent_55%)] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
        <div className="relative">
          <SvgIcon />
        </div>
      </div>
      <span className="mt-2 text-[0.78rem] font-medium text-[#FCE9D2]">
        {labelTop}
      </span>
      <span className="text-[0.78rem] font-medium text-[#FCE9D2]">
        {labelBottom}
      </span>
    </motion.div>
  );
}

/* SVG drawings, no icon libs */

function LeafBadge() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none" stroke="currentColor">
      <path
        d="M16 4C10 6 6 11 6 17c0 5 4 9 10 9s10-4 10-9C26 11 22 6 16 4Z"
        strokeWidth="1.6"
      />
      <path
        d="M16 9c-3 2-5 5-5 8 0 2 1 4 3 5"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M16 9c3 2 5 5 5 8 0 2-1 4-3 5"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CupBadge() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none" stroke="currentColor">
      <rect
        x="7"
        y="11"
        width="12"
        height="9"
        rx="2"
        strokeWidth="1.6"
      />
      <path
        d="M19 13h2.5a2.5 2.5 0 0 1 0 5H19"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M9 22h10"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M12 8c-.5 1-.5 1.5 0 2.5M15 8c-.5 1-.5 1.5 0 2.5"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HeartBadge() {
  return (
    <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none" stroke="currentColor">
      <path
        d="M16 25s-6-3.7-9-7.6C5 15.5 5 12 7.3 10.1 9.4 8.4 12.1 9 13.6 11c1.5-2 4.2-2.6 6.3-0.9C22.3 12 23 15.5 21 17.4 18 21.3 16 25 16 25Z"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}