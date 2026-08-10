import { motion } from "framer-motion";
import { Store, MapPin, Users, CupSoda, Award } from "lucide-react";

import confettiBg from "@/assets/images/story/confetti-texture.png";   // optional subtle texture
import mascotCelebrate from "@/assets/images/mascot.png";              // Thatha mascot
import kettlePng from "@/assets/images/story/oldmantea1png.png";                // left PNG
import cupPng from "@/assets/images/story/tea.png";                    // right PNG


const stats = [
    {
        icon: Store,
        value: "50+",
        label: "OUTLETS & KIOSKS",
    },
    {
        icon: MapPin,
        value: "30+",
        label: "CITIES REACHED",
    },
    {
        icon: Users,
        value: "1M+",
        label: "HAPPY CUSTOMERS",
    },
    {
        icon: CupSoda,
        value: "20+",
        label: "SIGNATURE TEA VARIANTS",
    },
    {
        icon: Award,
        value: "MULTIPLE",
        label: "AWARDS WON",
    },
];

export default function StoryInNumbersSection() {
    return (
        <section className="relative overflow-x-hidden bg-[#FBF1E5] py-14 text-[#4B2A16] sm:py-18 lg:py-20">
            {/* background texture */}
            <div className="absolute inset-0 ">
                <div
                    className="h-full w-full overflow-x-hidden"
                    style={{
                        backgroundImage: confettiBg ? `url(${confettiBg})` : "",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        opacity: 0.00,
                        mixBlendMode: "multiply",
                    }}
                />
            </div>




            <div className="relative mx-auto flex max-w-6xl flex-col items-center px-5 sm:px-8 lg:px-10">
                {/* heading */}
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  
                    className="mb-8 max-w-3xl text-center sm:mb-10"
                >
                    <p className="text-[0.8rem] font-semibold uppercase tracking-[0.26em] text-[#A16635]">
                        From a Small Stall to a Big Family
                    </p>
                    <h2
                        className="mt-2 text-[2.4rem] leading-[0.95] text-[#3D2413] sm:text-[3.1rem] lg:text-[3.6rem]"
                        style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.06em" }}
                    >
                        CELEBRATING OUR JOURNEY
                    </h2>
                    <p className="mt-3 text-[0.96rem] leading-7 text-[#5E4637] sm:text-[1rem]">
                        Every outlet, every city, every cup and every smile turned a single tea stall
                        into the Thatha Tea family you see today.
                    </p>
                </motion.div>

                {/* main collage */}
                <div className="relative flex w-full max-w-5xl flex-col items-center lg:flex-row lg:items-center lg:justify-between">
                    {/* left PNG cluster */}
                    <motion.div
                        initial={{ opacity: 0, x: -20, y: 8, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                    
                        className="relative order-2 mt-8 flex w-full justify-center lg:order-1 lg:mt-0 lg:w-[30%]"
                    >
                        <div className="relative">
                            <div className="absolute -left-8 -top-6 h-128 w-128 rounded-full bg-[#C46F2C]/14 blur-3xl sm:h-40 sm:w-40" />

                            <img
                                src={cupPng}
                                alt="Tea cup"
                                className="pointer-events-none absolute -bottom-4 -right-4 h-20 w-auto sm:h-24 lg:h-26"
                            />
                        </div>
                    </motion.div>

                    {/* center mascot */}
                    <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                     
                        className="order-1 flex w-full justify-center lg:order-2 lg:w-[40%]"
                    >
                        <div className="relative">
                            <div className="absolute -top-10 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full border border-[#E3C8A9]/70 bg-[#FBE4C7]/60 blur-2xl" />
                            <img
                                src={mascotCelebrate}
                                alt="Thatha celebrating"
                                className="relative z-10 h-auto w-[260px] max-w-full object-contain sm:w-[300px] lg:w-[320px]"
                            />
                            {/* small spark lines */}
                            <svg
                                viewBox="0 0 200 80"
                                className="pointer-events-none absolute -top-6 left-1/2 h-10 w-40 -translate-x-1/2 text-[#E7B47F]"
                                fill="none"
                            >
                                <path
                                    d="M10 40C30 20 40 20 60 40M80 40C100 20 110 20 130 40M150 40C170 20 180 20 190 40"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </div>
                    </motion.div>

                    {/* right copy */}
                    <motion.div
                        initial={{ opacity: 0, x: 20, y: 8 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: true }}

                        className="order-3 mt-8 w-full max-w-sm text-left lg:mt-0 lg:w-[30%]"
                    >
                        <p
                            className="text-[1.6rem] text-[#C46F2C] sm:text-[1.9rem]"
                            style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 600 }}
                        >
                            “From one kettle, many stories. From one dream, many families.”
                        </p>
                        <p className="mt-3 text-[0.9rem] leading-6 text-[#5E4637]">
                            These numbers are just milestones. The real achievement is the warmth you
                            bring to our counters and the love you pour into our journey.
                        </p>
                    </motion.div>
                </div>

                {/* bottom stats – centered, no cards, works on mobile & desktop */}
                <div className="mt-10 w-full max-w-5xl mx-auto">
                    {/* subtle divider line */}
                    <div className="mb-6 h-[1px] bg-gradient-to-r from-transparent via-[#E7B47F]/50 to-transparent" />

                    {/* desktop / tablet: 2 rows, centered */}
                    <div className="hidden flex-col items-center gap-4 sm:flex">
                        {/* first row: three stats */}
                        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
                            {stats.slice(0, 3).map((stat, index) => (
                                <InlineStat key={stat.label} stat={stat} index={index} />
                            ))}
                        </div>
                        {/* second row: last two stats */}
                        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
                            {stats.slice(3).map((stat, index) => (
                                <InlineStat key={stat.label} stat={stat} index={index + 3} />
                            ))}
                        </div>
                    </div>

                    {/* mobile: simple stacked list */}
                    <div className="flex flex-col items-start gap-3 sm:hidden">
                        {stats.map((stat, index) => (
                            <InlineStat key={stat.label} stat={stat} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}


function InlineStat({ stat, index }) {
    const Icon = stat.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
           
            className="flex items-center gap-2 text-center"
        >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F3E2CC]/25 text-[#6E4527] shadow-[0_3px_8px_rgba(0,0,0,0.2)] sm:h-9 sm:w-9">
                <Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.7} />
            </div>
            <div className="flex flex-col items-start">
                <span
                    className="text-[1.1rem] leading-none text-[#3D2413] sm:text-[1.25rem]"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                    {stat.value}
                </span>
                <span className="text-[0.72rem] uppercase tracking-[0.16em] text-[#A16635] sm:text-[0.76rem]">
                    {stat.label}
                </span>
            </div>
        </motion.div>
    );
}
