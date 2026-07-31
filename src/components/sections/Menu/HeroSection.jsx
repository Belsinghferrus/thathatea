import { motion } from "framer-motion";
import heroMainPng from "@/assets/images/menu/menu-hero.png"; // main bakery board / tea / cookie image
import bakerySketchPng from "@/assets/images/menu/sketch.png"; // faint drawing behind hero


const ACCENT = "#b56322";
const INK = "#24150e";
const BODY = "#4f4036";

function CoffeeDivider() {
    return (
      <div className="flex items-center justify-center gap-2 text-[#a87858]">
        <span className="h-px w-16 bg-current/45 sm:w-24" />
  
        <svg
          viewBox="0 0 14 14"
          aria-hidden="true"
          className="h-3 w-3"
          fill="none"
        >
          <circle cx="7" cy="7" r="2.2" stroke="currentColor" strokeWidth="1.2" />
        </svg>
  
        <svg
          viewBox="0 0 52 34"
          aria-hidden="true"
          className="h-7 w-12 sm:h-8 sm:w-14"
          fill="none"
        >
          <path
            d="M20 7c0-1.6 1.3-2.3 1.3-3.8M26 8c0-1.8 1.5-2.4 1.5-4M32 7c0-1.6 1.3-2.3 1.3-3.8"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
          <path
            d="M14 12h18c0 7-3.5 11.2-9 11.2S14 19 14 12Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M32 14h3.2c2.2 0 3.5 1.1 3.5 3 0 2-1.5 3.4-4 3.4H32"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 27c3 1.5 8.3 2.2 12 2.2 4.5 0 9.5-.7 13-2.2"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
  
        <svg
          viewBox="0 0 14 14"
          aria-hidden="true"
          className="h-3 w-3"
          fill="none"
        >
          <circle cx="7" cy="7" r="2.2" stroke="currentColor" strokeWidth="1.2" />
        </svg>
  
        <span className="h-px w-16 bg-current/45 sm:w-24" />
      </div>
    );
  }
