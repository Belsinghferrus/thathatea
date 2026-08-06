import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, PhoneCall, Store, X, Sparkles } from "lucide-react";

export default function FranchiseStickyBannerLight() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(true);
    }, 15000);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.98 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed inset-x-0 bottom-4 z-[60] px-4 sm:bottom-6 sm:px-6 lg:px-10"
        >
          <div className="mx-auto max-w-[1400px]">
            <div className="relative overflow-hidden rounded-[26px] border border-[#DCC6A9] bg-[#F9F1E5] shadow-[0_20px_65px_rgba(45,26,16,0.18)]">
              {/* Light decorative atmosphere */}
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(183,122,42,0.13),transparent_28%),radial-gradient(circle_at_88%_80%,rgba(242,199,133,0.17),transparent_28%)]" />
              <div className="pointer-events-none absolute -right-10 -top-16 h-44 w-44 rounded-full border border-[#B77A2A]/15" />
              <div className="pointer-events-none absolute -right-3 -top-9 h-28 w-28 rounded-full border border-[#B77A2A]/15" />

              <div className="relative flex flex-col gap-4 p-4 sm:p-5 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:p-6">
                {/* Message */}
                <div className="flex min-w-0 items-start gap-3 sm:gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[17px] bg-[#2D1A10] text-[#F2C785] sm:h-14 sm:w-14">
                    <Sparkles className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={1.7} />
                  </div>

                  <div className="min-w-0 max-w-2xl pr-7 lg:pr-0">
                  
                    <h3
                      className="mt-1 text-[1.25rem] leading-[0.98] text-[#2D1A10] sm:text-[1.55rem] lg:text-[1.85rem]"
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        letterSpacing: "0.03em",
                      }}
                    >
                      READY TO MAKE THE FAMILIAR YOURS?
                    </h3>
                    <p className="mt-1.5 text-[0.8rem] leading-5 text-[#5E4735] sm:text-[0.9rem] sm:leading-6">
                      Let&apos;s talk about your location, franchise fit, and next step.
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center lg:shrink-0 lg:justify-end">
                  <motion.a
                    href="#enquire"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2D1A10] px-5 py-3 text-[0.82rem] font-semibold text-[#FFF7EF] shadow-[0_8px_18px_rgba(45,26,16,0.14)] transition-colors hover:bg-[#4A2C17]"
                  >
                    Enquire Franchise
                    <ArrowRight className="h-4 w-4" />
                  </motion.a>

                  <a
                    href="#outlets"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#BDA88D] bg-white/45 px-5 py-3 text-[0.82rem] font-semibold text-[#2D1A10] transition-colors hover:border-[#9A6B32] hover:bg-white/75"
                  >
                    <Store className="h-4 w-4 text-[#9A6B32]" />
                    View Outlet
                  </a>

                  <a
                    href="tel:+916385648484"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#BDA88D] bg-transparent px-5 py-3 text-[0.82rem] font-semibold text-[#5E4735] transition-colors hover:border-[#9A6B32] hover:text-[#2D1A10]"
                  >
                    <PhoneCall className="h-4 w-4 text-[#9A6B32]" />
                    Call Mobile
                  </a>
                </div>

                {/* Close */}
                <button
                  type="button"
                  onClick={() => setVisible(false)}
                  aria-label="Close franchise banner"
                  className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-[#6D5139] transition-colors hover:bg-[#2D1A10]/10 hover:text-[#2D1A10] sm:right-4 sm:top-4"
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