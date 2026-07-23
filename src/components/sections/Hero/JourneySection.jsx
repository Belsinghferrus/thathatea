import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import {
  ChefHat,
  ShieldCheck,
  Cpu,
  Store,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import clsx from "clsx";

gsap.registerPlugin(ScrollTrigger);

const storySteps = [
  {
    id: "belief",
    label: "The belief",
    title: "Quality should never be compromised",
    subtitle: "Taste • Hygiene • Consistency",
    body:
      "Thatha Tea began with one simple belief: quality, taste, and hygiene should never be compromised. That idea became the foundation of the brand.",
    note: "Built on care, not shortcuts",
    Icon: ShieldCheck,
    image: "https://picsum.photos/seed/thatha-founder-belief/900/1100",
    tone: "from-[#5b331f]/80 via-[#3b2116]/45 to-transparent",
  },
  {
    id: "kitchen",
    label: "The craft",
    title: "Made in our own kitchen",
    subtitle: "Fresh • In-house • Controlled",
    body:
      "Snacks, cookies, cakes, and pastries begin in our in-house kitchen so freshness, flavour, and consistency remain fully under our control.",
    note: "Freshness starts at the source",
    Icon: ChefHat,
    image: "https://picsum.photos/seed/thatha-founder-kitchen/900/1100",
    tone: "from-[#6f4728]/80 via-[#422719]/45 to-transparent",
  },
  {
    id: "notes",
    label: "The system",
    title: "Technology with a real purpose",
    subtitle: "Orders • Speed • Efficiency",
    body:
      "We built Thatha Notes to streamline sales and orders so outlets can move faster, serve better, and operate with more clarity every day.",
    note: "Smarter operations, faster service",
    Icon: Cpu,
    image: "https://picsum.photos/seed/thatha-founder-tech/900/1100",
    tone: "from-[#4e341f]/80 via-[#2f1d14]/45 to-transparent",
  },
  {
    id: "growth",
    label: "The difference",
    title: "Where craft and scale work together",
    subtitle: "Trust • Revenue • Better service",
    body:
      "By combining an in-house kitchen with data-backed operations, Thatha Tea built a model that supports consistency, stronger margins, and better customer experience.",
    note: "Built to grow without losing quality",
    Icon: Store,
    image: "https://picsum.photos/seed/thatha-founder-growth/900/1100",
    tone: "from-[#6a4024]/80 via-[#382015]/45 to-transparent",
  },
];

function FounderStoryPinned() {
  const rootRef = useRef(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const section = root.querySelector(".founder-pin-section");
        const items = gsap.utils.toArray(".founder-step");
        const slides = gsap.utils.toArray(".founder-slide");
        const fill = root.querySelector(".founder-progress-fill");

        gsap.set(slides, { autoAlpha: 0, yPercent: 8, scale: 0.985 });
        gsap.set(items, { color: "#8b6b59" });

        if (slides[0]) {
          gsap.set(slides[0], { autoAlpha: 1, yPercent: 0, scale: 1 });
        }
        if (items[0]) {
          gsap.set(items[0], { color: "#241611" });
        }
        if (fill) {
          gsap.set(fill, {
            scaleY: 1 / storySteps.length,
            transformOrigin: "top center",
          });
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: `+=${storySteps.length * 90}%`,
            pin: true,
            scrub: 0.9,
            invalidateOnRefresh: true,
          },
        });

        storySteps.forEach((_, i) => {
          const currentItem = items[i];
          const prevItem = items[i - 1];
          const currentSlide = slides[i];
          const prevSlide = slides[i - 1];

          if (i === 0) return;

          tl.to(
            currentSlide,
            {
              autoAlpha: 1,
              yPercent: 0,
              scale: 1,
              duration: 0.34,
              ease: "power2.out",
            },
            i
          )
            .to(
              prevSlide,
              {
                autoAlpha: 0,
                yPercent: -6,
                scale: 0.985,
                duration: 0.28,
                ease: "power2.out",
              },
              i
            )
            .to(
              currentItem,
              {
                color: "#241611",
                duration: 0.22,
              },
              i
            )
            .to(
              prevItem,
              {
                color: "#8b6b59",
                duration: 0.22,
              },
              i
            );
        });

        if (fill) {
          tl.to(
            fill,
            {
              scaleY: 1,
              ease: "none",
              duration: tl.duration(),
            },
            0
          );
        }
      });

      mm.add("(max-width: 1023px)", () => {
        const cards = gsap.utils.toArray(".founder-mobile-card");

        cards.forEach((card) => {
          const media = card.querySelector(".founder-mobile-media");
          const content = card.querySelector(".founder-mobile-content");

          gsap.set([media, content], { autoAlpha: 0, y: 32 });

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: card,
              start: "top 84%",
              once: true,
            },
            defaults: { ease: "power3.out" },
          });

          tl.to(media, { autoAlpha: 1, y: 0, duration: 0.45 }).to(
            content,
            { autoAlpha: 1, y: 0, duration: 0.4 },
            0.12
          );
        });
      });

      return () => mm.revert();
    },
    { scope: rootRef }
  );

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden bg-[#f7f1e8] text-[#241611]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(184,117,39,0.08),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(44,24,16,0.05),transparent_24%)]" />

      <div className="relative mx-auto max-w-[1560px] px-4 py-10 sm:px-6 sm:py-12 lg:px-14 lg:py-20 xl:px-20">
        {/* Desktop pinned version */}
        <section className="founder-pin-section hidden h-screen overflow-hidden lg:block">
          <div className="grid h-full grid-cols-[420px_minmax(0,1fr)] gap-10">
            {/* Left side */}
            <div className="flex h-full flex-col justify-center">
              <div className="max-w-[360px]">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#e1d2c2] bg-[#fff9f3] px-3 py-2 text-[#b87527] shadow-[0_10px_24px_rgba(44,24,16,0.04)]">
                  <Sparkles className="h-[14px] w-[14px]" />
                  <p
                    className="text-[0.72rem] font-bold uppercase tracking-[0.2em]"
                    style={{ fontFamily: "'Manrope', sans-serif" }}
                  >
                    Founder’s Story
                  </p>
                </div>

                <h2
                  className="mt-5 max-w-[8ch] text-[4rem] uppercase leading-[0.9] tracking-[-0.045em] text-[#241611]"
                  style={{ fontFamily: "'Anton', sans-serif" }}
                >
                  Built on taste. Backed by care.
                </h2>

                <p
                  className="mt-5 max-w-[31rem] text-[1rem] leading-[1.76] text-[#5f5045]"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  A founder-led story of uncompromised quality, in-house production,
                  and operational innovation that helped Thatha Tea grow with
                  consistency and trust.
                </p>

                <div className="relative mt-10 pl-7">
                  <div className="absolute left-0 top-1 h-[calc(100%-10px)] w-px bg-[#d9c7b4]" />
                  <div className="founder-progress-fill absolute left-0 top-1 h-[calc(100%-10px)] w-px origin-top bg-[#b87527]" />

                  <ul className="space-y-6">
                    {storySteps.map((step, index) => {
                      const Icon = step.Icon;

                      return (
                        <li
                          key={step.id}
                          className="founder-step relative"
                          style={{ fontFamily: "'Manrope', sans-serif" }}
                        >
                          <span className="absolute left-[-31px] top-[8px] flex h-4 w-4 items-center justify-center rounded-full border border-[#d8c4af] bg-[#fff8f1]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#b87527]" />
                          </span>

                          <div className="flex items-center gap-3">
                            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#dccab8] bg-[#fffaf4] text-[#8e6542]">
                              <Icon className="h-[15px] w-[15px]" />
                            </span>
                            <div>
                              <p className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#b87527]">
                                0{index + 1}
                              </p>
                              <p className="mt-1 text-[1rem] font-semibold leading-[1.3]">
                                {step.label}
                              </p>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <a
                  href="/our-story"
                  className="mt-10 inline-flex min-h-[52px] w-fit items-center justify-center gap-2 rounded-2xl bg-[#241611] px-6 text-[0.88rem] font-extrabold uppercase tracking-[0.06em] text-white transition-all duration-300 hover:-translate-y-[1px] hover:bg-[#362118]"
                  style={{ fontFamily: "'Manrope', sans-serif" }}
                >
                  Read full story
                  <ArrowRight className="h-[16px] w-[16px]" />
                </a>
              </div>
            </div>

            {/* Right side */}
            <div className="relative flex h-full items-center justify-end">
              <div className="relative h-[82vh] w-full max-w-[760px]">
                {storySteps.map((step, index) => {
                  const Icon = step.Icon;

                  return (
                    <div
                      key={step.id}
                      className="founder-slide absolute inset-0"
                    >
                      <div className="grid h-full grid-cols-[1.05fr_0.95fr] overflow-hidden rounded-[34px] border border-[#deccbb] bg-[#fffaf4] shadow-[0_28px_80px_rgba(44,24,16,0.12)]">
                        <div className="relative h-full overflow-hidden">
                          <img
                            src={step.image}
                            alt={step.title}
                            width={900}
                            height={1100}
                            loading="lazy"
                            className="h-full w-full object-cover"
                          />
                          <div
                            className={clsx(
                              "absolute inset-0 bg-gradient-to-t",
                              step.tone
                            )}
                          />

                          <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/[0.08] px-3 py-[0.42rem] text-white/90 backdrop-blur-sm">
                            <Icon className="h-[12px] w-[12px]" />
                            <span
                              className="text-[0.58rem] font-bold uppercase tracking-[0.24em]"
                              style={{ fontFamily: "'Manrope', sans-serif" }}
                            >
                              Signature
                            </span>
                          </div>
                        </div>

                        <div className="flex h-full flex-col justify-between p-8 xl:p-10">
                          <div>
                            <p
                              className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#b87527]"
                              style={{ fontFamily: "'Manrope', sans-serif" }}
                            >
                              {step.subtitle}
                            </p>

                            <h3
                              className="mt-3 max-w-[10ch] text-[3rem] uppercase leading-[0.92] tracking-[-0.045em] text-[#241611]"
                              style={{ fontFamily: "'Anton', sans-serif" }}
                            >
                              {step.title}
                            </h3>

                            <p
                              className="mt-5 max-w-[28rem] text-[1rem] leading-[1.76] text-[#5f5045]"
                              style={{ fontFamily: "'Manrope', sans-serif" }}
                            >
                              {step.body}
                            </p>
                          </div>

                          <div
                            className="inline-flex w-fit items-center gap-2 rounded-full border border-[#e2d3c3] bg-[#fff7ef] px-4 py-2 text-[0.78rem] font-semibold text-[#6b584b]"
                            style={{ fontFamily: "'Manrope', sans-serif" }}
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-[#b87527]" />
                            {step.note}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Mobile stacked version */}
        <section className="lg:hidden">
          <div className="max-w-[620px]">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e1d2c2] bg-[#fff9f3] px-3 py-2 text-[#b87527] shadow-[0_10px_24px_rgba(44,24,16,0.04)]">
              <Sparkles className="h-[14px] w-[14px]" />
              <p
                className="text-[0.72rem] font-bold uppercase tracking-[0.2em]"
                style={{ fontFamily: "'Manrope', sans-serif" }}
              >
                Founder’s Story
              </p>
            </div>

            <h2
              className="mt-5 max-w-[9ch] text-[2.75rem] uppercase leading-[0.92] tracking-[-0.045em] text-[#241611] sm:text-[3.2rem]"
              style={{ fontFamily: "'Anton', sans-serif" }}
            >
              Built on taste. Backed by care.
            </h2>

            <p
              className="mt-4 text-[0.98rem] leading-[1.72] text-[#5f5045]"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              A founder-led story of quality, in-house craft, and thoughtful
              innovation that helped Thatha Tea grow with consistency and trust.
            </p>
          </div>

          <div className="mt-8 space-y-5">
            {storySteps.map((step, index) => {
              const Icon = step.Icon;

              return (
                <article
                  key={step.id}
                  className="founder-mobile-card overflow-hidden rounded-[28px] border border-[#deccbb] bg-[#fffaf4] shadow-[0_20px_60px_rgba(44,24,16,0.08)]"
                >
                  <div className="founder-mobile-media relative aspect-[1/1.05] overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      width={900}
                      height={1100}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                    <div
                      className={clsx(
                        "absolute inset-0 bg-gradient-to-t",
                        step.tone
                      )}
                    />

                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/[0.08] px-3 py-[0.42rem] text-white/90 backdrop-blur-sm">
                      <Icon className="h-[12px] w-[12px]" />
                      <span
                        className="text-[0.58rem] font-bold uppercase tracking-[0.24em]"
                        style={{ fontFamily: "'Manrope', sans-serif" }}
                      >
                        0{index + 1}
                      </span>
                    </div>
                  </div>

                  <div className="founder-mobile-content p-5 sm:p-6">
                    <p
                      className="text-[0.72rem] font-bold uppercase tracking-[0.18em] text-[#b87527]"
                      style={{ fontFamily: "'Manrope', sans-serif" }}
                    >
                      {step.subtitle}
                    </p>

                    <h3
                      className="mt-3 text-[1.9rem] uppercase leading-[0.95] tracking-[-0.04em] text-[#241611]"
                      style={{ fontFamily: "'Anton', sans-serif" }}
                    >
                      {step.title}
                    </h3>

                    <p
                      className="mt-4 text-[0.96rem] leading-[1.72] text-[#5f5045]"
                      style={{ fontFamily: "'Manrope', sans-serif" }}
                    >
                      {step.body}
                    </p>

                    <div
                      className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-[#e2d3c3] bg-[#fff7ef] px-4 py-2 text-[0.78rem] font-semibold text-[#6b584b]"
                      style={{ fontFamily: "'Manrope', sans-serif" }}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[#b87527]" />
                      {step.note}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <a
            href="/our-story"
            className="mt-8 inline-flex min-h-[52px] w-fit items-center justify-center gap-2 rounded-2xl bg-[#241611] px-6 text-[0.88rem] font-extrabold uppercase tracking-[0.06em] text-white transition-all duration-300 hover:-translate-y-[1px] hover:bg-[#362118]"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            Read full story
            <ArrowRight className="h-[16px] w-[16px]" />
          </a>
        </section>
      </div>
    </section>
  );
}

export default FounderStoryPinned;