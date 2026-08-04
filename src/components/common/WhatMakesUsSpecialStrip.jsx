import { motion } from "framer-motion";
import {
  Leaf,
  CupSoda,
  Heart,
  Users,
  ChefHat,
  Store,
} from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Finest Ingredients",
    desc: "Handpicked tea leaves & quality ingredients.",
  },
  {
    icon: CupSoda,
    title: "Authentic Taste",
    desc: "Traditional recipes with a unique touch.",
  },
  {
    icon: Heart,
    title: "Made With Love",
    desc: "Every cup is made with passion & care.",
  },
  {
    icon: Users,
    title: "Customer First",
    desc: "Your happiness is our blend.",
  },
  {
    icon: ChefHat,
    title: "Hygienic Kitchen",
    desc: "Clean, safe & hygienic always.",
  },
  {
    icon: Store,
    title: "Growing Together",
    desc: "Building a strong family of franchise partners.",
  },
];

const marqueeItems = [...features, ...features];

export default function WhatMakesUsSpecialStrip({
  reduceMotion = false,
}) {
  return (
    <section className="relative w-full overflow-hidden bg-[#4b2e22]">
      {/* background wash */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,214,170,0.08),transparent_42%)]" />
      <div className="absolute inset-0 opacity-[0.05] mix-blend-screen">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,240,225,0.14) 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>

      <div className="relative z-10 flex min-h-[30vh] flex-col justify-center py-8 sm:py-10 lg:py-12">
        {/* heading */}
        <div className="mb-6 flex items-center justify-center gap-3 px-4 text-center">
          <span className="h-px w-10 bg-[#d7b08a]/35 sm:w-14" />
          <p
            className="text-[1.7rem] leading-none tracking-[-0.02em] text-[#fff2e4] sm:text-[2rem] lg:text-[2.5rem]"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            WHAT MAKES US SPECIAL
          </p>
          <span className="h-px w-10 bg-[#d7b08a]/35 sm:w-14" />
        </div>

        {/* marquee lane */}
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-10 bg-gradient-to-r from-[#4b2e22] to-transparent sm:w-16 lg:w-24" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-10 bg-gradient-to-l from-[#4b2e22] to-transparent sm:w-16 lg:w-24" />

          <motion.div
            className="flex w-max items-stretch"
            animate={
              reduceMotion
                ? {}
                : {
                    x: ["0%", "-50%"],
                  }
            }
            transition={
              reduceMotion
                ? {}
                : {
                    duration: 26,
                    ease: "linear",
                    repeat: Infinity,
                  }
            }
          >
            {marqueeItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={`${item.title}-${index}`}
                  className="flex min-h-[180px] w-[280px] shrink-0 flex-col items-center justify-center border-r border-[#d7b08a]/18 px-6 text-center sm:w-[300px] lg:w-[320px]"
                >
                  <div className="mb-4 text-[#e6c09b]">
                    <Icon className="h-10 w-10 sm:h-11 sm:w-11" strokeWidth={1.8} />
                  </div>

                  <h3
                    className="text-[1.15rem] uppercase leading-[1.05] tracking-[0.02em] text-[#fff2e4] sm:text-[1.25rem]"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="mt-3 max-w-[220px] text-[0.96rem] leading-[1.7] text-[#ead9ca] sm:text-[1rem]"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}