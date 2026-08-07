import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import map from "@/assets/images/contact/map.png";
import map1 from "@/assets/images/contact/map2.png";

import teashop from "@/assets/images/contact/cafe4.png";
import teacup from "@/assets/images/contact/tea5.png";

const pinItems = [
  { top: "22%", right: "62%" },
  { top: "22%", left: "62%" },
  { top: "10%", left: "48%" },
  { top: "68%", left: "46%" },
  { top: "54%", right: "28%" },
];

export default function TeaJourneyMapSection() {
  return (
    <section className="relative h-[90vh] min-h-[620px] w-full overflow-hidden bg-[#FBF1E5] text-[#4B2A16]">
      {/* background */}
      <img
        src={map}
        alt="Bangalore map"
  className="absolute lg:left-1/2 sm:left-1  top-0 h-full w-[100%] sm:-translate-x-1/2 lg:-translate-x-1/3 object-cover opacity-70 sm:w-[720%] lg:w-[64%]"
      />

      {/* fade edges
          - mobile: vertical fade (top/bottom)
          - sm+ (tablet/desktop): your original left→right fade
      */}
      <div className="absolute inset-0">
        {/* mobile vertical fade */}
        <div className="h-full w-full bg-[linear-gradient(to_bottom,rgba(251,241,229,0.98)_0%,rgba(251,241,229,0.88)_10%,rgba(251,241,229,0.12)_30%,rgba(251,241,229,0.12)_70%,rgba(251,241,229,0.88)_90%,rgba(251,241,229,0.98)_100%)] sm:hidden" />
        {/* tablet/desktop horizontal fade (unchanged) */}
        <div className="hidden h-full w-full bg-[linear-gradient(90deg,rgba(251,241,229,0.98)_0%,rgba(251,241,229,0.88)_14%,rgba(251,241,229,0.10)_42%,rgba(251,241,229,0.10)_58%,rgba(251,241,229,0.88)_86%,rgba(251,241,229,0.98)_100%)] sm:block" />
      </div>

      <div className="relative mx-auto flex h-full max-w-[1600px] items-center px-5 sm:px-8 lg:px-10">
        <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* LEFT COPY */}
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 max-w-[560px]"
          >
            <h2
              className="max-w-[10ch] text-[2.6rem] leading-[0.9] tracking-tight text-[#4B2415] sm:text-[4rem] lg:text-[5.2rem]"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                letterSpacing: "0.01em",
              }}
            >
              READY TO START YOUR TEA JOURNEY?
            </h2>

            <p className="mt-5 max-w-[24ch] text-[0.95rem] leading-8 text-[#5E4637] sm:text-[1.05rem]">
              Join India&apos;s most loved tea café franchise and build a
              successful business with a brand that people trust.
            </p>

            <motion.a
              href="#franchise"
              whileHover={{ y: -3 }}
              className="mt-7 inline-flex items-center gap-3 rounded-[14px] bg-[#8D4B17] px-6 py-3.5 text-[0.82rem] font-semibold uppercase tracking-[0.12em] text-[#FFF6EC] shadow-[0_14px_30px_rgba(83,46,27,0.18)] transition-all hover:bg-[#9A5620] sm:px-7 sm:py-4"
            >
              Know More About Franchise
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </motion.div>

          {/* RIGHT VISUAL */}
          <div className="relative h-[420px] w-full lg:h-full">
            {/* tea shop png on left */}
            <motion.img
              initial={{ opacity: 0, x: -16, y: 12 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              src={teashop}
              alt="Tea shop"
              className="absolute left-[10%] top-[6%] z-20 h-auto w-[40%] max-w-[320px] sm:w-[30%] lg:w-[28%]"
            />

            {/* pins */}
            {pinItems.map((pin, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.85, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.12 + index * 0.08 }}
                className="absolute z-20 -translate-x-1/2"
                style={{ top: pin.top, left: pin.left }}
              >
                {/* slightly smaller on mobile, original on sm+ */}
                <div className="relative h-[92px] w-[92px] sm:h-[210px] sm:w-[210px]">
                  <img
                    src={map1}
                    alt="Thatha Tea locator"
                    className="h-full w-full object-contain"
                  />
                </div>
              </motion.div>
            ))}

            {/* tea cup bottom-right */}
            <motion.img
              initial={{ opacity: 0, x: 20, y: 18, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
              transition={{ duration: 0.75, delay: 0.16 }}
              src={teacup}
              alt="Tea cup"
              className="absolute bottom-[-30%] right-[-10%] z-10 h-auto w-[55%] max-w-[320px] sm:w-[64%] lg:w-[62%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}