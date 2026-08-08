import { motion } from "framer-motion";

import bottomLandscape from "@/assets/images/contact/tea-bottom.png"; // your wide bottom image
import leafRight from "@/assets/images/contact/sketch1.png";

// SVG logos (simplified brand marks)
function InstagramLogo(props) {
    return (
        <svg viewBox="0 0 24 24" {...props} fill="none">
            <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
            <circle cx="17" cy="7" r="1" fill="currentColor" />
        </svg>
    );
}
function FacebookLogo(props) {
    return (
        <svg viewBox="0 0 24 24" {...props} fill="none">
            <path
                d="M13.5 8H15V4.8h-2.2C9.8 4.8 9 6.7 9 8.9V10H7v3.2h2V20h3.2v-6.8H15L15.5 10h-3v-1c0-.7.3-1 1-1Z"
                fill="currentColor"
            />
        </svg>
    );
}
function YoutubeLogo(props) {
    return (
        <svg viewBox="0 0 24 24" {...props} fill="none">
            <path
                d="M21 9.5s-.2-1.7-.8-2.3c-.8-.8-1.7-.8-2.2-.8C15.4 6.2 12 6.2 12 6.2h0s-3.4 0-6 .2c-.5 0-1.4 0-2.2.8C3.2 7.8 3 9.5 3 9.5S2.8 11.4 2.8 13.3v1.3c0 1.9.2 3.8.2 3.8s.2 1.7.8 2.3c.8.8 1.9.8 2.4.9 1.8.2 7.6.3 7.6.3s3.4 0 6-.2c.5 0 1.4 0 2.2-.8.6-.6.8-2.3.8-2.3s.2-1.9.2-3.8v-1.3C21.2 11.4 21 9.5 21 9.5Z"
                fill="currentColor"
            />
            <path d="M10 15.3v-5l4.5 2.5L10 15.3Z" fill="#FFF" />
        </svg>
    );
}
function XLogo(props) {
    return (
        <svg viewBox="0 0 24 24" {...props} fill="none">
            <path
                d="M5 5l14 14M19 5L5 19"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
            />
        </svg>
    );
}
function LinkedInLogo(props) {
    return (
        <svg viewBox="0 0 24 24" {...props} fill="none">
            <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.6" />
            <rect x="6" y="10" width="2.6" height="7.2" fill="currentColor" />
            <circle cx="7.3" cy="7.3" r="1.3" fill="currentColor" />
            <path
                d="M12 10h2.5l.1 1.1c.6-.8 1.4-1.3 2.5-1.3 2 0 3 1.3 3 3.7V17h-2.6v-3.1c0-1.2-.4-1.8-1.3-1.8-.9 0-1.4.6-1.4 1.8V17H12v-7Z"
                fill="currentColor"
            />
        </svg>
    );
}

const socials = [
    {
        name: "Instagram",
        color: "#E96433",
        handle: "@thathatea",
        href: "https://instagram.com/thathatea",
        Logo: InstagramLogo,
    },
    {
        name: "Facebook",
        color: "#1877F2",
        handle: "/thathatea",
        href: "https://facebook.com/thathatea",
        Logo: FacebookLogo,
    },
    {
        name: "YouTube",
        color: "#FF0000",
        handle: "/thathatea",
        href: "https://youtube.com/thathatea",
        Logo: YoutubeLogo,
    },
    {
        name: "X",
        color: "#000000",
        handle: "@thathatea",
        href: "https://x.com/thathatea",
        Logo: XLogo,
    },
    {
        name: "LinkedIn",
        color: "#0A66C2",
        handle: "/company/thathatea",
        href: "https://linkedin.com/company/thathatea",
        Logo: LinkedInLogo,
    },
];

