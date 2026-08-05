"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Palette,
  GraduationCap,
  Settings,
  Megaphone,
  TrendingUp,
} from "lucide-react";

const steps = [
  {
    icon: MapPin,
    title: "Site Selection",
    text: "We help you find the perfect location.",
  },
  {
    icon: Palette,
    title: "Design & Setup",
    text: "Outlet design, interiors & setup guidance.",
  },
  {
    icon: GraduationCap,
    title: "Training",
    text: "Comprehensive training for you & your team.",
  },
  {
    icon: Settings,
    title: "Operations Support",
    text: "End to end operational support.",
  },
  {
    icon: Megaphone,
    title: "Marketing Support",
    text: "Local & national marketing to grow your business.",
  },
  {
    icon: TrendingUp,
    title: "Grow & Succeed",
    text: "We grow together, you succeed with us.",
  },
];

function Leaf({ className = "" }) {
  return (
    <svg viewBox="0 0 80 80" className={className} fill="none" aria-hidden="true">
      <path
        d="M39 8C28 15 22 27 23 39C24 52 31 63 40 68C49 63 56 52 57 39C58 27 52 15 39 8Z"
        stroke="#A8754A"
        strokeWidth="1.2"
        opacity="0.4"
      />
      <path
        d="M40 12C39 24 39 36 40 66"
        stroke="#A8754A"
        strokeWidth="1"
        opacity="0.35"
        strokeLinecap="round"
      />
      <path
        d="M40 28C33 24 29 20 26 16"
        stroke="#A8754A"
        strokeWidth="0.95"
        opacity="0.3"
        strokeLinecap="round"
      />
      <path
        d="M40 36C47 32 51 28 55 24"
        stroke="#A8754A"
        strokeWidth="0.95"
        opacity="0.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function StepItem({ step, index }) {
  const Icon = step.icon;

  return (
    <div className="relative flex flex-col items-center text-center">
      <div className="relative flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: index * 0.05 }}
          className="flex h-20 w-20 items-center justify-center rounded-full bg-[#2F1C12] shadow-[0_10px_24px_rgba(47,28,18,0.14)] sm:h-24 sm:w-24"
        >
          <Icon className="h-8 w-8 text-[#F8F1E7] sm:h-10 sm:w-10" strokeWidth={1.7} />
        </motion.div>

        {index !== steps.length - 1 && (
          <div className="absolute left-full top-1/2 hidden h-px w-14 -translate-y-1/2 bg-[#C88A3D]/35 md:block lg:w-24" />
        )}
      </div>

      <h3
        className="mt-5 text-[1.15rem] leading-none text-[#2F1C12] sm:text-[1.3rem]"
        style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
      >
        {step.title}
      </h3>

      <p className="mt-3 max-w-[18ch] text-[0.94rem] leading-7 text-[#5B483C] sm:max-w-[19ch]">
        {step.text}
      </p>
    </div>
  );
}

export default function FranchiseSupportJourneySection() {
  return (
    <section className="relative overflow-hidden bg-[#F7ECDC] px-4 py-16 sm:px-6 sm:py-20 lg:px-10 lg:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "220px 220px",
        }}
      />

      <Leaf className="pointer-events-none absolute left-[4%] top-[12%] hidden h-16 w-16 rotate-[-14deg] opacity-35 lg:block" />
      <Leaf className="pointer-events-none absolute right-[5%] top-[14%] hidden h-14 w-14 rotate-[18deg] opacity-30 lg:block" />
      <Leaf className="pointer-events-none absolute bottom-[14%] left-[10%] hidden h-12 w-12 rotate-[8deg] opacity-25 lg:block" />

      <div className="relative mx-auto max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-[840px] text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#C88A3D]/25" />
            <p
              className="text-[0.7rem] uppercase tracking-[0.26em] text-[#A8754A]"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Your journey with us
            </p>
            <span className="h-px w-8 bg-[#C88A3D]/25" />
          </div>

          <h2
            className="mt-4 text-[2.6rem] leading-[0.95] text-[#2F1C12] sm:text-[3.4rem] lg:text-[4.4rem]"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.02em" }}
          >
            WE SUPPORT YOU
            <span className="block text-[#C88A3D]">AT EVERY STEP</span>
          </h2>

          <p
            className="mx-auto mt-4 max-w-[58ch] text-[0.96rem] leading-8 text-[#5D4A3D] sm:text-[1rem]"
            style={{ fontFamily: "'Manrope', sans-serif" }}
          >
            From site selection to long-term growth, we stay beside you with practical support, training, and brand guidance.
          </p>
        </motion.div>

        <div className="mt-14 rounded-[34px] border border-[#E7D5C0] bg-[rgba(255,250,244,0.7)] px-5 py-8 shadow-[0_14px_36px_rgba(72,43,22,0.06)] sm:px-8 sm:py-10 lg:mt-16 lg:px-10 lg:py-12">
          <div className="grid gap-y-12 md:grid-cols-2 md:gap-x-10 xl:grid-cols-6 xl:gap-x-6">
            {steps.map((step, index) => (
              <StepItem key={step.title} step={step} index={index} />
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-[#C88A3D]/18" />
          <p
            className="text-[1.1rem] text-[#9A6A44]/70"
            style={{ fontFamily: "'Allura', cursive" }}
          >
            Brewing growth together
          </p>
          <span className="h-px w-16 bg-[#C88A3D]/18" />
        </div>
      </div>
    </section>
  );
}