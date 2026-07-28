import { motion } from "framer-motion";
import kamanahalli from "@/assets/images/outlet/kamanahalli.png";
import kasturiNagar from "@/assets/images/outlet/kasthuri.png";
import indiraNagar from "@/assets/images/outlet/Indra-nager.png";
import kithaganur from "@/assets/images/outlet/kithaganur.png";
import React from "react";
const TESTIMONIALS = [
  {
    id: 1,
    tone: "light",
    outlet: "Kamanahalli",
    rating: 5,
    feedback:
      "The familiarity of the brand made the decision easier. People already understood what Thatha Tea stood for, and that reduced our risk from the start.",
    image: kamanahalli,
    alt: "Thatha Tea Kamanahalli outlet exterior",
  },
  {
    id: 2,
    tone: "brown",
    outlet: "Kasturi Nagar",
    rating: 4,
    feedback:
      "The outlet setup felt guided and practical. What mattered to us was not hype, but clarity, support, and a format that could actually work locally.",
    image: kasturiNagar,
    alt: "Thatha Tea Kasturi Nagar outlet exterior",
  },
  {
    id: 3,
    tone: "light",
    outlet: "Indira Nagar",
    rating: 5,
    feedback:
      "This did not feel like buying into a short-term trend. It felt like choosing a store format people would trust, return to, and remember.",
    image: indiraNagar,
    alt: "Thatha Tea Indira Nagar outlet exterior",
  },
  {
    id: 4,
    tone: "brown",
    outlet: "Kithaganur",
    rating: 5,
    feedback:
      "The combination of local response, recognisable branding, and launch confidence made this feel like a practical business decision, not a gamble.",
    image: kithaganur,
    alt: "Thatha Tea Kithaganur outlet exterior",
  },
];

function StarRating({ rating, dark = false }) {
  const active = dark ? "#f5dcc2" : "#e2a12b";
  const inactive = dark ? "rgba(245,220,194,0.32)" : "#d8b98e";

  return (
    <div className="flex items-center gap-1.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          viewBox="0 0 20 20"
          aria-hidden="true"
          className="h-4 w-4"
          style={{ color: star <= rating ? active : inactive }}
        >
          <path
            d="M10 1.8l2.5 5.05 5.58.81-4.04 3.94.95 5.56L10 14.52 5.01 17.16l.95-5.56L1.92 7.66l5.58-.81L10 1.8Z"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="0.9"
          />
        </svg>
      ))}
    </div>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none">
      <path d="M7 17 17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ReviewCTA({ onClick, tone = "light" }) {
  const isDark = tone === "brown";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group inline-flex min-h-[60px] items-center gap-3 rounded-full px-6 pr-3 py-3 text-[0.8rem] font-bold uppercase tracking-[0.16em] transition duration-300 hover:-translate-y-0.5 ${
        isDark
          ? "bg-[#6b4028] text-[#fff4e8] shadow-[0_8px_18px_rgba(0,0,0,0.14)] hover:bg-[#7a4a30]"
          : "border border-[#e3d4c4] bg-[#f3eadf] text-[#5a3928] shadow-[0_8px_18px_rgba(58,36,24,0.05)] hover:bg-[#f7efe6]"
      }`}
      style={{ fontFamily: "'Manrope', sans-serif" }}
    >
      <span className="pl-1">View outlet</span>

      <span
        className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition duration-300 group-hover:rotate-6 ${
          isDark ? "bg-[#f4e7d8] text-[#3a2418]" : "bg-[#4a2817] text-[#fff4e8]"
        }`}
      >
        <ArrowUpRightIcon />
      </span>
    </button>
  );
}