function MadeWithLoveBadge() {
    return (
      <div className="relative h-[138px] w-[138px] rotate-[-10deg] sm:h-[160px] sm:w-[160px] lg:h-[196px] lg:w-[196px]">
        <svg
          viewBox="0 0 220 220"
          className="h-full w-full"
          aria-hidden="true"
        >
          <defs>
            <path
              id="topArc"
              d="M 35 110 A 75 75 0 0 1 185 110"
            />
            <path
              id="bottomArc"
              d="M 185 110 A 75 75 0 0 1 35 110"
            />
  
            <filter id="roughen">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.9"
                numOctaves="2"
                seed="8"
                result="noise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale="0.8"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
  
            <mask id="distressMask">
              <rect width="220" height="220" fill="white" />
              <g opacity="0.22">
                <path
                  d="M24 34l18 10M60 20l11 20M130 18l12 14M178 28l18 8M193 72l-14 15M204 122l-18 6M186 170l-13-10M142 196l-20-8M91 198l-11-14M40 180l10-20M18 128l17-8M20 78l14 11"
                  stroke="black"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <circle cx="52" cy="58" r="4" fill="black" />
                <circle cx="168" cy="54" r="3" fill="black" />
                <circle cx="182" cy="150" r="4" fill="black" />
                <circle cx="62" cy="172" r="3" fill="black" />
                <circle cx="110" cy="27" r="2.5" fill="black" />
                <circle cx="110" cy="193" r="2.5" fill="black" />
              </g>
            </mask>
          </defs>
  
          {/* base paper tone */}
          <circle cx="110" cy="110" r="102" fill="#f8f0e4" />
          <circle cx="110" cy="110" r="99" fill="none" stroke="#6f4c38" strokeOpacity="0.35" strokeWidth="2" />
  
          {/* distressed outer ring */}
          <g mask="url(#distressMask)" filter="url(#roughen)">
            <circle
              cx="110"
              cy="110"
              r="97"
              fill="none"
              stroke="#6f4c38"
              strokeWidth="8"
              strokeOpacity="0.88"
            />
            <circle
              cx="110"
              cy="110"
              r="68"
              fill="none"
              stroke="#6f4c38"
              strokeWidth="3.5"
              strokeOpacity="0.75"
            />
          </g>
  
          {/* separator dots */}
          <circle cx="33" cy="110" r="4" fill="#6f4c38" fillOpacity="0.85" />
          <circle cx="187" cy="110" r="4" fill="#6f4c38" fillOpacity="0.85" />
  
          {/* top curved text */}
          <text
            fill="#4f3124"
            fontSize="13"
            fontWeight="800"
            letterSpacing="2.8"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            <textPath href="#topArc" startOffset="50%" textAnchor="middle">
              MADE WITH
            </textPath>
          </text>
  
          {/* bottom curved text */}
          <text
            fill="#4f3124"
            fontSize="13"
            fontWeight="800"
            letterSpacing="2.8"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            <textPath href="#bottomArc" startOffset="50%" textAnchor="middle">
              PASSION
            </textPath>
          </text>
  
          {/* stars ring */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i / 12) * Math.PI * 2 - Math.PI / 2;
            const x = 110 + Math.cos(angle) * 58;
            const y = 110 + Math.sin(angle) * 58;
  
            return (
              <text
                key={i}
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#6f4c38"
                fillOpacity="0.72"
                fontSize="10"
                style={{ fontFamily: "serif" }}
              >
                ★
              </text>
            );
          })}
  
          {/* center content */}
          <g>
            <text
              x="110"
              y="92"
              textAnchor="middle"
              fill="#2f1a12"
              fontSize="14"
              fontWeight="700"
              letterSpacing="2.2"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              LOVE &
            </text>
  
            <text
              x="110"
              y="116"
              textAnchor="middle"
              fill="#2f1a12"
              fontSize="27"
              letterSpacing="1.1"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              HANDCRAFT
            </text>
  
            <g transform="translate(110 140)">
              <path
                d="M0 10s-8-5.2-8-11.1A4.7 4.7 0 0 1 0-5a4.7 4.7 0 0 1 8 3.9C8 4.8 0 10 0 10Z"
                fill="none"
                stroke="#6f4c38"
                strokeWidth="1.7"
                strokeLinejoin="round"
              />
            </g>
          </g>
  
          {/* faint grain dots */}
          <g opacity="0.18" fill="#6f4c38">
            <circle cx="74" cy="64" r="1" />
            <circle cx="142" cy="58" r="1" />
            <circle cx="157" cy="148" r="1" />
            <circle cx="82" cy="156" r="1" />
            <circle cx="112" cy="45" r="1" />
            <circle cx="126" cy="171" r="1" />
          </g>
        </svg>
      </div>
    );
  }

