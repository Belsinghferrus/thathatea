import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

import teaSpoon from "@/assets/images/contact/cafe4.png"; // bottom-left PNG
import teaLeaves from "@/assets/images/contact/cafe4.png"; // right-side PNG

// No grid: path-like layout with pills and curved SVG accents.
export default function ReachUsSection() {
  return (
    <section className="relative overflow-hidden bg-[#FBF1E5] py-16 text-[#4B2A16] sm:py-20 lg:py-24">
      {/* Soft background tint */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(181,103,49,0.12),transparent_18%),radial-gradient(circle_at_80%_85%,rgba(181,103,49,0.10),transparent_20%)]" />

      {/* PNG accents */}
      <img
        src={teaSpoon}
        alt="Tea spoon with leaves"
        className="pointer-events-none absolute -bottom-6 left-2 h-32 w-auto opacity-90 sm:left-8 sm:h-40 lg:left-16 lg:h-48"
      />
      <img
        src={teaLeaves}
        alt="Tea leaves illustration"
        className="pointer-events-none absolute -right-4 top-6 h-32 w-auto opacity-90 sm:-right-2 sm:h-40 lg:right-6 lg:h-52"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#A16635] sm:text-[0.7rem]">
            Ways to connect with us
          </p>

          <h2
            className="mt-3 text-[2.8rem] text-[#3D2413] sm:text-[3.4rem] lg:text-[3.8rem]"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: "0.01em",
            }}
          >
            REACH OUT TO THE THATHA TEA FAMILY
          </h2>

          <p className="mt-3 text-[0.9rem] leading-7 text-[#6B4B3B] sm:text-base">
            Call, write, or drop in for a warm cup of tea. However you choose to reach us,
            we&apos;ll make sure it feels like home.
          </p>
        </motion.div>

        {/* Layout: path + pills (no grid) */}
        <div className="mt-10 flex flex-col items-center gap-10 sm:mt-12 sm:gap-12 lg:mt-16">
          {/* Curved connector line (desktop only) */}
          <div className="relative hidden w-full items-center justify-center lg:flex">
            <svg
              viewBox="0 0 980 120"
              className="h-28 w-full text-[#D2A57F]"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M10 90C120 10 260 10 380 70C500 130 610 130 730 70C840 15 910 25 970 60"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="6 10"
              />
            </svg>
          </div>

          {/* Three columns built with flex, not grid */}
          <div className="flex w-full flex-col items-stretch gap-8 sm:gap-10 lg:flex-row lg:items-start lg:justify-between">
            {/* LEFT: Call + WhatsApp */}
            <div className="flex w-full flex-col gap-8 lg:w-[36%]">
              <ContactPill
                icon={Phone}
                label="Call Us"
                primary="+91 63856 48484"
                sub="Mon - Sat | 9 AM - 7 PM"
                href="tel:+916385648484"
              />

              <ContactPill
                icon={MessageCircle}
                label="WhatsApp"
                primary="Chat with us on WhatsApp"
                sub="Quick answers for your tea-time queries"
                href="https://wa.me/916385648484"
                accent="right"
              />
            </div>

            {/* CENTER: Address pin on the path */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative flex w-full flex-col items-center lg:w-[28%]"
            >
              {/* Circular pin (desktop) */}
              <div className="relative hidden h-28 w-28 items-center justify-center rounded-full border-2 border-[#C79B73] bg-[#FFF8EF]/90 text-[#8A5A32] shadow-[0_18px_40px_rgba(83,46,27,0.16)] lg:flex">
                <MapPin className="h-10 w-10" strokeWidth={1.7} />
                <div className="absolute -bottom-3 h-5 w-[2px] rounded-full bg-[#C79B73]" />
              </div>

              {/* Address card */}
              <motion.a
                href="https://maps.google.com/?q=17%2F1%2C+Saint+Thomas+Town%2C+Kammanahalli%2C+Bengaluru%2C+KA+560084"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -4 }}
                className="mt-3 w-full max-w-md rounded-[26px] border border-[#D8B08A]/60 bg-[#FFF8EF]/90 px-5 py-5 text-center shadow-[0_14px_34px_rgba(83,46,27,0.12)] backdrop-blur-sm"
              >
                <div className="mb-2 flex items-center justify-center gap-2 text-[#A16635] lg:hidden">
                  <MapPin className="h-5 w-5" />
                  <span className="text-xs font-semibold uppercase tracking-[0.16em]">
                    Visit us
                  </span>
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#A16635] lg:text-[0.7rem]">
                  Our Tea House
                </p>
                <p className="mt-2 text-[0.95rem] leading-6 text-[#4B2A16]">
                  17/1, Saint Thomas Town,
                  <br />
                  Kammanahalli
                  <br />
                  Bengaluru, KA 560084
                </p>
              </motion.a>
            </motion.div>

            {/* RIGHT: Email + tagline strip */}
            <div className="flex w-full flex-col gap-8 lg:w-[30%]">
              <ContactPill
                icon={Mail}
                label="Email Us"
                primary="info@thathatea.com"
                sub="We&apos;ll reply within 24–48 hours"
                href="mailto:info@thathatea.com"
                accent="left"
              />

              <div className="mt-1 inline-flex items-center gap-2 text-[0.78rem] uppercase tracking-[0.18em] text-[#A16635]">
                <span className="h-px w-8 bg-[#D2A57F]" />
                We&apos;re just a sip away
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactPill({ icon: Icon, label, primary, sub, href, accent }) {
  return (
    <motion.a
      href={href}
      whileHover={{ y: -4 }}
      className="relative flex items-center gap-4 rounded-[999px] border border-[#D8B08A]/60 bg-[#FFF8EF]/90 px-4 py-3 shadow-[0_10px_26px_rgba(83,46,27,0.10)] backdrop-blur-sm sm:px-5 sm:py-4"
    >
      {/* Curved SVG accent on left / right */}
      {accent === "left" && (
        <svg
          viewBox="0 0 90 40"
          className="pointer-events-none absolute -left-10 top-1/2 hidden h-10 w-20 -translate-y-1/2 text-[#D2A57F] sm:block"
          fill="none"
        >
          <path
            d="M88 4C60 8 40 16 18 22C10 24 5 26 2 36"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      )}
      {accent === "right" && (
        <svg
          viewBox="0 0 90 40"
          className="pointer-events-none absolute -right-10 top-1/2 hidden h-10 w-20 -translate-y-1/2 rotate-180 text-[#D2A57F] sm:block"
          fill="none"
        >
          <path
            d="M88 4C60 8 40 16 18 22C10 24 5 26 2 36"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      )}

      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#C79B73]/40 bg-[#F3E2CC] text-[#6E4527] shadow-[0_8px_20px_rgba(83,46,27,0.10)] sm:h-12 sm:w-12">
        <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.7} />
      </div>

      <div className="flex flex-1 flex-col">
        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#A16635]">
          {label}
        </p>
        <p className="mt-0.5 text-[0.95rem] font-medium text-[#3D2413] sm:text-base">
          {primary}
        </p>
        <p
          className="mt-0.5 text-[0.72rem] text-[#7A5A46] sm:text-[0.78rem]"
          dangerouslySetInnerHTML={{ __html: sub }}
        />
      </div>
    </motion.a>
  );
}