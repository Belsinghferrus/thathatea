// import { motion } from "framer-motion";
// import paperBG from '../../../assets/images/franchise/coffee-bg.jpg';
// import franchiseOutletFront from '../../../assets/images/franchise/outlet-bg.png';
// import tea from '../../../assets/images/franchise/tea-hero.png';

// const CARD_BROWN = "#3a2418";
// const ACCENT = "#c9752f";

// export default function FranchiseHeroSection({ reduceMotion = false }) {
//     return (
//         <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
//             {/* Background image, full-bleed */}
//             <img
//                 src={paperBG}
//                 alt=""
//                 className="absolute inset-0 h-full w-full object-cover"
//             />
//             <div className="absolute inset-0  " />

//             {/* CENTER PIECE — 70% of the page height, brown card 60% width, PNG 80% width */}
//             <div className="relative z-10 flex h-[40vh] py-10 w-full flex-col items-center justify-center">

//                 {/* Brown torn card — 60% width */}
               
//               <motion.div
//               initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
//               whileInView={reduceMotion ? {} : { opacity: 1, scale: 1 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.6 }}
//               className="relative z-10 mt-50 w-[60%] max-w-[760px]"
//               style={{ aspectRatio: "6 / 3" }}
//             >
//               {/* Irregular brown shape */}
//               <svg
//                 viewBox="0 0 1000 600"
//                 className="absolute inset-0 h-full w-full"
//                 preserveAspectRatio="none"
//                 aria-hidden="true"
//               >
//                 <path
//                   d="
//                     M90,70
//                     C130,45 185,65 235,55
//                     C270,48 285,18 320,18
//                     H470
//                     C505,18 520,38 530,92
//                     C540,42 555,18 590,18
//                     H715
//                     C760,18 800,38 845,30
//                     C900,22 935,35 940,55
//                     L940,430
//                     C920,438 915,455 922,485
//                     C928,510 918,535 895,545
//                     H125
//                     C96,545 72,530 70,500
//                     L70,392
//                     C98,390 108,374 108,350
//                     C108,324 98,306 70,302
//                     V120
//                     C70,92 76,79 90,70
//                     Z
//                   "
//                   fill={CARD_BROWN}
//                 />
//               </svg>
            
//               {/* Content */}
//               <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-8 py-10 text-center sm:px-12 lg:px-16">
//                 <p
//                   className="text-[0.8rem] font-bold uppercase tracking-[0.2em] text-[#f0d6b8] sm:text-[0.92rem]"
//                   style={{ fontFamily: "'Manrope', sans-serif" }}
//                 >
//                   Brewing Happiness
//                 </p>
            
//                 <p
//                   className="mt-2 text-[1rem] italic text-[#ead8c6] sm:text-[1.15rem]"
//                   style={{ fontFamily: "'Cormorant Garamond', serif" }}
//                 >
//                   Every outlet carries the warmth of our first cup.
//                 </p>
            
//                 <h1
//                   className="mt-5 text-[3.4rem] leading-[0.86] tracking-[-0.03em] text-white sm:text-[4.8rem] lg:text-[6.2rem]"
//                   style={{ fontFamily: "'Bebas Neue', sans-serif" }}
//                 >
//                   OUR OUTLETS
//                 </h1>
            
//                 <p
//                   className="mt-5 w-full max-w-[580px] text-[0.95rem] leading-[1.75] text-[#f3e6d8] sm:text-[1.02rem] lg:text-[1.08rem]"
//                   style={{ fontFamily: "'Manrope', sans-serif" }}
//                 >
//                   From one small tea stall in 1991 to 50+ outlets across Bangalore and growing,
//                   our journey has always been powered by consistency, comfort, and community.
//                   Thank you for being a part of every cup we serve.
//                 </p>
            
               
              
//               </div>
//             </motion.div>
//                 {/* PNG image — 80% width, overlapping the brown card */}
//                 <motion.div
//                     initial={reduceMotion ? false : { opacity: 0, y: 30 }}
//                     whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
//                     viewport={{ once: true, amount: 0.2 }}
//                     transition={{ duration: 0.6, delay: 0.15 }}
//                     className="relative z-20 -mt-24 w-[100%] max-w-[1320px] sm:-mt-32 lg:-mt-60"
//                 >
//                     <img
//                         src={franchiseOutletFront}
//                         alt="Thatha Tea outlet storefront"
//                         width={1800}
//                         height={700}
//                         loading="lazy"
//                         className="h-auto w-full object-contain"
//                     />
//                 </motion.div>
              
//             </div>


//         </section>
//     );
// }





import { motion } from "framer-motion";
import paperBG from "../../../assets/images/franchise/coffee-bg.jpg";
import franchiseOutletFront from "../../../assets/images/franchise/outlet-bg.png";
import tea from "../../../assets/images/franchise/tea-hero.png";

const CARD_BROWN = "#3a2418";
const ACCENT = "#c9752f";

