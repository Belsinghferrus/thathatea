import { motion } from "framer-motion";
import { Store, MapPin, Users, CupSoda } from "lucide-react";

const stats = [
  { icon: Store, value: "50+", label: "Outlets" },
  { icon: MapPin, value: "30+", label: "Cities" },
  { icon: Users, value: "1M+", label: "Happy Customers" },
  { icon: CupSoda, value: "33+", label: "Years of Trust" },
];

const marqueeItems = [...stats, ...stats];

export default function StatsMarqueeStrip({ reduceMotion = false }) {
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

      <div className="group relative z-10 overflow-hidden py-8 sm:py-10 lg:py-12">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-10 bg-gradient-to-r from-[#4b2e22] to-transparent sm:w-16 lg:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-10 bg-gradient-to-l from-[#4b2e22] to-transparent sm:w-16 lg:w-24" />

        <motion.div
          className="flex w-max items-stretch [will-change:transform] group-hover:[animation-play-state:paused]"
          animate={reduceMotion ? {} : { x: ["0%", "-50%"] }}
          transition={
            reduceMotion
              ? {}
              : {
                  duration: 22,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "loop",
                }
          }
        >
          {marqueeItems.map((item, index) => {
            const Icon = item.icon;
            const isLastOfPair =
              (index + 1) % stats.length !== 0 || index === marqueeItems.length - 1
                ? true
                : false;

            return (
              <div
                key={`${item.label}-${index}`}
                className="flex shrink-0 items-center gap-4 px-8 sm:gap-5 sm:px-10 lg:gap-6 lg:px-12"
              >
                <div className="flex items-center gap-4 sm:gap-5">
                  <Icon
                    className="h-9 w-9 text-[#e6c09b] sm:h-11 sm:w-11"
                    strokeWidth={1.6}
                  />
                  <div className="flex flex-col leading-none">
                    <span
                      className="text-[2.1rem] tracking-tight text-[#f4dcc0] sm:text-[2.6rem] lg:text-[3rem]"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      {item.value}
                    </span>
                    <span
                      className="mt-1 max-w-[9ch] text-[0.7rem] uppercase leading-tight tracking-[0.14em] text-[#ead9ca] sm:text-[0.78rem]"
                      style={{ fontFamily: "'Manrope', sans-serif" }}
                    >
                      {item.label}
                    </span>
                  </div>
                </div>

                {/* divider (skip after the very last item to avoid a dangling line) */}
                {index !== marqueeItems.length - 1 && (
                  <span className="ml-8 h-10 w-px bg-[#d7b08a]/25 sm:ml-10 sm:h-12 lg:ml-12" />
                )}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}