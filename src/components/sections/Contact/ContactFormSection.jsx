import { motion } from "framer-motion";
import {
    User,
    Phone as PhoneIcon,
    Mail,
    MapPin,
    Tag,
    MessageCircle,
    SendHorizonal,
} from "lucide-react";

import leftIllustration from "@/assets/images/contact/sketch2.png"; // bottom-left big image
import righttopIllustration from "@/assets/images/contact/oldman2.png"; // bottom-right big image
import rightIllustration from "@/assets/images/contact/sketch1.png"; //
import vintageLetter from "@/assets/images/contact/vintage-letter1.png"; // parchment
// using cafe4 as the small corner accent too
import leafCorner from "@/assets/images/contact/sketch1.png";

export default function ContactLetterSection() {
    return (
        <section className="relative overflow-hidden bg-[#FBF1E5] py-14 text-[#4B2A16] sm:py-16 lg:py-20">
            {/* subtle background wash */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(181,103,49,0.10),transparent_24%),radial-gradient(circle_at_80%_90%,rgba(181,103,49,0.08),transparent_20%)]" />
            <div className="absolute inset-0 opacity-[0.04] mix-blend-screen">
                <div
                    className="h-full w-full"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 1px 1px, rgba(255,240,225,0.35) 1px, transparent 0)",
                        backgroundSize: "22px 22px",
                    }}
                />
            </div>

            {/* corner accent */}
            {/* <img
                src={leafCorner}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-0 h-20 w-auto sm:h-28 lg:h-162"
            />

            <img
                src={rightIllustration}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute z-30 lg:right-30 sm:right-10 top-0 h-60 w-auto sm:h-62 lg:h-186"
            /> */}

            {/* big bottom illustrations */}
            <img
                src={leftIllustration}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute bottom-[-20%] left-[-20%] h-40 w-auto opacity-70 sm:left-[-6%] sm:h-52 lg:bottom-10 lg:h-144 lg:opacity-95"
            />

            <img
                src={righttopIllustration}
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute bottom-[-8%] z-50 right-[-18%] h-40 w-auto opacity-70 sm:right-[-10%] sm:h-54 lg:bottom-0 lg:right-[0%] lg:h-[720px] lg:opacity-95"
            />
            <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
                {/* heading block – LEFT aligned */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#A16635] sm:text-[0.7rem]">
                        Write us a letter
                    </p>

                    <h2
                        className="mt-3 text-[2.4rem] leading-[0.9] text-[#3D2413] sm:text-[3.2rem] lg:text-[4.2rem]"
                        style={{
                            fontFamily: "'Bebas Neue', sans-serif",
                            letterSpacing: "0.01em",
                        }}
                    >
                        WE’D LOVE TO
                    </h2>

                    <h3
                        className="text-[2rem] leading-[0.95] text-[#C46F2C] sm:text-[2.6rem] lg:text-[3.2rem]"
                        style={{
                            fontFamily: "'Dancing Script', cursive",
                            fontWeight: 700,
                        }}
                    >
                        Hear From You!
                    </h3>


                </motion.div>

                {/* main layout: letter centered, images at bottom */}
                <div className="relative mt-8 flex justify-center lg:mt-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.97, y: 16 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.65 }}
                        className="relative w-full max-w-[720px]"
                    >
                        {/* vintage letter image as the only container */}
                        <img
                            src={vintageLetter}
                            alt="Vintage paper letter"
                            className=" max-w-[520px]  select-none object-contain"
                        />

                        {/* form printed on top of the letter (no card bg, no border, no shadow) */}
                        <form
                            className="
                                pointer-events-auto absolute inset-0
                            mx-auto flex max-w-[82%] flex-col justify-start gap-3
                            px-3 pt-[18%]
                            sm:max-w-[74%] sm:px-0 sm:pt-[17%]
                            lg:gap-4 lg:pt-[22%] 
                                ">
                            {/* Name + Phone */}
                            <div className="grid gap-2.5 sm:grid-cols-2 lg:mb-10">
                                <LetterField icon={User} placeholder="Your Name" name="name" />
                                <LetterField
                                    icon={PhoneIcon}
                                    placeholder="Phone Number"
                                    name="phone"
                                    type="tel"
                                />
                            </div>

                            {/* Email + Location */}
                            <div className="grid gap-3 sm:grid-cols-2 lg:mb-10">
                                <LetterField icon={Mail} placeholder="Email" name="email" type="email" />
                                <LetterField
                                    icon={MapPin}
                                    placeholder="City / Location"
                                    name="location"
                                />
                            </div>

                            {/* Category */}
                            <LetterSelect
                                icon={Tag}
                                className="grid  gap-3 sm:grid-cols-2 lg:mb-10"
                                name="category"
                                label="Enquiry Type"

                                options={[
                                    "Franchise",
                                    "Feedback",
                                    "Support",
                                    "Partnership",
                                    "General Inquiry",
                                    "Other",
                                ]}
                            />

                            {/* Subject */}
                            <LetterField
                                className="grid lg:mb-10"
                                icon={PencilIcon}
                                placeholder="Subject"
                                name="subject"
                            />


                            {/* Message */}
                            <LetterTextarea
                                icon={MessageCircle}
                                placeholder="Write your message here..."
                                name="message"
                            />

                            {/* Submit (you’ll plug in Apps Script later) */}
                            <div className="pt-1 sm:pt-2">
                                <button
                                    type="submit"
                                    className="inline-flex items-center gap-3 rounded-[14px] bg-[#8D4B17] px-6 py-3.5 text-[0.82rem] font-semibold uppercase tracking-[0.12em] text-[#FFF6EC] transition-all hover:-translate-y-0.5 hover:bg-[#9A5620]"
                                >
                                    Send Message
                                    <SendHorizonal className="h-4 w-4" />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

/* Field components stay exactly as you liked, just reused */

function LetterField({ icon: Icon, name, placeholder, type = "text" }) {
    return (
        <div className="relative">
            <input
                name={name}
                type={type}
                placeholder={placeholder}
                className="
          w-full bg-transparent
          border-b border-[#B98B54]/80
          pb-1 pt-0.5 pr-8 
          text-[0.95rem] text-[#3B2414]
          outline-none
          placeholder:text-[#9C7A52]
          focus:border-[#8D4B17]
          transition-colors
        "
            />
            <Icon className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-[#B98B54]" />
        </div>
    );
}

// simple pencil icon using lucide's PencilLine but not imported above
function PencilIcon(props) {
    return (
        <svg
            {...props}
            viewBox="0 0 24 24"
            className={`h-4 w-4 ${props.className || ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L8 18l-4 1 1-4 11.5-11.5z" />
        </svg>
    );
}

function LetterSelect({ icon: Icon, name, label, options }) {
    return (
        <div className="relative">
            <div className="mb-1 text-[0.78rem] uppercase tracking-[0.16em] text-[#A16635]">
                {label}
            </div>
            <select
                name={name}
                className="
          w-full bg-transparent
          border-b border-[#B98B54]/80
          pb-1 pt-0.5 pr-8
          text-[0.95rem] text-[#3B2414]
          outline-none lg:mb-10
          focus:border-[#8D4B17]
          transition-colors
          appearance-none
        "
                defaultValue=""
            >
                <option value="" disabled hidden>
                    Choose a category
                </option>
                {options.map((opt) => (
                    <option key={opt} value={opt}>
                        {opt}
                    </option>
                ))}
            </select>
            <Icon className="pointer-events-none absolute right-0 top-[40%] h-4 w-4 -translate-y-1/2 text-[#B98B54]" />
        </div>
    );
}

function LetterTextarea({ icon: Icon, name, placeholder }) {
    return (
        <div className="relative">
            <textarea
                name={name}
                rows={4}
                placeholder={placeholder}
                className="
          w-full resize-none bg-transparent
          border-b border-[#B98B54]/80
          pb-1 pt-0.5 pr-8
          text-[0.95rem] text-[#3B2414]
          outline-none
          placeholder:text-[#9C7A52]
          focus:border-[#8D4B17]
          transition-colors
        "
            />
            <Icon className="pointer-events-none absolute right-0 top-2 h-4 w-4 text-[#B98B54]" />
        </div>
    );
}