function FranchiseStamp({ reduceMotion = false }) {
  return (
    <motion.div
      animate={reduceMotion ? {} : { rotate: [0, 6, 0, -6, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="absolute right-3 top-3 z-30 sm:right-5 sm:top-5 lg:right-6 lg:top-6"
    >
      <div className="relative flex h-[74px] w-[74px] items-center justify-center rounded-full border-2 border-[#d7b08b] bg-[#f8eee2]/95 shadow-[0_10px_20px_rgba(34,20,12,0.18)] sm:h-[86px] sm:w-[86px] lg:h-[96px] lg:w-[96px]">
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
          <defs>
            <path
              id="franchiseStampPath"
              d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0"
            />
          </defs>
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="#8a5a32"
            strokeWidth="1.5"
            strokeDasharray="2.5 4"
          />
          <text
            fontSize="7.6"
            fill="#6e4527"
            fontFamily="Manrope, sans-serif"
            fontWeight="700"
            letterSpacing="1.4"
          >
            <textPath href="#franchiseStampPath" startOffset="0%">
              THATHA TEA • EST. 1991 • THATHA TEA •
            </textPath>
          </text>
        </svg>

        <div className="relative z-10 text-center">
          <p
            className="text-[0.72rem] font-extrabold leading-none text-[#6e4527] sm:text-[0.8rem]"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            50+
          </p>
          <p
            className="mt-1 text-[0.5rem] font-bold uppercase tracking-[0.08em] text-[#8a5a32] sm:text-[0.55rem]"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            Outlets
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function BrownBoardShape() {
  return (
    <svg
      viewBox="0 0 1000 600"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="
          M88,74
          C124,46 186,66 238,54
          C282,44 306,18 338,18
          H462
          C504,18 523,34 536,92
          C548,38 571,18 608,18
          H770
          C826,18 882,24 932,46
          L932,424
          C908,438 900,462 910,492
          C918,516 910,535 888,546
          H138
          C98,546 70,522 70,482
          L70,398
          C102,395 114,374 114,346
          C114,320 104,302 70,296
          V126
          C70,98 74,82 88,74
          Z
        "
        fill={CARD_BROWN}
      />
    </svg>
  );
}

export default function FranchiseHeroSection({ reduceMotion = false }) {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      <img
        src={paperBG}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-[#f7ecd9]/10" />

      <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-4 pt-8 pb-0 sm:px-6 lg:px-10">
        <div className="relative flex h-[92vh] w-full max-w-[1500px] flex-col items-center justify-start sm:h-[94vh] lg:h-[100vh]">
          {/* BROWN BOARD */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
            whileInView={reduceMotion ? {} : { opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="
              relative z-10
              mt-6
              h-[60vh] w-[92%]
              sm:h-[56vh] sm:w-[82%]
              lg:mt-20 lg:h-auto lg:w-[60%] lg:max-w-[820px]
            "
            style={{
              aspectRatio: window?.innerWidth >= 1024 ? "6 / 3.4" : undefined,
            }}
          >
            <div className="relative h-full w-full lg:aspect-[6/3.4]">
              <BrownBoardShape />
              <FranchiseStamp reduceMotion={reduceMotion} />

              <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-5 py-8 text-center sm:px-8 sm:py-10 lg:px-14 lg:py-12">
                <p
                  className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#f0d6b8] sm:text-[0.8rem] lg:text-[0.9rem]"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  BREWING HAPPINESS
                </p>

                <p
                  className="mt-2 text-[0.92rem] italic leading-[1.35] text-[#ead8c6] sm:text-[1rem] lg:text-[1.2rem]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Every outlet carries the warmth of our first cup.
                </p>

                <h1
                  className="mt-4 text-[2.6rem] leading-[0.88] tracking-[-0.03em] text-white sm:text-[3.7rem] lg:mt-5 lg:text-[6rem]"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  OUR OUTLETS
                </h1>

                <p
                  className="mt-4 w-full max-w-[620px] text-[0.92rem] leading-[1.75] text-[#f3e6d8] sm:text-[1rem] lg:mt-5 lg:text-[1.08rem]"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  From one small tea stall in 1991 to 50+ outlets across
                  Bangalore and growing, our journey has always been powered by
                  consistency, comfort, and community. Thank you for being a
                  part of every cup we serve.
                </p>

                <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3 lg:mt-5">
                  <span
                    className="rounded-full border border-[#6c4a30] px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.08em] text-[#f0d6b8] sm:px-4 sm:text-[0.64rem] lg:text-[0.7rem]"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    Since 1991
                  </span>
                  <span
                    className="rounded-full border border-[#6c4a30] px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.08em] text-[#f0d6b8] sm:px-4 sm:text-[0.64rem] lg:text-[0.7rem]"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    50+ outlets
                  </span>
                  <span
                    className="rounded-full border border-[#6c4a30] px-3 py-1 text-[0.58rem] font-semibold uppercase tracking-[0.08em] text-[#f0d6b8] sm:px-4 sm:text-[0.64rem] lg:text-[0.7rem]"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    Bangalore & beyond
                  </span>
                </div>

                <p
                  className="mt-4 max-w-[420px] text-[0.76rem] italic leading-[1.5] text-[#e2c6a7] sm:text-[0.84rem] lg:mt-5 lg:text-[0.95rem]"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  “From one stall to a citywide ritual.”
                </p>
              </div>
            </div>
          </motion.div>

          {/* FRONT OUTLET IMAGE */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="
              relative z-20
              -mt-[14vh] w-[118%]
              sm:-mt-[16vh] sm:w-[108%]
              lg:-mt-70 lg:w-[100%] lg:max-w-[1320px]
            "
          >
            <img
              src={franchiseOutletFront}
              alt="Thatha Tea outlet storefront"
              width={1800}
              height={700}
              loading="lazy"
              className="h-auto w-full object-contain"
            />
          </motion.div>

          {/* OPTIONAL TEA IMAGE ACCENT - MOBILE HIDDEN FOR NOW */}
          {/* <img
            src={tea}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[10%] right-[2%] z-30  lg:w-[4%] sm:w-[14%] object-contain lg:block"
          /> */}
        </div>
      </div>
    </section>
  );
}