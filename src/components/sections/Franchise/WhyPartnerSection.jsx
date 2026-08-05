"use client";

import { motion } from "framer-motion";
import { Coffee, ChartNoAxesCombined, Leaf, Headset, Megaphone } from "lucide-react";

const benefits = [
  {
    icon: Coffee,
    title: "Established Brand",
    text: "Strong brand recall with thousands of happy customers.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Proven Business Model",
    text: "Low risk, high returns with a tested and successful business model.",
  },
  {
    icon: Leaf,
    title: "Quality Products",
    text: "Premium tea, handpicked ingredients & consistent taste.",
  },
  {
    icon: Headset,
    title: "End to End Support",
    text: "From site selection to operations — we are with you at every step.",
  },
  {
    icon: Megaphone,
    title: "Marketing Support",
    text: "Brand promotions, marketing strategies & digital support.",
  },
];

export default function WhyPartnerSection() {
  return (
    <section className="relative overflow-hidden bg-[#F7ECDC] py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1800&q=80"
          alt=""
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-[#F7ECDC]/88" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,138,61,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(139,94,60,0.10),transparent_38%)]" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-[920px] text-center"
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#A8754A]/25" />
            <p
              className="text-[0.72rem] uppercase tracking-[0.26em] text-[#8B5E3C]"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Why partner with Thatha Tea?
            </p>
            <span className="h-px w-8 bg-[#A8754A]/25" />
          </div>

          <h2
            className="text-[2.5rem] leading-[0.95] text-[#2C1A11] sm:text-[3.3rem] lg:text-[4.4rem]"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.03em" }}
          >
            WHY PARTNER WITH
            <span className="block text-[#C88A3D]">THATHA TEA?</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid gap-10 md:grid-cols-2 xl:grid-cols-5 xl:gap-6">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="relative text-center"
              >
                <div className="mb-5 flex items-center justify-center">
                  <div
                    className={`flex h-24 w-24 items-center justify-center rounded-full shadow-[0_10px_28px_rgba(76,45,24,0.08)] ${
                      index % 2 === 0 ? "bg-[#E6E8C9]" : "bg-[#F0DDC6]"
                    }`}
                  >
                    <Icon className="h-10 w-10 text-[#5C3B25]" strokeWidth={1.65} />
                  </div>
                </div>

                <h3
                  className="text-[1.1rem] leading-none text-[#2C1A11] sm:text-[1.2rem]"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                >
                  {item.title}
                </h3>

                <p className="mx-auto mt-3 max-w-[22ch] text-[0.96rem] leading-7 text-[#5B483C]">
                  {item.text}
                </p>

                {index !== benefits.length - 1 && (
                  <div className="absolute right-[-14px] top-10 hidden h-[120px] w-px bg-[#C88A3D]/18 xl:block" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}