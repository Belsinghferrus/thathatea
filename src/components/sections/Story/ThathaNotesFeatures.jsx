import { motion } from "framer-motion";
import { 
  ShoppingCart, 
  Package, 
  BarChart2, 
  FileText, 
  Store, 
  Headphones,
  ArrowRight
} from "lucide-react";
import phone from "../../../assets/images/story/notes/phone.png";
import inventory from "../../../assets/images/story/notes/inventory.png";
import sales from "../../../assets/images/story/notes/sales.png";
import menu from  "../../../assets/images/story/notes/menu.png";
import map from "../../../assets/images/story/notes/notesMap.png";
import help from "../../../assets/images/story/notes/help.png";
import bg from "../../../assets/images/story/notes/bg.png"

// --- TEA SPILLS ---
import teaSpill1 from "../../../assets/images/story/notes/spill.png";
import teaSpill2 from "../../../assets/images/story/notes/spill.png";
import teaSpill3 from "../../../assets/images/story/notes/spill.png";

// --- TORN PAPER BACKGROUNDS ---
import tornBg1 from "../../../assets/images/story/notes/torn1.png"; 
import tornBg2 from "../../../assets/images/story/notes/torn1.png"; 
import tornBg3 from "../../../assets/images/story/notes/torn1.png"; 
import tornBg4 from "../../../assets/images/story/notes/torn1.png"; 
import tornBg5 from "../../../assets/images/story/notes/torn1.png"; 
import tornBg6 from "../../../assets/images/story/notes/torn1.png"; 

// --- DATA ---
const featuresData = [
  {
    id: 1,
    title: "Easy Ordering",
    desc: "Take orders in-store or online with a simple, fast and clean interface.",
    icon: <ShoppingCart className="h-6 w-6" />,
    image: phone,
    bgImage: tornBg1,
    decorText: null,
    decorPos: "bottom-left"
  },
  {
    id: 2,
    title: "Inventory Management",
    desc: "Track stock, plan supplies and get low stock alerts before you run out.",
    icon: <Package className="h-6 w-6" />,
    image: inventory,
    bgImage: tornBg2,
    decorText: null,
  },
  {
    id: 3,
    title: "Sales Analytics",
    desc: "Understand your sales trends, best items and outlet performance easily.",
    icon: <BarChart2 className="h-6 w-6" />,
    image: sales,
    bgImage: tornBg3,
    decorText: null,
    decorPos: "bottom-right"
  },
  {
    id: 4,
    title: "Menu Management",
    desc: "Update items, pricing and availability across all your outlets.",
    icon: <FileText className="h-6 w-6" />,
    image: menu,
    bgImage: tornBg4,
    decorText: null,
    decorPos: "bottom-left"
  },
  {
    id: 5,
    title: "Outlet Performance",
    desc: "Compare and track all your outlets in real-time on a single dashboard.",
    icon: <Store className="h-6 w-6" />,
    image: map,
    bgImage: tornBg5,
    decorText: "Track\nEvery Outlet",
    decorPos: "bottom-right"
  },
  {
    id: 6,
    title: "Support & Guidance",
    desc: "Our team guides you with insights and best practices to help your business grow.",
    icon: <Headphones className="h-6 w-6" />,
    image: help,
    bgImage: tornBg6,
    decorText: "We're\nWith You\nAlways",
    decorPos: "bottom-left"
  },
];

// --- FOOTER DATA ---
const footerStats = [
  { icon: <Store className="h-6 w-6" />, title: "100+", subtitle: "Outlets and growing" },
  { icon: <Package className="h-6 w-6" />, title: "Trusted by", subtitle: "Tea & Bakery Partners" },
  { icon: <BarChart2 className="h-6 w-6" />, title: "Faster Operations", subtitle: null },
  { icon: <FileText className="h-6 w-6" />, title: "Higher Profitability", subtitle: null },
];

