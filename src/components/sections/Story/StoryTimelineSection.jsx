import { motion } from "framer-motion";
import {
  Store,
  CupSoda,
  Users,
  MapPinned,
  CookingPot,
} from "lucide-react";

import paperCardBg from "@/assets/images/story/papercard.jpg";
import spicePng from "@/assets/images/story/coffee-abstract.png"; // decorative outside PNG
import muffin from "@/assets/images/story/muffin.png"

const milestones = [
  {
    year: "1991",
    title: "Humble Beginning",
    text: "Started as a small tea stall with a dream, a kettle, and a deep love for serving people.",
    icon: CookingPot,
    accent: "#b56322",
    rotate: "-rotate-2",
    shift: "lg:translate-y-8",
  },
  {
    year: "2015",
    title: "First Outlet",
    text: "Opened our first official outlet and turned a neighbourhood favourite into a growing brand.",
    icon: Store,
    accent: "#8a5a32",
    rotate: "rotate-1",
    shift: "lg:-translate-y-6",
  },
  {
    year: "2019",
    title: "Signature Flavours",
    text: "Expanded the menu with house blends, comforting snacks, and more reasons to stay a little longer.",
    icon: CupSoda,
    accent: "#6e8b3d",
    rotate: "-rotate-1",
    shift: "lg:translate-y-10",
  },
  {
    year: "2022",
    title: "Growing Together",
    text: "Built a strong tea-loving community and crossed new milestones with our team and customers.",
    icon: Users,
    accent: "#9a4f2d",
    rotate: "rotate-2",
    shift: "lg:-translate-y-4",
  },
  {
    year: "2024+",
    title: "More Smiles Brewing",
    text: "With 50+ outlets and counting, the journey keeps expanding one cup, one city, and one story at a time.",
    icon: MapPinned,
    accent: "#b56322",
    rotate: "-rotate-1",
    shift: "lg:translate-y-6",
  },
];

export default function StoryTimelineSection({ reduceMotion = false }) {
  return (
    <section className="relative overflow-hidden bg-[#fcf4ea] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
      <div className="absolute inset-0 opacity-[0.05] mix-blend-multiply">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(120,72,38,0.22) 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>

      {/* Decorative PNG outside */}
      <img
        src={muffin}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-8 left-[-10px] z-10 hidden w-[220px] rotate-[-10deg] opacity-90 lg:block"
      />

      <img
        src={spicePng}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10px] top-5 z-10 hidden  w-[200px]  rotate-[18deg] opacity-50 lg:block"
        />

      <div className="relative z-20 mx-auto max-w-[1450px]">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="max-w-[620px]"
        >
          <p
            className="text-[0.82rem] font-bold uppercase tracking-[0.24em] text-[#ab6230]"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            Our journey
          </p>

          <h2
            className="mt-4 text-[2.8rem] leading-[0.92] tracking-[-0.02em] text-[#25140d] sm:text-[3.7rem] lg:text-[5rem]"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            FROM ONE KETTLE
            <br />
            TO MANY CITIES.
          </h2>

          <p
            className="mt-5 max-w-[560px] text-[1rem] leading-[1.85] text-[#4e3a2f] sm:text-[1.06rem]"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            Every milestone shaped the brand we are today — not in straight lines,
            but through people, places, flavour, and the memories built around each cup.
          </p>
        </motion.div>

        {/* Desktop */}
        <div className="relative mt-16 hidden lg:block">
          <svg
            viewBox="0 0 1200 240"
            className="absolute left-0 top-[90px] h-[220px] w-full"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M30 140C130 40 250 40 340 130C430 220 540 220 630 125C720 30 830 35 920 120C995 190 1080 190 1170 100"
              stroke="#d8b89b"
              strokeWidth="2.5"
              strokeDasharray="7 10"
              strokeLinecap="round"
            />
          </svg>

          <div className="grid grid-cols-5 gap-6">
            {milestones.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.year}
                  initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className={`relative ${item.shift}`}
                >
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-[#d9c1aa] bg-[#fff8f0] shadow-[0_8px_18px_rgba(76,45,24,0.08)]">
                    <span
                      className="block h-3.5 w-3.5 rounded-full"
                      style={{ backgroundColor: item.accent }}
                    />
                  </div>

                  <div
                    className={`mt-6 rounded-[28px] border border-[#ead8c7] p-5 shadow-[0_20px_40px_rgba(82,49,27,0.08)] ${item.rotate}`}
                    style={{
                      backgroundImage: `url(${paperCardBg})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      boxShadow:
                        "0 20px 40px rgba(82,49,27,0.08), inset 0 1px 0 rgba(255,255,255,0.35)",
                    }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p
                          className="text-[2rem] leading-none text-[#b56322]"
                          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                        >
                          {item.year}
                        </p>

                        <h3
                          className="mt-3 text-[1.8rem] leading-[1.05] text-[#5e3118]"
                          style={{ fontFamily: "'Cardamom Script', cursive" }}
                        >
                          {item.title}
                        </h3>
                      </div>

                      <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
                        style={{
                          backgroundColor: `${item.accent}18`,
                          color: item.accent,
                        }}
                      >
                        <Icon className="h-6 w-6" strokeWidth={2} />
                      </div>
                    </div>

                    <p
                      className="mt-4 text-[0.98rem] leading-[1.8] text-[#5b4639]"
                      style={{ fontFamily: "'Manrope', sans-serif" }}
                    >
                      {item.text}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Mobile */}
        <div className="relative mt-12 lg:hidden">
          <div className="absolute left-[18px] top-0 h-full w-px border-l-2 border-dashed border-[#d8b89b]" />

          <div className="space-y-6">
            {milestones.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.year}
                  initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-[5px] top-5 flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#f3dfcf] bg-[#fff8f0]">
                    <span
                      className="block h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: item.accent }}
                    />
                  </div>

                  <div
                    className="rounded-[24px] border border-[#ead8c7] p-5 shadow-[0_16px_32px_rgba(82,49,27,0.07)]"
                    style={{
                      backgroundImage: `url(${paperCardBg})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      boxShadow:
                        "0 16px 32px rgba(82,49,27,0.07), inset 0 1px 0 rgba(255,255,255,0.35)",
                    }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p
                          className="text-[1.8rem] leading-none text-[#b56322]"
                          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                        >
                          {item.year}
                        </p>

                        <h3
                          className="mt-2 text-[1.55rem] leading-[1.05] text-[#5e3118]"
                          style={{ fontFamily: "'Cardamom Script', cursive" }}
                        >
                          {item.title}
                        </h3>
                      </div>

                      <div
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl"
                        style={{
                          backgroundColor: `${item.accent}18`,
                          color: item.accent,
                        }}
                      >
                        <Icon className="h-5 w-5" strokeWidth={2} />
                      </div>
                    </div>

                    <p
                      className="mt-3 text-[0.95rem] leading-[1.75] text-[#5b4639]"
                      style={{ fontFamily: "'Manrope', sans-serif" }}
                    >
                      {item.text}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}