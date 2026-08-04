// FranchiseStatsMarquee.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";

const STATS = [
  {
    id: "outlets",
    value: "50+",
    line1: "OUTLETS",
    line2: "AND COUNTING",
    icon: "store",
  },
  {
    id: "areas",
    value: "20+",
    line1: "AREAS",
    line2: "COVERED",
    icon: "pin",
  },
  {
    id: "cups",
    value: "10L+",
    line1: "CUPS SERVED",
    line2: "EVERY MONTH",
    icon: "cup",
  },
  {
    id: "customers",
    value: "1M+",
    line1: "HAPPY",
    line2: "CUSTOMERS",
    icon: "people",
  },
  {
    id: "authentic",
    value: "100%",
    line1: "AUTHENTIC",
    line2: "EXPERIENCE",
    icon: "leaf",
  },
];

function StatIcon({ type, className = "" }) {
  const stroke = "#8b5a32";

  if (type === "store") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path d="M4 10l1-4h14l1 4" stroke={stroke} strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M4 10h16v9H4z" stroke={stroke} strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M9 19v-5h6v5" stroke={stroke} strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "pin") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path
          d="M12 21s7-6.2 7-11.3A7 7 0 1 0 5 9.7C5 14.8 12 21 12 21Z"
          stroke={stroke}
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="9.5" r="2.3" stroke={stroke} strokeWidth="1.5" />
      </svg>
    );
  }

  if (type === "cup") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <path d="M4 9h13v5a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V9Z" stroke={stroke} strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M17 10h1.5a2.5 2.5 0 0 1 0 5H17" stroke={stroke} strokeWidth="1.6" />
        <path d="M8 5c.5 1-1 1.5-.5 3M12 5c.5 1-1 1.5-.5 3" stroke={stroke} strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "people") {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="none">
        <circle cx="8" cy="8.5" r="2.2" stroke={stroke} strokeWidth="1.5" />
        <circle cx="16" cy="8.5" r="2.2" stroke={stroke} strokeWidth="1.5" />
        <circle cx="12" cy="6.5" r="2.2" stroke={stroke} strokeWidth="1.5" />
        <path d="M3.8 18c0-2.3 1.9-4.2 4.2-4.2S12.2 15.7 12.2 18" stroke={stroke} strokeWidth="1.5" />
        <path d="M11.8 18c0-2.3 1.9-4.2 4.2-4.2s4.2 1.9 4.2 4.2" stroke={stroke} strokeWidth="1.5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M4 20c8 1 14-3 16-14-9 0-15 4-16 14Z"
        stroke={stroke}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M6 18C9 13 13 9 19 6.5" stroke={stroke} strokeWidth="1.2" />
    </svg>
  );
}

function StatItem({ item }) {
  return (
    <div className="flex min-w-[260px] items-center gap-4 px-5 py-4 sm:min-w-[300px] sm:px-8 lg:min-w-[340px] lg:px-10">
      <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full border border-[#c9a37c] sm:h-20 sm:w-20">
        <StatIcon type={item.icon} className="h-8 w-8 sm:h-10 sm:w-10" />
      </div>

      <div className="flex min-w-0 flex-col">
        <p
          className="text-[2rem] font-extrabold leading-none text-[#5a2f14] sm:text-[2.4rem] lg:text-[2.7rem]"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          {item.value}
        </p>
        <p
          className="mt-1 text-[0.8rem] font-bold uppercase leading-[1.2] tracking-[0.05em] text-[#3e2a1d] sm:text-[0.92rem]"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          {item.line1}
        </p>
        <p
          className="text-[0.8rem] font-bold uppercase leading-[1.2] tracking-[0.05em] text-[#3e2a1d] sm:text-[0.92rem]"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          {item.line2}
        </p>
      </div>
    </div>
  );
}

export default function FranchiseStatsMarquee() {
  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    if (!trackRef.current) return;

    const ctx = gsap.context(() => {
      tweenRef.current = gsap.to(trackRef.current, {
        xPercent: -50,
        duration: 24,
        ease: "none",
        repeat: -1,
      });
    }, trackRef);

    return () => {
      ctx.revert();
    };
  }, []);

  const loopItems = [...STATS, ...STATS];

  return (
    <section className="relative w-full  py-6 sm:py-8 lg:py-10">
      <div className="mx-auto w-full max-w-[1600px] px-3 sm:px-5 lg:px-8">
        <div className="overflow-hidden rounded-[26px] border border-[#eadacc] bg-[#fffaf3] shadow-[0_10px_30px_rgba(77,45,24,0.06)]">
          <div
            ref={trackRef}
            className="flex w-max items-stretch"
            onMouseEnter={() => tweenRef.current?.pause()}
            onMouseLeave={() => tweenRef.current?.resume()}
          >
            {loopItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex items-center border-r border-dashed border-[#dbcab8] last:border-r-0"
              >
                <StatItem item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}