export default function ThathaNotesFeatures() {
  return (
    <section 
      className="relative w-full overflow-hidden py-16 sm:py-24"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      
      {/* Overlay to ensure text readability without losing the bg texture */}
      <div className="absolute inset-0 z-0 bg-[#F7EFE4]/80" />

      {/* ======================================= */}
      {/* TEA SPILL DECORATIONS                   */}
      {/* ======================================= */}
      <img src={teaSpill1} alt="" className="pointer-events-none absolute left-0 top-10 z-0 w-[150px] object-contain opacity-70 md:w-[250px]" />
      <img src={teaSpill2} alt="" className="pointer-events-none absolute bottom-20 right-0 z-0 w-[120px] object-contain opacity-70 md:w-[200px]" />
      <img src={teaSpill3} alt="" className="pointer-events-none absolute left-10 top-1/2 z-0 w-[180px] object-contain opacity-50 md:w-[300px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        
        {/* HEADER */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col items-center text-center"
        >
          <h2 className="font-['Allura'] text-[2.5rem] leading-none text-[#A16635] sm:text-[3.5rem]">
            How Thatha Notes Helps You
          </h2>
          <div className="mt-3 h-px w-24 bg-[#A16635]/30" />
        </motion.div>

        {/* 3-COLUMN GRID */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 3) * 0.1, duration: 0.5 }}
              // Increased padding (p-8) on mobile so text doesn't hit the torn edges
              className="group relative flex flex-col p-8 sm:flex-row sm:items-center sm:p-10"
            >
              
              {/* ======================================= */}
              {/* TORN PAPER BACKGROUND                   */}
              {/* ======================================= */}
              <div className="pointer-events-none absolute inset-0 -bottom-[60px] sm:bottom-0 z-0">
  <img 
    src={item.bgImage} 
    alt="" 
    className="h-full w-full object-fill opacity-100" 
  />
</div>

              {/* Left Image (Mobile: Top & Centered, Desktop: Left) */}
              <div className="pointer-events-none relative z-10 mb-6 flex w-full items-end justify-center sm:mb-0 sm:w-[45%]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-auto max-h-[220px] w-[85%] sm:w-full object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Right Content (Mobile: Bottom & Left-aligned) */}
              <div className="relative z-10 flex w-full flex-col sm:w-[55%] sm:pl-4">
                
                <div>
                  {/* Icon & Title Row */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#A16635]/10 text-[#A16635]">
                      {item.icon}
                    </div>
                    <h3 
                      className="text-[1.2rem] leading-tight text-[#3D2413]"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="mt-3 font-['Manrope'] text-[0.85rem] leading-relaxed text-[#5E4637] sm:text-[0.9rem]">
                    {item.desc}
                  </p>
                </div>

              </div>

              {/* Decorative Cursive Text */}
              {item.decorText && (
                <div 
                  className={`pointer-events-none absolute z-10 font-['Allura'] text-[1.3rem] leading-tight text-[#A16635]/70
                    ${item.decorPos === 'bottom-left' ? 'bottom-2 left-4 rotate-[-5deg]' : ''}
                    ${item.decorPos === 'bottom-right' ? 'bottom-2 right-4 rotate-[5deg] text-right' : ''}
                  `}
                  style={{ whiteSpace: 'pre-line' }}
                >
                  {item.decorText}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* FOOTER STATS ROW */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-y-6 lg:flex-nowrap lg:gap-x-0 lg:divide-x lg:divide-[#D1BEA9]/50 lg:border-t lg:border-[#D1BEA9]/50 lg:pt-8"
        >
          {footerStats.map((stat, idx) => (
            <div key={idx} className="flex w-1/2 flex-col items-center justify-center gap-2 px-4 text-center md:w-1/4 lg:w-1/4 lg:flex-row lg:gap-3 lg:px-8 lg:text-left">
              <span className="text-[#A16635]">{stat.icon}</span>
              <div>
                <p className="font-['Manrope'] text-[0.9rem] font-bold text-[#3D2413] sm:text-[1rem]">
                  {stat.title}
                </p>
                {stat.subtitle && (
                  <p className="font-['Manrope'] text-[0.7rem] text-[#5E4637]">
                    {stat.subtitle}
                  </p>
                )}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}