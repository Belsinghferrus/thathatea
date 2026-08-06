import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, MapPin, Sparkles, Users } from "lucide-react";
import paperbg from "@/assets/images/franchise/paper-BG.jpg";
import cafe from "@/assets/images/franchise/cafe-fg.png"; 

const sectionBg = paperbg;
const cafeImage = cafe;

const supportPoints = [
  {
    icon: MapPin,
    text: "Choose the right location",
  },
  {
    icon: Sparkles,
    text: "Launch with a loved brand",
  },
  {
    icon: Users,
    text: "Grow with continued support",
  },
];

function OrbitMark() {
  return (
    <svg
      viewBox="0 0 180 180"
      className="h-28 w-28 text-[#B77A2A]/35 sm:h-36 sm:w-36"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="90" cy="90" r="68" stroke="currentColor" strokeWidth="1" />
      <circle cx="90" cy="90" r="48" stroke="currentColor" strokeWidth="1" strokeDasharray="3 8" />
      <path
        d="M90 8C132 8 166 40 171 81"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="171" cy="81" r="4" fill="currentColor" />
    </svg>
  );
}

export default function FranchiseMinimalLightSection() {
  return (
    <section
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#f6ede3] text-[#2D1A10]"
      
    >
      {/* Fine paper texture */}
      <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:radial-gradient(rgba(45,26,16,0.35)_0.6px,transparent_0.6px)] [background-size:12px_12px]" />

     

      <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-[1400px] items-center px-5 py-10 sm:px-8 sm:py-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-4 lg:px-12 lg:py-16">
        {/* Image composition */}
        <motion.div
          initial={{ opacity: 0, x: -30, y: 12 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative flex min-h-[430px] items-center justify-center sm:min-h-[480px] lg:min-h-[680px]"
        >
          <motion.div
            animate={{ rotate: [0, 4, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[8%] top-[13%]"
          >
            <OrbitMark />
          </motion.div>

          <div className="absolute bottom-[12%] left-[12%] h-px w-28 bg-[#B77A2A]/45 sm:w-40" />
          <div className="absolute bottom-[12%] left-[12%] h-2 w-2 rounded-full bg-[#B77A2A]" />

          <motion.img
            src={cafeImage}
            alt="Thatha Tea cafe experience"
            initial={{ scale: 0.92, rotate: -4 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="relative z-10 max-h-[460px]  max-w-[100%] object-cover sm:max-h-[600px] lg:max-h-[780px]"
          />

          <span className="absolute bottom-[8%] right-[5%] rotate-[-90deg] text-[0.58rem] uppercase tracking-[0.3em] text-[#9A6B32]/75 sm:right-[10%]">
            THATHA TEA / FRANCHISE
          </span>
        </motion.div>

        {/* Minimal copy */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="max-w-xl lg:ml-auto"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#B77A2A]" />
            <p className="text-[0.64rem] uppercase tracking-[0.3em] text-[#9A6B32] sm:text-[0.7rem]">
              Franchise opportunity
            </p>
          </div>

          <h1
            className="mt-6 max-w-[7ch] text-[4.3rem] leading-[0.78] sm:mt-8 sm:text-[6.2rem] lg:text-[8.6rem]"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: "0.01em",
            }}
          >
            MAKE
            <span className="block text-[#B77A2A]">IT</span>
            YOURS.
          </h1>

          <p className="mt-6 max-w-[34ch] text-[0.94rem] leading-7 text-[#5E4735] sm:mt-8 sm:text-[1.02rem]">
            A trusted tea brand, a thoughtful store model, and the space to
            build something of your own.
          </p>

          {/* Minimal support points */}
          <div className="mt-7 border-y border-[#CDB99E] sm:mt-9">
            {supportPoints.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="flex items-center gap-3 border-b border-[#CDB99E]/70 py-3.5 last:border-b-0 sm:py-4"
                >
                  <Icon className="h-4 w-4 shrink-0 text-[#B77A2A]" strokeWidth={1.7} />
                  <span className="text-[0.86rem] text-[#5E4735] sm:text-[0.92rem]">
                    {item.text}
                  </span>
                </motion.div>
              );
            })}
          </div>

          <motion.a
            href="#contact"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="group mt-7 inline-flex items-center gap-3 rounded-full bg-[#2D1A10] px-6 py-3.5 text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-[#FFF7EF] transition-colors hover:bg-[#4A2C17] sm:mt-9"
          >
            Enquire franchise
            <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}