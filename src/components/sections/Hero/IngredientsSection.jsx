import { motion, useReducedMotion } from "framer-motion";
import { Leaf, Droplet, Sparkles } from "lucide-react";

import topEdge from "@/assets/images/beans-toper.webp";
import coffeSplash from "@/assets/images/coffee-splash.png";
import cakeProjected from "@/assets/images/cake.png";

function IngredientsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#f6eedf] text-[#2b1a12]">
      <img
        src={topEdge}
        alt=""
        aria-hidden="true"
        width={1600}
        height={200}
        loading="lazy"
        className="pointer-events-none absolute -top-1 left-0 w-full select-none object-cover"
      />

      <div className="relative mx-auto max-w-[1200px] px-5 pb-24 pt-28 sm:px-8 sm:pb-28 sm:pt-32 lg:px-14 lg:pb-32 lg:pt-36">

        <motion.div
          className="relative mt-14 rounded-[28px] bg-[#3a2418] px-8 py-10 sm:mt-16 sm:px-10 sm:py-12 lg:px-16 lg:py-24"
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
        >
          <div className="absolute inset-0 overflow-hidden rounded-[28px]">
            <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle,rgba(255,255,255,0.4)_1px,transparent_1px)] [background-size:20px_20px]" />
          </div>

          <div className="relative max-w-[62%] sm:max-w-[58%] lg:max-w-[54%]">
            <p
              className="text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#d9a05c]"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              What matters most
            </p>

            <p
              className="mt-4 text-[1.5rem] italic leading-[1.3] text-[#f6eedf] sm:text-[2rem] lg:text-[2.6rem]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Crafted In-House. Finished to Perfection.
            </p>

            <div className="mt-6 hidden h-px w-20 bg-[#c98a46] sm:block" />

            <p
              className="mt-5 hidden max-w-[40ch] text-[0.94rem] leading-[1.75] text-[#d9c7b6] sm:block"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Every batch is prepared with care, from oven to plate, so the
              taste stays honest and the comfort stays constant.
            </p>
          </div>

          <motion.img
            src={cakeProjected}
            alt="Freshly baked cheesecake slice with strawberry glaze"
            width={900}
            height={900}
            loading="lazy"
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 24, x: 16 }}
            whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="pointer-events-none absolute -bottom-8 right-[-1.25rem] select-none drop-shadow-[0_20px_30px_rgba(0,0,0,0.35)] sm:-bottom-10 sm:right-[-1.5rem] lg:-bottom-14 lg:right-[-2rem]"
  style={{
    width: "clamp(180px, 26vw, 540px)", // Dynamically scales width
    height: "clamp(160px, 26vw, 540px)", // Dynamically scales height
  }}
          />
        </motion.div>

        <motion.div
          className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-[#d8c3af] pt-6 lg:mt-20"
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
          whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45 }}
        >
          <div className="flex items-center gap-2 text-[#5d4d42]">
            <Leaf className="h-[16px] w-[16px] text-[#a76024]" />
            <span
              className="text-[0.92rem] font-semibold"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              100% quality ingredients
            </span>
          </div>

          <div className="flex items-center gap-2 text-[#5d4d42]">
            <Droplet className="h-[16px] w-[16px] text-[#a76024]" />
            <span
              className="text-[0.92rem] font-semibold"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Freshly brewed daily
            </span>
          </div>

          <div className="flex items-center gap-2 text-[#5d4d42]">
            <Sparkles className="h-[16px] w-[16px] text-[#a76024]" />
            <span
              className="text-[0.92rem] font-semibold"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Made with love & passion
            </span>
          </div>
        </motion.div>
      </div>

    
    </section>
  );
}

export default IngredientsSection;