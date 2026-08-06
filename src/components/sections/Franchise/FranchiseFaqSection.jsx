import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, ChevronDown, Play } from "lucide-react";
import paperbg from "@/assets/images/paper-bg.webp";
import faqPoster from "@/assets/images/mascot.png"; 
import franchiseVideo from "@/assets/images/franchise/franchise.mp4";

const faqVideo = true;

const faqs = [
  {
    question: "How much does a franchise require?",
    answer:
      "The investment depends on the outlet format, location, size, interiors, equipment, and setup requirements. Our team will guide you based on your preferred city and selected investment range.",
  },
  {
    question: "Do I need food business experience?",
    answer:
      "Previous experience is helpful but not essential. We provide guidance and training for outlet operations, service standards, team workflow, and daily store management.",
  },
  {
    question: "Can you help me find a location?",
    answer:
      "Yes. We can discuss your preferred city or neighbourhood and evaluate factors such as visibility, accessibility, demand, footfall, and customer profile.",
  },
  {
    question: "What support do I receive before launch?",
    answer:
      "Pre-launch support can include location discussions, design and setup guidance, equipment planning, team training, process orientation, and opening preparation.",
  },
  {
    question: "Is support available after the outlet opens?",
    answer:
      "Yes. Franchise partners can receive ongoing operational, process, brand, and marketing guidance to help maintain a consistent customer experience.",
  },
];

export default function FranchiseFaqSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeFaq = faqs[activeIndex];

  return (
    <section
      id="faq"
      className="relative min-h-screen w-full overflow-hidden bg-[#F4E9D8] px-5 py-12 text-[#2D1A10] sm:px-8 sm:py-16 lg:px-12 lg:py-20"
    >
      {/* Paper texture */}
      <div className="pointer-events-none absolute inset-0 opacity-45">
        <img
          src={paperbg}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-[#F4E9D8]/70" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-6rem)] max-w-[1280px] flex-col justify-center">
        {/* Simple heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-8 max-w-2xl sm:mb-10"
        >
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-[#9A6B32] sm:text-[0.72rem]">
            Franchise FAQ
          </p>
          <h2
            className="mt-3 text-[2.8rem] leading-[0.86] sm:text-[4rem] lg:text-[5.2rem]"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: "0.02em",
            }}
          >
            GOOD QUESTIONS.
            <span className="block text-[#B77A2A]">CLEAR ANSWERS.</span>
          </h2>
          <p className="mt-3 max-w-xl text-[0.9rem] leading-6 text-[#5E4735] sm:text-[0.98rem] sm:leading-7">
            Everything you need to know before taking the first step toward a
            Thatha Tea franchise.
          </p>
        </motion.div>

        {/* Main content */}
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(230px,0.65fr)_minmax(0,1.35fr)] lg:gap-16">
          {/* Portrait video */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="mx-auto w-full max-w-[360px]"
          >
            <div className="relative mx-auto aspect-[9/14] w-full overflow-hidden rounded-[28px] bg-[#2D1A10] shadow-[0_22px_50px_rgba(45,26,16,0.16)] sm:max-w-[330px] lg:max-w-[300px]">
              {faqVideo ? (
                <video
                  src={franchiseVideo}
                  poster={faqPoster}
                  controls
                  muted
                  autoPlay  
                  loop  
                  
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                />
              ) : (
                <img
                  src={faqPoster}
                  alt="Thatha Tea franchise story"
                  className="h-full w-full object-cover"
                />
              )}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#2D1A10]/70 via-transparent to-[#2D1A10]/10" />

              {!faqVideo && (
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F2C785] text-[#2D1A10] shadow-lg">
                    <Play className="ml-1 h-5 w-5" fill="currentColor" />
                  </span>
                </div>
              )}

              <div className="absolute inset-x-5 bottom-5 text-[#FFF7EF]">
                <p className="text-[0.62rem] uppercase tracking-[0.25em] text-[#F2C785]">
                  Before you begin
                </p>
                <p
                  className="mt-2 text-[1.5rem] leading-[0.92] sm:text-[1.8rem]"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  A FEW THINGS WORTH KNOWING
                </p>
              </div>
            </div>
          </motion.div>

          {/* FAQ list */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="min-w-0"
          >
            <div className="border-t border-[#CDB99E]">
              {faqs.map((faq, index) => {
                const isActive = activeIndex === index;

                return (
                  <div key={faq.question} className="border-b border-[#CDB99E]">
                    <button
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-expanded={isActive}
                      className="group flex w-full items-center gap-4 py-5 text-left sm:py-6"
                    >
                      <span className="w-7 shrink-0 text-[0.68rem] tracking-[0.16em] text-[#B77A2A]">
                        0{index + 1}
                      </span>
                      <span
                        className={`flex-1 text-[1rem] font-medium leading-6 transition-colors sm:text-[1.12rem] ${
                          isActive
                            ? "text-[#B77A2A]"
                            : "text-[#2D1A10] group-hover:text-[#9A6B32]"
                        }`}
                      >
                        {faq.question}
                      </span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isActive
                            ? "rotate-180 border-[#2D1A10] bg-[#2D1A10] text-[#FFF7EF]"
                            : "border-[#BDA88D] text-[#6D5139]"
                        }`}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-2xl pb-5 pl-11 pr-8 text-[0.9rem] leading-7 text-[#5E4735] sm:pb-6 sm:pl-11 sm:text-[0.98rem]">
                            {activeFaq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-sm text-xs leading-5 text-[#806A55]">
                Still have a question? We&apos;re happy to talk through your city,
                format, and franchise plans.
              </p>
              <a
                href="#enquire"
                className="group inline-flex items-center gap-2 self-start rounded-full bg-[#2D1A10] px-5 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.1em] text-[#FFF7EF] transition-all hover:-translate-y-0.5 hover:bg-[#4A2C17]"
              >
                Enquire now
                <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}