function ReviewTextBlock({ item, onViewOutletClick, reduceMotion = false, placement = "" }) {
  const isDark = item.tone === "brown";

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className={`h-full rounded-[28px] p-6 sm:p-7 lg:p-8 ${placement} ${
        isDark ? "bg-[#3a2418] text-[#f8ede2]" : "bg-[#ece5d4] text-[#2f1d14]"
      }`}
    >
      <StarRating rating={item.rating} dark={isDark} />

      <h3
        className={`mt-5 text-[2.15rem] leading-[0.95] tracking-[-0.04em] sm:text-[2.5rem] lg:text-[3rem] ${
          isDark ? "text-[#fff4e8]" : "text-[#3a2418]"
        }`}
        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
      >
        {item.outlet}
      </h3>

      <p
        className={`mt-4 text-[0.9rem] leading-[1.78] sm:text-[1.05rem] ${
          isDark ? "text-[#eadbca]" : "text-[#5d4b3f]"
        }`}
        style={{ fontFamily: "'Manrope', sans-serif" }}
      >
        {item.feedback}
      </p>

      <div className="mt-7">
        <ReviewCTA onClick={onViewOutletClick} tone={item.tone} />
      </div>
    </motion.article>
  );
}

function ReviewImageBlock({ item, reduceMotion = false, placement = "" }) {
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className={`h-full overflow-hidden rounded-[28px] ${placement}`}
    >
      <img
        src={item.image}
        alt={item.alt}
        loading="lazy"
        className="h-full min-h-[240px] w-full object-cover sm:min-h-[280px] lg:min-h-[320px]"
      />
    </motion.div>
  );
}

/*
  Desktop checkerboard placement (4 columns x 2 rows):
  col 1: text top   / image bottom
  col 2: image top  / text bottom
  col 3: text top   / image bottom
  col 4: image top  / text bottom
*/
const DESKTOP_PLACEMENT = [
  { col: "lg:col-start-1", textRow: "lg:row-start-1", imageRow: "lg:row-start-2" },
  { col: "lg:col-start-2", textRow: "lg:row-start-2", imageRow: "lg:row-start-1" },
  { col: "lg:col-start-3", textRow: "lg:row-start-1", imageRow: "lg:row-start-2" },
  { col: "lg:col-start-4", textRow: "lg:row-start-2", imageRow: "lg:row-start-1" },
];

export default function FranchiseFeedbackMosaicSection({
  reduceMotion = false,
  onViewOutletClick,
}) {
  return (
    <section className="bg-[#f5eadc] px-4 py-20 text-[#2b1a12] sm:px-6 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1320px]">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-12 grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-start"
        >
          <div>
            <p
              className="text-[0.78rem] font-bold uppercase tracking-[0.2em] text-[#7a5237]"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Franchisee feedback
            </p>

            <h2
              className="mt-4 text-[3rem] leading-[0.92] tracking-[-0.05em] text-[#3a2418] sm:text-[3.8rem] lg:text-[5rem]"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Real voices.
              <br />
              Real outlets.
            </h2>
          </div>

          <p
            className="max-w-[520px] text-[1.05rem] leading-[1.78] text-[#5c493d] sm:text-[1.12rem] lg:justify-self-end"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            A few direct notes from franchise partners who chose to build with
            Thatha Tea, backed by real outlets and local confidence.
          </p>
        </motion.div>

        {/*
          Mobile/tablet: no explicit placement classes apply, so the DOM
          order (text, image, text, image...) renders as a clean linear
          stack — same pattern for all four testimonials.

          Desktop (lg): explicit col-start/row-start locks in the exact
          checkerboard mosaic from the reference screenshot.
        */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          {TESTIMONIALS.map((item, index) => {
            const pos = DESKTOP_PLACEMENT[index];
            return (
              <React.Fragment key={item.id}>
                <ReviewTextBlock
                  item={item}
                  onViewOutletClick={onViewOutletClick}
                  reduceMotion={reduceMotion}
                  placement={`${pos.col} ${pos.textRow}`}
                />
                <ReviewImageBlock
                  item={item}
                  reduceMotion={reduceMotion}
                  placement={`${pos.col} ${pos.imageRow}`}
                />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}