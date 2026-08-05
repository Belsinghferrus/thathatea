import { motion } from "framer-motion";
import { ArrowRight, Store, Users, Coffee, BadgeCheck } from "lucide-react";
import coffee from "@/assets/images/franchise/coffee1.png";


// TEMP PLACEHOLDER — replace with actual assets when provided
const brewbg =
  "https://placehold.co/1920x400/2b180f/2b180f.png";
const teaCup = coffee;

const stats = [
  { icon: Store, value: "50+", label: "Outlets" },
  { icon: Users, value: "1M+", label: "Happy Customers" },
  { icon: Coffee, value: "30+", label: "Cities" },
  { icon: BadgeCheck, value: "32+", label: "Years of Trust" },
];

export default function BrewSuccessSection() {
  return (
    <section className="relative mx-4 w-auto overflow-hidden rounded-[20px] bg-[#2B180F] py-10 sm:mx-6 sm:py-0 sm:h-[20vh] sm:min-h-[300px] lg:mx-10 lg:min-h-[320px]">
      <div className="relative h-full w-full">
        {/* Background Image */}
        <img
          src={brewbg}
          alt="Brew background"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(43,24,15,0.02)_0%,rgba(43,24,15,0.18)_40%,rgba(43,24,15,0.28)_58%,rgba(43,24,15,0.08)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_50%,rgba(255,219,171,0.10),transparent_25%),radial-gradient(circle_at_80%_50%,rgba(255,255,255,0.04),transparent_24%)]" />

        {/* Content Container */}
        <div className="relative z-10 flex h-full w-full items-center">
          <div className="mx-auto flex w-full max-w-[1600px] items-center px-4 sm:px-6 lg:px-10">
            <div className="grid w-full items-center gap-6 sm:grid-cols-[0.6fr_1.4fr] sm:gap-8 lg:grid-cols-[0.5fr_1.5fr] lg:gap-10">
              {/* Left Image Placeholder */}
              <div className="flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  className="flex h-full w-full items-center justify-center"
                >
                  <img
                    src={teaCup}
                    alt="Thatha Tea cup"
                    className="max-h-[240px] w-auto object-cover drop-shadow-2xl sm:max-h-[190px] lg:max-h-[260px]"
                  />
                </motion.div>
              </div>

              {/* Right Content */}
              <div className="flex flex-col justify-center gap-6 border-t border-[#F0D3A1]/25 pt-5 sm:gap-0 sm:border-l sm:border-t-0 sm:pl-7 sm:pt-0 lg:pl-10">
                {/* Heading + CTA */}
                <motion.div
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-startflex flex-col items-center py-4 sm:gap-6"
                >
                  <div>
                    <h2
                      className="max-w-[16ch] text-[1.6rem] leading-[0.95] text-[#FFF7EF] drop-shadow-[0_2px_2px_rgba(0,0,0,0.22)] sm:max-w-none sm:text-[2rem] lg:text-[2.6rem]"
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        letterSpacing: "0.03em",
                      }}
                    >
                      LET&apos;S BREW SUCCESS TOGETHER!
                    </h2>

                    <p className="mt-2 max-w-[28ch] text-[0.85rem] leading-6 text-[#F8EBDD]/92 sm:mt-2 sm:max-w-[26ch] sm:text-[0.95rem] sm:leading-6">
                      Join the Thatha Tea family and be your own boss today.
                    </p>
                  </div>

                  <motion.a
                    href="#contact"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-4 inline-flex shrink-0 items-center gap-2 rounded-[14px] bg-[#F2C785] px-5 py-2.5 text-[0.85rem] font-semibold text-[#2E170B] shadow-[0_12px_22px_rgba(0,0,0,0.14)] transition-all duration-200 hover:bg-[#f0bc6e] sm:mt-0 sm:gap-2 sm:px-5 sm:py-2.5 sm:text-[0.85rem]"
                  >
                    Enquire Now
                    <ArrowRight className="h-4 w-4 sm:h-4 sm:w-4" />
                  </motion.a>
                </motion.div>

                {/* Stats Grid */}
                <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-5 border-t border-[#F0D3A1]/25 pt-5 sm:mt-0 sm:grid-cols-4 sm:gap-x-6 sm:gap-y-0 sm:border-t-0 sm:pt-0">
                  {stats.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: index * 0.05 }}
                        className="relative flex flex-col items-center text-center sm:items-center"
                      >
                        {index !== stats.length - 1 && (
                          <span className="absolute right-[-8px] top-1/2 hidden h-[60px] w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-[#F3D09C]/30 to-transparent sm:block lg:h-[70px]" />
                        )}

                        <div className="mb-1.5 flex h-7 w-7 items-center justify-center text-[#F2C785] sm:mb-2 sm:h-8 sm:w-8">
                          <Icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.8} />
                        </div>

                        <div
                          className="text-[1.7rem] leading-none text-[#F2C785] sm:text-[2rem] lg:text-[2.4rem]"
                          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                        >
                          {item.value}
                        </div>

                        <p
                          className="mt-1 text-[0.6rem] uppercase tracking-[0.16em] text-[#FFF0DB]/88 sm:mt-1 sm:text-[0.65rem]"
                          style={{ fontFamily: "'Manrope', sans-serif" }}
                        >
                          {item.label}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}