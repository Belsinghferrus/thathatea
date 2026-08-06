import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import paperbg from "@/assets/images/paper-bg.webp";
import cafe from "@/assets/images/cafe.png";

export default function FranchiseSimpleBreakSection() {
  return (
    <section
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#F4E9D8] px-4 py-8 sm:px-6 lg:px-10"
      style={{
        backgroundImage: `linear-gradient(rgba(244,233,216,0.72), rgba(244,233,216,0.18)), url(${paperbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Soft background detail */}
      <div className="pointer-events-none absolute -left-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#B77A2A]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-[-8rem] h-96 w-96 rounded-full bg-[#2D1A10]/10 blur-3xl" />

      {/* Center container */}
      <motion.div
        initial={{ opacity: 0, y: 28, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
        className="relative grid min-h-[620px] w-full max-w-[1220px] overflow-hidden rounded-[30px] bg-[#3A2114] shadow-[0_30px_90px_rgba(45,26,16,0.22)] sm:min-h-[680px] lg:min-h-[620px] lg:grid-cols-2"
      >
        {/* Image side */}
        <div className="relative min-h-[310px] overflow-hidden sm:min-h-[380px] lg:min-h-full">
          <motion.img
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            src={cafe}
            alt="Thatha Tea outlet experience"
            className="h-full w-full object-cover object-center"
          />

          {/* Image treatment */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#2D1A10]/55 via-transparent to-[#2D1A10]/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#3A2114]/20 lg:to-[#3A2114]/45" />

          <p className="absolute bottom-5 left-5 text-[0.62rem] uppercase tracking-[0.3em] text-[#FFF7EF]/75 sm:bottom-7 sm:left-7">
            Thatha Tea / The experience
          </p>
        </div>

        {/* Content side */}
        <div className="relative flex flex-col justify-center px-6 py-10 text-[#FFF7EF] sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          {/* Minimal decorative line */}
          <div className="absolute right-8 top-8 h-16 w-16 rounded-full border border-[#F2C785]/20 sm:right-12 sm:top-12 sm:h-24 sm:w-24" />
          <div className="absolute right-12 top-12 h-8 w-8 rounded-full border border-[#F2C785]/25 sm:right-[4.5rem] sm:top-[4.5rem] sm:h-12 sm:w-12" />

          <div className="relative z-10 max-w-[480px]">
            <p className="text-[0.65rem] uppercase tracking-[0.32em] text-[#F2C785] sm:text-[0.72rem]">
              A familiar beginning
            </p>

            <div className="mt-6 h-px w-16 bg-[#F2C785] sm:mt-8" />

            <blockquote
              className="mt-6 text-[1.65rem] leading-[1.08] text-[#FFF7EF] sm:mt-8 sm:text-[2.35rem] lg:text-[3rem]"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontStyle: "italic",
              }}
            >
              “Don&apos;t just open a store. Create the place people look for.”
            </blockquote>

            <p className="mt-6 max-w-[38ch] text-[0.92rem] leading-7 text-[#F8EBDD]/75 sm:mt-8 sm:text-[1rem]">
              Build a business around a taste people already trust, and give it
              your own direction.
            </p>

            <motion.a
              href="#enquire"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#F2C785] px-6 py-3.5 text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-[#2D1A10] shadow-[0_12px_28px_rgba(0,0,0,0.2)] transition-colors hover:bg-[#f0bc6e] sm:mt-10"
            >
              Enquire Franchise
              <ArrowDownRight className="h-4 w-4" />
            </motion.a>
          </div>

          <span className="absolute bottom-6 right-6 text-[0.6rem] uppercase tracking-[0.28em] text-[#F8EBDD]/35 sm:bottom-8 sm:right-10">
            Make it yours
          </span>
        </div>
      </motion.div>
    </section>
  );
}