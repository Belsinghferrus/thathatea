import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import paperbg from "@/assets/images/franchise/cafe-bg2.png";
import franchiseTea from "@/assets/images/franchise/cafe3.png"; // Replace with your transparent PNG

const initialForm = {
  name: "",
  email: "",
  phone: "",
  location: "",
  investmentRange: "",
};

const investmentRanges = [
  { value: "6-8", label: "₹6–8 Lakh" },
  { value: "16-20", label: "₹16–20 Lakh" },
  { value: "21-28", label: "₹21–28 Lakh" },
  { value: "30-35", label: "₹30–35 Lakh" },
];

function validateForm(values) {
  const errors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const phone = values.phone.replace(/\D/g, "");
  const location = values.location.trim();

  if (!name) errors.name = "Please enter your name.";
  else if (name.length < 2) errors.name = "Please enter a valid name.";

  if (!email) errors.email = "Please enter your email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email)) {
    errors.email = "Please enter a valid email.";
  }

  if (!phone) errors.phone = "Please enter your phone number.";
  else if (!/^[6-9]\d{9}$/.test(phone)) {
    errors.phone = "Enter a valid 10-digit mobile number.";
  }

  if (!location) errors.location = "Please enter your preferred location.";
  else if (location.length < 2) errors.location = "Please enter a valid location.";

  if (!values.investmentRange) {
    errors.investmentRange = "Please select an investment range.";
  }

  return errors;
}

