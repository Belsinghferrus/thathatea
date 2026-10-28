import { motion } from "framer-motion";
import storybreaktea from "../../../assets/images/story/storybreaktea.png";

// --- CUSTOM SVG ICONS (Thinner strokes to match reference) ---
const IconTarget = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 md:h-7 md:w-7">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 8v8M8 12h8" />
  </svg>
);

const IconDevices = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 md:h-7 md:w-7">
    <rect x="2" y="4" width="16" height="12" rx="1.5" />
    <path d="M6 20h8M10 16v4" />
    <rect x="16" y="8" width="6" height="10" rx="1" fill="#2A1A10" stroke="currentColor" />
  </svg>
);

const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 md:h-7 md:w-7">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const IconGrowth = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 md:h-7 md:w-7">
    <path d="M3 21h18M4 21v-6h4v6M10 21v-10h4v10M16 21v-14h4v14" />
    <path d="M4 11l6-6 6 6" />
  </svg>
);

const features = [
  { icon: <IconTarget />, title: "Simple & Fast" },
  { icon: <IconDevices />, title: "Any Device", subtitle: "(Mobile / Tablet / Desktop)" },
  { icon: <IconShield />, title: "Secure & Reliable" },
  { icon: <IconGrowth />, title: "Built for Growth" },
];

export default function StorySectionBreakDark() {
  return (
    <section className="relative flex min-h-[30vh] w-full items-center overflow-hidden bg-[#2A1A10] py-12 lg:min-h-[380px] lg:py-0">
      
      {/* ======================================= */}
      {/* TEA IMAGE (LEFT) - Faded into background */}
      {/* ======================================= */}
      <div className="absolute bottom-0 top-30 left-0 z-0 h-full w-full md:w-[60%] lg:w-[50%] pointer-events-none">
        <img
          src={storybreaktea} 
          alt="Tea"
          className="h-full w-full object-cover object-center "
        />
        {/* Gradient to blend the right edge of the image into the dark background */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#2A1A10]/60 to-[#2A1A10]" />
      </div>

      {/* ======================================= */}
      {/* LEAF IMAGE (RIGHT)                      */}
      {/* ======================================= */}
     

      {/* ======================================= */}
      {/* MAIN CONTENT                            */}
      {/* ======================================= */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1500px] justify-end px-5 sm:px-8 lg:px-12">
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex w-full flex-col items-center text-center md:w-[60%] md:items-start md:text-left lg:w-[52%]"
        >
          {/* Kicker */}
          <p className="font-['Manrope'] text-[0.75rem] font-bold uppercase tracking-[0.18em] text-[#C88A3D] sm:text-[0.85rem]">
            Built for Tea Shops & Bakery Outlets
          </p>

          {/* Title */}
          <h2 
            className="mt-3 text-[2.2rem] leading-[1.1] text-[#F7EFE4] sm:text-[2.8rem] lg:text-[3.2rem]"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            A platform that<br className="hidden sm:block" />
             understands your business.
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-xl font-['Manrope'] text-[0.95rem] leading-[1.7] text-[#F7EFE4]/70 sm:text-[1.05rem]">
            Whether you run a single tea shop or a growing chain, Thatha Notes is designed to make your daily operations simple, organised and profitable.
          </p>

          {/* 4 Features Row (Strictly one line, no wrapping) */}
          <div className="mt-10 flex w-full flex-nowrap items-center justify-between border-t border-[#F7EFE4]/15 pt-6">
            {features.map((feature, idx) => (
              <div 
                key={idx} 
                className={`flex flex-1 items-center gap-2 sm:gap-3 ${
                  idx !== 0 ? "border-l border-[#F7EFE4]/15 pl-2 sm:pl-4" : ""
                }`}
              >
                {/* Icon */}
                <span className="shrink-0 text-[#F7EFE4]/90">{feature.icon}</span>
                
                {/* Text */}
                <div className="text-left">
                  <p className="font-['Manrope'] text-[0.65rem] font-bold text-[#F7EFE4] sm:text-[0.8rem] md:text-[0.85rem]">
                    {feature.title}
                  </p>
                  {feature.subtitle && (
                    <p className="hidden font-['Manrope'] text-[0.6rem] text-[#F7EFE4]/50 sm:block mt-0.5">
                      {feature.subtitle}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
}