export default function MenuHeroSection({ reduceMotion = false }) {
  return (
    <section
      className="relative w-full py-4 overflow-hidden bg-[#f6ede3]"
    //   style={{
    //     minHeight: "100vh",
    //     backgroundImage: `url(${paperTexturePng})`,
    //     backgroundSize: "cover",
    //     backgroundPosition: "center",
    //     backgroundRepeat: "no-repeat",
    //   }}
    >
      {/* paper wash */}
      <div className="absolute inset-0 bg-[#f8efe6]/72" />

      {/* subtle noise */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-multiply">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(120,72,38,0.18) 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-[1600px] items-stretch px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-0">
        <div className="grid w-full items-center gap-8 lg:grid-cols-[0.34fr_0.66fr]">
          {/* LEFT TEXT */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -26 }}
            whileInView={reduceMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="relative z-20 flex min-h-[320px] flex-col justify-center pt-6 sm:pt-8 lg:min-h-screen lg:pt-0"
          >
            <div className="max-w-[430px] lg:pl-6">
              <p
                className="text-[0.82rem] font-bold uppercase tracking-[0.24em] text-[#ab6230]"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                Thatha Tea Menu
              </p>

              <h1
                className="mt-4 text-[4.2rem] leading-[0.88] tracking-[-0.03em] text-[#22130c] sm:text-[5.2rem] md:text-[6rem] lg:text-[8rem]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                BAKERY
              </h1>

              <p
                className="mt-4 text-[2rem] leading-[1.02] sm:text-[2.4rem] lg:text-[3rem]"
                style={{
                    fontFamily: "'Sacramento', cursive",
                    color: ACCENT,
                }}
              >
                Baked fresh. Just for you.
              </p>

              <div className="mt-6 h-px w-full max-w-[320px] bg-[#c9a88a]/60" />

              <p
                className="mt-8 max-w-[360px] text-[1.08rem] leading-[1.95] text-[#46372e] sm:text-[1.18rem]"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                Freshly baked every day with the finest ingredients, crafted to
                pair beautifully with every cup and every craving.
              </p>

              <div className="mt-10 flex justify-start sm:mt-12">
                <CoffeeDivider />
              </div>
            </div>
          </motion.div>

          {/* RIGHT VISUAL STAGE */}
          <div className="relative z-10 flex min-h-[420px] items-center justify-center overflow-hidden lg:min-h-screen">
  {/* mobile sketch */}
  <motion.div
    initial={reduceMotion ? false : { opacity: 0, y: 12 }}
    whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: 0.04 }}
    className="pointer-events-none absolute left-[30%] top-[0%] z-0 w-[82%] -translate-x-1/2 sm:top-[4%] sm:w-[62%] lg:hidden"
  >
    <img
      src={bakerySketchPng}
      alt=""
      aria-hidden="true"
      width={900}
      height={900}
      loading="lazy"
      className="h-auto w-full object-contain opacity-[0.64]"
    />
  </motion.div>

  {/* desktop sketch */}
  <motion.div
    initial={reduceMotion ? false : { opacity: 0, y: 18 }}
    whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay: 0.05 }}
    className="pointer-events-none absolute left-[0%] top-[10%] z-10 hidden w-[64%] lg:block"
  >
    <img
      src={bakerySketchPng}
      alt=""
      aria-hidden="true"
      width={900}
      height={900}
      loading="lazy"
      className="h-auto w-full object-contain opacity-[0.64]"
    />
  </motion.div>

  {/* stamp badge */}
  <motion.div
    initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
    whileInView={reduceMotion ? {} : { opacity: 1, scale: 1 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.5, delay: 0.12 }}
    className="absolute right-[2%] top-[1%] z-30 sm:right-[4%] sm:top-[2%] lg:right-[5%] lg:top-[10%]"
  >
    <MadeWithLoveBadge />
  </motion.div>

  {/* tiny accent beans / dots */}
  <div className="pointer-events-none absolute inset-0 z-10 hidden lg:block">
    <span className="absolute left-[18%] top-[56%] h-3 w-3 rounded-full bg-[#7d4a2c]/30" />
    <span className="absolute left-[23%] top-[60%] h-2.5 w-2.5 rounded-full bg-[#7d4a2c]/20" />
    <span className="absolute left-[68%] top-[73%] h-3 w-3 rounded-full bg-[#7d4a2c]/20" />
    <span className="absolute right-[11%] top-[62%] h-2.5 w-2.5 rounded-full bg-[#7d4a2c]/24" />
  </div>

  {/* hero image */}
  <motion.div
    initial={reduceMotion ? false : { opacity: 0, y: 26, scale: 0.98 }}
    whileInView={reduceMotion ? {} : { opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.65 }}
    className="relative z-20 mx-auto mt-8 flex w-full items-end justify-center  lg:absolute lg:bottom-[2%] lg:right-[-1%] lg:mt-0 lg:w-[98%]"
  >
    <img
      src={heroMainPng}
      alt="Bakery assortment with tea cup, bread, brownie and cookie"
      width={1800}
      height={1300}
      loading="eager"
      className="h-auto w-full max-w-[920px] object-contain drop-shadow-[0_34px_40px_rgba(69,39,22,0.20)] sm:max-w-[980px] lg:max-w-none"
    />
  </motion.div>
</div>
        </div>
      </div>
    </section>
  );
}