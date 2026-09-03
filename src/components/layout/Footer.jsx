import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    Phone,
    Mail,
    MapPin,

    Apple,
    PlayCircle,
} from "lucide-react";
import logo from "@/assets/images/mascot.png"; // adjust path to your logo
import footerBottomImg from "@/assets/images/footer-bottom.png"; 
import tornEdge from "@/assets/images/tornEdge.png";
const navItems = [
    { label: "HOME", to: "/" },
    { label: "STORY", to: "/story" },
    { label: "MENU", to: "/menu" },
    { label: "FRANCHISE", to: "/franchise" },
    { label: "CONTACT", to: "/contact" },
];



export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="relative overflow-hidden overflow-x-hidden bg-[#4D2F1C] py-20 text-[#FBF1E5]">

            {/* background illustration - full width, sits behind everything */}
            <div className="pointer-events-none absolute overflow-x-hidden inset-x-0 bottom-0 z-[10] w-full">
                <img
                    src={footerBottomImg}
                    alt=""
                    aria-hidden="true"
                    className="w-full object-contain object-bottom mt-30"
                />
            </div>

            {/* content wrapper - above the image */}
            <div className="relative z-10 mx-auto max-w-7xl px-5 pt-5 sm:pb-10 lg:pb-60 sm:px-8 lg:px-12">
                {/* quote */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}

                    className="mx-auto max-w-3xl text-center"
                >
                    <p
                        className="text-[1.7rem] leading-[1.15] text-[#F3E2CC] sm:text-[2.1rem]"
                        style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 600 }}
                    >
                        &ldquo;From one kettle, many stories. From one dream, many families.&rdquo;
                    </p>
                </motion.div>

                {/* main grid */}
                <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                    {/* about us + logo */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col items-start"
                    >
                        <img
                            src={logo}
                            alt="Thatha Tea"
                            className="h-14 w-auto object-contain sm:h-16"
                        />
                        <p className="mt-4 text-[0.88rem] leading-6 text-[#D9C6B0]">
                            What started as a single tea stall has grown into a family loved across
                            cities. Thatha Tea blends tradition, warmth, and the authentic taste of
                            home in every cup we serve.
                        </p>

                      
                    </motion.div>

                    {/* quick links */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.05 }}
                    >
                        <h3
                            className="text-[1.05rem] uppercase tracking-[0.14em] text-[#E7B47F]"
                            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.08em" }}
                        >
                            Quick Links
                        </h3>
                        <ul className="mt-4 flex flex-col gap-3">
                            {navItems.map((item) => (
                                <li key={item.to}>
                                    <Link
                                        to={item.to}
                                        className="text-[0.88rem] text-[#D9C6B0] transition-colors hover:text-[#F3C89A]"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* partner with us */}
                        <div className="mt-6">
                            <Link
                                to="/franchise"
                                className="inline-flex items-center gap-2 rounded-full border border-[#E7B47F]/70 px-4 py-2 text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-[#F3C89A] transition-colors hover:bg-[#E7B47F] hover:text-[#3D2413]"
                            >
                                Partner With Us — Franchise Enquiry
                            </Link>
                        </div>
                    </motion.div>

                    {/* contact info */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h3
                            className="text-[1.05rem] uppercase tracking-[0.14em] text-[#E7B47F]"
                            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.08em" }}
                        >
                            Get In Touch
                        </h3>
                        <ul className="mt-4 flex flex-col gap-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#E7B47F]" strokeWidth={1.8} />
                                <span className="text-[0.86rem] leading-6 text-[#D9C6B0]">
                                    17/1, Saint Thomas Town, Kammanahalli
                                    <br />
                                    Bengaluru, KA 560084
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="h-4 w-4 flex-shrink-0 text-[#E7B47F]" strokeWidth={1.8} />
                                <a
                                    href="mailto:info@thathatea.com"
                                    className="text-[0.86rem] text-[#D9C6B0] transition-colors hover:text-[#F3C89A]"
                                >
                                    info@thathatea.com
                                </a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="h-4 w-4 flex-shrink-0 text-[#E7B47F]" strokeWidth={1.8} />
                                <a
                                    href="tel:+916385648484"
                                    className="text-[0.86rem] text-[#D9C6B0] transition-colors hover:text-[#F3C89A]"
                                >
                                    +91 63856 48484
                                </a>
                            </li>
                        </ul>
                    </motion.div>

                    {/* mobile app */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                    >
                        <h3
                            className="text-[1.05rem] uppercase tracking-[0.14em] text-[#E7B47F]"
                            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.08em" }}
                        >
                            Our Mobile App
                        </h3>
                        <p className="mt-4 text-[0.86rem] leading-6 text-[#D9C6B0]">
                            Order your favourite chai on the go. Coming soon to App Store and Google
                            Play.
                        </p>

                        <div className="mt-5 flex flex-col gap-3">
                            {/* App Store badge (coming soon) */}
                            <div
                                aria-disabled="true"
                                className="flex cursor-not-allowed items-center gap-3 rounded-lg border border-[#6E4527]/60 bg-[#4B3221] px-4 py-2.5 opacity-90"
                            >
                                <Apple className="h-6 w-6 text-[#FBF1E5]" strokeWidth={1.6} />
                                <div className="flex flex-col leading-tight">
                                    <span className="text-[0.62rem] uppercase tracking-wide text-[#C9B49C]">
                                        Coming Soon on
                                    </span>
                                    <span className="text-[0.92rem] font-semibold text-[#FBF1E5]">
                                        App Store
                                    </span>
                                </div>
                            </div>

                            {/* Google Play badge (coming soon) */}
                            <div
                                aria-disabled="true"
                                className="flex cursor-not-allowed items-center gap-3 rounded-lg border border-[#6E4527]/60 bg-[#4B3221] px-4 py-2.5 opacity-90"
                            >
                                <PlayCircle className="h-6 w-6 text-[#FBF1E5]" strokeWidth={1.6} />
                                <div className="flex flex-col leading-tight">
                                    <span className="text-[0.62rem] uppercase tracking-wide text-[#C9B49C]">
                                        Coming Soon on
                                    </span>
                                    <span className="text-[0.92rem] font-semibold text-[#FBF1E5]">
                                        Google Play
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* divider */}

                {/* bottom bar: copyright + legal links */}
                <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
                    <p className="text-[0.78rem] text-[#C9B49C]">
                        © {year} Thatha Tea. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <Link
                            to="/privacy-policy"
                            className="text-[0.78rem] text-[#C9B49C] transition-colors hover:text-[#F3C89A]"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            to="/Refund-policy"
                            className="text-[0.78rem] text-[#C9B49C] transition-colors hover:text-[#F3C89A]"
                        >
                            Refund Policy
                        </Link>
                        <Link
                            to="/terms-and-conditions"
                            className="text-[0.78rem] text-[#C9B49C] transition-colors hover:text-[#F3C89A]"
                        >
                            Terms &amp; Conditions
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}