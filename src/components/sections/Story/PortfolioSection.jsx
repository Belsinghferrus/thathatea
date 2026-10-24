import { motion } from "framer-motion";


import portfolioBg from "@/assets/images/story/Vintage-tea-bg.png"; // Main section background
import cardBg from "@/assets/images/story/papercard.jpg"; // Card background
import bakeryStamp from "@/assets/images/story/bake-stamp.png";
import bakeryMainImg from "@/assets/images/story/thatha-bread.png";
import chaiStamp from "@/assets/images/story/chai-stamp.png";
import chaiMainImg from "@/assets/images/story/thatha-chai.png";

const IconBread = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M4 14c0-3.5 3.5-6 8-6s8 2.5 8 6v4H4v-4z" />
    <path d="M6 14v4M10 14v4M14 14v4M18 14v4" />
  </svg>
);

const IconChef = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M6 14h12v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-4z" />
    <path d="M8 14c-2 0-3-1.5-3-3.5S7 7 9 7c.5 0 1 .1 1.5.2C11.5 5.8 13 5 14.5 5c2.5 0 4.5 2 4.5 4.5V14" />
  </svg>
);

const IconCroissant = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M4 12c0-2 2-4 5-4s5 2 5 4M15 12c0 2 2 4 5 4s-2-4-5-4z" />
    <path d="M9 8c1 3 1 7 0 10M15 8c-1 3-1 7 0 10" />
  </svg>
);

const IconCup = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M4 10h12v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-5z" />
    <path d="M16 11h2a3 3 0 0 1 0 6h-2M7 6v2M11 6v2" />
  </svg>
);

const IconPeople = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <circle cx="9" cy="7" r="3" />
    <path d="M4 15a5 5 0 0 1 10 0v2H4v-2z" />
    <circle cx="17" cy="9" r="2.5" />
    <path d="M14 15a4 4 0 0 1 7 0v2h-7v-2z" />
  </svg>
);

const IconLeaf = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M12 21c-5 0-9-4-9-9 0-5 5-9 9-9 4 0 9 3 9 9 0 5-4 9-9 9z" />
    <path d="M12 21V9M12 9l-3-3M12 13l-3-3" />
  </svg>
);

const portfolioData = [
  {
    id: "01",
    title: "THATHA",
    titleAccent: "BREAD & BAKERY",
    titleColor: "#7C5536", // Brown
    subtitle: "BAKERY • FRESHNESS • TRADITION",
    description: "Freshly baked goodness, familiar flavours, and the warmth in a neighbourhood bakery.",
    url: "/bakery",
    stampImage: bakeryStamp,
    mainImage: bakeryMainImg,
    features: [
      { icon: <IconBread />, title: "FRESHLY BAKED", subtitle: "Wholesome & Tasty" },
      { icon: <IconChef />, title: "MADE WITH CARE", subtitle: "Quality Ingredients" },
      { icon: <IconCroissant />, title: "EVERYDAY FAVOURITES", subtitle: "For Every Occasion" },
    ],
  },
  {
    id: "02",
    title: "THATHA",
    titleAccent: "CHAI",
    titleColor: "#C88A3D", // Gold/Amber
    subtitle: "TEA • CULTURE • CONNECTION",
    description: "A modern expression of India's chai culture, bringing people together over a simple cup of tea.",
    url: "/chai",
    stampImage: chaiStamp,
    mainImage: chaiMainImg,
    features: [
      { icon: <IconCup />, title: "AUTHENTIC CHAI", subtitle: "Timeless Flavours" },
      { icon: <IconPeople />, title: "A PLACE TO CONNECT", subtitle: "People Over Chai" },
      { icon: <IconLeaf />, title: "BREWED WITH TRADITION", subtitle: "Rooted in India" },
    ],
  },
];

