import { motion } from "framer-motion";

import tornEdge from "@/assets/images/tornEdge.png";
import leftHero from "@/assets/images/contact/teapot.png";
import rightHero from "@/assets/images/contact/tea6.png";
import brownpaper from "@/assets/images/contact/brownpaper.png";

export default function ThankYouIntenseSection() {
  return (
    <section className="relative overflow-hidden bg-[#F7EBDD]">
      {/* torn top border tiled (shorter, no horizontal overflow) */}
      <div className="pointer-events-none absolute left-0 top-10 z-20 flex w-full overflow-hidden">
        {Array.from({ length: 8 }).map((_, index) => (
          <img
            key={index}
            src={tornEdge}
            alt=""
            aria-hidden="true"
            className="h-[42px] w-full max-w-[12.5%] object-cover"
          />
        ))}
      </div>

      {/* brown background with paper texture */}
      <div className="relative mt-[48px] min-h-[380px] bg-[#EDCD9F] text-[#F8E4C7] sm:min-h-[420px] lg:min-h-[460px]">
        {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(255,214,170,0.12),transparent_34%),radial-gradient(circle_at_8%_80%,rgba(255,214,170,0.08),transparent_24%),radial-gradient(circle_at_92%_78%,rgba(255,214,170,0.08),transparent_24%)]" /> */}
        <div className="absolute inset-0 opacity-[50] mix-blend-screen">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `url(${brownpaper})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>

        <div className="relative mx-auto flex h-full max-w-7xl items-center px-2 py-8 sm:px-8 sm:py-10 lg:px-4 lg:py-8">
          <div className="grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-[1.6fr_1.6fr_1.8fr]">
            {/* LEFT MAIN IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -18, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative flex justify-center lg:justify-start"
            >
              <motion.img
                src={leftHero}
                alt="Teapot and tea glass"
                className="h-auto w-[98%] max-w-[420px] object-contain sm:w-[70%] lg:w-[100%]"
                animate={{ y: [0, -4, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* CENTER CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto flex max-w-xl flex-col mt-10 items-center text-center"
            >
              <p
                className="text-[1.3rem] uppercase tracking-[0.2em] text-[#4B2E1F] sm:text-[1.6rem] lg:text-[1.8rem]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                THANK YOU FOR REACHING OUT!
              </p>

              <p
                className="mt-1 text-[2.3rem] leading-[0.96] text-[#4B2E1F] sm:text-[2.8rem] lg:text-[3.2rem]"
                style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700 }}
              >
                We Appreciate You
              </p>

              <p className="mt-3 max-w-[30ch] text-[0.95rem] leading-7 text-[#4B2E1F] sm:text-[1rem]">
                At Thatha Tea, every message matters. We&apos;ll get back to you soon —
                until then, sit back and savour your perfect cup.
              </p>

              {/* TRUST SEAL */}
              <div className="mt-4 flex justify-center sm:mt-5">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative flex h-24 w-24 items-center justify-center rounded-full border border-[#E7B47F]/55 bg-[#4B2E1F] text-center shadow-[0_0_0_1px_rgba(255,220,170,0.08)]"
                >
                  <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,214,170,0.45),transparent_60%)] opacity-80" />
                  <div className="relative flex h-20 w-20 flex-col items-center justify-center rounded-full border border-[#E7B47F]/70">
                    <p className="text-[0.55rem] uppercase tracking-[0.16em] text-[#F3D8B0]">
                      Tradition
                    </p>
                    <p
                      className="mt-1 text-[1.15rem] leading-none text-[#F8E4C7]"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      TRUST
                    </p>
                    <p className="mt-1 text-[0.55rem] uppercase tracking-[0.16em] text-[#F3D8B0]">
                      Always
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* RIGHT MAIN IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 18, scale: 0.96 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="relative flex justify-center lg:justify-end"
            >
              <motion.img
                src={rightHero}
                alt="Thatha Tea cup"
                className=" w-[100%] max-w-[640px] object-contain sm:w-[96%] lg:w-[100%]"
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 5.4,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
              />

              {/* gentle steam SVG on top-right cup */}
              <svg
                viewBox="0 0 120 160"
                className="pointer-events-none absolute right-[8%] top-[-6%] h-20 w-10 text-[#F3D8B0]/80 sm:h-24"
                fill="none"
              >
                <motion.path
                  d="M30 140C20 128 22 118 30 110C38 102 39 92 32 84"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  animate={{ pathLength: [0, 1, 1] }}
                  transition={{ duration: 3.2, repeat: Infinity }}
                />
                <motion.path
                  d="M52 138C44 126 45 116 52 108C59 100 60 90 54 82"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  animate={{ pathLength: [0, 1, 1] }}
                  transition={{ duration: 3.5, repeat: Infinity, delay: 0.2 }}
                />
              </svg>
            </motion.div>
          </div>
        </div>
       
      </div>
      <div className="pointer-events-none absolute left-0 bottom-0  z-10 flex w-full overflow-visible">
        {Array.from({ length: 8 }).map((_, index) => (
          <img
            key={index}
            src={tornEdge}
            alt=""
            aria-hidden="true"
            className="h-[22px] w-full max-w-[12.5%] object-cover"
          />
        ))}
      </div>
    </section>
  );
}