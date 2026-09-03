import { motion } from "framer-motion";
import mascot from "@/assets/images/mascot.png";
import bgimage from "@/assets/images/paper-bg.webp";

const ACCENT = "#b56322";
const DARK = "#2b1a11";
const MUTED = "#765844";

import oldmanTea from "@/assets/images/story/oldman-tea.png";
import stall from "@/assets/images/story/stall11.png";
import growth from "@/assets/images/story/growth.png";
import story from "@/assets/images/story/story11.png";
import order from "@/assets/images/story/orders.png";
import applications from "@/assets/images/story/application.png";
import insight from "@/assets/images/story/insight.png";

const PLACEHOLDERS = {
  kettle: story,
  stall:
    "https://placehold.co/700x500/e8d5bb/5a3824?text=TEA+STALL",
  tea:
    "https://placehold.co/700x500/e8d5bb/5a3824?text=TEA+CUP",
  book:
    "https://placehold.co/700x500/e8d5bb/5a3824?text=VINTAGE+BOOK",

  background: oldmanTea,

  growth: growth,
  timeline:
    "https://placehold.co/700x300/eee0cb/65442d?text=TIMELINE",
  orders: order,
  customers: applications,
  applications: insight,
};

function HeartDivider() {
  return (
    <div className="flex items-center gap-3 text-[#8e6a53]">
      <span className="h-px w-12 bg-current/50" />

      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 19s-6.5-4.2-6.5-9.1A3.9 3.9 0 0 1 12 7.4a3.9 3.9 0 0 1 6.5 2.5C18.5 14.8 12 19 12 19Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>

      <span className="h-px w-12 bg-current/50" />
    </div>
  );
}

/*
|--------------------------------------------------------------------------
| Floating Data Image
|--------------------------------------------------------------------------
*/

function DataCard({
  src,
  alt,
  className = "",
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay,
      }}
      animate={{
        y: [0, -6, 0],
      }}
      className={`
        relative overflow-hidden
        rounded-[18px]
        border border-[#8f6b50]/30
        bg-[#f8ead7]/70
        p-2
        shadow-[0_15px_35px_rgba(73,45,27,0.12)]
        backdrop-blur-[3px]
        ${className}
      `}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full rounded-[12px] object-cover"
      />

      <div className="pointer-events-none absolute inset-0 rounded-[18px] border border-white/30" />
    </motion.div>
  );
}

/*
|--------------------------------------------------------------------------
| Story Object
|--------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------
| Timeline
|--------------------------------------------------------------------------
*/

