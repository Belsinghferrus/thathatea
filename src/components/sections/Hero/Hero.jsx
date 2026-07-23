import { Coffee } from "lucide-react";
import mascot from "@/assets/images/mascot.png";
import bg from "@/assets/images/hero-bg.png";

function StoryIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" />
      <path
        d="M12 5.2v2.1M12 16.7v2.1M18.8 12h-2.1M7.3 12H5.2M17 7l-1.5 1.5M8.5 15.5 7 17M17 17l-1.5-1.5M8.5 8.5 7 7"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

const features = [
  { key: "quality", value: "100%", lines: ["Quality", "Ingredients"] },
  { key: "leaf", value: null, lines: ["Traditional", "Family Recipe"] },
  { key: "cup", value: "50+", lines: ["Outlets", "& Growing"] },
  { key: "heart", value: null, lines: ["Made With", "Love & Passion"] },
];

function FeatureIcon({ type }) {
  const cls = "h-[20px] w-[20px] text-[#2c1810]";
  switch (type) {
    case "quality":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden="true">
          <path
            d="M12 3 19 8v4c0 4.6-3 7.8-7 9-4-1.2-7-4.4-7-9V8l7-5Z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
          <path
            d="M8.6 11.2h6.8M9.6 14h4.8"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        </svg>
      );
    case "leaf":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden="true">
          <path
            d="M5 18c0-7.2 4.5-12 14-13-1 8.8-6.7 12.4-14 13Z"
            stroke="currentColor"
            strokeWidth="1.45"
            strokeLinejoin="round"
          />
          <path
            d="M8 16.6c2.5-3.2 4.8-6.3 8.3-10.2"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        </svg>
      );
    case "cup":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden="true">
          <path
            d="M5 8.5h10.5v4.3A5.2 5.2 0 0 1 10.3 18 5.2 5.2 0 0 1 5 12.8V8.5Z"
            stroke="currentColor"
            strokeWidth="1.45"
          />
          <path
            d="M15.5 9.5h1.7a2.2 2.2 0 0 1 0 4.4h-1.7"
            stroke="currentColor"
            strokeWidth="1.45"
          />
          <path
            d="M4.2 20h12.6"
            stroke="currentColor"
            strokeWidth="1.45"
            strokeLinecap="round"
          />
          <path
            d="M8.4 4.5c-.6 1 .5 1.6 0 2.7M11.5 3.8c-.6 1 .5 1.6 0 2.7"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden="true">
          <path
            d="M12 20s-7-4.3-9.2-8.8C1.6 8 3.2 5.2 6.3 5.2c2 0 3.3 1 4 2.2.7-1.2 2-2.2 4-2.2 3 0 4.7 2.8 3.5 6-2.2 4.5-9.1 8.8-9.1 8.8Z"
            stroke="currentColor"
            strokeWidth="1.45"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f7f2ea] text-[#2c1810]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bg})` }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,242,234,0.34)_0%,rgba(247,242,234,0.2)_18%,rgba(247,242,234,0.1)_36%,rgba(247,242,234,0.03)_100%)] lg:hidden" />

      <div className="relative mx-auto min-h-[100svh] w-full max-w-[1560px] px-5 pb-6 pt-22 sm:px-8 sm:pb-8 sm:pt-24 lg:min-h-screen lg:px-14 lg:pb-0 lg:pt-30 xl:px-20">
        {/* Desktop mascot layer */}
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[52%] lg:block xl:w-[54%]">
          <div className="relative h-full w-full">
            <img
              src={mascot}
              alt="Thatha Tea mascot pouring chai"
              width={860}
              height={980}
              loading="eager"
              className="absolute bottom-0 right-[-2%] h-[88vh] max-h-[980px] w-auto max-w-none object-contain object-bottom xl:right-0 xl:h-[94vh]"
            />
          </div>
        </div>

        <div className="relative z-20 grid min-h-[calc(100svh-6rem)] items-center gap-6 lg:min-h-[calc(100vh-7.5rem)] lg:grid-cols-[minmax(560px,620px)_1fr]">
          {/* Mobile mascot */}
          <div className="order-1 relative z-10 flex min-h-[42vh] items-end justify-center sm:min-h-[40vh] lg:hidden">
            <img
              src={mascot}
              alt="Thatha Tea mascot pouring chai"
              width={860}
              height={980}
              loading="eager"
              className="relative z-10 h-auto w-full max-w-[440px] object-contain sm:max-w-[500px] md:max-w-[560px]"
            />
          </div>

          {/* Text */}
          <div className="order-2 relative z-20 w-full pb-2 text-center lg:order-1 lg:text-left">
            <div className="mx-auto w-full max-w-[580px] lg:ml-[12%] lg:mr-0 lg:max-w-[500px] xl:ml-[16%] xl:max-w-[540px]">
              <div className="relative">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 120 120"
                  className="absolute left-1/2 top-[-2.6rem] hidden h-14 w-14 -translate-x-[12rem] text-[#b87527]/30 lg:block lg:left-0 lg:top-[-2.6rem] lg:translate-x-[-3.2rem]"
                  fill="none"
                >
                  <path
                    d="M20 98C22 47 55 18 104 14 99 63 67 94 20 98Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M30 87c14-19 28-39 61-65"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>

                <p
                  className="text-[2.6rem] leading-[0.9] text-[#a76024] sm:text-[3rem] lg:text-[3.55rem] xl:text-[4.1rem]"
                  style={{ fontFamily: "'Allura', cursive" }}
                >
                  Chai that
                </p>

                <h1
                  className="mt-2 text-[3.25rem] uppercase leading-[0.9] tracking-[-0.03em] text-[#2c1810] sm:text-[4.4rem] md:text-[5rem] lg:max-w-[6.2ch] lg:text-[5.75rem] xl:text-[6.5rem]"
                  style={{ fontFamily: "'Anton', sans-serif" }}
                >
                  Connects
                  <br />
                  Generations
                </h1>
              </div>

              <p
                className="mx-auto mt-5 max-w-[31rem] text-[1rem] leading-[1.65] text-[#4f4339] sm:text-[1.06rem] lg:mx-0 lg:mt-6 lg:max-w-[27rem] lg:text-[1.08rem] xl:text-[1.14rem]"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                From our family recipe to your cup,{" "}
                <span className="font-semibold text-[#b87527]">Thatha Tea</span> serves
                warmth, tradition &amp; time.
              </p>

              <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4 lg:mt-8 lg:justify-start">
                <a
                  href="/menu"
                  className="inline-flex min-h-[58px] min-w-[214px] items-center justify-center gap-2.5 rounded-2xl bg-[#2c1810] px-8 text-[0.92rem] font-extrabold uppercase tracking-[0.055em] text-white shadow-[0_14px_26px_rgba(44,24,16,0.10)] transition-all duration-300 hover:bg-[#3d2317] hover:shadow-[0_18px_32px_rgba(44,24,16,0.16)]"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  <Coffee className="h-[18px] w-[18px]" />
                  Explore Menu
                </a>

                <a
                  href="/our-story"
                  className="inline-flex min-h-[58px] min-w-[214px] items-center justify-center gap-2.5 rounded-2xl border border-[#c9b092] bg-[#fffaf4]/72 px-8 text-[0.92rem] font-extrabold uppercase tracking-[0.055em] text-[#2c1810] backdrop-blur-[2px] transition-all duration-300 hover:border-[#2c1810] hover:bg-[#2c1810] hover:text-white"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  <StoryIcon />
                  Our Story
                </a>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-7 sm:mt-11 sm:grid-cols-4 sm:gap-x-0 lg:mt-12">
                {features.map((item, index) => (
                  <div
                    key={item.key}
                    className={[
                      "flex flex-col items-center gap-3 text-center sm:px-5 lg:min-h-[118px] lg:items-start lg:text-left",
                      index !== 0 ? "sm:border-l sm:border-[#ddcfbf]" : "",
                    ].join(" ")}
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#ddcfbf] bg-[#f8f2ea]">
                      <FeatureIcon type={item.key} />
                    </span>

                    <div
                      className="space-y-1 text-[0.78rem] font-extrabold uppercase leading-[1.28] tracking-[0.03em] text-[#2c1810] sm:text-[0.82rem] xl:text-[0.85rem]"
                      style={{ fontFamily: "'Manrope', sans-serif" }}
                    >
                      {item.value ? (
                        <p className="text-[#b87527]">{item.value}</p>
                      ) : (
                        <p className="invisible h-0 overflow-hidden">—</p>
                      )}
                      {item.lines.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;