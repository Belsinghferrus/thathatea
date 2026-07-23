import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { NAV_LINKS, ROUTES } from "@/constants/routes";
import logo from "@/assets/images/logo/logo.webp";

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => {
            setIsScrolled(window.scrollY > 24);
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    useEffect(() => {
        const onKeyDown = (event) => {
            if (event.key === "Escape") setIsOpen(false);
        };

        if (isOpen) window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [isOpen]);

    const navLinkClass = ({ isActive }) =>
        [
            "relative text-sm font-medium tracking-[0.08em] uppercase transition-all duration-300",
            isScrolled ? "text-[#2c1810]" : "text-[#2c1810]",
            isActive ? "text-[#b87527]" : "text-[#2c1810] hover:text-[#b87527]",
        ].join(" ");

    return (
        <>
            <header
                className={[
                    "fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out",
                    isScrolled
                        ? "border-b border-[#ddcfbf]/80 bg-[#fffaf4]/92 shadow-[0_10px_30px_rgba(44,24,16,0.08)] backdrop-blur-xl"
                        : "bg-transparent",
                ].join(" ")}
            >
                <div className=" flex  items-center justify-between px-4 py-3 sm:px-6 lg:px-10 lg:py-4">
                    <NavLink
                        to={ROUTES.HOME}
                        className="relative z-[60] shrink-0"
                        aria-label="Thatha Tea home"
                    >
                        <img
                            src={logo}
                            alt="Thatha Tea logo"
                            className={[
                                "w-auto object-contain transition-all duration-300",
                                isScrolled ? "h-14 sm:h-16" : "h-16 sm:h-20",
                            ].join(" ")}
                        />
                    </NavLink>

                    <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
                        {NAV_LINKS.map((link) => (
                            <NavLink key={link.path} to={link.path} className={navLinkClass}>
                                {({ isActive }) => (
                                    <span className="relative inline-flex flex-col items-center">
                                        {link.label}
                                        <span
                                            className={[
                                                "mt-1 h-[2px] rounded-full bg-[#c88a3d] transition-all duration-300",
                                                isActive ? "w-full opacity-100" : "w-0 opacity-0",
                                            ].join(" ")}
                                        />
                                    </span>
                                )}
                            </NavLink>
                        ))}
                    </nav>

                    <div className="hidden items-center gap-3 lg:flex">
                        <NavLink
                            to={ROUTES.MENU}
                            className="inline-flex items-center justify-center rounded-full border border-[#2c1810]/20 bg-[#2c1810] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 hover:bg-[#5a3a28] hover:border-[#5a3a28] focus:outline-none focus:ring-2 focus:ring-[#b87527] focus:ring-offset-2"
                        >
                            Order Online
                        </NavLink>
                    </div>

                    <button
                        type="button"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                        onClick={() => setIsOpen((prev) => !prev)}
                        className={[
                            "relative z-[60] inline-flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 lg:hidden",
                            isOpen || isScrolled
                                ? "border-[#ddcfbf] bg-[#fffaf4] text-[#2c1810]"
                                : "border-[#2c1810]/15 bg-[#fffaf4]/80 text-[#2c1810] backdrop-blur-md",
                        ].join(" ")}
                    >
                        <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
                        <div className="relative h-5 w-5">
                            <span
                                className={[
                                    "absolute left-0 top-1/2 h-[2px] w-5 -translate-y-[7px] rounded-full bg-current transition-all duration-300",
                                    isOpen ? "translate-y-0 rotate-45" : "",
                                ].join(" ")}
                            />
                            <span
                                className={[
                                    "absolute left-0 top-1/2 h-[2px] w-5 -translate-y-1/2 rounded-full bg-current transition-all duration-300",
                                    isOpen ? "opacity-0" : "opacity-100",
                                ].join(" ")}
                            />
                            <span
                                className={[
                                    "absolute left-0 top-1/2 h-[2px] w-5 translate-y-[7px] rounded-full bg-current transition-all duration-300",
                                    isOpen ? "-translate-y-0 -rotate-45" : "",
                                ].join(" ")}
                            />
                        </div>
                    </button>
                </div>
            </header>

            <div
                className={[
                    "fixed inset-0 z-40 lg:hidden transition-all duration-300",
                    isOpen ? "pointer-events-auto visible" : "pointer-events-none invisible",
                ].join(" ")}
            >
                <div
                    onClick={() => setIsOpen(false)}
                    className={[
                        "absolute inset-0 bg-[#2c1810]/40 transition-opacity duration-300",
                        isOpen ? "opacity-100" : "opacity-0",
                    ].join(" ")}
                />
                <div
                    className={[
                        "absolute inset-0 flex min-h-screen flex-col bg-[#f7f2ea] px-6 pb-8 pt-28 transition-all duration-300",
                        isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0",
                    ].join(" ")}
                >
                    <nav className="flex flex-1 flex-col" aria-label="Mobile primary">
                        <div className="flex flex-col gap-2">
                            {NAV_LINKS.map((link, index) => (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    className={({ isActive }) =>
                                        [
                                            "rounded-2xl border border-transparent px-4 py-4 text-[1.1rem] font-semibold tracking-[0.04em] text-[#2c1810] transition-all duration-300",
                                            "hover:border-[#ddcfbf] hover:bg-[#fffaf4]",
                                            isActive ? "border-[#ddcfbf] bg-[#fffaf4] text-[#b87527]" : "",
                                        ].join(" ")
                                    }
                                    style={{
                                        transitionDelay: isOpen ? `${index * 40}ms` : "0ms",
                                    }}
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                        </div>

                        <div className="mt-8 border-t border-[#ddcfbf] pt-6">
                            <NavLink
                                to={ROUTES.MENU}
                                className="inline-flex w-full items-center justify-center rounded-full bg-[#2c1810] px-5 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white transition-all duration-300 hover:bg-[#6e4b33]"
                            >
                                Order Online
                            </NavLink>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    );
}

export default Navbar;