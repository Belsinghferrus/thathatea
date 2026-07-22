import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowRight, Menu, X } from "lucide-react";
import clsx from "clsx";
import Container from "@/components/common/Container";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Our Story", path: "/story" },
  { name: "Menu", path: "/menu" },
  { name: "Wholesale", path: "/wholesale" },
  { name: "Franchise", path: "/franchise" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[var(--z-nav)] pt-4 md:pt-5">
     
          <nav
            className={clsx(
              "grid min-h-[76px] grid-cols-[auto_1fr_auto] items-center rounded-[28px] border px-4 transition-all duration-300 md:px-6",
              scrolled
                ? "border-[var(--color-border)] bg-[color:rgba(255,250,244,0.95)] shadow-[var(--shadow-medium)] backdrop-blur-md"
                : "border-[color:rgba(221,207,191,0.72)] bg-[color:rgba(255,250,244,0.84)] shadow-[var(--shadow-soft)] backdrop-blur-sm"
            )}
          >
            <Link
              to="/"
              className="flex min-w-0 flex-col justify-center text-[var(--color-primary)]"
            >
              <span className="font-[var(--font-display)] text-[2rem] leading-[0.88] tracking-[0.04em] md:text-[2.4rem]">
                THATHA TEA
              </span>

              <span className="mt-1 font-[var(--font-body)] text-[10px] font-bold uppercase tracking-[0.28em] text-[var(--color-secondary)] md:text-[11px]">
                Tea · Coffee · Snacks
              </span>
            </Link>

            <ul className="hidden items-center justify-end gap-6 xl:flex">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      clsx(
                        "relative inline-flex pb-1 font-[var(--font-body)] text-sm font-semibold transition-colors duration-200",
                        isActive
                          ? "text-[var(--color-accent)]"
                          : "text-[var(--color-primary)] hover:text-[var(--color-accent)]"
                      )
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {link.name}
                        <span
                          className={clsx(
                            "absolute inset-x-0 bottom-0 h-px bg-[var(--color-accent)] transition-all duration-300",
                            isActive ? "scale-x-100" : "scale-x-0"
                          )}
                        />
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-end gap-3">
              <a
                href="#"
                className="hidden h-11 items-center gap-2 rounded-full bg-[var(--color-primary)] px-5 font-[var(--font-body)] text-sm font-extrabold uppercase tracking-[0.06em] text-white transition-all duration-300 hover:bg-[var(--color-accent)] xl:inline-flex"
              >
                Order Online
                <ArrowRight size={16} strokeWidth={2.4} />
              </a>

              <button
                type="button"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((prev) => !prev)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-white/90 text-[var(--color-primary)] transition-colors duration-300 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] xl:hidden"
              >
                {mobileOpen ? <X size={21} /> : <Menu size={21} />}
              </button>
            </div>
          </nav>
  
      </header>

      <div
        className={clsx(
          "fixed inset-0 z-[calc(var(--z-nav)-1)] bg-[color:rgba(44,24,16,0.32)] transition-opacity duration-300 xl:hidden",
          mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setMobileOpen(false)}
      />

      <div
        className={clsx(
          "fixed inset-x-4 top-[88px] z-[var(--z-nav)] rounded-[30px] border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-[var(--shadow-large)] transition-all duration-300 xl:hidden",
          mobileOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        )}
      >
        <ul className="flex flex-col gap-1">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  clsx(
                    "flex min-h-12 items-center rounded-2xl px-4 py-3 font-[var(--font-body)] text-base font-semibold transition-all duration-200",
                    isActive
                      ? "bg-[var(--color-primary)] text-white"
                      : "text-[var(--color-primary)] hover:bg-[var(--color-surface-alt)]"
                  )
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <a
          href="#"
          className="mt-4 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-5 font-[var(--font-body)] text-sm font-extrabold uppercase tracking-[0.08em] text-[var(--color-primary)] transition-all duration-300 hover:bg-[var(--color-accent-strong)] hover:text-white"
        >
          Order Online
          <ArrowRight size={16} strokeWidth={2.4} />
        </a>
      </div>
    </>
  );
}

export default Navbar;