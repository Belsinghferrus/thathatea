import { useEffect, useRef, useState } from "react";
import { Mail, Minimize2, Phone, X } from "lucide-react";
import { gsap } from "gsap";
import clsx from "clsx";

const PHONE_NUMBER = "+91 63856 48484";
const PHONE_LINK = "tel:+916385648484";
const EMAIL = "info@thathatea.com";
const EMAIL_LINK = "mailto:info@thathatea.com";

function SteamMark() {
    return (
        <svg
            viewBox="0 0 48 48"
            aria-hidden="true"
            className="h-5 w-5 text-[#b9783f]"
            fill="none"
        >
            <path
                d="M16 34h15.5c5 0 8.5-2.8 8.5-6.8S36.5 21 31.5 21H15"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
            />
            <path
                d="M19 16c-2.2-3-1.8-5.4.8-8.5"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
            />
            <path
                d="M27 14c-2.2-3-1.8-5.4.8-8"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
            />
        </svg>
    );
}

function ContactPopup() {
    const popupRef = useRef(null);
    const tabRef = useRef(null);
    const shimmerRef = useRef(null);
    const timeoutRef = useRef(null);

    const [isVisible, setIsVisible] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [isClosed, setIsClosed] = useState(false);

    useEffect(() => {
        if (isClosed) return;

        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        timeoutRef.current = window.setTimeout(() => {
            setIsVisible(true);

            if (reducedMotion) return;

            gsap.fromTo(
                popupRef.current,
                { autoAlpha: 0, y: 22, scale: 0.96 },
                {
                    autoAlpha: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.45,
                    ease: "power2.out",
                }
            );

            if (shimmerRef.current) {
                gsap.fromTo(
                    shimmerRef.current,
                    { xPercent: -120, opacity: 0 },
                    {
                        xPercent: 140,
                        opacity: 1,
                        duration: 1.3,
                        ease: "power2.out",
                        delay: 0.25,
                    }
                );
            }
        }, 10000);

        return () => {
            window.clearTimeout(timeoutRef.current);
        };
    }, [isClosed]);

    useEffect(() => {
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (reducedMotion) return;

        if (isVisible && isMinimized && tabRef.current) {
            gsap.fromTo(
                tabRef.current,
                { autoAlpha: 0, y: 16, scale: 0.96 },
                {
                    autoAlpha: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.35,
                    ease: "power2.out",
                }
            );
        }
    }, [isVisible, isMinimized]);

    const handleMinimize = () => {
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (reducedMotion || !popupRef.current) {
            setIsMinimized(true);
            return;
        }

        gsap.to(popupRef.current, {
            autoAlpha: 0,
            y: 18,
            scale: 0.96,
            duration: 0.28,
            ease: "power2.inOut",
            onComplete: () => setIsMinimized(true),
        });
    };

    const handleRestore = () => {
        setIsMinimized(false);

        requestAnimationFrame(() => {
            const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

            if (reducedMotion || !popupRef.current) return;

            gsap.fromTo(
                popupRef.current,
                { autoAlpha: 0, y: 18, scale: 0.96 },
                {
                    autoAlpha: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.35,
                    ease: "power2.out",
                }
            );
        });
    };

    const handleClose = () => {
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (reducedMotion || (!popupRef.current && !tabRef.current)) {
            setIsClosed(true);
            return;
        }

        const target = isMinimized ? tabRef.current : popupRef.current;

        gsap.to(target, {
            autoAlpha: 0,
            y: 12,
            scale: 0.96,
            duration: 0.24,
            ease: "power2.inOut",
            onComplete: () => setIsClosed(true),
        });
    };

    if (!isVisible || isClosed) return null;

    return (
        <>
            {!isMinimized && (
                <div
                    ref={popupRef}
                    className={clsx(
                        "fixed bottom-4 right-4 z-[70] w-[calc(100vw-1.5rem)] max-w-[360px]",
                        "sm:bottom-5 sm:right-5 sm:max-w-[380px]"
                    )}
                >
                    <div className="relative overflow-hidden rounded-[24px] border border-[#dcc8b5] bg-[#fff8ef]/98 shadow-[0_18px_45px_rgba(43,26,18,0.18)] backdrop-blur-md">
                        <div
                            ref={shimmerRef}
                            className="pointer-events-none absolute inset-y-0 left-0 w-24 -skew-x-12 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.5),transparent)] opacity-0"
                        />

                        <div className="border-b border-[#ead8c7] px-4 py-3 sm:px-5">
                            <div className="flex items-start justify-between gap-3">
                                <div className="min-w-0">
                                    <div className="flex items-center gap-2">
                                        <SteamMark />
                                        <p
                                            className="text-[0.72rem] font-extrabold uppercase tracking-[0.18em] text-[#9a6738]"
                                            style={{ fontFamily: "'Manrope', sans-serif" }}
                                        >
                                            Let’s connect
                                        </p>
                                    </div>

                                    <h3
                                        className="mt-2 text-[2rem] leading-none uppercase text-[#2b1a12]"
                                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                                    >
                                        Need help?
                                    </h3>

                                    <p
                                        className="mt-1 text-[0.92rem] leading-[1.65] text-[#6a5647]"
                                        style={{ fontFamily: "'Manrope', sans-serif" }}
                                    >
                                        Reach us for orders, outlet questions, or franchise enquiries.
                                    </p>
                                </div>

                                <div className="flex items-center gap-1">
                                    <button
                                        type="button"
                                        aria-label="Minimize contact popup"
                                        onClick={handleMinimize}
                                        className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e6d4c3] bg-[#fffdf8] text-[#6b513e] transition-colors duration-300 hover:bg-[#f4e6d7]"
                                    >
                                        <Minimize2 className="h-4 w-4" />
                                    </button>

                                    <button
                                        type="button"
                                        aria-label="Close contact popup"
                                        onClick={handleClose}
                                        className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e6d4c3] bg-[#fffdf8] text-[#6b513e] transition-colors duration-300 hover:bg-[#f4e6d7]"
                                    >
                                        <X className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="px-4 py-4 sm:px-5 sm:py-5">
                            <div className="space-y-3">
                                <a
                                    href={PHONE_LINK}
                                    className="group flex min-h-[54px] items-center justify-between gap-3 rounded-[18px] border border-[#ead7c5] bg-[#f9efe3] px-4 py-3 transition-colors duration-300 hover:bg-[#f3e4d2]"
                                >
                                    <div className="flex min-w-0 items-center gap-3">
                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fff8ef] text-[#9d612d] shadow-[0_6px_16px_rgba(43,26,18,0.08)]">
                                            <Phone className="h-[17px] w-[17px]" />
                                        </span>

                                        <div className="min-w-0">
                                            <p
                                                className="text-[0.7rem] font-extrabold uppercase tracking-[0.14em] text-[#9a6738]"
                                                style={{ fontFamily: "'Manrope', sans-serif" }}
                                            >
                                                Call us
                                            </p>
                                            <p
                                                className="truncate text-[1rem] text-[#2b1a12]"
                                                style={{ fontFamily: "'Manrope', sans-serif" }}
                                            >
                                                {PHONE_NUMBER}
                                            </p>
                                        </div>
                                    </div>

                                    <span
                                        className="shrink-0 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-[#7b6049]"
                                        style={{ fontFamily: "'Manrope', sans-serif" }}
                                    >
                                        Tap
                                    </span>
                                </a>

                                <a
                                    href={EMAIL_LINK}
                                    className="group flex min-h-[54px] items-center justify-between gap-3 rounded-[18px] border border-[#ead7c5] bg-[#f9efe3] px-4 py-3 transition-colors duration-300 hover:bg-[#f3e4d2]"
                                >
                                    <div className="flex min-w-0 items-center gap-3">
                                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#fff8ef] text-[#9d612d] shadow-[0_6px_16px_rgba(43,26,18,0.08)]">
                                            <Mail className="h-[17px] w-[17px]" />
                                        </span>

                                        <div className="min-w-0">
                                            <p
                                                className="text-[0.7rem] font-extrabold uppercase tracking-[0.14em] text-[#9a6738]"
                                                style={{ fontFamily: "'Manrope', sans-serif" }}
                                            >
                                                Email us
                                            </p>
                                            <p
                                                className="truncate text-[1rem] text-[#2b1a12]"
                                                style={{ fontFamily: "'Manrope', sans-serif" }}
                                            >
                                                {EMAIL}
                                            </p>
                                        </div>
                                    </div>

                                    <span
                                        className="shrink-0 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-[#7b6049]"
                                        style={{ fontFamily: "'Manrope', sans-serif" }}
                                    >
                                        Open
                                    </span>
                                </a>
                            </div>

                            <p
                                className="mt-4 text-[0.78rem] leading-[1.7] text-[#7b6655]"
                                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                            >
                                Franchise and business enquiries are welcome.
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {isMinimized && (
                <div
                    ref={tabRef}
                    className="fixed bottom-4 right-4 z-[70] sm:bottom-5 sm:right-5"
                >
                    <div className="flex items-center gap-2 rounded-full border border-[#dcc8b5] bg-[#fff8ef]/98 px-2 py-2 shadow-[0_18px_40px_rgba(43,26,18,0.16)] backdrop-blur-md">
                        <button
                            type="button"
                            aria-label="Open contact popup"
                            onClick={handleRestore}
                            className="flex min-h-[48px] items-center gap-2 rounded-full border border-[#dcc8b5] bg-[#fff8ef] px-3 pr-4 text-[#2b1a12] shadow-[0_12px_30px_rgba(43,26,18,0.12)] transition-colors duration-300 hover:bg-[#f4e6d7]"
                        >
                            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5e8d9] text-[#9d612d]">
                                <Phone className="h-4 w-4" />
                            </span>

                            <span
                                className="text-[0.74rem] font-extrabold uppercase tracking-[0.14em]"
                                style={{ fontFamily: "'Manrope', sans-serif" }}
                            >
                                Contact us
                            </span>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default ContactPopup;