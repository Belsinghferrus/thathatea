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

function PlayStoreIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="currentColor">
      <path d="M3 2.8v18.4c0 .5.5.8.9.5l10.7-9.2L3.9 2.3A.63.63 0 0 0 3 2.8Zm13.1 8.8 2.5-2.1-3-1.7-2.2 1.9 2.7 1.9Zm2.5 3-2.5-2.1-2.7 1.9 2.2 1.9 3-1.7ZM4.7 22l10.7-6.2-2.8-2L3.9 21.5c-.4.3-.1.8.4.5Zm10.7-12L4.7 3.8l7.9 7.2 2.8-2Z" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5" fill="currentColor">
      <path d="M15.2 2.5c.1 1-.3 2-1 2.8-.8.8-1.8 1.3-2.9 1.2-.1-1 .3-2 1-2.7.8-.8 1.9-1.3 2.9-1.3ZM18.5 12.6c0-2.5 2-3.7 2.1-3.8-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.8.8-3.6.8s-2-.8-3.2-.8c-1.7 0-3.2 1-4 2.4-1.7 2.9-.4 7.1 1.2 9.4.8 1.1 1.7 2.4 2.9 2.3 1.1 0 1.6-.7 3-.7s1.8.7 3 .7c1.2 0 2-1.1 2.8-2.3.9-1.3 1.3-2.6 1.3-2.7-.1 0-2-.8-2-3.4Z" />
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
    <div className="text-center lg:text-left" ref={ref}>
      <p
        className="text-[2.45rem] leading-none tracking-[-0.05em] text-[#fff4e8] sm:text-[3rem] lg:text-[3.7rem]"
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

function StoreButton({ icon, label, sublabel, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group inline-flex min-h-[62px] items-center gap-3 rounded-2xl border border-[#eadbcd]/20 bg-[#f4e7d8] px-4 py-3 text-left text-[#2b1a12] shadow-[0_10px_22px_rgba(0,0,0,0.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#fff0e2]"
      style={{ fontFamily: "'Manrope', sans-serif" }}
    >
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#2b1a12] text-[#fff4e8] transition duration-300 group-hover:rotate-6">
        {icon}
      </span>

      <span className="flex flex-col">
        <span className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#8a6d59]">
          {sublabel}
        </span>
        <span className="text-[0.94rem] font-bold tracking-[0.01em]">
          {label}
        </span>
      </span>
    </button>
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

      <span>{notified ? "We are notified — launching soon" : "Notify me for launch"}</span>
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

      {/* glows */}
      <div className="pointer-events-none absolute left-[-80px] top-[10%] h-[240px] w-[240px] rounded-full bg-[#b8743d]/12 blur-3xl" />
      <div className="pointer-events-none absolute right-[-80px] bottom-[8%] h-[260px] w-[260px] rounded-full bg-[#d89a51]/10 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-[42%] h-[280px] w-[280px] -translate-x-1/2 rounded-full bg-[#8c5737]/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1320px]">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mb-12 flex flex-col items-center text-center"
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
            className="mt-4 max-w-[760px] text-[0.9rem] leading-[1.82] text-[#e6d2c1] sm:text-[1.08rem]"
            style={{ fontFamily: "'Manrope', self-serif" }}
          >
            Every cup served, every returning guest, and every new outlet adds to the story Thatha Tea has been building for years.
            This is not short-term noise - it is steady local trust, familiar taste, and a brand people continue to choose.
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
            <CountUpStat
              value={STATS[0].value}
              suffix={STATS[0].suffix}
              label={STATS[0].label}
              reduceMotion={reduceMotion}
            />
            <CountUpStat
              value={STATS[1].value}
              suffix={STATS[1].suffix}
              label={STATS[1].label}
              reduceMotion={reduceMotion}
            />
          </motion.div>

          {/* center visual stage */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.04 }}
            className="relative mx-auto min-h-[390px] w-full max-w-[620px] sm:min-h-[450px] lg:min-h-[540px]"
          >
            <div className="absolute left-1/2 top-[10%] h-[250px] w-[92%] -translate-x-1/2 rounded-[38px] bg-[#5a3220] shadow-[0_24px_46px_rgba(0,0,0,0.24)] sm:h-[300px] lg:h-[355px]" />

            <div className="absolute left-1/2 top-[5%] z-10 -translate-x-1/2 rounded-full border border-[#e8d7c6]/12 bg-[#f4e7d8]/10 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#f1ddca] backdrop-blur-sm"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Trusted across growing cities
            </div>

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

            <motion.div
              animate={reduceMotion ? {} : { y: [0, -10, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-[2%] top-[4%] z-30 w-[110px] sm:w-[130px] lg:right-[4%] lg:top-[8%] lg:w-[150px]"
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

            <div
              className="absolute bottom-[0] left-1/2 z-10 flex -translate-x-1/2 flex-wrap items-center justify-center gap-2 rounded-full border border-[#eadac7]/10 bg-[#f4e7d8]/8 px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#e7d4c3] backdrop-blur-sm"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              <span>Daily tea moments</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#c88a3d]" />
              <span>Warm service</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#c88a3d]" />
              <span>Return visits</span>
            </div>
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
              <CountUpStat
                value={STATS[2].value}
                suffix={STATS[2].suffix}
                label={STATS[2].label}
                reduceMotion={reduceMotion}
              />
              <CountUpStat
                value={STATS[3].value}
                suffix={STATS[3].suffix}
                label={STATS[3].label}
                reduceMotion={reduceMotion}
              />
            </div>

            <div className="pt-2">
              <p
                className="mb-3 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[#cda98c]"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                Coming next
              </p>

              <h3
                className="text-[2rem] leading-[0.96] tracking-[-0.04em] text-[#fff4e8] sm:text-[2.4rem]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                OUR APP IS
                <br />
                ON THE WAY
              </h3>

              <p
                className="mt-3 max-w-[380px] text-[0.96rem] leading-[1.76] text-[#dcc6b7]"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                We’re building a smoother way to discover outlets, browse what’s available, and stay connected to Thatha Tea on the go.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:flex-col lg:items-start">
                <StoreButton
                  icon={<PlayStoreIcon />}
                  label="Google Play"
                  sublabel="Launching on"
                  onClick={() => {}}
                />
                <StoreButton
                  icon={<AppleIcon />}
                  label="App Store"
                  sublabel="Launching on"
                  onClick={() => {}}
                />
              </div>

              <div className="mt-5">
                <NotifyButton />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}