export default function PortfolioSection() {
  return (
    <section className="relative overflow-x-hidden bg-[#FBF1E5] py-14 text-[#4B2A16] sm:py-18 lg:py-20">
      
      {/* SECTION BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="h-full w-full overflow-x-hidden"
          style={{
            backgroundImage: portfolioBg ? `url(${portfolioBg})` : "",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.15,
            mixBlendMode: "multiply",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-5 sm:px-8 lg:px-10">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 max-w-3xl text-center sm:mb-14"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="h-px w-8 bg-[#A16635]/40" />
            <p className="text-[0.8rem] font-semibold uppercase tracking-[0.26em] text-[#A16635]">
              Our Portfolio
            </p>
            <span className="h-px w-8 bg-[#A16635]/40" />
          </div>
          
          <h2
            className="mt-2 text-[2.8rem] leading-[0.95] text-[#3D2413] sm:text-[3.6rem] lg:text-[4.2rem]"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.06em" }}
          >
            A STORY, <span className="text-[#A16635]">TWO EXPRESSIONS</span>
          </h2>
          
          <p className="mt-3 text-[0.96rem] leading-7 text-[#5E4637] sm:text-[1rem]">
            Different flavours. A shared soul. Explore our brands and the experiences we create.
          </p>
        </motion.div>

        {/* CARDS GRID */}
        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {portfolioData.map((item, index) => (
            <PortfolioCard key={item.id} item={item} index={index} cardBg={cardBg} />
          ))}
        </div>

      </div>
    </section>
  );
}

function PortfolioCard({ item, index, cardBg }) {
  return (
    <motion.a
      href={item.url || "#"}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      // Exact outline and shadow matching the image
      className="group relative flex flex-col overflow-hidden rounded-xl border border-[#D1BEA9] bg-[#FCF8F2] shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_12px_40px_rgba(161,102,53,0.12)]"
    >
      
      {/* CARD BACKGROUND TEXTURE */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.4] mix-blend-multiply"
        style={{
          backgroundImage: cardBg ? `url(${cardBg})` : "",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* MAIN IMAGE - OVERLAPPING LAYER (Z-10) */}
      <div className="absolute bottom-[60px] right-0 z-10 w-[85%] max-w-[380px] pointer-events-none">
        <img
          src={item.mainImage}
          alt={`${item.title} ${item.titleAccent}`}
          className="h-auto w-full object-contain object-bottom transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>

      {/* TOP CONTENT (Z-20) */}
      <div className="relative z-20 p-6 sm:p-8 md:p-10">
        
        {/* Number & Line */}
        <div className="mb-4 flex items-center gap-3">
          <span className="text-sm font-bold tracking-widest text-[#3D2413]">
            {item.id}
          </span>
          <span className="h-px w-10 bg-[#3D2413]/20" />
        </div>

        {/* Title & Stamp Row */}
        <div className="flex items-start justify-between gap-4">
          <div className="max-w-[70%]">
            <h3 
              className="text-[2.5rem] leading-[0.9] tracking-wide text-[#3D2413] sm:text-[3rem]"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              {item.title}
              <span className="block" style={{ color: item.titleColor }}>
                {item.titleAccent}
              </span>
            </h3>
          </div>
          
          {/* Stamp PNG */}
          <div className="relative h-20 w-20 shrink-0 sm:h-24 sm:w-24">
            <img
              src={item.stampImage}
              alt={`${item.title} Stamp`}
              className="h-full w-full object-contain opacity-95"
            />
          </div>
        </div>

        {/* Subtitle & Description */}
        <p className="mt-5 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#A16635]">
          {item.subtitle}
        </p>
        <p className="mt-2 max-w-[70%] text-[0.9rem] leading-relaxed text-[#5E4637]">
          {item.description}
        </p>
      </div>

      {/* SPACER TO PUSH BOTTOM BAR DOWN (allows image to overlap properly) */}
      <div className="h-22 w-full sm:h-30" />

      {/* BOTTOM - 3 FEATURES (Z-20) */}
      <div className="relative z-20 mt-auto grid grid-cols-3 border-t border-[#D1BEA9] bg-[#F5EADC]/40 backdrop-blur-[2px] py-2 sm:py-5">
        {item.features.map((feature, fIndex) => (
          <div
            key={fIndex}
            className={`flex flex-col items-center px-2 text-center ${
              fIndex !== item.features.length - 1 ? "border-r border-[#D1BEA9]" : ""
            }`}
          >
            {/* SVG Icon */}
            <div className="mb-2 text-[#8B5E3C]">
              {feature.icon}
            </div>
            <span className="text-[0.6rem] font-bold uppercase tracking-wider text-[#3D2413] sm:text-[0.65rem]">
              {feature.title}
            </span>
            <span className="mt-1 text-[0.55rem] text-[#5E4637] sm:text-[0.6rem]">
              {feature.subtitle}
            </span>
          </div>
        ))}
      </div>

    </motion.a>
  );
}