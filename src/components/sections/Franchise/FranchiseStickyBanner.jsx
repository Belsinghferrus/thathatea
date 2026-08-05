import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, PhoneCall, Store, X, Sparkles } from "lucide-react";

export default function FranchiseStickyBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.98 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-x-0 bottom-4 z-[60] px-4 sm:bottom-6 sm:px-6 lg:px-10"
        >
          <div className="mx-auto max-w-[1400px]">
            <div className="relative overflow-hidden rounded-[28px] border border-[#E4D3BB] bg-[linear-gradient(135deg,rgba(45,26,16,0.96)_0%,rgba(74,44,23,0.95)_55%,rgba(183,122,42,0.9)_100%)] shadow-[0_24px_80px_rgba(45,26,16,0.28)] backdrop-blur-md">
              {/* Ambient glow */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(242,199,133,0.22),transparent_28%),radial-gradient(circle_at_85%_20%,rgba(255,255,255,0.08),transparent_18%),radial-gradient(circle_at_75%_90%,rgba(255,219,171,0.10),transparent_24%)]" />

              <div className="relative flex flex-col gap-4 p-4 sm:p-5 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:p-6">
                {/* Left content */}
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[20px] bg-[#F2C785] text-[#2D1A10] shadow-[0_10px_24px_rgba(0,0,0,0.18)]">
                    <Sparkles className="h-7 w-7" strokeWidth={1.8} />
                  </div>

                  <div className="max-w-2xl">
                    <p className="text-[0.62rem] uppercase tracking-[0.3em] text-[#F1DDC2]/78 sm:text-[0.68rem]">
                      Franchise spotlight
                    </p>
                    <h3
                      className="mt-1 text-[1.25rem] leading-[0.98] text-[#FFF7EF] sm:text-[1.6rem] lg:text-[1.9rem]"
                      style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.03em" }}
                    >
                      READY TO OWN A STORE THAT FEELS ALREADY LOVED?
                    </h3>
                    <p className="mt-2 max-w-2xl text-[0.88rem] leading-6 text-[#F8EBDD]/88 sm:text-[0.95rem]">
                      If this page is resonating, let&apos;s talk about the right
                      location, franchise fit, and your launch plan.
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:justify-end">
                  <motion.a
                    href="#contact"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F2C785] px-5 py-3 text-[0.88rem] font-semibold text-[#2D1A10] shadow-[0_10px_22px_rgba(0,0,0,0.14)] transition-colors hover:bg-[#f0bc6e]"
                  >
                    Enquire Franchise
                    <ArrowRight className="h-4 w-4" />
                  </motion.a>

                  <a
                    href="#outlets"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#F1DDC2]/30 bg-white/10 px-5 py-3 text-[0.88rem] font-semibold text-[#FFF7EF] backdrop-blur-sm transition-colors hover:bg-white/15"
                  >
                    <Store className="h-4 w-4" />
                    View Outlet
                  </a>

                  <a
                    href="tel:+919000000000"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white/12 px-5 py-3 text-[0.88rem] font-semibold text-[#FFF7EF] backdrop-blur-sm transition-colors hover:bg-white/18"
                  >
                    <PhoneCall className="h-4 w-4" />
                    Call Mobile
                  </a>
                </div>

                {/* Close */}
                <button
                  onClick={() => setVisible(false)}
                  aria-label="Close banner"
                  className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/15 text-[#FFF7EF] transition-colors hover:bg-black/25 sm:right-4 sm:top-4"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
