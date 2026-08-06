import { Star } from "lucide-react";

const items = [
  "OPEN YOUR OWN TEA STORY",
  "FRANCHISE WITH THATHA TEA",
  "50+ OUTLETS",
  "30+ CITIES",
  "32+ YEARS OF TRUST",
];

function MarqueeContent() {
  return (
    <div className="flex shrink-0 items-center">
      {items.map((item, index) => (
        <div key={`${item}-${index}`} className="flex items-center">
          <span
            className="whitespace-nowrap px-3 text-[0.48rem] uppercase tracking-[0.26em] text-[#F4E9D8] sm:px-5 sm:text-[0.56rem]"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            {item}
          </span>

          <Star
            className="h-2.5 w-2.5 shrink-0 fill-[#D69B4C] text-[#D69B4C] sm:h-3 sm:w-3"
            strokeWidth={1.5}
          />
        </div>
      ))}
    </div>
  );
}

export default function FranchiseMarqueeStrip() {
  return (
    <section
      aria-label="Franchise highlights"
      className="relative flex h-15 w-full items-center overflow-hidden bg-[#3A2114] text-[#F4E9D8]"
    >
      {/* Fine section-break details */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-px bg-[#D69B4C]/60" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-px bg-[#D69B4C]/60" />
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-16 bg-gradient-to-r from-[#3A2114] to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-16 bg-gradient-to-l from-[#3A2114] to-transparent sm:w-24" />

      {/* Seamless looping marquee */}
      <div className="franchise-marquee-track relative z-10 flex min-w-max items-center">
        <MarqueeContent />
        <MarqueeContent />
        <MarqueeContent />
        <MarqueeContent />
      </div>

      <style>{`
        .franchise-marquee-track {
          animation: franchise-marquee 30s linear infinite;
          will-change: transform;
        }

        @keyframes franchise-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-25%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .franchise-marquee-track {
            animation-play-state: paused;
          }
        }
      `}</style>
    </section>
  );
}