import { motion } from "framer-motion";
import cafePng from "@/assets/images/cafe.png";
import { useNavigate } from "react-router-dom";



const PRIMARY = "#3a2418";
const PRIMARY_SOFT = "#5a3928";
const PAPER = "#f5eadc";

function ArrowUpRightIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none">
            <path d="M7 17 17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function ChevronDownIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none">
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

function CupIcon() {
    return (
        <svg viewBox="0 0 40 40" aria-hidden="true" className="h-5 w-5" fill="none">
            <path d="M9 14h17v8a8 8 0 0 1-17 0v-8Z" stroke="currentColor" strokeWidth="2" />
            <path d="M26 16h3a4 4 0 0 1 0 8h-3" stroke="currentColor" strokeWidth="2" />
            <path d="M8 29h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
    );
}

function PinIcon() {
    return (
        <svg viewBox="0 0 40 40" aria-hidden="true" className="h-5 w-5" fill="none">
            <path d="M20 34s9-9.2 9-16a9 9 0 1 0-18 0c0 6.8 9 16 9 16Z" stroke="currentColor" strokeWidth="2" />
            <circle cx="20" cy="18" r="3.5" stroke="currentColor" strokeWidth="2" />
        </svg>
    );
}

function SparkIcon() {
    return (
        <svg viewBox="0 0 40 40" aria-hidden="true" className="h-5 w-5" fill="none">
            <path
                d="M20 6v8M20 26v8M6 20h8M26 20h8M11 11l5 5M24 24l5 5M29 11l-5 5M16 24l-5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    );
}

function FranchiseBlob({ className = "" }) {
    return (
        <svg viewBox="0 0 700 700" aria-hidden="true" className={className} fill="none" preserveAspectRatio="none">
            <path
                d="M98 90C157 34 254 36 338 43c96 9 206 3 260 66 55 64 19 159 31 244 11 74 60 159 15 220-45 62-147 78-234 88-99 12-205 29-281-30C49 568 58 462 47 379c-12-88-44-194 51-289Z"
                fill="currentColor"
            />
        </svg>
    );
}

function FloatingBadge({ icon, text, className = "" }) {
    return (
        <div
            className={`inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#f8efe3]/88 px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[#6f4730] shadow-[0_10px_28px_rgba(43,26,18,0.08)] backdrop-blur-sm ${className}`}
            style={{ fontFamily: "'Manrope', sans-serif" }}
        >
            <span className="text-[#3a2418]">{icon}</span>
            <span>{text}</span>
        </div>
    );
}

function PremiumCTA({ onClick, children, className = "" }) {
    return (
        <button
            onClick={onClick}
            className={`group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-[#3a2418] bg-[#3a2418] px-6 py-3.5 text-[0.92rem] font-semibold uppercase tracking-[0.08em] text-[#fff4e8] shadow-[0_18px_34px_rgba(58,36,24,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#2b1a12] ${className}`}
            style={{ fontFamily: "'Manrope', sans-serif", backgroundColor: PRIMARY }}
        >
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#fff4e8] text-[#3a2418] transition group-hover:rotate-6">
                <ArrowUpRightIcon />
            </span>
            <span className="relative">{children}</span>
        </button>
    );
}

function SecondaryCTA({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="group relative inline-flex items-center gap-3 rounded-full border border-[#3a2418]/40 bg-transparent px-6 py-3.5 text-[0.92rem] font-semibold uppercase tracking-[0.08em] text-[#3a2418] transition duration-300 hover:bg-[#3a2418]/5"
            style={{ fontFamily: "'Manrope', sans-serif" }}
        >
            <span className="relative">See what franchisees say</span>
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#3a2418]/40 text-[#3a2418] transition group-hover:translate-y-0.5">
                <ChevronDownIcon />
            </span>
        </button>
    );
}

export default function FranchiseInvitationSection({

    
    reduceMotion,
    onFranchiseClick ,
    onTestimonialClick,
}) {
    const navigate = useNavigate();
    const handleFranchiseClick = onFranchiseClick || (() => navigate(ROUTES.FRANCHISE));

    return (
        <section className="relative overflow-hidden bg-[#f5eadc] px-4 py-20 text-[#2b1a12] sm:px-6 lg:px-10 lg:py-24">
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-multiply"
                style={{
                    backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                    backgroundSize: "220px 220px",
                }}
            />

            <div className="relative mx-auto max-w-[1320px]">
                <motion.div
                    initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 28 }}
                    whileInView={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden rounded-[34px] border border-[#e1cfbf] bg-[linear-gradient(180deg,#f6ecdf_0%,#efe0ce_100%)] px-5 py-8 shadow-[0_28px_65px_rgba(43,26,18,0.08)] sm:px-8 sm:py-10 lg:min-h-[780px] lg:px-12 lg:py-12"
                >
                    <div className="relative z-30 flex flex-wrap items-center justify-between gap-3">
                        <div className="rounded-full border border-[#e8d8c8] bg-[#f8efe3]/85 px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[#5b3a28]" style={{ fontFamily: "'Manrope', sans-serif" }}>
                            Franchise opportunity
                        </div>
                        <div className="rounded-full border border-[#e8d8c8] bg-[#f8efe3]/85 px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[#5b3a28]" style={{ fontFamily: "'Manrope', sans-serif" }}>
                            Built for growing cities
                        </div>
                    </div>

                    <div className="relative mt-8 lg:mt-4">
                        {/* DESKTOP BLOB - enlarged so text/BG is never covered by the cafe image */}
                        <div className="pointer-events-none absolute inset-0 hidden lg:block">
                            <div className="absolute left-[2%] top-0 z-10 h-[640px] w-[720px] text-[#3a2418]">
                                <FranchiseBlob className="h-full w-full opacity-[0.94] drop-shadow-[0_24px_46px_rgba(58,36,24,0.18)]" />
                            </div>
                        </div>

                        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
                            {/* LEFT VISUAL SIDE */}
                            <div className="relative min-h-[420px] sm:min-h-[480px] lg:min-h-[640px]">
                                {/* mobile blob - enlarged */}
                                <div className="absolute left-1/2 top-0 z-10 h-[320px] w-[96%] -translate-x-1/2 text-[#3a2418] lg:hidden">
                                    <FranchiseBlob className="h-full w-full opacity-[0.96]" />
                                </div>

                                {/* title over blob */}
                                <div className="absolute left-1/2 top-[30px] z-20 w-[90%] -translate-x-1/2 text-center lg:left-[25%] lg:top-[9%] lg:w-auto lg:translate-x-0 lg:text-left">
                                    <p className="mb-2 text-[0.78rem] font-bold uppercase tracking-[0.22em] text-[#f9f0e4] sm:text-[0.9rem]" style={{ fontFamily: "'Manrope', sans-serif" }}>
                                        Open your own
                                    </p>
                                    <h2 className="text-[3.6rem] leading-[0.88] tracking-[-0.04em] text-[#fbf5ed] sm:text-[4.6rem] lg:text-[6.25rem]" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                                        THATHA
                                        <br />
                                        TEA
                                    </h2>
                                    <div className="mt-3 hidden items-center gap-3 text-[#f5e7d8] lg:flex">
                                        <span className="h-px w-20 bg-current/60" />

                                    </div>
                                </div>

                                {/* main cafe png - shrunk & repositioned so it sits inside the blob instead of covering it */}
                                <div className="absolute bottom-[-18px] left-1/2 z-30 w-[98%] max-w-[540px] -translate-x-1/2 sm:w-[75%] lg:bottom-[-48px] lg:left-[16%] lg:w-[440px] lg:max-w-none lg:translate-x-0">
                                    <img
                                        src={cafePng}
                                        alt="Thatha Tea cafe visual for franchise opportunity"
                                        width={1400}
                                        height={900}
                                        loading="lazy"
                                        className="h-auto w-full object-contain drop-shadow-[0_30px_40px_rgba(43,26,18,0.22)]"
                                    />
                                </div>

                                {/* floating icons */}
                                <div className="absolute right-[3%] top-[16%] z-30 hidden lg:flex lg:flex-col lg:gap-4">
                                    <FloatingBadge icon={<CupIcon />} text="Trusted menu" />
                                    <FloatingBadge icon={<PinIcon />} text="Location support" className="ml-8" />
                                    <FloatingBadge icon={<SparkIcon />} text="Launch guidance" />
                                </div>
                            </div>

                            {/* RIGHT CONTENT SIDE */}
                            <div className="relative z-30 lg:pb-4">
                                <div className="mx-auto max-w-[560px] text-center lg:mx-0 lg:max-w-[380px] lg:text-left">
                                    <p className="text-[0.8rem] font-bold uppercase tracking-[0.2em] text-[#6a432b]" style={{ fontFamily: "'Manrope', sans-serif" }}>
                                        Why franchise with us
                                    </p>
                                    <p className="mt-4 text-[1.08rem] leading-[1.72] text-[#5b4b40] sm:text-[1.16rem]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                                        Build a place people return to easily - for tea that feels familiar,
                                        snacks that comfort, and a brand with memory already baked into it.
                                    </p>

                                    <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5 lg:hidden">
                                        <FloatingBadge icon={<CupIcon />} text="Trusted menu" />
                                        <FloatingBadge icon={<PinIcon />} text="Location support" />
                                        <FloatingBadge icon={<SparkIcon />} text="Launch help" />
                                    </div>

                                    <div className="mt-6 grid grid-cols-3 gap-2.5 sm:gap-3">
                                        <div className="rounded-[20px] border border-[#dcc7b1] bg-[#fff8f0]/92 px-3 py-4 text-center shadow-sm">
                                            <p className="text-[1.2rem] font-bold text-[#3a2418] sm:text-[1.4rem]" style={{ fontFamily: "'Manrope', sans-serif" }}>1991</p>
                                            <p className="mt-1 text-[0.6rem] uppercase tracking-[0.16em] text-[#8b735f]" style={{ fontFamily: "'Manrope', sans-serif" }}>Since</p>
                                        </div>
                                        <div className="rounded-[20px] border border-[#dcc7b1] bg-[#fff8f0]/92 px-3 py-4 text-center shadow-sm">
                                            <p className="text-[1.2rem] font-bold text-[#3a2418] sm:text-[1.4rem]" style={{ fontFamily: "'Manrope', sans-serif" }}>50+</p>
                                            <p className="mt-1 text-[0.6rem] uppercase tracking-[0.16em] text-[#8b735f]" style={{ fontFamily: "'Manrope', sans-serif" }}>Outlets</p>
                                        </div>
                                        <div className="rounded-[20px] border border-[#dcc7b1] bg-[#fff8f0]/92 px-3 py-4 text-center shadow-sm">
                                            <p className="text-[1.2rem] font-bold text-[#3a2418] sm:text-[1.4rem]" style={{ fontFamily: "'Manrope', sans-serif" }}>90</p>
                                            <p className="mt-1 text-[0.6rem] uppercase tracking-[0.16em] text-[#8b735f]" style={{ fontFamily: "'Manrope', sans-serif" }}>Day launch</p>
                                        </div>
                                    </div>

                                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-start">
                                        <PremiumCTA onClick={handleFranchiseClick}>Explore franchise</PremiumCTA>
                                        <SecondaryCTA onClick={onTestimonialClick} />
                                    </div>
                                </div>

                                {/* bottom editorial strip */}
                                <div className="mx-auto mt-7 flex max-w-[560px] flex-wrap items-center justify-center gap-3 rounded-[22px] border border-[#dcc7b1] bg-[#f8efe3]/88 px-4 py-3 shadow-[0_10px_24px_rgba(43,26,18,0.06)] lg:mx-0 lg:mt-8 lg:max-w-[360px] lg:justify-start">
                                    {["Warm cups", "Return visits", "Built for community"].map((item, idx) => (
                                        <div key={item} className="flex items-center gap-3">
                                            {idx !== 0 && <span className="h-1.5 w-1.5 rounded-full bg-[#8a5a38]" />}
                                            <span className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#5c3925]" style={{ fontFamily: "'Manrope', sans-serif" }}>
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}