import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import paperBG from "../../../assets/images/franchise/coffee-bg.jpg";
import franchiseOutletFront from "../../../assets/images/franchise/outlet-bg.png";
import FranchiseStatsMarquee from "./FranchiseStatsMarquee";

const heroImage = franchiseOutletFront;

export default function FranchiseHeroCenterStage({ reduceMotion = false }) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden  bg-[#f6ede3] text-[#2D1A10]">
      {/* Soft paper background */}
      {/* <img
        src={paperBG}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-35 mix-blend-multiply"
      /> */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(245,235,221,0.82),rgba(245,235,221,0.64)_48%,rgba(245,235,221,0.9))]" />

      {/* Quiet decorative details */}
      <div className="pointer-events-none absolute left-[-10rem] top-[18%] h-[28rem] w-[28rem] rounded-full border border-[#C9752F]/15" />
      <div className="pointer-events-none absolute right-[-12rem] bottom-[8%] h-[34rem] w-[34rem] rounded-full border border-[#C9752F]/15" />
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-[#2D1A10]/[0.06]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1600px] flex-col px-5 py-5 sm:px-8 sm:py-7 lg:px-12 lg:py-8">
        {/* Header */}
        <header className="flex items-center justify-between border-b border-[#2D1A10]/15 pb-4 sm:pb-5">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#C9752F]" />
            {/* <p className="text-[0.62rem] uppercase tracking-[0.3em] text-[#8B5A35] sm:text-[0.7rem]">
              Thatha Tea / Our outlets
            </p> */}
          </div>

          <p className="hidden text-[0.65rem] uppercase tracking-[0.24em] text-[#2D1A10]/45 sm:block">
            A place worth returning to
          </p>
        </header>

        {/* Center-stage composition */}
        <div className="relative flex flex-1 flex-col items-center justify-center py-9 sm:py-12 lg:py-7">
          {/* Heading above the image */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: -16 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-20 text-center"
          >
            <p className="text-[0.64rem] uppercase tracking-[0.32em] text-[#A36331] sm:text-[0.72rem]">
              Brewing happiness since 1991
            </p>

            <h1
              className="mt-3 text-[3.6rem] leading-[0.78] sm:text-[5.4rem] lg:text-[7.5rem]"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                letterSpacing: "0.01em",
              }}
            >
              <span className="text-[#2D1A10]">OUR </span>
              <span className="text-[#C9752F]">OUTLETS</span>
            </h1>
          </motion.div>

          {/* Main image stage */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 25, scale: 0.96 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
            className="relative mt-5 w-full max-w-[1180px] sm:mt-7 lg:mt-3"
          >
            {/* Main warm shape */}
            <div className="absolute left-1/2 top-[12%] h-[70%] w-[68%] -translate-x-1/2 rounded-[48%_48%_14%_14%] bg-[#3A2418] sm:w-[60%] lg:w-[53%]" />

            {/* Fine frame behind the storefront */}
            <div className="absolute left-1/2 top-[7%] h-[77%] w-[72%] -translate-x-1/2 rounded-[50%_50%_16%_16%] border border-[#C9752F]/35 sm:w-[64%] lg:w-[57%]" />

            <img
              src={heroImage}
              alt="Thatha Tea outlet storefront"
              width={1800}
              height={700}
              className="relative z-10 mx-auto h-auto w-[118%] max-w-none object-contain sm:w-[108%] lg:w-[100%]"
            />

            {/* Floating location detail */}
            <motion.div
              animate={reduceMotion ? {} : { y: [0, -7, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[3%] top-[24%] z-20 rounded-[18px] border border-[#D7B08B] bg-[#F9F0E5]/95 px-4 py-3 shadow-[0_14px_28px_rgba(45,26,16,0.1)] backdrop-blur-sm sm:left-[7%] sm:px-5 sm:py-4 lg:left-[10%]"
            >
              <div className="flex items-center gap-2 text-[#A36331]">
                <MapPin className="h-3.5 w-3.5" />
                <span className="text-[0.58rem] uppercase tracking-[0.22em]">
                  Find us nearby
                </span>
              </div>
              <p
                className="mt-1 text-[1.55rem] leading-none text-[#3A2418] sm:text-[1.8rem]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                50+ LOCATIONS
              </p>
            </motion.div>

            {/* Floating year detail */}
            <div className="absolute right-[3%] top-[21%] z-20 text-right sm:right-[7%] lg:right-[10%]">
              <p className="text-[0.58rem] uppercase tracking-[0.24em] text-[#8B5A35]">
                Our first pour
              </p>
              <p
                className="mt-1 text-[2.5rem] leading-none text-[#C9752F] sm:text-[3.2rem]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                1991
              </p>
            </div>

            <p className="relative z-20 mt-[-1rem] text-center text-[0.68rem] uppercase tracking-[0.25em] text-[#8B5A35] sm:mt-[-1.5rem]">
              Bangalore &amp; beyond
            </p>
          </motion.div>

          {/* Supporting line below image */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-3 flex flex-col items-center gap-4 text-center sm:mt-4 sm:flex-row sm:gap-6"
          >
            <p className="max-w-[34ch] text-[0.82rem] leading-6 text-[#5D4635] sm:text-[0.9rem]">
              Familiar flavours, thoughtful spaces, and a reason to come back.
            </p>

            <a
              href="#outlets"
              className="group inline-flex items-center gap-2 rounded-full bg-[#3A2418] px-5 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-[#FFF7EF] transition-all hover:-translate-y-1 hover:bg-[#51311F]"
            >
              Explore outlets
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>
        </div>

        {/* Stats footer */}
        <div className="border-t border-[#2D1A10]/15 pt-4 sm:pt-5">
          <FranchiseStatsMarquee />
        </div>
      </div>
    </section>
  );
}