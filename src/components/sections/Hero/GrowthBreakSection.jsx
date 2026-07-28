import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import cafePng from "@/assets/images/cafe.png";
import mascotPng from "@/assets/images/mascot.png";
import teaCupPng from "@/assets/images/cap.png";

const STATS = [
  { id: 1, value: 150000, suffix: "+", label: "Happy Customers Daily" },
  { id: 2, value: 10, suffix: "+", label: "Years experience" },
  { id: 3, value: 50, suffix: "+", label: "Franchise" },
  { id: 4, value: 250, suffix: "+", label: "Team Member" },
];

function ArrowUpRightIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none">
      <path d="M7 17 17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none">
      <path
        d="M12 4a4 4 0 0 0-4 4v2.2c0 .8-.24 1.58-.68 2.24L6 14.4h12l-1.32-1.96A4 4 0 0 1 16 10.2V8a4 4 0 0 0-4-4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9.8 18a2.4 2.4 0 0 0 4.4 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function formatNumber(value) {
  return new Intl.NumberFormat("en-IN").format(value);
}

function CountUpStat({ value, suffix, label, reduceMotion = false }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    if (reduceMotion) {
      setDisplay(value);
      return;
    }

    const controls = animate(0, value, {
      duration: value > 1000 ? 2.1 : 1.5,
      ease: [0.22, 1, 0.36, 1],
      onUpdate(latest) {
        setDisplay(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [inView, value, reduceMotion]);

  return (
    <div
      ref={ref}
      className="text-center lg:text-left"
    >
      <p
        className="text-[2.4rem] leading-none tracking-[-0.05em] text-[#fff4e8] sm:text-[3rem] lg:text-[3.7rem]"
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
      >
        {formatNumber(display)}
        {suffix}
      </p>
      <p
        className="mt-2 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[#d8b9a0] sm:text-[0.76rem]"
        style={{ fontFamily: "'Manrope', sans-serif" }}
      >
        {label}
      </p>
    </div>
  );
}

function NotifyButton() {
  const [notified, setNotified] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setNotified(true)}
      className={`group inline-flex min-h-[62px] items-center gap-3 rounded-full px-6 py-3.5 text-[0.8rem] font-bold uppercase tracking-[0.14em] transition duration-300 ${
        notified
          ? "bg-[#f4e7d8] text-[#3a2418]"
          : "bg-[#8a5637] text-[#fff4e8] hover:-translate-y-0.5 hover:bg-[#9a6240]"
      }`}
      style={{ fontFamily: "'Manrope', sans-serif" }}
    >
      <span
        className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${
          notified ? "bg-[#3a2418] text-[#fff4e8]" : "bg-[#f4e7d8] text-[#3a2418]"
        }`}
      >
        {notified ? <BellIcon /> : <ArrowUpRightIcon />}
      </span>

      <span>{notified ? "We are notified — launching soon" : "Android & iOS app soon"}</span>
    </button>
  );
}

export default function GrowthBreakSection({ reduceMotion = false }) {
  return (
    <section className="relative overflow-hidden bg-[#2a180f] px-4 py-16 text-[#fff4e8] sm:px-6 lg:px-10 lg:py-20">
      {/* grain */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-screen"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "220px 220px",
        }}
      />

      {/* soft amber glow */}
      <div className="pointer-events-none absolute left-[-80px] top-[10%] h-[240px] w-[240px] rounded-full bg-[#b8743d]/12 blur-3xl" />
      <div className="pointer-events-none absolute right-[-80px] bottom-[8%] h-[260px] w-[260px] rounded-full bg-[#d89a51]/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1320px]">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mb-10 flex flex-col items-center text-center"
        >
          <p
            className="text-[0.75rem] font-bold uppercase tracking-[0.18em] text-[#d7b89e]"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            A growing tea story
          </p>

          <h2
            className="mt-4 text-[3rem] leading-[0.9] tracking-[-0.05em] text-[#fff4e8] sm:text-[4rem] lg:text-[5.3rem]"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            BUILT WITH DAILY TRUST
          </h2>

          <p
            className="mt-4 max-w-[700px] text-[1rem] leading-[1.78] text-[#e6d2c1] sm:text-[1.08rem]"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            From everyday cups to growing outlets, these numbers reflect how far the brand has travelled — and how much further it is ready to go.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.1fr_0.95fr] lg:items-center">
          {/* left stats */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -18 }}
            whileInView={reduceMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="grid grid-cols-2 gap-8 lg:grid-cols-1 lg:gap-10"
          >
            <CountUpStat value={150000} suffix="+" label="Happy Customers Daily" reduceMotion={reduceMotion} />
            <CountUpStat value={10} suffix="+" label="Years experience" reduceMotion={reduceMotion} />
          </motion.div>

          {/* center visual stage */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.04 }}
            className="relative mx-auto min-h-[360px] w-full max-w-[620px] sm:min-h-[420px] lg:min-h-[520px]"
          >
            {/* brown stage */}
            <div className="absolute left-1/2 top-[9%] h-[240px] w-[92%] -translate-x-1/2 rounded-[36px] bg-[#5a3220] shadow-[0_24px_46px_rgba(0,0,0,0.24)] sm:h-[280px] lg:h-[340px]" />

            {/* main cafe png */}
            <div className="absolute bottom-[10px] left-1/2 z-20 w-[92%] max-w-[520px] -translate-x-1/2">
              <img
                src={cafePng}
                alt="Thatha Tea growth visual"
                width={1400}
                height={900}
                loading="lazy"
                className="h-auto w-full object-contain drop-shadow-[0_26px_42px_rgba(0,0,0,0.28)]"
              />
            </div>

            {/* floating cup */}
            <motion.div
              animate={reduceMotion ? {} : { y: [0, -10, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-[2%] top-[2%] z-30 w-[110px] sm:w-[130px] lg:right-[4%] lg:top-[8%] lg:w-[150px]"
            >
              <img
                src={teaCupPng}
                alt="Tea cup accent"
                width={500}
                height={500}
                loading="lazy"
                className="h-auto w-full object-contain drop-shadow-[0_16px_22px_rgba(0,0,0,0.22)]"
              />
            </motion.div>

            {/* mascot accent */}
            <motion.div
              animate={reduceMotion ? {} : { y: [0, 8, 0] }}
              transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[8%] left-[1%] z-30 w-[84px] sm:w-[96px] lg:bottom-[12%] lg:left-[2%] lg:w-[110px]"
            >
              <img
                src={mascotPng}
                alt="Thatha Tea mascot accent"
                width={420}
                height={420}
                loading="lazy"
                className="h-auto w-full object-contain drop-shadow-[0_12px_18px_rgba(0,0,0,0.22)]"
              />
            </motion.div>
          </motion.div>

          {/* right stats + app CTA */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 18 }}
            whileInView={reduceMotion ? {} : { opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="grid gap-8 lg:justify-items-start"
          >
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-1 lg:gap-10">
              <CountUpStat value={50} suffix="+" label="Franchise" reduceMotion={reduceMotion} />
              <CountUpStat value={250} suffix="+" label="Team Member" reduceMotion={reduceMotion} />
            </div>

            <div className="pt-2">
              <p
                className="mb-3 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[#cda98c]"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                Coming next
              </p>

              <NotifyButton />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}