function StoryTimeline() {
  const milestones = [
    {
      year: "1991",
      title: "THE BEGINNING",
      active: true,
    },
    {
      year: "2000",
      title: "THE FIRST GROWTH",
    },
    {
      year: "2010",
      title: "A GROWING COMMUNITY",
    },
    {
      year: "2020",
      title: "DIGITAL TRANSFORMATION",
    },
    {
      year: "TODAY",
      title: "BUILT FOR TOMORROW",
    },
  ];

  return (
    <div className="relative mx-auto mt-10 w-full max-w-[1450px] px-4 sm:px-8 lg:mt-6 lg:px-12">
      <div className="absolute left-0 right-0 top-[24px] hidden h-px bg-[#876247]/30 lg:block" />

      <div className="relative flex flex-col gap-5 lg:grid lg:grid-cols-5 lg:gap-0">
        {milestones.map((item, index) => (
          <div
            key={item.year}
            className="relative flex items-center gap-4 lg:flex-col lg:items-center lg:text-center"
          >
            {/* timeline point */}
            <div
              className={`
                relative z-10
                flex h-12 w-12 shrink-0
                items-center justify-center
                rounded-full
                border
                ${
                  item.active
                    ? "border-[#9a511e] bg-[#9a511e] text-[#f9ead5]"
                    : "border-[#9b785e]/40 bg-[#f3e1c8] text-[#6e503b]"
                }
              `}
            >
              <span
                className="text-[0.72rem] font-bold"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                {item.year}
              </span>
            </div>

            <div className="lg:mt-4">
              <p
                className="text-[0.68rem] font-bold uppercase tracking-[0.12em] text-[#9a5b2b] sm:text-[0.72rem]"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                {item.year}
              </p>

              <p
                className="mt-1 text-[0.78rem] font-semibold uppercase tracking-[0.06em] text-[#4b3020]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {item.title}
              </p>
            </div>

            {index !== milestones.length - 1 && (
              <div className="absolute left-[24px] top-[48px] h-[22px] w-px bg-[#876247]/30 lg:hidden" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/*
|--------------------------------------------------------------------------
| Main Hero
|--------------------------------------------------------------------------
*/

export default function StoryHeroSection({ reduceMotion = false }) {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden bg-[#f8ecdc]"
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* parchment wash */}
      <div className="absolute inset-0 bg-[#f8ecdc]/90" />

      {/* subtle paper texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-multiply">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(
                circle at 20% 20%,
                rgba(90,55,32,0.18) 0,
                transparent 30%
              ),
              radial-gradient(
                circle at 80% 70%,
                rgba(90,55,32,0.12) 0,
                transparent 28%
              )
            `,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1700px] px-4 pb-8 pt-8 sm:px-6 sm:pt-12 lg:min-h-screen lg:px-10 lg:pt-14">
        {/* ================================================================
            TOP CONTENT
        ================================================================ */}

        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[0.85fr_1.45fr_0.95fr] lg:gap-4">
          {/* ============================================================
              LEFT — STORY TEXT
          ============================================================ */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: -30,
                  }
            }
            whileInView={
              reduceMotion
                ? {}
                : {
                    opacity: 1,
                    x: 0,
                  }
            }
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              order-1
              relative
              z-30
              flex
              flex-col
              justify-start
              pt-2

              lg:order-none
              lg:pt-16

              max-lg:contents
            "
          >
            <p
              className="
                order-1
                flex
                items-center
                gap-2
                text-[0.75rem]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#a25c2c]

                lg:order-none
              "
              style={{
                fontFamily: "'Manrope', sans-serif",
              }}
            >
              <span className="h-px w-7 bg-[#a25c2c]" />
              Our Story
            </p>

            <h1
              className="
                order-1
                mt-5
                text-[3.6rem]
                leading-[0.87]
                tracking-[-0.02em]
                text-[#291810]

                sm:text-[4.8rem]
                md:text-[5.5rem]
                lg:order-none
                lg:text-[5.6rem]
                xl:text-[6.3rem]
              "
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
              }}
            >
              FROM A
              <br />
              DREAM
              <br />
              <span style={{ color: ACCENT }}>IN 1991.</span>
            </h1>

            <div className="order-1 mt-7 lg:order-none">
              <HeartDivider />
            </div>

            {/* ==========================================================
                STORY PARAGRAPH
                Mobile: AFTER mascot + overlay artwork
                Desktop: stays in original left position
            ========================================================== */}

            <p
              className="
                order-3
                mt-7
                max-w-[390px]
                text-[0.98rem]
                leading-[1.8]
                text-[#50392c]

                sm:text-[1.05rem]
                lg:order-none
              "
              style={{
                fontFamily: "'Manrope', sans-serif",
              }}
            >
              What began in 1991 with a simple dream and a brass kettle has
              grown into a tea brand built around people, tradition and
              technology.
            </p>

            <p
              className="
                order-3
                mt-4
                max-w-[390px]
                text-[0.9rem]
                leading-[1.75]
                text-[#806653]

                lg:order-none
              "
              style={{
                fontFamily: "'Manrope', sans-serif",
              }}
            >
              The heart remains old school. The way we operate is anything
              but.
            </p>

            <div className="order-3 mt-7 flex flex-wrap gap-3 lg:order-none">
              <div className="rounded-full border border-[#8b684e]/30 bg-[#f4e3cc]/70 px-4 py-2">
                <span
                  className="text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[#684632]"
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                  }}
                >
                  Since 1991
                </span>
              </div>

              <div className="rounded-full border border-[#8b684e]/30 bg-[#f4e3cc]/70 px-4 py-2">
                <span
                  className="text-[0.65rem] font-bold uppercase tracking-[0.12em] text-[#684632]"
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                  }}
                >
                  People First
                </span>
              </div>
            </div>
          </motion.div>

          {/* ============================================================
              CENTER — MASCOT + HISTORY
          ============================================================ */}

          <div
            className="
              order-2
              relative
              min-h-[420px]
              overflow-visible
              sm:min-h-[700px]

              lg:order-none
              lg:min-h-[760px]
            "
          >
            {/* historical illustration behind mascot */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      scale: 0.96,
                    }
              }
              whileInView={
                reduceMotion
                  ? {}
                  : {
                      opacity: 0.28,
                      scale: 1,
                    }
              }
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
              }}
              className="absolute inset-x-[-5%] top-[15%] z-0"
            >
              {/* Keeping your existing commented image exactly as provided */}

              {/* <img
                src={PLACEHOLDERS.background}
                alt=""
                className="h-auto w-full object-contain mix-blend-multiply"
              /> */}
            </motion.div>

            {/* small year stamp */}

            {/* <div className="absolute left-1/2 top-5 z-20 sm:hidden -translate-x-1/2">
              <div className="rounded-full border border-[#886348]/30 bg-[#f3dfc5]/80 px-5 py-2 shadow-sm">
                <span
                  className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-[#76513a]"
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                  }}
                >
                  EST. 1991
                </span>
              </div>
            </div> */}

            {/* ========================================================
                MASCOT
            ======================================================== */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 35,
                    }
              }
              whileInView={
                reduceMotion
                  ? {}
                  : {
                      opacity: 1,
                      y: 0,
                    }
              }
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.8,
              }}
              className="
                absolute
                bottom-[105px]
                left-1/2
                z-20
                w-[90%]
                max-w-[710px]
                -translate-x-1/2

                sm:w-[82%]

                lg:bottom-[155px]
              "
            >
              <img
                src={mascot}
                alt="Thatha Tea mascot"
                className="h-auto w-full object-contain"
              />
            </motion.div>

            {/* ========================================================
                HISTORICAL OBJECTS / BOTTOM ARTWORK
            ======================================================== */}

            <motion.div
              initial={
                reduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 25,
                      scale: 0.96,
                    }
              }
              whileInView={
                reduceMotion
                  ? {}
                  : {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }
              }
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.7,
              }}
              className="
                absolute
                bottom-[-10px]
                sm:bottom-[30px]
                lg:bottom-[20px]
                left-1/2
                z-30
                -translate-x-1/6
                lg:-translate-x-1/2
                w-max
                overflow-visible
              "
            >
              <img
                src={PLACEHOLDERS.kettle}
                alt="Vintage tea heritage"
                className="
                  h-auto
                  w-[105vw]
                  max-w-none
                  object-contain

                  sm:w-[105vw]

                  lg:w-[70vw]
                  xl:w-[62vw]
                  2xl:w-[72vw]
                "
              />
            </motion.div>
          </div>

          {/* ============================================================
              RIGHT — DATA / ANALYTICS
          ============================================================ */}

          <motion.div
            initial={
              reduceMotion
                ? false
                : {
                    opacity: 0,
                    x: 30,
                  }
            }
            whileInView={
              reduceMotion
                ? {}
                : {
                    opacity: 1,
                    x: 0,
                  }
            }
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
              order-4
              relative
              z-30

              lg:order-none
              lg:pt-10
            "
          >
            {/* dashboard heading */}

            <div className="mb-4 flex items-end justify-between">
              <div>
                <p
                  className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[#9c5c30]"
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                  }}
                >
                  Then → Now
                </p>

                <h3
                  className="mt-1 text-[2rem] leading-none text-[#382116]"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                  }}
                >
                  BREWING THE FUTURE
                </h3>
              </div>

              <div className="rounded-full border border-[#876247]/30 bg-[#f2dfc6]/80 px-3 py-1">
                <span
                  className="text-[0.58rem] font-bold uppercase tracking-[0.12em] text-[#73523c]"
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                  }}
                >
                  Live Story
                </span>
              </div>
            </div>

            {/* BIG GRAPH */}

            <DataCard
              src={PLACEHOLDERS.growth}
              alt="Growth overview"
              delay={0.1}
              className="h-[190px] w-full sm:h-[220px]"
            />

            {/* MINI DATA CARDS */}

            <div className="mt-3 grid grid-cols-2 gap-3">
              <DataCard
                src={PLACEHOLDERS.orders}
                alt="Orders overview"
                delay={0.2}
                className="h-[130px]"
              />

              <DataCard
                src={PLACEHOLDERS.customers}
                alt="Customer growth"
                delay={0.3}
                className="h-[130px]"
              />
            </div>

            {/* APPLICATION / DIGITAL OPERATIONS */}

            <DataCard
              src={PLACEHOLDERS.applications}
              alt="Digital operations"
              delay={0.4}
              className="mt-3 h-[150px]"
            />

            {/* LIVE METRICS */}

            <div className="mt-3 grid grid-cols-3 gap-2">
              <div className="rounded-[14px] border border-[#876247]/25 bg-[#f5e3cc]/65 p-3">
                <p
                  className="text-[0.58rem] uppercase tracking-[0.1em] text-[#85634b]"
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                  }}
                >
                  Since
                </p>

                <p
                  className="mt-1 text-[1.55rem] leading-none text-[#43291b]"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                  }}
                >
                  1991
                </p>
              </div>

              <div className="rounded-[14px] border border-[#876247]/25 bg-[#f5e3cc]/65 p-3">
                <p
                  className="text-[0.58rem] uppercase tracking-[0.1em] text-[#85634b]"
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                  }}
                >
                  Today
                </p>

                <p
                  className="mt-1 text-[1.55rem] leading-none text-[#43291b]"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                  }}
                >
                  Growing
                </p>
              </div>

              <div className="rounded-[14px] border border-[#876247]/25 bg-[#f5e3cc]/65 p-3">
                <p
                  className="text-[0.58rem] uppercase tracking-[0.1em] text-[#85634b]"
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                  }}
                >
                  Next
                </p>

                <p
                  className="mt-1 text-[1.55rem] leading-none text-[#43291b]"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                  }}
                >
                  2026+
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ================================================================
            QUOTE STRIP
        ================================================================ */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 15,
                }
          }
          whileInView={
            reduceMotion
              ? {}
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="order-5 mx-auto mt-8 max-w-[850px] text-center lg:order-none lg:mt-2"
        >
          <p
            className="text-[1.15rem] italic leading-[1.5] text-[#604432] sm:text-[1.35rem]"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            “The recipe stayed the same. The way we built the future did not.”
          </p>
        </motion.div>

        {/* ================================================================
            STATIC TIMELINE — HIDDEN ON MOBILE
        ================================================================ */}

        <div className="hidden lg:block">
          <StoryTimeline />
        </div>
      </div>
    </section>
  );
}