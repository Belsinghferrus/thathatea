import { useLayoutEffect, useRef } from "react";
import { ArrowRight, Play } from "lucide-react";
import { gsap } from "gsap";

// --- IMAGE IMPORTS ---
import careerBg from "@/assets/images/career/career-bg.png";       // The faded street/city sketch
import careerCafe from "@/assets/images/career/career-cafe.png";   // The wooden shopfront/cafe
import careerMascot from "@/assets/images/career/mascot.png"; // The Thatha character pouring tea

// --- CUSTOM SVG ICONS ---
const IconCup = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M5 10h12v5a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5v-5z" />
    <path d="M17 11h2a3 3 0 0 1 0 6h-2M8 6v2M12 6v2" />
    <path d="M8 2v2M12 2v2M16 2v2" />
  </svg>
);

const IconPeople = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <circle cx="9" cy="7" r="3" />
    <path d="M4 17a5 5 0 0 1 10 0v2H4v-2z" />
    <circle cx="17" cy="9" r="2.5" />
    <path d="M14 17a4 4 0 0 1 7 0v2h-7v-2z" />
  </svg>
);

const IconLeaf = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M12 21c-5 0-9-4-9-9 0-5 5-9 9-9 4 0 9 3 9 9 0 5-4 9-9 9z" />
    <path d="M12 21V9M12 9l-3-3M12 13l-3-3" />
  </svg>
);

const IconHeart = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
    <path d="M12 20s-7-4.3-9.2-8.8C1.6 8 3.2 5.2 6.3 5.2c2 0 3.3 1 4 2.2.7-1.2 2-2.2 4-2.2 3 0 4.7 2.8 3.5 6-2.2 4.5-9.1 8.8-9.1 8.8Z" />
  </svg>
);

const features = [
  { icon: <IconCup />, title: "GREAT\nTEAM" },
  { icon: <IconPeople />, title: "REAL\nOPPORTUNITIES" },
  { icon: <IconLeaf />, title: "LEARN\n& GROW" },
  { icon: <IconHeart />, title: "BE PART OF\nA MEANINGFUL BRAND" },
];

