import { useLayoutEffect, useRef } from "react";
import { ArrowRight, Play, Settings, BarChart2, Users, Leaf } from "lucide-react";
import { gsap } from "gsap";

// --- THE 3 IMAGES ---
import storyBg from "@/assets/images/story/vintagebg.png";       // 1. Background Sketch
import storyCafe from "@/assets/images/story/cafe.png";           // 2. Cafe Shopfront
import storyMascot from "@/assets/images/story/digital-thatha.png"; // 3. Mascot with Monitor & Tablet

const features = [
  { icon: <Settings className="h-5 w-5" strokeWidth={1.5} />, title: "SMART\nOPERATIONS" },
  { icon: <BarChart2 className="h-5 w-5" strokeWidth={1.5} />, title: "REAL-TIME\nINSIGHTS" },
  { icon: <Users className="h-5 w-5" strokeWidth={1.5} />, title: "BETTER\nCUSTOMER EXPERIENCES" },
  { icon: <Leaf className="h-5 w-5" strokeWidth={1.5} />, title: "A STRONGER\nTOMORROW" },
];

export default function StoryHeroSection() {
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
      gsap.set(".hero-bg", { autoAlpha: 0 });
      gsap.set(".hero-cafe", { autoAlpha: 0, scale: 0.98 });
      gsap.set(".hero-mascot", { autoAlpha: 0, y: 30 });

      // Animation Timeline
      const tl = gsap.timeline({ defaults: { ease: "cubic-bezier(0.16, 1, 0.3, 1)" } });

      tl.to(".hero-bg", { autoAlpha: 1, duration: 1.5 }, 0)
        .to(".hero-cafe", { autoAlpha: 1, scale: 1, duration: 1.2 }, 0.2)
        .to(".hero-mascot", { autoAlpha: 1, y: 0, duration: 1 }, 0.4)
        .to(".hero-kicker", { autoAlpha: 1, y: 0, duration: 0.5 }, 0.5)
        .to(".hero-title", { autoAlpha: 1, y: 0, duration: 0.6 }, 0.6)
        .to(".hero-script", { autoAlpha: 1, y: 0, duration: 0.6 }, 0.7)
        .to(".hero-copy", { autoAlpha: 1, y: 0, duration: 0.5 }, 0.8)
        .to(".hero-feature", { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.08 }, 0.9)
        .to(".hero-btn", { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.1 }, 1.0);

      // Mascot continuous floating animation
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
      {/* LAYER 1: BACKGROUND SKETCH              */}
      {/* ======================================= */}
      <div 
        className="hero-bg pointer-events-none absolute inset-0 z-0 opacity-40 mix-blend-multiply"
        style={{
          backgroundImage: `url(${storyBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(90deg,#F7EFE4_0%,rgba(247,239,228,0.95)_40%,transparent_100%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1560px] flex-col-reverse px-5 sm:px-8 lg:grid lg:min-h-[calc(100vh-80px)] lg:grid-cols-[1fr_1.2fr] lg:items-center lg:px-14 xl:px-20">
        
        {/* ======================================= */}
        {/* TEXT CONTENT (LEFT/BOTTOM)              */}
        {/* ======================================= */}
        <div className="relative z-30 w-full pb-10 text-center lg:pb-16 lg:text-left">
          <div className="mx-auto w-full max-w-[540px] lg:mx-0 lg:max-w-[600px]">
            
            <div className="hero-kicker mb-3 flex items-center justify-center gap-3 lg:justify-start">
              <span className="h-px w-8 bg-[#A16635]/40" />
              <p className="font-['Manrope'] text-[0.8rem] font-bold uppercase tracking-[0.2em] text-[#A16635] sm:text-[0.9rem]">
                Our Story
              </p>
            </div>

            <div className="relative">
              <h1 className="hero-title font-['Anton'] text-[3.5rem] uppercase leading-[0.9] tracking-wide text-[#3D2413] sm:text-[4.5rem] lg:text-[5.5rem]">
                POWERED BY<br />
                <span className="text-[#A16635]">OUR OWN</span>
              </h1>
              <h2 className="hero-script mt-1 font-['Allura'] text-[3.5rem] leading-[0.9] text-[#C88A3D] sm:text-[4.5rem] lg:text-[5.5rem]">
                Technology
              </h2>
            </div>

            <p className="hero-copy mx-auto mt-5 max-w-[32rem] font-['Manrope'] text-[1rem] leading-[1.7] text-[#5E4637] sm:text-[1.05rem] lg:mx-0 lg:mt-6 lg:max-w-[26rem]">
              From farm to cup, our in-house technology keeps everything simple, fast and transparent — so we can brew a better tomorrow.
            </p>

            <div className="hero-features mt-8 grid grid-cols-2 gap-y-6 sm:grid-cols-4 sm:gap-x-2 lg:mt-10">
              {features.map((feature, idx) => (
                <div key={idx} className="hero-feature flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D1BEA9] bg-[#FCF8F2] text-[#A16635]">
                    {feature.icon}
                  </div>
                  <span className="mt-3 whitespace-pre-line font-['Manrope'] text-[0.65rem] font-bold uppercase tracking-wider text-[#3D2413] sm:text-[0.7rem]">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>

            <div className="hero-actions mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:mt-12 lg:justify-start">
              <a
                href="/story#journey"
                className="hero-btn inline-flex min-h-[54px] w-full items-center justify-center gap-2 rounded-2xl bg-[#2C1810] px-8 font-['Manrope'] text-[0.85rem] font-bold uppercase tracking-wider text-[#F7EFE4] shadow-[0_10px_20px_rgba(44,24,16,0.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#3A2316] sm:w-auto"
              >
                Our Journey
                <ArrowRight className="h-4 w-4" />
              </a>
              
              <a
                href="/story#portfolio"
                className="hero-btn inline-flex min-h-[54px] w-full items-center justify-center gap-2 rounded-2xl border border-[#D1BEA9] bg-transparent px-8 font-['Manrope'] text-[0.85rem] font-bold uppercase tracking-wider text-[#3D2413] transition-all duration-300 hover:-translate-y-1 hover:bg-[#EEDFCB] sm:w-auto"
              >
               
                Our Portfolio
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

          </div>
        </div>

        {/* ======================================= */}
        {/* IMAGE STACK (RIGHT/TOP)                 */}
        {/* ======================================= */}
        {/* Added mt-16 here to push the image down on mobile */}
        <div className="relative z-20 mt-16 flex w-full items-end justify-center pb-4 lg:absolute lg:bottom-0 lg:right-0 lg:mt-0 lg:h-full lg:w-[60%] lg:justify-end lg:pb-0 lg:pt-0">
          
          <div className="relative grid w-full place-items-center lg:block lg:h-full lg:w-full lg:max-w-none">
            
            {/* LAYER 2: CAFE (Reduced Size) */}
            <div className="hero-cafe col-start-1 row-start-1 w-[110%] max-w-[480px] sm:w-[100%] sm:max-w-[550px] lg:absolute lg:bottom-0 lg:right-0 lg:w-[90%] lg:max-w-[750px] opacity-40">
              <img
                src={storyCafe}
                alt="Thatha Tea Cafe"
                className="h-auto w-full object-contain object-bottom"
                loading="eager"
              />
            </div>

            {/* LAYER 3: MASCOT (Increased Size) */}
            <div className="hero-mascot hero-mascot-float relative top-20 col-start-1 row-start-1 z-10 w-full max-w-[540px] sm:top-20 sm:max-w-[620px] lg:absolute lg:bottom-0 lg:right-[5%] lg:top-0 lg:max-w-none lg:h-full">             
               <img
                src={storyMascot}
                alt="Thatha Mascot with Monitor"
                className="h-auto w-full object-contain object-bottom lg:h-full lg:w-auto lg:max-h-[100vh]"
                loading="eager"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}