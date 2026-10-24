import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";


import teaGlassImg from "@/assets/images/career/career-chai.png"; // The tea glass + plant illustration

// --- DECORATIVE LEAF DIVIDER ---
const LeafDivider = () => (
  <div className="flex items-center gap-3 text-[#A16635]">
    <span className="h-[1px] w-16 bg-[#A16635]/50" />
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5 rotate-45 opacity-90">
      <path d="M12 2C8 6 6 10 6 14C6 18 8.5 22 12 22C15.5 22 18 18 18 14C18 10 16 6 12 2Z" />
    </svg>
    <span className="h-[1px] w-16 bg-[#A16635]/50" />
  </div>
);

export default function CareersBreakSection() {
  return (
    <section className="relative flex w-full items-center overflow-hidden bg-[#F7EFE4] py-12 lg:h-[45vh] lg:min-h-[400px] lg:py-0">
    
      {/* Gradient Overlay to fade the sketch into the background on the left */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#F7EFE4_0%,#F7EFE4_35%,rgba(247,239,228,0.4)_65%,transparent_100%)]" />

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1400px] flex-col items-center justify-between gap-8 px-5 sm:px-8 lg:flex-row lg:gap-4 lg:px-12">
        
        {/* ======================================= */}
        {/* LEFT CONTENT */}
        {/* ======================================= */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-lg lg:w-1/2"
        >
          {/* Eyebrow */}
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-6 bg-[#A16635]/40" />
            <span className="font-['Manrope'] text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#A16635] sm:text-[0.8rem]">
              Open Roles
            </span>
          </div>

          {/* Heading */}
          <h2 
            className="text-[3rem] leading-[0.9] text-[#3D2413] sm:text-[4rem] lg:text-[4.5rem]"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            BE A PART OF<br />
            <span className="text-[#A16635]">OUR JOURNEY</span>
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-md font-['Manrope'] text-[0.95rem] leading-[1.6] text-[#5E4637] sm:text-[1rem]">
            Join a team that serves smiles, one cup at a time. Explore our current openings and find your place at Thatha Tea.
          </p>

          {/* Divider */}
          <div className="mt-5">
            <LeafDivider />
          </div>

          {/* CTA Button */}
          <div className="mt-6">
            <a
              href="#openings"
              className="group inline-flex items-center gap-3 font-['Manrope'] text-[0.8rem] font-bold uppercase tracking-[0.15em] text-[#3D2413] transition-colors hover:text-[#A16635]"
            >
              View Current Openings
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D1BEA9] transition-all duration-300 group-hover:border-[#A16635] group-hover:bg-[#A16635] group-hover:text-white">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </a>
          </div>
        </motion.div>

        {/* ======================================= */}
        {/* RIGHT CONTENT (Quote & Illustration) */}
        {/* ======================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex w-full flex-col items-center justify-between self-stretch lg:w-1/2 lg:items-end"
        >
          {/* Quote */}
          <p 
            className="mb-4 text-center font-['Cormorant_Garamond'] text-[1.4rem] font-semibold italic text-[#3D2413] sm:text-[1.6rem] lg:mb-0 lg:mr-12 lg:mt-8 lg:text-right lg:text-[1.8rem]"
          >
            "Good tea is made by great people."
          </p>

          {/* Main Illustration (Anchored to bottom right on desktop) */}
          <div className="relative mt-auto w-full max-w-[280px] lg:absolute lg:-bottom-4 lg:right-10 lg:max-w-[320px]">
            <img
              src={teaGlassImg}
              alt="Thatha Tea Illustration"
              className="w-full object-contain drop-shadow-sm"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}