export default function FranchiseEditorialEnquirySection() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
    setSubmitted(false);
  };

  const selectInvestment = (value) => {
    setForm((current) => ({ ...current, investmentRange: value }));
    setErrors((current) => ({ ...current, investmentRange: "" }));
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextErrors = validateForm(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    // Future AppScript/API integration goes here.
    // The validated enquiry payload is available in `form`.
    setSubmitted(true);
  };

  return (
    <section
      id="enquire"
      className="relative isolate min-h-screen w-full overflow-hidden bg-[#F4E9D8] text-[#2D1A10]"
    >
      {/* Section texture */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <img
          src={paperbg}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover "
        />
        <div className="absolute inset-0 " />
      </div>

      {/* Decorative background word */}
     

      <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-[1500px] items-center gap-8 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-12 lg:py-20">
        {/* Transparent PNG visual */}
        <motion.div
          initial={{ opacity: 0, x: -30, y: 16 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative flex min-h-[280px] items-center justify-center sm:min-h-[380px] lg:min-h-[650px]"
        >
          <div className="absolute left-[8%] top-[20%] h-36 w-36 rounded-full border border-[#B77A2A]/25 sm:h-52 sm:w-52" />
          <div className="absolute bottom-[17%] right-[7%] h-24 w-24 rounded-full border border-[#B77A2A]/20 sm:h-36 sm:w-36" />

          <img
            src={franchiseTea}
            alt="Thatha Tea franchise experience"
            className="relative z-10 max-h-[420px] w-auto max-w-[100%] object-contain sm:max-h-[470px] lg:max-h-[680px]"
          />
        </motion.div>

        {/* Content and form — no container */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="w-full max-w-2xl lg:ml-auto"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#B77A2A]" />
            <p className="text-[0.65rem] uppercase tracking-[0.32em] text-[#3A2114] sm:text-[0.72rem]">
              Franchise enquiry
            </p>
          </div>

          <h2
            className="mt-5 max-w-[8ch] text-[3.8rem] leading-[0.8] sm:mt-7 sm:text-[5.8rem] lg:text-[7.4rem]"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              letterSpacing: "-0.01em",
            }}
          >
            LET&apos;S 
            <span className="block text-[#B77A2A]">CONNECT</span>
            {/* <span className="block">FAMILIAR.</span> */}
          </h2>

          <p className="mt-5 max-w-[38ch] text-[0.92rem] leading-7 text-[#5E4735] sm:mt-6 sm:text-[1rem]">
            Tell us where you want to build, and we&apos;ll help you understand
            whether Thatha Tea is the right next move for you.
          </p>

          <form onSubmit={handleSubmit} noValidate className="mt-8 sm:mt-10">
            <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 sm:gap-y-7">
              <div className="sm:col-span-2">
                <label htmlFor="enquiry-name" className="block text-[0.66rem] uppercase tracking-[0.22em] text-[#3A2114]">
                  01 / Your name
                </label>
                <input
                  id="enquiry-name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={updateField}
                  placeholder="What should we call you?"
                  autoComplete="name"
                  className={`mt-1.5 w-full border-0 border-b bg-transparent px-0 py-3 text-[0.98rem] text-[#3A2114] outline-none placeholder:text-[#A4917D] focus:ring-0 sm:text-[1.05rem] ${errors.name ? "border-[#A8422B]" : "border-[#CDB99E] focus:border-[#B77A2A]"}`}
                />
                {errors.name && <p className="mt-1 text-xs text-[#3A2114]">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="enquiry-email" className="block text-[0.66rem] uppercase tracking-[0.22em] text-[#3A2114]">
                  02 / Email
                </label>
                <input
                  id="enquiry-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={updateField}
                  placeholder="you@example.com"
                  autoComplete="email"
                  className={`mt-1.5 w-full border-0 border-b bg-transparent px-0 py-3 text-[0.98rem] text-[#3A2114] outline-none placeholder:text-[#A4917D] focus:ring-0 sm:text-[1.05rem] ${errors.email ? "border-[#A8422B]" : "border-[#CDB99E] focus:border-[#B77A2A]"}`}
                />
                {errors.email && <p className="mt-1 text-xs text-[#3A2114]">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="enquiry-phone" className="block text-[0.66rem] uppercase tracking-[0.22em] text-[#3A2114]">
                  03 / Phone
                </label>
                <input
                  id="enquiry-phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={updateField}
                  placeholder="10-digit mobile"
                  autoComplete="tel"
                  inputMode="numeric"
                  maxLength={14}
                  className={`mt-1.5 w-full border-0 border-b bg-transparent px-0 py-3 text-[0.98rem] text-[#3A2114] outline-none placeholder:text-[#A4917D] focus:ring-0 sm:text-[1.05rem] ${errors.phone ? "border-[#A8422B]" : "border-[#CDB99E] focus:border-[#B77A2A]"}`}
                />
                {errors.phone && <p className="mt-1 text-xs text-[#3A2114]">{errors.phone}</p>}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="enquiry-location" className="block text-[0.66rem] uppercase tracking-[0.22em] text-[#3A2114]">
                  04 / Preferred location
                </label>
                <input
                  id="enquiry-location"
                  name="location"
                  type="text"
                  value={form.location}
                  onChange={updateField}
                  placeholder="City, neighbourhood, or area"
                  autoComplete="address-level2"
                  className={`mt-1.5 w-full border-0 border-b bg-transparent px-0 py-3 text-[0.98rem] text-[#3A2114] outline-none placeholder:text-[#A4917D] focus:ring-0 sm:text-[1.05rem] ${errors.location ? "border-[#A8422B]" : "border-[#CDB99E] focus:border-[#B77A2A]"}`}
                />
                {errors.location && <p className="mt-1 text-xs text-[#3A2114]">{errors.location}</p>}
              </div>

              <div className="sm:col-span-2">
                <p className="text-[0.66rem] uppercase tracking-[0.22em] text-[#3A2114]">
                  05 / Investment range
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {investmentRanges.map((range) => {
                    const selected = form.investmentRange === range.value;

                    return (
                      <button
                        key={range.value}
                        type="button"
                        onClick={() => selectInvestment(range.value)}
                        className={`rounded-full border px-4 py-2.5 text-[0.76rem] transition-all sm:px-5 sm:text-[0.82rem] ${selected ? "border-[#3A2114] bg-[#3A2114] text-[#FFF7EF]" : "border-[#CDB99E] bg-transparent text-[#5E4735] hover:border-[#9A6B32]"}`}
                      >
                        {range.label}
                      </button>
                    );
                  })}
                </div>
                {errors.investmentRange && <p className="mt-2 text-xs text-[#A8422B]">{errors.investmentRange}</p>}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 border-t border-[#CDB99E]/70 pt-5 sm:mt-9 sm:flex-row sm:items-center sm:justify-between sm:pt-6">
              <p className="max-w-xs text-xs leading-5 text-[#806A55]">
                We&apos;ll only use your details to respond to this enquiry.
              </p>

              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-3 self-start rounded-full bg-[#2D1A10] px-6 py-3.5 text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-[#FFF7EF] transition-all hover:-translate-y-1 hover:bg-[#4A2C17] focus:outline-none focus:ring-4 focus:ring-[#B77A2A]/25"
              >
                Send enquiry
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-5 flex items-center gap-2 text-sm text-[#3F7039]"
                role="status"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#3F7039] text-white">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                Thank you — your enquiry is ready to be connected.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}