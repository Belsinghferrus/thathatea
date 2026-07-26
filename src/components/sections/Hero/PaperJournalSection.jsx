import { motion } from "framer-motion";
import paperBg from "@/assets/images/paper-bg.webp";
import tornEdge from "@/assets/images/tornedge.png";
import journalPolaroid from "@/assets/images/ingredient.png";

function PaperclipIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 40 64"
      aria-hidden="true"
      className={className}
      fill="none"
    >
      <path
        d="M20 6v38c0 6-5 10-10 10S0 50 0 44V14"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M20 6c6 0 10 4 10 10v28c0 3-2 5-5 5s-5-2-5-5V18"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function StitchDivider() {
  return (
    <svg
      viewBox="0 0 200 12"
      className="w-full text-[#b8523f]/50"
      aria-hidden="true"
    >
      <line
        x1="0"
        y1="6"
        x2="200"
        y2="6"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="6 6"
      />
    </svg>
  );
}

function WashiTape({ className = "", rotate = "-rotate-6" }) {
  return (
    <div
      aria-hidden="true"
      className={`absolute h-7 w-24 bg-[#c98a46]/40 shadow-sm ${rotate} ${className}`}
      style={{
        clipPath:
          "polygon(4% 0%, 96% 0%, 100% 50%, 96% 100%, 4% 100%, 0% 50%)",
      }}
    />
  );
}

function TornEdge({ top = 5, height = 72 }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 z-20"
      style={{
        top: `${top}px`,
        height: `${height}px`,
        backgroundImage: `url(${tornEdge})`,
        backgroundRepeat: "repeat-x",
        backgroundSize: "auto 100%",
        backgroundPosition: "left top",
      }}
    />
  );
}

export default function PaperJournalSection({ reduceMotion = false }) {
  const ingredients = [
    { label: "Fresh Milk", note: "sourced daily" },
    { label: "Whole Spices", note: "hand ground" },
    { label: "Farm Butter", note: "no shortcuts" },
    { label: "Real Cocoa", note: "since day one" },
  ];

  const revealUp = reduceMotion
    ? { opacity: 1 }
    : { opacity: 0, y: 24 };

  const revealInView = reduceMotion
    ? { opacity: 1 }
    : { opacity: 1, y: 0 };

  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-[114px] text-[#3b2a1a] sm:px-8 sm:py-12 lg:pb-28 lg:pt-[120px]">
      {/* top seam matching previous section */}
      <div
        aria-hidden="true"x
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[20px] bg-[#f6eedf]"
      />

      {/* torn edge sits directly under seam */}
      <TornEdge top={5} height={72} />

      {/* paper background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundColor: "#dcc094",
          backgroundImage: `url(${paperBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* optional subtle fade under torn edge to blend into paper bg */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[77px] z-[1] h-10 bg-gradient-to-b from-[#dcc094]/70 to-transparent"
      />

      <div className="relative z-10 mx-auto grid max-w-[1100px] gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <motion.div
          initial={revealUp}
          whileInView={revealInView}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          className="relative rotate-[-1deg] rounded-sm border border-[#d8c4a0] bg-[#fbf6ec] px-8 py-10 shadow-[0_14px_28px_rgba(59,42,26,0.12)]"
        >
          <WashiTape className="-top-4 left-10" rotate="-rotate-6" />
          <WashiTape className="-top-4 right-10" rotate="rotate-6" />

          <p
            className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#b8523f]"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            A Page From Our Journal
          </p>

          <h2
            className="mt-3 text-[2rem] leading-tight text-[#3b2a1a] sm:text-[2.4rem]"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            Some recipes just aren't meant to change.
          </h2>

          <div className="mt-5">
            <StitchDivider />
          </div>

          <p
            className="mt-5 text-[1rem] leading-[1.75] text-[#5b4433]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Every cup, every bite, made the way it always has been — slow,
            careful, and a little stubborn about shortcuts. That&apos;s the part
            of Thatha Tea we never wanted to modernize.
          </p>

          <p
            className="mt-4 text-right text-[1.2rem] text-[#8b5a2b]"
            style={{ fontFamily: "'Caveat', cursive" }}
          >
            — from the kitchen, since 1991
          </p>
        </motion.div>

        <div className="relative flex flex-col gap-8">
          <motion.div
            initial={revealUp}
            whileInView={revealInView}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rotate-[1.5deg] rounded-sm border border-[#d8c4a0] bg-[#fbf6ec] px-6 py-6 shadow-[0_12px_24px_rgba(59,42,26,0.1)]"
          >
            <PaperclipIcon className="absolute -top-6 left-6 h-10 w-6 rotate-[8deg] text-[#8b8378]" />

            <p
              className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#b8523f]"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Ingredients We Swear By
            </p>

            <ul className="mt-4 flex flex-col gap-3">
              {ingredients.map((item) => (
                <li
                  key={item.label}
                  className="flex items-baseline justify-between gap-4 border-b border-dashed border-[#d8c4a0] pb-2 text-[1rem]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  <span className="font-semibold text-[#3b2a1a]">
                    {item.label}
                  </span>
                  <span className="shrink-0 text-[0.85rem] italic text-[#8b735f]">
                    {item.note}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 24, rotate: -4 }}
            whileInView={
              reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, rotate: -3 }
            }
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto w-[220px] rotate-[-3deg] bg-white p-3 pb-8 shadow-[0_16px_28px_rgba(59,42,26,0.18)] sm:w-[240px]"
          >
            <WashiTape
              className="-top-4 left-1/2 -translate-x-1/2"
              rotate="rotate-2"
            />

            <img
              src={journalPolaroid}
              alt="Handwritten recipe card and warm cup of tea on a wooden table"
              width={480}
              height={480}
              loading="lazy"
              className="aspect-square w-full object-cover"
            />

            <p
              className="mt-3 text-center text-[1.1rem] text-[#5b4433]"
              style={{ fontFamily: "'Caveat', cursive" }}
            >
              still our favorite blend
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}