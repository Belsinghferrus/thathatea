import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

import mapPaper from "@/assets/images/contact/map.png";   // your map image
import leafSketch from "@/assets/images/story/sketch2.png"; // decorative leaf PNG
import kettlePng from "@/assets/images/cafe2.png";     // left kettle + cup png

export default function GrowthMapSection() {
  return (
    <section className="relative overflow-hidden bg-[#FBF1E5] py-14 text-[#4B2A16] sm:py-18 lg:py-20">
      {/* subtle paper texture */}
      <div className="absolute inset-0 opacity-[0.08] mix-blend-screen">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(191,147,103,0.35) 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>

      {/* right leaf sketch */}
      <img
        src={leafSketch}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-[10%] h-44 w-auto opacity-40 sm:h-56 lg:h-64"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-5 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        {/* LEFT: heading + story */}
        <motion.div
          initial={{ opacity: 0, x: -18, y: 8 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-xl lg:w-[42%]"
        >
          <p className="text-[0.8rem] font-semibold uppercase tracking-[0.26em] text-[#A16635]">
            Growing Cup by Cup
          </p>
          <h2
            className="mt-3 text-[2.5rem] leading-[0.95] text-[#3D2413] sm:text-[3.1rem] lg:text-[3.5rem]"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.02em" }}
          >
            FROM ONE STALL
            <br />
            TO MANY TEA FAMILIES.
          </h2>
          <p className="mt-4 text-[0.98rem] leading-7 text-[#5E4637] sm:text-[1.02rem]">
            Our story has travelled beyond one counter in Tamil Nadu. Today, Thatha Tea
            brews in new towns, new streets and new conversations — still with the same
            kettle, warmth and taste.
          </p>
        </motion.div>

        {/* RIGHT: illustrated growth map scene */}
        <motion.div
          initial={{ opacity: 0, x: 18, y: 10, scale: 0.97 }}
          whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="relative w-full max-w-[520px] lg:w-[52%]"
        >
          {/* map card */}
          <div className="relative overflow-hidden rounded-[32px] border border-[#E3C8A9]/80 bg-[#F8ECDD]/95 shadow-[0_22px_44px_rgba(82,49,27,0.16)]">
            {/* map background */}
            <img
              src={mapPaper}
              alt="Thatha Tea growth map"
              className="h-[260px] w-full object-cover sm:h-[300px] lg:h-[320px]"
            />

            {/* overlay gradient for readability */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#4B2E1F]/38 via-transparent to-transparent" />

            {/* drawn route + pins */}
            <svg
              viewBox="0 0 320 220"
              className="pointer-events-none absolute inset-x-0 top-4 mx-auto h-[210px] w-[88%]"
              fill="none"
            >
              {/* route line */}
              <path
                d="M30 180C60 150 90 150 120 140C150 130 180 110 205 90C225 75 243 60 270 50"
                stroke="#F7EBDD"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="6 8"
                opacity="0.85"
              />

              {/* pins */}
              {[
                { x: 46, y: 172, label: "Tamil Nadu" },
                { x: 104, y: 150, label: "Karnataka" },
                { x: 158, y: 150, label: "Telangana" },
                { x: 205, y: 98, label: "Maharashtra" },
                { x: 248, y: 72, label: "More" },
                { x: 88, y: 210, label: "Tamil Nadu" },
                { x: 122, y: 77, label: "Karnataka" },
                { x: 264, y: 199, label: "Telangana" },
              ].map((p, i) => (
                <g key={i} transform={`translate(${p.x},${p.y})`}>
                  <circle r={8} fill="#C95123" stroke="#FBEEDC" strokeWidth="2" />
                  <circle
                    r={13}
                    stroke="#C95123"
                    strokeWidth="1.5"
                    strokeDasharray="2 3"
                    opacity="0.7"
                  />
                </g>
              ))}
            </svg>

            {/* labels */}
            <div className="pointer-events-none absolute inset-0 flex items-end justify-between px-6 pb-4 text-[0.78rem] uppercase tracking-[0.14em] text-[#FBEEDC]/90">
              <span>South India</span>
              <span>New Cities Brewing</span>
            </div>

            {/* kettle png bottom-left */}
            <img
              src={kettlePng}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-6 left-0 h-28 w-auto sm:h-32 lg:h-42"
            />


           

            {/* outlets badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 8 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="absolute left-5 top-5 flex h-25 w-25 items-center justify-center rounded-full border border-[#E7B47F]/70 bg-[#4A2C1A]/92 text-center shadow-[0_12px_28px_rgba(0,0,0,0.35)]"
            >
              <div className="relative flex h-20 w-20 flex-col items-center justify-center rounded-full border border-[#E7B47F]/80">
                <p className="text-[0.52rem] uppercase tracking-[0.16em] text-[#F3D8B0]">
                  Outlets
                </p>
                <p
                  className="text-[1.2rem] leading-none text-[#F8E4C7]"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  50+
                </p>
                <p className="mt-0.5 text-[0.52rem] uppercase tracking-[0.16em] text-[#F3D8B0]">
                  & counting
                </p>
              </div>
            </motion.div>

            {/* pin legend */}
            <div className="absolute right-5 top-[40%] hidden items-center gap-2 rounded-full bg-[#4B2E1F]/85 px-3 py-1 text-[0.7rem] uppercase tracking-[0.16em] text-[#FBEEDC] sm:flex">
              <MapPin className="h-3.5 w-3.5" strokeWidth={1.7} />
              <span>Thatha Tea Cities</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}