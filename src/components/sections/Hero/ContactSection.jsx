import { motion } from "framer-motion";
import mascotPng from "@/assets/images/mascot.png";
import teaPng from "@/assets/images/cookie.png";
import outletImg from "@/assets/images/coffee-splash.png";

function ArrowUpRightIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none">
      <path d="M7 17 17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none">
      <path
        d="M6.6 4.8h2.7l1.4 3.4-1.8 1.7a15.7 15.7 0 0 0 5.2 5.2l1.7-1.8 3.4 1.4v2.7c0 .7-.6 1.3-1.3 1.3C10 18.7 5.3 14 5.3 8.1c0-.7.6-1.3 1.3-1.3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none">
      <path
        d="M12 21s6-5.8 6-10.2A6 6 0 1 0 6 10.8C6 15.2 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="10.5" r="2.2" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4" fill="none">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M12 8v4.2l2.8 1.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ContactAction({ href, children, primary = false }) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-[0.8rem] font-bold uppercase tracking-[0.14em] transition duration-300 ${
        primary
          ? "bg-[#3a2418] text-[#fff4e8] shadow-[0_16px_28px_rgba(58,36,24,0.18)] hover:-translate-y-0.5 hover:bg-[#2b1a12]"
          : "border border-[#dac6b4] bg-[#f8efe3] text-[#3a2418] hover:bg-[#fff6ee]"
      }`}
      style={{ fontFamily: "'Manrope', sans-serif" }}
    >
      <span>{children}</span>
      <span
        className={`inline-flex h-9 w-9 items-center justify-center rounded-full transition group-hover:rotate-6 ${
          primary ? "bg-[#fff4e8] text-[#3a2418]" : "bg-[#3a2418] text-[#fff4e8]"
        }`}
      >
        <ArrowUpRightIcon />
      </span>
    </a>
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-1 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#efe2d3] text-[#6b442d]">
        {icon}
      </span>
      <div>
        <p
          className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#8a6954]"
          style={{ fontFamily: "'Manrope', sans-serif" }}
        >
          {label}
        </p>
        <p
          className="mt-1 text-[0.9rem] leading-[1.65] text-[#3a2418]"
          style={{ fontFamily: "'manrope', self-serif" }}
        >
          {value}
        </p>
      </div>
    </div>
  );
}

export default function ContactSection({ reduceMotion = false }) {
  return (
    <section className="relative overflow-hidden bg-[#f5eadc] px-4 py-20 sm:px-6 lg:min-h-screen lg:px-10 lg:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 240 240' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "220px 220px",
        }}
      />

      <div className="relative mx-auto max-w-[1320px]">
        <div className="grid gap-12 lg:grid-cols-[1.06fr_0.94fr] lg:items-center">
          {/* VISUAL SIDE */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
            className="relative min-h-[460px] sm:min-h-[540px] lg:min-h-[720px]"
          >
            {/* background stage */}
            <div className="absolute left-1/2 top-[10%] h-[320px] w-[94%] -translate-x-1/2 rounded-[38px] bg-[#3a2418] shadow-[0_28px_55px_rgba(58,36,24,0.18)] sm:h-[360px] lg:left-[6%] lg:top-[8%] lg:h-[470px] lg:w-[78%] lg:translate-x-0" />

            {/* warm radial wash */}
            <div className="pointer-events-none absolute left-[10%] top-[4%] h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(255,239,224,0.18)_0%,rgba(255,239,224,0.06)_34%,transparent_70%)] blur-2xl lg:h-[420px] lg:w-[420px]" />

            {/* main outlet visual */}
            <div className="absolute bottom-[20px] left-1/2 z-20 w-[92%] max-w-[520px] -translate-x-1/2 sm:w-[80%] lg:bottom-[36px] lg:left-[8%] lg:w-[520px] lg:max-w-none lg:translate-x-0">
              <img
                src={outletImg}
                alt="Thatha Tea outlet visual"
                width={1200}
                height={900}
                loading="lazy"
                className="h-auto w-full object-contain drop-shadow-[0_30px_42px_rgba(43,26,18,0.22)]"
              />
            </div>

            {/* floating cup png */}
            {/* <div className="absolute right-[2%] top-[4%] z-30 w-[130px] rotate-[8deg] sm:w-[150px] lg:right-[8%] lg:top-[14%] lg:w-[170px]">
              <img
                src={teaPng}
                alt="Tea cup visual accent"
                width={500}
                height={500}
                loading="lazy"
                className="h-auto w-full object-contain drop-shadow-[0_18px_24px_rgba(58,36,24,0.16)]"
              />
            </div> */}

            {/* mascot accent */}
            {/* <div className="absolute bottom-[8%] right-[2%] z-30 w-[92px] sm:w-[110px] lg:bottom-[12%] lg:right-[6%] lg:w-[120px]">
              <img
                src={mascotPng}
                alt="Thatha Tea mascot accent"
                width={400}
                height={400}
                loading="lazy"
                className="h-auto w-full object-contain drop-shadow-[0_14px_20px_rgba(58,36,24,0.16)]"
              />
            </div> */}

            {/* micro floating label */}
            <div
              className="absolute left-[6%] top-0 z-30 rounded-full border border-[#e2d1c0] bg-[#f9f0e5]/92 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#704a34]"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Come by for tea or a talk
            </div>
          </motion.div>

          {/* CONTENT SIDE */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="relative"
          >
            <p
              className="text-[0.76rem] font-bold uppercase tracking-[0.2em] text-[#7a5237]"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              Contact us
            </p>

            <h2
              className="mt-4 text-[3.1rem] leading-[0.9] tracking-[-0.05em] text-[#3a2418] sm:text-[4rem] lg:text-[5.6rem]"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              DROP IN,
              <br />
              CALL US,
              <br />
              OR WRITE
            </h2>

            <p
              className="mt-5 max-w-[520px] text-[1rem] leading-[1.76] text-[#5c493d] sm:text-[1.14rem]"
              style={{ fontFamily: "'manrope', sans-serif" }}
            >
              Whether you’re planning a visit, placing a larger order, or exploring a franchise conversation, the next step should feel simple and welcoming.
            </p>

            <div className="mt-8 space-y-5">
              <InfoRow
                icon={<PinIcon />}
                label="Visit us"
                value="17/1, Saint Thomas Town, Kammanahalli, Bengaluru, KA 560084"
              />
              <InfoRow
                icon={<ClockIcon />}
                label="Hours"
                value="6:00 AM – 10:00 PM · Open all days"
              />
              <InfoRow
                icon={<PhoneIcon />}
                label="Call"
                value="+91 63856 48484"
              />
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ContactAction href="tel:+916385648484" primary>
                Call us now
              </ContactAction>
              <ContactAction href="/franchise">
                Franchise enquiry
              </ContactAction>
            </div>

            <div
              className="mt-8 flex flex-wrap items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#6d4730]"
              style={{ fontFamily: "'Manrope', sans-serif" }}
            >
              <span>Walk-ins welcome</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#9e6a45]" />
              <span>Easy support</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#9e6a45]" />
              <span>Franchise queries open</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}