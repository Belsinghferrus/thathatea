import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Users } from "lucide-react";

const reachItems = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 6385648484",
    meta: "Mon - Sat  9 AM - 7 PM",
    href: "tel:+916385648484",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "info@thathatea.com",
    meta: "We’ll reply within 24–48 hours",
    href: "mailto:info@thathatea.com",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "17/1, Saint Thomas Town, Kammanahalli, Bengaluru, KA 560084",
    meta: "Bengaluru, KA",
    href: "https://maps.google.com/?q=17%2F1%2C+Saint+Thomas+Town%2C+Kammanahalli%2C+Bengaluru%2C+KA+560084",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Chat with us on WhatsApp",
    meta: "+91 63856 48484",
    href: "https://wa.me/916385648484",
  },
  {
    icon: Users,
    title: "Partnership",
    value: "info@thathatea.com",
    meta: "Franchise & collaborations",
    href: "mailto:info@thathatea.com",
  },
];

export default function ReachUsDialSection() {
  return (
    <section className="relative overflow-hidden bg-[#FBF1E5] py-14 text-[#4B2A16] sm:py-16 lg:py-20">
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        {/* heading */}
        <div className="mx-auto max-w-xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#A16635] sm:text-[0.7rem]">
            Let’s share a cup & a conversation
          </p>
          <h2
            className="mt-3 text-[2.4rem] leading-[0.9] text-[#3D2413] sm:text-[3.2rem] lg:text-[3.6rem]"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: "0.01em",
            }}
          >
            WAYS TO REACH US
          </h2>
        </div>

        {/* DESKTOP / LARGE: center hub + arc */}
        <div className="relative mt-12 hidden lg:block">
          {/* subtle arc line */}
          <svg
            viewBox="0 0 1200 300"
            className="pointer-events-none mx-auto h-40 w-full text-[#D2A57F]/70"
            fill="none"
          >
            <path
              d="M80 220C220 60 420 40 600 40C780 40 980 60 1120 220"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="6 10"
              strokeLinecap="round"
            />
          </svg>

          {/* center hub */}
          <div className="pointer-events-none absolute left-1/2 top-[20%] z-10 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#F7E1C7] shadow-[0_16px_40px_rgba(83,46,27,0.15)]">
            <div className="absolute inset-4 rounded-full border border-[#D1A77E]/60" />
            <div className="relative text-center">
              <p className="text-[0.6rem] uppercase tracking-[0.22em] text-[#A16635]">
                Connect with
              </p>
              <p
                className="mt-1 text-[1.4rem] leading-none text-[#3D2413]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                THATHA TEA
              </p>
              <p className="mt-1 text-[0.8rem] uppercase tracking-[0.18em] text-[#A16635]">
                FAMILY
              </p>
            </div>
          </div>

          {/* cards along arc */}
          <div className="relative mx-auto mt-8 flex max-w-5xl items-end justify-between">
            {reachItems.map((item, index) => {
              const Icon = item.icon;
              // tweak vertical offsets manually for arc feel
              const offsets = [40, 10, 0, 10, 40];

              return (
                <motion.a
                  key={item.title}
                  href={item.href}
                  target={item.title === "Visit Us" ? "_blank" : undefined}
                  rel={item.title === "Visit Us" ? "noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="relative w-[18%] rounded-[22px] border border-[#E3C8A9]/80 bg-[#FFF8EF]/85 px-4 py-5 text-center shadow-[0_12px_28px_rgba(83,46,27,0.10)] backdrop-blur-sm"
                  style={{ marginTop: offsets[index] }}
                >
                  {/* connector dot */}
                  <div className="absolute left-1/2 -top-4 h-6 w-6 -translate-x-1/2 rounded-full border border-[#D2A57F]/80 bg-[#FBF1E5]" />

                  <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#F3E2CC] text-[#6E4527] shadow-[0_6px_16px_rgba(83,46,27,0.10)]">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>
                  <p className="text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-[#A16635]">
                    {item.title}
                  </p>
                  <p className="mt-1 text-[0.95rem] leading-5 text-[#4B2A16]">
                    {item.value}
                  </p>
                  <p className="mt-2 text-[0.7rem] uppercase tracking-[0.16em] text-[#A16635]">
                    {item.meta}
                  </p>
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* MOBILE / TABLET: simple stacked cards */}
        <div className="mt-10 grid w-full max-w-xl grid-cols-1 gap-5 lg:hidden mx-auto">
          {reachItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.title}
                href={item.href}
                target={item.title === "Visit Us" ? "_blank" : undefined}
                rel={item.title === "Visit Us" ? "noreferrer" : undefined}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                whileHover={{ y: -3 }}
                className="rounded-[18px] border border-[#E3C8A9]/70 bg-[#FFF8EF]/90 px-4 py-4 shadow-[0_8px_20px_rgba(83,46,27,0.08)] backdrop-blur-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F3E2CC] text-[#6E4527] shadow-[0_6px_16px_rgba(83,46,27,0.10)]">
                    <Icon className="h-5 w-5" strokeWidth={1.7} />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <p className="text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-[#A16635]">
                      {item.title}
                    </p>
                    <p className="mt-0.5 text-[0.92rem] leading-5 text-[#4B2A16]">
                      {item.value}
                    </p>
                    <p className="mt-0.5 text-[0.7rem] uppercase tracking-[0.14em] text-[#A16635]">
                      {item.meta}
                    </p>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}