import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import indranager from "@/assets/images/outlet/Indra-nager.png";
import kamanahalli from "@/assets/images/outlet/kamanahalli.png";
import kithaganur from "@/assets/images/outlet/kithaganur.png";
import kasturinagar from "@/assets/images/outlet/kasthuri.png";
// TEMP PLACEHOLDERS — replace with real outlet photos
const outlets = [
  {
    number: "01",
    name: "Kamanahalli",
    rating: 5,
    quote:
      "The familiarity of the brand made the decision easier. People already understood what Thatha Tea stood for, and that reduced our risk from the start.",
    image: kamanahalli,
    mapUrl:"https://maps.app.goo.gl/tyANcqdY3dUWJD4q6"
  },
  {
    number: "02",
    name: "Indira Nagar",
    rating: 5,
    quote:
      "This did not feel like buying into a short-term trend. It felt like choosing a store format people would trust, return to, and remember.",
    image: indranager,
    mapUrl:"https://maps.app.goo.gl/4AjbL1D2Kd9h2fFa6"

  },
  {
    number: "03",
    name: "Kasturi Nagar",
    rating: 4,
    quote:
      "The outlet setup felt guided and practical. What mattered to us was not hype, but clarity, support, and a format that could actually work locally.",
    image: kasturinagar,
    mapUrl:"https://maps.app.goo.gl/TUK1kqf5q5uiV8m36"

  },
  {
    number: "04",
    name: "Kithaganur",
    rating: 5,
    quote:
      "The combination of local response, recognisable branding, and launch confidence made this feel like a practical business decision, not a gamble.",
    image: kithaganur,
    mapUrl:"https://maps.app.goo.gl/5q8ZCYW7gjvYLwYK9"

  },
  {
    number: "05",
    name: "KR Puram",
    rating: 5,
    quote:
      "Footfall picked up faster than we expected. The brand did a lot of the convincing before we even opened the shutters on day one.",
    image: indranager,
    mapUrl:"https://maps.app.goo.gl/Q5ozmzT1TE26kKXKA"

  },
];

function Stars({ count }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${
            i < count ? "fill-[#F2C785] text-[#F2C785]" : "text-white/25"
          }`}
        />
      ))}
    </div>
  );
}

export default function FeaturedOutletsSection() {
  const [active, setActive] = useState(0);
  const outlet = outlets[active];

  return (
    <section className="relative h-screen min-h-[560px] w-full overflow-hidden bg-[#1E120A]">
      {/* Background image (crossfades) */}
      <AnimatePresence mode="wait">
        <motion.img
          key={outlet.image}
          src={outlet.image}
          alt={outlet.name}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(30,18,10,0.92)_0%,rgba(30,18,10,0.55)_42%,rgba(30,18,10,0.25)_70%,rgba(30,18,10,0.55)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(30,18,10,0.9)_0%,rgba(30,18,10,0.05)_40%,transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 flex h-full w-full flex-col justify-between px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p
              className="text-[0.62rem] uppercase tracking-[0.3em] text-[#F2C785]/85 sm:text-[0.7rem]"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Featured Outlets
            </p>
            <h2
              className="mt-1 text-[1.9rem] leading-[0.9] text-[#FFF7EF] sm:text-[2.6rem] lg:text-[3.4rem]"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.03em" }}
            >
              FIVE STORES. FIVE REAL STORIES.
            </h2>
          </div>
        </motion.div>

        {/* Middle: active outlet detail */}
        <div className="flex flex-1 items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={outlet.number}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4 }}
              className="max-w-2xl"
            >
              <span
                className="text-[3.5rem] leading-none text-transparent sm:text-[5rem] lg:text-[6.5rem]"
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  WebkitTextStroke: "1.5px #F2C785",
                }}
              >
                {outlet.number}
              </span>

              <Stars count={outlet.rating} />

              <h3
                className="mt-2 text-[2.2rem] leading-[0.92] text-[#FFF7EF] sm:text-[3.2rem] lg:text-[4.2rem]"
                style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.03em" }}
              >
                {outlet.name.toUpperCase()}
              </h3>

              <p className="mt-3 max-w-xl text-[0.85rem] leading-6 text-[#F8EBDD]/85 sm:mt-4 sm:text-[0.98rem] sm:leading-7">
                &ldquo;{outlet.quote}&rdquo;
              </p>

              <motion.a
  href={outlet.mapUrl}
  target="_blank"
  rel="noopener noreferrer"
  whileHover={{ x: 4 }}
  className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#F2C785] px-5 py-2.5 text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-[#2D1A10] shadow-[0_10px_24px_rgba(0,0,0,0.25)] transition-colors hover:bg-[#f0bc6e] sm:mt-6 sm:px-6 sm:py-3"
>
  View Outlet
  <ArrowUpRight className="h-4 w-4" />
</motion.a>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom selector strip */}
        <div className="flex gap-2 overflow-x-auto pb-1 sm:gap-3 lg:grid lg:grid-cols-5 lg:gap-3 lg:overflow-visible">
          {outlets.map((item, index) => {
            const isActive = index === active;
            return (
              <button
                key={item.number}
                onClick={() => setActive(index)}
                className={`group relative flex min-w-[150px] flex-1 flex-col gap-2 overflow-hidden rounded-[16px] border p-3 text-left transition-all duration-300 sm:min-w-[180px] sm:p-4 ${
                  isActive
                    ? "border-[#F2C785] bg-[#F2C785]/10"
                    : "border-white/15 bg-white/5 hover:border-white/30 hover:bg-white/10"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[0.9rem] ${isActive ? "text-[#F2C785]" : "text-white/60"}`}
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {item.number}
                  </span>
                  <ArrowUpRight
                    className={`h-3.5 w-3.5 transition-transform duration-300 ${
                      isActive ? "text-[#F2C785]" : "text-white/40"
                    } group-hover:translate-x-0.5 group-hover:-translate-y-0.5`}
                  />
                </div>
                <p
                  className={`text-[0.82rem] leading-tight sm:text-[0.9rem] ${
                    isActive ? "text-[#FFF7EF]" : "text-white/75"
                  }`}
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  {item.name}
                </p>

                {/* Active progress bar */}
                <span className="relative mt-1 h-[2px] w-full overflow-hidden rounded-full bg-white/10">
                  {isActive && (
                    <motion.span
                      key={active}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 5, ease: "linear" }}
                      onAnimationComplete={() =>
                        setActive((prev) => (prev + 1) % outlets.length)
                      }
                      className="absolute inset-y-0 left-0 bg-[#F2C785]"
                    />
                  )}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}