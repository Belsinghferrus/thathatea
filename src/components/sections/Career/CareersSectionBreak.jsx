import { motion } from "framer-motion";

// Custom hand-drawn style leaf SVG
const DividerLeaf = () => (
  <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-[#A16635]" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21c-5 0-9-4-9-9 0-5 5-9 9-9 4 0 9 3 9 9 0 5-4 9-9 9z" />
    <path d="M12 21V9M12 9l-3-3M12 13l-3-3" />
  </svg>
);

export default function CareersSectionBreak() {
  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden bg-[#F7EFE4] py-12 sm:py-16">
      
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C88A3D]/5 blur-2xl" />

      <div className="relative z-10 flex w-full max-w-4xl items-center gap-4 px-6 sm:gap-6 sm:px-8">
        
        {/* Left Line (Draws right to left) */}
        <motion.svg 
          viewBox="0 0 200 20" 
          fill="none" 
          className="h-4 flex-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.path
            d="M 200 10 Q 150 0 100 10 T 0 10"
            stroke="#D1BEA9"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: { pathLength: 1, opacity: 1, transition: { duration: 1.5, ease: "easeInOut" } }
            }}
          />
        </motion.svg>

        {/* Center Motif */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, -6, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D1BEA9] bg-[#FCF8F2] shadow-sm"
          >
            <DividerLeaf />
          </motion.div>
          <span className="whitespace-nowrap font-['Allura'] text-[1.2rem] text-[#A16635] sm:text-[1.5rem]">
            Let's brew something great together
          </span>
        </motion.div>

        {/* Right Line (Draws left to right) */}
        <motion.svg 
          viewBox="0 0 200 20" 
          fill="none" 
          className="h-4 flex-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.path
            d="M 0 10 Q 50 20 100 10 T 200 10"
            stroke="#D1BEA9"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            variants={{
              hidden: { pathLength: 0, opacity: 0 },
              visible: { pathLength: 1, opacity: 1, transition: { duration: 1.5, ease: "easeInOut" } }
            }}
          />
        </motion.svg>

      </div>
    </div>
  );
}