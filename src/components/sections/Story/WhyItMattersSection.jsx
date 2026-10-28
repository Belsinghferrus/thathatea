import { motion } from "framer-motion";
import { TrendingUp, Settings, Lightbulb, Users, Leaf } from "lucide-react";

// --- MARQUEE DATA ---
const marqueeItems = [
  { icon: <TrendingUp className="h-4 w-4" />, text: "FOCUS ON BEST SELLERS" },
  { icon: <Settings className="h-4 w-4" />, text: "BETTER PLANNING" },
  { icon: <Lightbulb className="h-4 w-4" />, text: "GROW SALES" },
  { icon: <Users className="h-4 w-4" />, text: "HEALTHY BUSINESS" },
];

export default function WhyItMattersTicker() {
  // Duplicate the array to create a seamless loop
  const duplicatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <section className="relative flex h-10 w-full items-center overflow-hidden border-y border-[#C88A3D]/20 bg-[#1C110B]">
      
      {/* 
        The animated track. 
        It starts at 0% and moves to -50% infinitely, creating the loop.
      */}
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 25, // Adjust this to make it faster or slower
        }}
        className="flex w-max items-center whitespace-nowrap"
      >
        {duplicatedItems.map((item, index) => (
          <div 
            key={index} 
            className="flex items-center gap-2 px-6 sm:gap-3 sm:px-8"
          >
            <span className="text-[#C88A3D]">{item.icon}</span>
            <span className="font-['Manrope'] text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[#F7EFE4] sm:text-[0.7rem]">
              {item.text}
            </span>
            {/* Small separator (Leaf icon) */}
            <Leaf className="ml-6 h-3 w-3 text-[#C88A3D]/40 sm:ml-8" />
          </div>
        ))}
      </motion.div>

    </section>
  );
}