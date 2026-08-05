import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    MapPin,
    PencilRuler,
    GraduationCap,
    Settings2,
    Megaphone,
    TrendingUp,
    ArrowRight,
    ArrowUpRight,
} from "lucide-react";
import coffeevideo from "@/assets/images/franchise/cofee-video.mp4";

import outlet1  from "@/assets/images/outlet/Indra-nager.png";
import design from "@/assets/images/franchise/design.jpg";
import training from "@/assets/images/franchise/taining.jpg";
import support from "@/assets/images/franchise/support.jpg";
import marketing from "@/assets/images/franchise/marketing.jpg";
import growth from "@/assets/images/franchise/growth.jpg";
// TEMP PLACEHOLDERS — replace with your actual images
const heroImage = coffeevideo;
const cardImages = [
    outlet1,
    design,
    training,
    support,
    marketing,
    growth,
];

const steps = [
    {
        icon: MapPin,
        title: "Site Selection",
        desc: "We help identify the right location using footfall, accessibility, and customer profile.",
        accent: "from-[#B77A2A] to-[#E1B56C]",
    },
    {
        icon: PencilRuler,
        title: "Design & Setup",
        desc: "A clean outlet flow, optimized layout, and setup guidance from day one.",
        accent: "from-[#8F5A2A] to-[#CDA873]",
    },
    {
        icon: GraduationCap,
        title: "Training",
        desc: "We train you and your team to deliver the same quality every time.",
        accent: "from-[#5E4735] to-[#B77A2A]",
    },
    {
        icon: Settings2,
        title: "Operations Support",
        desc: "Day-to-day operational support for smoother store management.",
        accent: "from-[#7B5220] to-[#D9C19D]",
    },
    {
        icon: Megaphone,
        title: "Marketing Support",
        desc: "Launch campaigns, local promotions, and brand guidance to pull in customers.",
        accent: "from-[#2D1A10] to-[#8F5A2A]",
    },
    {
        icon: TrendingUp,
        title: "Grow & Succeed",
        desc: "We keep supporting you so your outlet can scale with confidence.",
        accent: "from-[#B77A2A] to-[#2D1A10]",
    },
];