export default function ConnectBeyondTeaFullSection() {
    return (
        <section className="relative h-[100vh] min-h-[560px] w-full overflow-hidden bg-[#FBEEDC] text-[#4B2A16]">
            {/* top parchment gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(181,103,49,0.08),transparent_24%),radial-gradient(circle_at_80%_0%,rgba(181,103,49,0.06),transparent_22%)]" />
            {/* texture */}
            <div className="absolute inset-0 opacity-[0.08] mix-blend-screen">
                <div
                    className="h-full w-full"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 1px 1px, rgba(191,147,103,0.4) 1px, transparent 0)",
                        backgroundSize: "24px 24px",
                    }}
                />
            </div>

            {/* bottom landscape image */}

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[45vh] sm:h-[55vh] lg:h-[60vh]">                <img
                src={bottomLandscape}
                alt=""
                aria-hidden="true"
                className="h-full w-full object-cover"
            />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FBEEDC] via-[#FBEEDC]/35 to-transparent sm:bg-gradient-to-t sm:from-[#FBEEDC]/75 sm:via-[#FBEEDC]/55 sm:to-transparent" />
            </div>
            {/* right leaf sketch */}
            <img
                src={leafRight}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-[18%] h-40 w-auto opacity-40 sm:h-52 lg:h-64"
            />

            <div className="relative mx-auto flex h-full max-w-6xl flex-col justify-between px-5 pt-10 pb-8 sm:px-8 sm:pt-14 sm:pb-10 lg:px-10">        {/* top spacing glue */}
                <div />

                {/* asymmetric main content */}
                <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
                    {/* LEFT COLUMN: text + socials */}
                    <div className="w-full max-w-xl lg:w-[55%]">
                        <motion.div
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                         
                        >
                            <p
                                className="text-[1.7rem] tracking-[0.18em] text-[#3D2413] sm:text-[2rem]"
                                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                            >
                                LET&apos;S CONNECT BEYOND TEA
                            </p>
                            <p className="mt-2 text-[0.95rem] leading-7 text-[#6B4B3B] sm:text-[1rem] sm:text-[#5A3D2B]">                Follow us for new brews, behind-the-counter stories, offers, and a little
                                bit of everyday warmth in your feed.
                            </p>
                        </motion.div>

                        {/* social buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}

                            className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-1"
                        >
                            {socials.map((s) => (
                                <SocialButton key={s.name} social={s} />
                            ))}
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: hero message */}
                    <motion.div
                        initial={{ opacity: 0, x: 20, y: 10 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-4 max-w-md text-right lg:mt-0 lg:w-[40%] sm:hidden lg:block"
                    >
                        <p
                            className="text-[1.8rem] text-[#C46F2C] sm:text-[2.1rem]  lg:text-[2.4rem]"
                            style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 600 }}
                        >
                            Good Tea,
                            <br />
                            Great Conversations,
                            <br />
                            Always.
                        </p>
                        <p className="mt-3 text-[0.9rem] leading-6 text-[#6B4B3B]">
                            Join our community across social media. Sip, share, and stay connected with
                            the Thatha Tea family — online and offline.
                        </p>
                    </motion.div>
                </div>

                {/* bottom small note */}
                <div className="mt-6 flex flex-col uppercase items-center justify-between gap-2 text-[0.8rem] text-[#8A6546] sm:flex-row">
                    <p>Thatha Tea.</p>
                    <p className="text-[0.75rem]">
                        Crafted with care - one cup, one story, one connection at a time.
                    </p>
                </div>
            </div>
        </section>
    );
}

function SocialButton({ social }) {
    const { name, color, handle, href, Logo } = social;

    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -3, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="
                flex items-center justify-between gap-3
                rounded-[999px] border border-[#E3C8A9]/70 bg-[#FFF8EF]/90
                px-4 py-2 shadow-[0_6px_14px_rgba(83,46,27,0.08)]
                backdrop-blur-sm
                sm:py-2.5 sm:shadow-[0_8px_18px_rgba(83,46,27,0.08)]
                "    >
            <div className="flex items-center gap-3">
                <div
                    className="flex h-9 w-9 items-center justify-center rounded-full text-white shadow-[0_6px_14px_rgba(0,0,0,0.25)] sm:h-10 sm:w-10"
                    style={{ backgroundColor: color }}
                >
                    <Logo className="h-5 w-5" />
                </div>
                <div className="flex flex-col text-left">
                    <span className="text-[0.78rem] font-semibold text-[#3D2413]">
                        {name}
                    </span>
                    <span className="text-[0.74rem] text-[#8A6546]">{handle}</span>
                </div>
            </div>
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[#A16635]">
                Follow
            </span>
        </motion.a>
    );
}