import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import logo from "@/assets/images/logo/logo.webp";
import paperTexture from "@/assets/textures/paper.jpg";

function Intro() {
  const introRef = useRef(null);
  const panelRef = useRef(null);
  const logoWrapRef = useRef(null);
  const logoRef = useRef(null);
  const lineRef = useRef(null);
  const textRef = useRef(null);

  const [hidden, setHidden] = useState(false);

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (reduceMotion) {
        gsap.set(introRef.current, { autoAlpha: 0, pointerEvents: "none" });
        setHidden(true);
        return;
      }

      gsap.set(logoWrapRef.current, {
        opacity: 0,
        y: 24,
        scale: 0.96,
      });

      gsap.set(logoRef.current, {
        opacity: 0,
        scale: 0.9,
        filter: "blur(8px)",
      });

      gsap.set(lineRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
        opacity: 0,
      });

      gsap.set(textRef.current, {
        opacity: 0,
        y: 14,
      });

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
        onComplete: () => {
          gsap.delayedCall(0.15, () => {
            setHidden(true);
          });
        },
      });

      tl.to(logoWrapRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
      })
        .to(
          logoRef.current,
          {
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.9,
          },
          0.05
        )
        .to(
          lineRef.current,
          {
            opacity: 1,
            scaleX: 1,
            duration: 0.55,
          },
          "-=0.35"
        )
        .to(
          textRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
          },
          "-=0.35"
        )
        .to(
          panelRef.current,
          {
            opacity: 0,
            scale: 1.02,
            duration: 0.55,
            ease: "power2.inOut",
          },
          "+=0.5"
        )
        .to(
          introRef.current,
          {
            autoAlpha: 0,
            pointerEvents: "none",
            duration: 0.25,
          },
          "-=0.2"
        );
    },
    { scope: introRef }
  );

  if (hidden) return null;

  return (
    <div
      ref={introRef}
      className="fixed inset-0 z-[var(--z-modal)] bg-[var(--color-background)]"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `url(${paperTexture})`,
          backgroundPosition: "center",
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,138,61,0.16),transparent_38%),radial-gradient(circle_at_bottom,rgba(44,24,16,0.1),transparent_45%)]" />

      <div
        ref={panelRef}
        className="relative flex h-full items-center justify-center px-6"
      >
        <div className="flex flex-col items-center text-center">
          <div ref={logoWrapRef} className="flex flex-col items-center">
            <img
              ref={logoRef}
              src={logo}
              alt="ThaTha Tea logo"
              className="w-[160px] select-none md:w-[220px]"
              draggable={false}
            />

            <div
              ref={lineRef}
              className="mt-5 h-px w-28 bg-[var(--color-accent)] md:w-36"
            />

            <p
              ref={textRef}
              className="mt-4 font-[var(--font-body)] text-[11px] font-extrabold uppercase tracking-[0.34em] text-[var(--color-secondary)] md:text-xs"
            >
              Tea · Coffee · Snacks
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;