export default function CareersHeroSection() {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduceMotion) return;

      // Initial states
      gsap.set(
        [".hero-kicker", ".hero-title", ".hero-script", ".hero-copy", ".hero-feature", ".hero-btn"],
        { autoAlpha: 0, y: 24 }
      );
      gsap.set(".hero-cafe", { autoAlpha: 0, scale: 0.98 });
      gsap.set(".hero-mascot", { autoAlpha: 0, scale: 0.95, x: 40 });

      // Timeline
      const tl = gsap.timeline({ defaults: { ease: "cubic-bezier(0.16, 1, 0.3, 1)" } });

      tl.to(".hero-cafe", { autoAlpha: 1, scale: 1, duration: 1.2 }, 0.1)
        .to(".hero-mascot", { autoAlpha: 1, scale: 1, x: 0, duration: 1.2 }, 0.2)
        .to(".hero-kicker", { autoAlpha: 1, y: 0, duration: 0.5 }, 0.4)
        .to(".hero-title", { autoAlpha: 1, y: 0, duration: 0.6 }, 0.5)
        .to(".hero-script", { autoAlpha: 1, y: 0, duration: 0.6 }, 0.6)
        .to(".hero-copy", { autoAlpha: 1, y: 0, duration: 0.5 }, 0.7)
        .to(".hero-feature", { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.08 }, 0.8)
        .to(".hero-btn", { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.1 }, 0.9);

      // Continuous floating animation for mascot
      gsap.to(".hero-mascot-float", {
        y: -8,
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative isolate flex min-h-[100svh] w-full flex-col justify-end overflow-hidden bg-[#F7EFE4] pt-28 lg:justify-center lg:pt-20 lg:pb-0"
    >
      {/* ======================================= */}
      {/* LAYER 1: BACKGROUND IMAGE (City Sketch)  */}
      {/* ======================================= */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-20 lg:opacity-40"
        style={{
          backgroundImage: `url(${careerBg})`,
          backgroundSize: "contain",
          backgroundPosition: "center left",
          backgroundRepeat: "no-repeat",
        }}
      />
      
      {/* Subtle overlay to ensure text remains readable */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(90deg,rgba(247,239,228,0.85)_0%,rgba(247,239,228,0.4)_50%,transparent_100%)]" />

      {/* 
        MAIN CONTENT CONTAINER
        Mobile: Flex-col, mascot first, text below.
        Desktop: Grid, text left, layered images right.
      */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1560px] flex-col-reverse px-5 sm:px-8 lg:grid lg:min-h-[calc(100vh-80px)] lg:grid-cols-[1fr_1.1fr] lg:items-center lg:px-14 xl:px-20">
        
        {/* ======================================= */}
        {/* LEFT SIDE / BOTTOM (TEXT CONTENT)       */}
        {/* ======================================= */}
        <div className="relative z-30 w-full pb-10 text-center lg:pb-16 lg:text-left">
          <div className="mx-auto w-full max-w-[540px] lg:mx-0 lg:max-w-[580px]">
            
            {/* Kicker */}
            <p className="hero-kicker font-['Manrope'] text-[0.85rem] font-bold uppercase tracking-[0.15em] text-[#A16635] sm:text-[0.95rem]">
              Careers at Thatha
            </p>

            {/* Main Headings */}
            <div className="relative mt-3">
              <h1 className="hero-title font-['Anton'] text-[3.5rem] uppercase leading-[0.9] tracking-wide text-[#3D2413] sm:text-[4.5rem] lg:text-[5.5rem]">
                More Than<br />
                <span className="text-[#A16635]">A Job,</span>
              </h1>
              <h2 className="hero-script absolute -bottom-6 right-0 font-['Allura'] text-[2.8rem] leading-none text-[#C88A3D] sm:-bottom-12 sm:right-12 sm:text-[3.5rem] lg:-bottom-14 lg:right-4 lg:text-[4.5rem]">
                A Place<br />to Belong
              </h2>
            </div>

            {/* Spacer for script text overlap */}
            <div className="h-10 sm:h-12 lg:h-14" />

            {/* Description */}
            <p className="hero-copy mx-auto mt-4 max-w-[32rem] font-['Manrope'] text-[1rem] leading-[1.7] text-[#5E4637] sm:text-[1.05rem] lg:mx-0 lg:mt-6 lg:max-w-[26rem]">
              Be part of a team that serves great food, brings people together and creates brighter days. Grow with us.
            </p>

            {/* 4 Features */}
            <div className="hero-features mt-10 grid grid-cols-2 gap-y-8 sm:grid-cols-4 sm:gap-x-2 lg:mt-12">
              {features.map((feature, idx) => (
                <div key={idx} className="hero-feature flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D1BEA9] bg-[#FCF8F2] text-[#3D2413]">
                    {feature.icon}
                  </div>
                  <span className="mt-3 whitespace-pre-line font-['Manrope'] text-[0.65rem] font-bold uppercase tracking-wider text-[#3D2413] sm:text-[0.7rem]">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="hero-actions mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:mt-14 lg:justify-start">
              <a
                href="/career#explore"
                className="hero-btn inline-flex min-h-[54px] w-full items-center justify-center gap-2 rounded-2xl bg-[#2C1810] px-8 font-['Manrope'] text-[0.85rem] font-bold uppercase tracking-wider text-[#F7EFE4] shadow-[0_10px_20px_rgba(44,24,16,0.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#3A2316] sm:w-auto"
              >
                Explore Careers
                <ArrowRight className="h-4 w-4" />
              </a>
              
              <a
                href="/story"
                className="hero-btn inline-flex min-h-[54px] w-full items-center justify-center gap-2 rounded-2xl border border-[#D1BEA9] bg-transparent px-8 font-['Manrope'] text-[0.85rem] font-bold uppercase tracking-wider text-[#3D2413] transition-all duration-300 hover:-translate-y-1 hover:bg-[#EEDFCB] sm:w-auto"
              >
                Our Story
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

          </div>
        </div>

        {/* ======================================= */}
        {/* RIGHT SIDE / TOP (LAYERED IMAGES)       */}
        {/* ======================================= */}
        <div className="relative z-20 flex w-full flex-grow items-end justify-center lg:absolute lg:bottom-0 lg:right-0 lg:h-full lg:w-[58%] lg:justify-end">
          
          {/* Container to hold absolute layers */}
          <div className="relative flex h-full w-full max-w-[600px] items-end justify-center lg:max-w-none">
            
            {/* LAYER 2: BEHIND CAFE (Wooden Shopfront) */}
            <div className="hero-cafe absolute bottom-0 right-0 w-full max-w-[650px] translate-x-4 lg:translate-x-0 lg:bottom-20 lg:right-0 lg:max-w-none">
              <img
                src={careerCafe}
                alt="Thatha Tea Cafe Shopfront"
                className="h-auto w-full object-contain object-bottom"
                loading="eager"
              />
            </div>

            {/* LAYER 3: CENTER MASCOT (Thatha Character) */}
            <div className="hero-mascot hero-mascot-float relative z-10 w-full max-w-[500px] lg:max-w-none lg:h-full">
              <img
                src={careerMascot}
                alt="Thatha Tea Mascot welcoming team members"
                className="h-auto w-full object-contain object-bottom lg:h-full lg:w-auto lg:max-h-[95vh]"
                loading="eager"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}