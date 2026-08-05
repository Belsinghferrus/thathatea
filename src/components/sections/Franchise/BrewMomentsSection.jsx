import { motion } from "framer-motion";
import { ArrowRight, Store, Users, BadgeIndianRupee, MapPinned, Coffee, Sparkles } from "lucide-react";
import coffeewater from "@/assets/images/franchise/franchise1.jpg";
// TEMP PLACEHOLDER — replace with your actual brand / franchise background image
const sectionBg = coffeewater;

const benefits = [
  {
    icon: Store,
    title: "Proven Store Model",
    desc: "Launch with a layout, menu flow, and customer journey already optimized for real-world operations.",
  },
  {
    icon: Users,
    title: "Brand Support",
    desc: "Get guidance on setup, hiring, training, opening day planning, and ongoing store performance.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Revenue Opportunity",
    desc: "Build a business with a recognized brand, repeat customers, and a tested sales engine.",
  },
  {
    icon: MapPinned,
    title: "Location Assistance",
    desc: "Choose the right area with better visibility, demand, and customer access for your outlet.",
  },
];

const quickStats = [
  { icon: Coffee, value: "50+", label: "Outlets Ready" },
  { icon: Sparkles, value: "1M+", label: "Brand Touchpoints" },
  { icon: MapPinned, value: "30+", label: "Cities Covered" },
];

export default function FranchiseBreakSection() {
  return (
    <section className="relative min-h-screen  rounded-[20px] w-full overflow-hidden bg-[#FBF6EF]">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={sectionBg}
          alt="Franchise background"
          className="h-full  w-full object-contain object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(251,246,239,0.95)_0%,rgba(251,246,239,0.88)_14%,rgba(251,246,239,0.72)_26%,rgba(251,246,239,0.55)_40%)]" /> 
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_98%,rgba(194,154,99,0.18),transparent_26%),radial-gradient(circle_at_82%_78%,rgba(90,54,25,0.10),transparent_94%)]" />
      </div>

      <div className="relative z-10 flex min-h-screen items-center px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div className="mx-auto grid w-full max-w-[1500px] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            className="max-w-2xl"
          >
            <p
              className="mb-3 text-[0.7rem] uppercase tracking-[0.3em] text-[#9A6B32] sm:mb-4 sm:text-[0.75rem]"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Franchise Opportunity
            </p>

            <h1
              className="max-w-[11ch] text-[2.6rem] leading-[0.92] text-[#2D1A10] sm:text-[3.8rem] lg:text-[5.2rem]"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.03em" }}
            >
              OWN A
              <span className="block text-[#B77A2A]">THATHA TEA</span>
              OUTLET
            </h1>

            <p className="mt-4 max-w-[42ch] text-[0.95rem] leading-7 text-[#4E3A2A] sm:mt-5 sm:text-[1.02rem]">
              Join a brand built on familiarity, fast service, and strong repeat
              demand. We help you launch a franchise that feels premium, runs
              efficiently, and speaks to customers from day one.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 sm:mt-7">
              <motion.a
                href="#contact"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 rounded-full bg-[#2D1A10] px-5 py-3 text-[0.88rem] font-semibold text-[#FFF7EF] shadow-[0_12px_28px_rgba(45,26,16,0.16)] transition-colors hover:bg-[#442713] sm:px-6 sm:py-3.5"
              >
                Enquire About Franchise
                <ArrowRight className="h-4 w-4" />
              </motion.a>

              <a
                href="#benefits"
                className="inline-flex items-center gap-2 rounded-full border border-[#C9A26D] bg-white/40 px-5 py-3 text-[0.88rem] font-semibold text-[#2D1A10] backdrop-blur-sm transition-colors hover:bg-white/70 sm:px-6 sm:py-3.5"
              >
                Learn More
              </a>
            </div>

            {/* Quick stats */}
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
              {quickStats.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                    className="rounded-[20px] border border-[#D9C1A1] bg-white/55 p-4 shadow-[0_12px_30px_rgba(45,26,16,0.06)] backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F1DDC2] text-[#9A6B32]">
                        <Icon className="h-5 w-5" strokeWidth={1.8} />
                      </span>
                      <div>
                        <div
                          className="text-[1.7rem] leading-none text-[#2D1A10]"
                          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                        >
                          {item.value}
                        </div>
                        <p className="mt-1 text-[0.7rem] uppercase tracking-[0.16em] text-[#7A5A41]">
                          {item.label}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right benefits panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="rounded-[28px] border border-[#D9C1A1] bg-white/70 p-5 shadow-[0_20px_60px_rgba(45,26,16,0.08)] backdrop-blur-md sm:p-6 lg:p-7"
          >
            <div className="flex items-end justify-between gap-4 border-b border-[#E7D7C0] pb-4">
              <div>
                <p className="text-[0.65rem] uppercase tracking-[0.28em] text-[#9A6B32]">
                  Why Franchise With Us
                </p>
                <h2
                  className="mt-1 text-[1.7rem] leading-[0.95] text-[#2D1A10] sm:text-[2.2rem]"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.03em" }}
                >
                  BUILT FOR GROWTH
                </h2>
              </div>
              <span className="hidden rounded-full bg-[#F1DDC2] px-3 py-1 text-[0.7rem] font-semibold text-[#7B5220] sm:inline-flex">
                Franchise Model
              </span>
            </div>

            <div id="benefits" className="mt-5 grid gap-4 sm:grid-cols-2">
              {benefits.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.4, delay: index * 0.07 }}
                    className="rounded-[22px] border border-[#E7D7C0] bg-[#FFF9F3] p-4 shadow-[0_10px_26px_rgba(45,26,16,0.05)]"
                  >
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#F1DDC2] text-[#9A6B32]">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </div>
                    <h3 className="text-[1rem] font-semibold text-[#2D1A10]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[0.84rem] leading-6 text-[#5E4735]">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-5 rounded-[22px] bg-[linear-gradient(135deg,#2D1A10_0%,#4A2C17_100%)] p-5 text-[#FFF7EF] sm:p-6">
              <p className="text-[0.65rem] uppercase tracking-[0.25em] text-[#F1DDC2]/85">
                Franchise Support
              </p>
              <p className="mt-2 text-[0.95rem] leading-7 text-[#F7EBDC]/88">
                From store design to opening day execution, we support you with a
                framework that makes franchise ownership simpler, faster, and
                more confident.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}