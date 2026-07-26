import { useEffect, useRef } from "react";
import { gsap } from "gsap";

function SteamIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className="h-7 w-7 text-[#d8a15e]"
      fill="none"
    >
      <path
        d="M22 50h20c6 0 10-3.5 10-8.5S48 33 42 33H20"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M26 27c-3-4-2-7 1-11"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M36 24c-3-4-2-7 1-11"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className="h-6 w-6 text-[#c98a46]"
      fill="none"
    >
      <path
        d="M51 13C31 15 18 28 16 48c20-2 33-15 35-35Z"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M24 40c8-8 14-14 23-20"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MarqueeRow({
  items,
  reverse = false,
  duration = 18,
  subtle = false,
}) {
  const trackRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || !trackRef.current) return;

    const animation = gsap.fromTo(
      trackRef.current,
      { xPercent: reverse ? -50 : 0 },
      {
        xPercent: reverse ? 0 : -50,
        duration,
        ease: "none",
        repeat: -1,
      }
    );

    return () => animation.kill();
  }, [reverse, duration]);

  const duplicated = [...items, ...items];

  return (
    <div className="relative overflow-hidden">
      <div
        ref={trackRef}
        className="flex w-max items-center will-change-transform"
      >
        {duplicated.map((item, index) => (
          <div
            key={`${item.text}-${index}`}
            className="flex shrink-0 items-center gap-6 pr-6"
          >
            {item.icon}
            <span
              className={
                subtle
                  ? "text-[0.95rem] font-semibold uppercase tracking-[0.22em] text-[#c9ae8f] sm:text-[1.02rem]"
                  : "text-[1.55rem] font-bold uppercase tracking-[0.12em] text-[#f5e7d6] sm:text-[1.95rem]"
              }
              style={{
                fontFamily: subtle
                  ? "'Manrope', sans-serif"
                  : "'Bebas Neue', sans-serif",
              }}
            >
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LoopBreakSection() {
  const primaryItems = [
    { text: "Freshly Brewed", icon: <SteamIcon /> },
    { text: "Warm Cups", icon: <LeafIcon /> },
    { text: "Since 1991", icon: <SteamIcon /> },
    { text: "Familiar Flavours", icon: <LeafIcon /> },
    { text: "Tea Time Stories", icon: <SteamIcon /> },
    { text: "Everyday Comfort", icon: <LeafIcon /> },
  ];

  const secondaryItems = [
    { text: "Comfort In Every Sip", icon: <LeafIcon /> },
    { text: "Made To Return To", icon: <SteamIcon /> },
    { text: "Shared Over Generations", icon: <LeafIcon /> },
    { text: "Rooted In Warmth", icon: <SteamIcon /> },
    { text: "Crafted For Daily Pause", icon: <LeafIcon /> },
  ];

  return (
    <section className="relative overflow-hidden border-y border-[#4b3428] bg-[#361003] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,138,70,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.03),transparent_24%)]" />
      <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative flex h-[200px] flex-col justify-center gap-5">
        <MarqueeRow items={primaryItems} duration={18} />
        <MarqueeRow items={secondaryItems} reverse duration={20} subtle />
      </div>
    </section>
  );
}