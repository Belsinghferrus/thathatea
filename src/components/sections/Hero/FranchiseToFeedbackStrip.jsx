import { motion } from "framer-motion";

function CenterEmblem() {
  return (
    <div className="relative flex items-center justify-center">
      <span className="absolute h-[54px] w-[54px] rounded-full border border-[#d7bda4]/20 bg-[#4a2d1f]/80 shadow-[0_8px_18px_rgba(0,0,0,0.18)]" />
      <span className="relative h-2 w-2 rounded-full bg-[#e7c7a6]" />
    </div>
  );
}

export default function FranchiseToFeedbackBridge({ reduceMotion = false }) {
  return (
    <section className="relative -mt-2 overflow-hidden bg-[#3a2418] text-[#f6e8d7]">
      {/* warm radial lift */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,236,214,0.14)_0%,rgba(255,236,214,0.06)_24%,transparent_62%)]" />

      {/* subtle grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-screen"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "220px 220px",
        }}
      />

      {/* top edge */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/8" />

      <div className="relative mx-auto max-w-[1320px] px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center text-center"
        >
          {/* top tiny label */}
          <p
            className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#d8b89a]"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            From opportunity to proof
          </p>

          {/* chapter lockup */}
          <div className="mt-5 flex w-full items-center justify-center gap-4 sm:gap-6 lg:gap-8">
            <motion.span
              initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
              whileInView={reduceMotion ? {} : { scaleX: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="h-px w-[18%] origin-right bg-[linear-gradient(90deg,transparent,rgba(231,199,166,0.75))] sm:w-[22%] lg:w-[28%]"
            />

            <CenterEmblem />

            <motion.span
              initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
              whileInView={reduceMotion ? {} : { scaleX: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.7 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="h-px w-[18%] origin-left bg-[linear-gradient(90deg,rgba(231,199,166,0.75),transparent)] sm:w-[22%] lg:w-[28%]"
            />
          </div>

          <motion.h3
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-6 text-[2.2rem] leading-[0.92] tracking-[-0.04em] text-[#fff4e8] sm:text-[2.8rem] lg:text-[4rem]"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            FRANCHISEE
            <br className="sm:hidden" /> VOICES
          </motion.h3>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="mt-3 max-w-[720px] text-[0.95rem] leading-[1.75] text-[#e7d5c2] sm:text-[1rem] lg:text-[1.05rem]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Beyond the format, the real measure is how it feels to build, open, and grow with the brand in actual neighbourhoods.
          </motion.p>

          {/* tiny bottom meta row */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 8 }}
            whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.45, delay: 0.22 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-3"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            <span className="text-[0.66rem] font-bold uppercase tracking-[0.18em] text-[#d7bda4]">
              Real outlets
            </span>
            <span className="h-1 w-1 rounded-full bg-[#b98a63]" />
            <span className="text-[0.66rem] font-bold uppercase tracking-[0.18em] text-[#d7bda4]">
              Local confidence
            </span>
            <span className="h-1 w-1 rounded-full bg-[#b98a63]" />
            <span className="text-[0.66rem] font-bold uppercase tracking-[0.18em] text-[#d7bda4]">
              Partner feedback
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* sculpted bottom transition into next beige section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          className="block h-[62px] w-full sm:h-[98x] lg:h-[88px]"
          aria-hidden="true"
        >
          <path
            d="M0,20 C180,110 360,130 560,88 C740,50 870,18 1040,34 C1190,48 1310,92 1440,120 L1440,140 L0,140 Z"
            fill="#f5eadc"
          />
        </svg>
      </div>
    </section>
  );
}