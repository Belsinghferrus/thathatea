import { motion } from "framer-motion";
import { ArrowRight, Leaf, Users, CupSoda, Coffee } from "lucide-react";

import teashop from "@/assets/images/contact/cafe4.png";
import teacup from "@/assets/images/contact/tea3.png";
import mascot from "@/assets/images/mascot.png";

const teaShopImage = teashop;
const teaImage = teacup;
const logoImage = mascot;

const featureItems = [
  { icon: Leaf, label: "Quality ingredients" },
  { icon: CupSoda, label: "Brewed with care" },
  { icon: Coffee, label: "Timeless tradition" },
  { icon: Users, label: "Made for everyone" },
];

export default function ContactHeroIllustratedSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#FBF1E5] text-[#4B2A16]">
      {/* Ambient radial tint — no background image */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_16%,rgba(181,103,49,0.14),transparent_16%),radial-gradient(circle_at_78%_20%,rgba(181,103,49,0.10),transparent_14%),radial-gradient(circle_at_86%_86%,rgba(181,103,49,0.14),transparent_16%)]" />

    
      <div className="relative z-10 mx-auto grid min-h-screen max-w-[1600px] grid-cols-1 gap-8 px-5 py-6 sm:px-8 sm:py-8 lg:grid-cols-[0.92fr_1.08fr] lg:grid-rows-[auto_auto_auto] lg:gap-6 lg:px-10 lg:py-10">
        {/* 1. HEAD — logo + headline + paragraph */}
        <div className="order-1 flex flex-col justify-center py-8 lg:order-none lg:col-start-1 lg:row-start-1 lg:py-4">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-6 flex items-center gap-4"
          >
            {/* <img
              src={logoImage}
              alt="Thatha Tea"
              className="h-auto w-[130px] sm:w-[160px] lg:w-[190px]"
            /> */}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="max-w-[10ch] text-[2.6rem] leading-[0.95] tracking-tight text-[#3D2413] sm:text-[3.6rem] lg:text-[5rem]"
            style={{ fontFamily: "'Baloo 2', sans-serif", fontWeight: 800 }}
          >
            Let&apos;s Brew
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="relative -mt-1 flex max-w-[12ch] items-center gap-3 text-[2.2rem] leading-[1] text-[#C46F2C] sm:text-[3rem] lg:text-[4.4rem]"
            style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700 }}
          >
            Something Great
            <svg
              viewBox="0 0 24 24"
              className="mb-2 h-5 w-5 shrink-0 self-end text-[#C46F2C] sm:h-7 sm:w-7 lg:h-8 lg:w-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
            >
              <path d="M12 21s-7.2-4.4-9.8-9C.5 8.4 2 4.8 5.6 4.1c2-.4 3.9.6 5 2.2 1.1-1.6 3-2.6 5-2.2 3.6.7 5.1 4.3 3.4 7.9-2.6 4.6-9.8 9-9.8 9z" />
            </svg>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-5 max-w-[40ch] text-[0.9rem] leading-7 text-[#5E4637] sm:mt-6 sm:text-[1.02rem]"
          >
            We&apos;d love to hear from you! Whether it&apos;s a question,
            feedback, partnership or just a hello –{" "}
            <span className="font-semibold text-[#C46F2C]">
              our door (and kettle) is always open.
            </span>
          </motion.p>
        </div>

        {/* 2. IMAGES — shop + elevated teacup, spans both left rows on desktop */}
        <div className="order-2 relative flex min-h-[320px] items-center justify-center py-4 sm:min-h-[520px] lg:order-none lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:min-h-[840px] lg:py-0">
          <motion.img
            initial={{ opacity: 0, x: 40, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.12 }}
            src={teaShopImage}
            alt="Thatha Tea shop"
            className="absolute right-0 top-0 h-auto w-full max-w-none sm:w-[92%] lg:mt-18 lg:w-full"
          />

          {/* Tea cup — elevated, centered, touching the shop counter */}
          <motion.img
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.22 }}
            src={teaImage}
            alt="Thatha Tea cup with spices and tea leaves"
            className="absolute bottom-[2%] sm:left-0 lg:left-1/8 z-20 h-auto w-[78%] -translate-x-1/4 sm:bottom-[6%] sm:w-[72%] lg:bottom-[6%] lg:w-[86%]"
          />


        

          {/* Bottom note card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32 }}
            className="absolute left-[4%] top-[6%] z-30 max-w-[160px] rounded-[18px] border border-[#C79B73]/30 bg-[#F9EDE0]/92 px-3 py-2 shadow-[0_12px_28px_rgba(83,46,27,0.1)] backdrop-blur-sm sm:max-w-[220px] sm:rounded-[22px] sm:px-4 sm:py-3 sm:top-[8%]"
          >
            <p
              className="text-[0.6rem] uppercase tracking-[0.1em] text-[#7A4A2A] sm:text-[0.72rem]"
              style={{ fontFamily: "'Baloo 2', sans-serif", fontWeight: 700 }}
            >
              Brewed with care
            </p>
          </motion.div>

          <div className="pointer-events-none absolute bottom-8 right-5 z-10 hidden h-20 w-20 rounded-full border border-[#B57A49]/25 lg:block" />
          <div className="pointer-events-none absolute bottom-[10%] left-[10%] z-10 hidden h-28 w-28 rounded-full border border-[#B57A49]/18 lg:block" />
        </div>

        {/* 3. FEATURE ICONS — Quality ingredients, Brewed with care, ... */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.22 }}
          className="order-3 grid grid-cols-4 gap-x-3 gap-y-5 py-4 lg:order-none lg:col-start-1 lg:row-start-2 lg:max-w-[520px] lg:gap-x-5 lg:py-0"
        >
          {featureItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C79B73]/30 bg-[#F3E2CC] text-[#6E4527] shadow-[0_8px_18px_rgba(83,46,27,0.08)] sm:h-16 sm:w-16">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.8} />
                </div>
                <p className="mt-2 max-w-[9ch] text-[0.55rem] font-bold uppercase leading-tight tracking-[0.06em] text-[#5E4637] sm:mt-2.5 sm:text-[0.62rem] sm:tracking-[0.08em]">
                  {item.label}
                </p>
              </div>
            );
          })}
        </motion.div>

        {/* 4. CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.28 }}
          className="order-4 flex items-center gap-3 py-4 lg:order-none lg:col-start-1 lg:row-start-3 lg:py-0"
        >
          <a
            href="#contact-form"
            className="inline-flex items-center gap-3 rounded-full bg-[#3D2413] px-6 py-3.5 text-[0.75rem] font-bold uppercase tracking-[0.1em] text-[#FFF7EF] transition-all hover:-translate-y-1 hover:bg-[#4c2e18] sm:px-7 sm:py-4 sm:text-[0.8rem] sm:tracking-[0.12em]"
          >
            Get in Touch
            <ArrowRight className="h-4 w-4" />
          </a>
          <svg
            viewBox="0 0 80 20"
            className="hidden h-5 w-16 text-[#C79B73] sm:block"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M2 10c6-8 12 8 18 0s12 8 18 0 12 8 18 0 12 8 18 0" strokeLinecap="round" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}