export default function FranchiseSupportJourneySection() {
    const [active, setActive] = useState(0);

    const handleSelect = (index) => {
        setActive(index);
        if (window.innerWidth < 1024) {
          const el = document.getElementById("franchise-support-detail");
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      };


    return (
        <section className="relative w-full  overflow-hidden bg-[#FBF6EF] px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(183,122,42,0.12),transparent_24%),radial-gradient(circle_at_80%_30%,rgba(45,26,16,0.07),transparent_26%),radial-gradient(circle_at_70%_85%,rgba(194,154,99,0.10),transparent_25%)]" />

            <div className="relative mx-auto grid max-w-[1600px] gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
                {/* Left visual panel */}
                <motion.div
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.55 }}
                    className="relative overflow-hidden rounded-[32px] border border-[#E4D3BB] bg-white shadow-[0_18px_50px_rgba(45,26,16,0.08)] sm:h-[50vh] lg:h-[100vh] " // Adjusted height
                    >
                    <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.06),rgba(251,246,239,0.18))]" />

                    <video
                        src={coffeevideo} // Replace with the actual video file path
                        poster={heroImage} // Fallback image
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="h-full w-full object-cover"
                    >
                        Your browser does not support the video tag.
                    </video>

                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                        <div className="max-w-md rounded-[24px] border border-white/30 bg-[#2D1A10]/78 p-5 text-[#FFF7EF] backdrop-blur-md sm:p-6">
                            <p className="text-[0.65rem] uppercase tracking-[0.28em] text-[#F1DDC2]/80">
                                Franchise Support Flow
                            </p>
                            <h2
                                className="mt-2 text-[2rem] leading-[0.92] sm:text-[2.8rem]"
                                style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.03em" }}
                            >
                                GUIDED AT EVERY
                                <span className="block text-[#F2C785]">STAGE OF GROWTH</span>
                            </h2>
                            <p className="mt-3 max-w-sm text-[0.9rem] leading-6 text-[#F8EBDD]/88">
                                A premium franchise experience with real support from site
                                selection to scaling the outlet.
                            </p>
                        </div>
                    </div>
                </motion.div>


                {/* Right interactive journey */}
                <div className="flex flex-col gap-5 sm:gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-2xl"
                    >
                        <p
                            className="mb-3 text-[0.65rem] uppercase tracking-[0.3em] text-[#9A6B32] sm:mb-4 sm:text-[0.72rem]"
                            style={{ fontFamily: "'Manrope', sans-serif" }}
                        >
                            Support Journey
                        </p>
                        <h3
                            className="text-[2rem] leading-[0.95] text-[#2D1A10] sm:text-[3rem] lg:text-[3.8rem]"
                            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.03em" }}
                        >
                            NOT A TEMPLATE.
                            <span className="block text-[#B77A2A]">A REAL FRANCHISE PLAYBOOK.</span>
                        </h3>
                        <p className="mt-3 max-w-2xl text-[0.92rem] leading-7 text-[#5E4735] sm:mt-4 sm:text-[1rem]">
                            Each step is designed to reduce friction, improve launch quality,
                            and help your store grow with a stronger foundation.
                        </p>
                    </motion.div>

                    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            const isActive = active === index;

                            return (
                                <motion.button
                                    key={step.title}
                  onClick={() => handleSelect(index)}
                                    whileHover={{ y: -4, scale: 1.01 }}
                                    whileTap={{ scale: 0.98 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: 0.42, delay: index * 0.05 }}
                                    className={`group relative overflow-hidden rounded-[26px] border text-left shadow-[0_12px_34px_rgba(45,26,16,0.08)] transition-all duration-300 ${isActive
                                            ? "border-[#B77A2A] bg-white"
                                            : "border-[#E6D7C2] bg-white/75 hover:border-[#D0B28A]"
                                        }`}
                                >
                                    <div className="relative aspect-[1.35] overflow-hidden">
                                        <img
                                            src={cardImages[index]}
                                            alt={step.title}
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className={`absolute inset-0 bg-gradient-to-t from-[#2D1A10]/90 via-[#2D1A10]/18 to-transparent`} />

                                        <div className="absolute left-4 top-4 flex items-center gap-2">
                                            <span className={`rounded-full bg-white/20 px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-white backdrop-blur-sm`}>
                                                Step {index + 1}
                                            </span>
                                            {isActive && (
                                                <span className="rounded-full bg-[#F2C785] px-3 py-1 text-[0.65rem] font-semibold text-[#2D1A10]">
                                                    Active
                                                </span>
                                            )}
                                        </div>

                                        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                                            <div className="flex items-center justify-between gap-3">
                                                <div className="flex items-center gap-3">
                                                    <span className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${step.accent} text-[#FFF7EF] shadow-[0_10px_24px_rgba(0,0,0,0.22)]`}>
                                                        <Icon className="h-6 w-6" strokeWidth={1.75} />
                                                    </span>
                                                    <div>
                                                        <h4
                                                            className="text-[1rem] leading-[1] text-white sm:text-[1.15rem]"
                                                            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.03em" }}
                                                        >
                                                            {step.title}
                                                        </h4>
                                                        {/* <p className="mt-1 text-[0.74rem] uppercase tracking-[0.16em] text-[#F6E8D8]/78">
                                                            Tap to preview
                                                        </p> */}
                                                    </div>
                                                </div>
                                                <ArrowUpRight className="h-5 w-5 text-white/80" />
                                            </div>
                                        </div>
                                    </div>
                                </motion.button>
                            );
                        })}
                    </div>

                    {/* Expanded active detail */}
                    <AnimatePresence mode="wait">
                        <motion.div
                         id="franchise-support-detail"
                            key={active}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden  rounded-[28px] border border-[#E4D3BB] bg-white/70 shadow-[0_18px_40px_rgba(45,26,16,0.06)] backdrop-blur-sm"
                        >
                            <div className="grid gap-0 md:grid-cols-[0.92fr_1.08fr]">
                                <div className="relative min-h-[220px] md:min-h-[280px]">
                                    <img
                                        src={cardImages[active]}
                                        alt={steps[active].title}
                                        className="h-full w-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(45,26,16,0.82),rgba(45,26,16,0.18))]" />
                                    <div className="absolute bottom-4 left-4 right-4 text-white">
                                        <p className="text-[0.65rem] uppercase tracking-[0.28em] text-[#F1DDC2]/80">
                                            Selected Step
                                        </p>
                                        <h4
                                            className="mt-1 text-[1.8rem] leading-none"
                                            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.03em" }}
                                        >
                                            {steps[active].title}
                                        </h4>
                                    </div>
                                </div>

                                <div className="p-5 sm:p-6 lg:p-7">
                                    <p className="text-[0.95rem] leading-7 text-[#5E4735] sm:text-[1rem]">
                                        {steps[active].desc}
                                    </p>
                                    <div className="mt-5 grid gap-3 sm:grid-cols-3">
                                        <div className="rounded-[18px] bg-[#FFF9F2] p-4">
                                            <p className="text-[0.65rem] uppercase tracking-[0.22em] text-[#9A6B32]">
                                                Focus
                                            </p>
                                            <p className="mt-1 text-[0.92rem] text-[#2D1A10]">Quality + consistency</p>
                                        </div>
                                        <div className="rounded-[18px] bg-[#FFF9F2] p-4">
                                            <p className="text-[0.65rem] uppercase tracking-[0.22em] text-[#9A6B32]">
                                                Outcome
                                            </p>
                                            <p className="mt-1 text-[0.92rem] text-[#2D1A10]">Faster launch readiness</p>
                                        </div>
                                        <div className="rounded-[18px] bg-[#FFF9F2] p-4">
                                            <p className="text-[0.65rem] uppercase tracking-[0.22em] text-[#9A6B32]">
                                                Support
                                            </p>
                                            <p className="mt-1 text-[0.92rem] text-[#2D1A10]">Hands-on guidance</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
