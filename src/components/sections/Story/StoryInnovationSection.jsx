import { motion } from "framer-motion";
import { ArrowRight, Leaf, ChefHat, Flame, ShieldCheck, Package, Truck } from "lucide-react";
import ingredientImage from "../../../assets/images/story/ingredient.png";
import equipmentImage from "../../../assets/images/story/equipment.png";
import productionImage from "../../../assets/images/story/production.png";
import quality from "../../../assets/images/story/quality.png";
import packageImage from "../../../assets/images/story/package.png";
import deliveryImage from "../../../assets/images/story/supply.png";
// --- PROCESS DATA ---
const processSteps = [
  {
    title: "Premium Ingredients",
    desc: "We source the finest quality ingredients.",
    icon: <Leaf className="h-4 w-4" />,
    image: ingredientImage, 
  },
  {
    title: "Modern Equipment",
    desc: "Advanced technology for consistent quality.",
    icon: <ChefHat className="h-4 w-4" />,
    image: equipmentImage,
  },
  {
    title: "In-House Production",
    desc: "Hygienic, standardised and large-scale production.",
    icon: <Flame className="h-4 w-4" />,
    image: productionImage,
  },
  {
    title: "Quality Checks",
    desc: "Strict quality and hygiene standards.",
    icon: <ShieldCheck className="h-4 w-4" />,
    image: quality,
  },
  {
    title: "Safe Packaging",
    desc: "Freshly packed to retain taste and texture.",
    icon: <Package className="h-4 w-4" />,
    image: packageImage,
  },
  {
    title: "Supply to Outlets",
    desc: "Delivered fresh to all our outlets.",
    icon: <Truck className="h-4 w-4" />,
    image: deliveryImage,
  },
];

// --- DECORATIVE LEAF DIVIDER ---
const LeafDivider = () => (
  <div className="flex items-center gap-3 text-[#A16635]">
    <span className="h-[1px] w-12 bg-[#A16635]/50" />
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5 rotate-45 opacity-90">
      <path d="M12 2C8 6 6 10 6 14C6 18 8.5 22 12 22C15.5 22 18 18 18 14C18 10 16 6 12 2Z" />
    </svg>
    <span className="h-[1px] w-12 bg-[#A16635]/50" />
  </div>
);

export default function StoryInnovationSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F7EFE4] py-16 sm:py-24">
      
      {/* Subtle Background Glow */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_20%,rgba(200,138,61,0.06),transparent_40%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        
        {/* ======================================= */}
        {/* TOP HERO BLOCK (Centered)               */}
        {/* ======================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <p className="font-['Allura'] text-[2rem] leading-none text-[#A16635] sm:text-[2.5rem]">
            Our Technology
          </p>
          <h2 
            className="mt-2 text-[3rem] leading-[0.9] text-[#3D2413] sm:text-[4rem] lg:text-[4.5rem]"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            TRADITION MEETS<br />
            <span className="text-[#A16635]">MODERN INNOVATION</span>
          </h2>
          
          <p className="mt-6 max-w-xl font-['Manrope'] text-[1rem] leading-[1.7] text-[#5E4637]">
            Authentic recipes, modern technology and in-house production — to bring you consistent taste, quality and freshness in every bite.
          </p>

        

        
        </motion.div>

        {/* ======================================= */}
        {/* BOTTOM PROCESS FLOW (Unchanged)         */}
        {/* ======================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 lg:mt-24"
        >
          {/* Process Header */}
          <div className="mb-10 flex flex-col items-center justify-center text-center">
            <p className="font-['Allura'] text-[2rem] leading-none text-[#A16635]">
              From Our Kitchen to Your Table
            </p>
            <div className="mt-2 flex items-center gap-2">
               <span className="h-[1px] w-12 bg-[#A16635]/30" />
               <Leaf className="h-3 w-3 text-[#A16635]/50" />
               <span className="h-[1px] w-12 bg-[#A16635]/30" />
            </div>
          </div>

          {/* Process Steps Grid */}
          <div className="relative flex flex-col items-center justify-between gap-8 md:flex-row md:items-start md:gap-2">
            
            {/* Dotted connecting line for desktop */}
            <div className="absolute left-[5%] right-[5%] top-[40px] hidden h-px border-t border-dashed border-[#D1BEA9] md:block z-0" />

            {processSteps.map((step, index) => (
              <div key={index} className="relative z-10 flex w-full flex-col items-center md:w-1/6 px-1">
                
                {/* Image & Icon Container */}
                <div className="relative mb-4">
                  {/* Circle Image */}
                  <div className="h-30 w-30 overflow-hidden rounded-full border-2 border-[#D1BEA9] bg-[#FCF8F2] p-1 sm:h-24 sm:w-24">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                  {/* Overlapping Icon */}
                  <div className="absolute -bottom-2 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-[#D1BEA9] bg-[#F7EFE4] text-[#A16635]">
                    {step.icon}
                  </div>
                </div>

                {/* Text */}
                <h4 className="mt-2 text-center font-['Manrope'] text-[0.75rem] font-bold uppercase tracking-wider text-[#3D2413]">
                  {step.title}
                </h4>
                <p className="mt-1 text-center font-['Manrope'] text-[0.7rem] leading-snug text-[#5E4637]">
                  {step.desc}
                </p>

                {/* Chevron Arrow (Desktop Only) */}
                {index !== processSteps.length - 1 && (
                  <div className="absolute -right-4 top-[30px] hidden text-[#D1BEA9] md:block">
                    <svg width="12" height="24" viewBox="0 0 12 24" fill="none">
                      <path d="M2 2L10 12L2 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}