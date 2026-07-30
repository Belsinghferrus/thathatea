import leftLeafPng from "@/assets/images/story/tea.png";
import rightSpicePng from "@/assets/images/story/tea.png";
import centerSealPng from "@/assets/images/story/tea-hero.png";

export default function StorySectionBreak({
  label = "Steeped in Time",
  subtitle = "Every cup carries a story worth remembering.",
}) {
  return (
    <div className="relative isolate overflow-hidden bg-[#4a2b1f]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,214,170,0.08),transparent_45%)]" />
      <div className="absolute inset-0 opacity-[0.08] mix-blend-screen">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,240,225,0.18) 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-4 py-12 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
        {/* Decorative PNGs */}
        <img
          src={leftLeafPng}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-[-10px] top-1/2 hidden w-[120px] -translate-y-1/2 rotate-[-12deg] opacity-80 sm:block lg:left-[18px] lg:w-[250px]"
        />

        <img
          src={rightSpicePng}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute right-[-10px] top-1/2 hidden w-[118px] -translate-y-1/2 rotate-[14deg] opacity-75 sm:block lg:right-[12px] lg:w-[250px]"
        />

        <div className="relative flex items-center justify-center">
          {/* Left line */}
          <div className="flex flex-1 items-center justify-end">
            <div className="h-px w-[16%] min-w-[20px] bg-[#d7b08a]/35" />
            <div className="mx-2 h-[6px] w-[6px] rounded-full bg-[#d79b5b]/75" />
            <div className="h-px w-[34%] min-w-[56px] bg-gradient-to-r from-[#d7b08a]/45 to-[#f0c38b]/10" />
          </div>

          {/* Center seal */}
          <div className="relative mx-4 shrink-0">
            <div className="relative flex h-[108px] w-[108px] items-center justify-center rounded-full border border-[#c89b72]/45 bg-[#5a3425] shadow-[0_18px_40px_rgba(15,8,4,0.28)] sm:h-[118px] sm:w-[118px]">
              <div className="absolute inset-[8px] rounded-full border border-[#e1b98e]/20" />

              <img
                src={centerSealPng}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-contain opacity-20"
              />

              <div className="relative z-10 px-3 text-center">
                <p
                  className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[#d8ab7b] sm:text-[0.72rem]"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  Tea Break
                </p>
                <p
                  className="mt-1 text-[1.08rem] leading-none text-[#fff2e4] sm:text-[1.18rem]"
                  style={{ fontFamily: "'Cardamom Script', cursive" }}
                >
                  {label}
                </p>
              </div>
            </div>
          </div>

          {/* Right line */}
          <div className="flex flex-1 items-center justify-start">
            <div className="h-px w-[34%] min-w-[56px] bg-gradient-to-l from-[#d7b08a]/45 to-[#f0c38b]/10" />
            <div className="mx-2 h-[6px] w-[6px] rounded-full bg-[#d79b5b]/75" />
            <div className="h-px w-[16%] min-w-[20px] bg-[#d7b08a]/35" />
          </div>
        </div>

        {/* Text */}
        <div className="mt-5 text-center">
          <p
            className="mx-auto max-w-[620px] text-[0.98rem] leading-[1.9] text-[#f5e6d8] sm:text-[1.05rem]"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            {subtitle}
          </p>
        </div>

        {/* Steam flourish */}
        <div className="pointer-events-none mt-4 flex justify-center">
          <svg
            viewBox="0 0 120 28"
            aria-hidden="true"
            className="h-6 w-[120px] opacity-70"
            fill="none"
          >
            <path
              d="M8 18C18 8 28 24 38 14C46 6 56 22 68 12C80 2 90 20 112 10"
              stroke="#d7b08a"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="2 6"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}