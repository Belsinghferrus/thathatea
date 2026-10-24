import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import papertexture from "@/assets/images/career/paper-bg.webp";
import kettle from "@/assets/images/career/kettle.png"; 
import cashier from "@/assets/images/career/cashier.png";
import samosa from "@/assets/images/career/samosa.png";
import barista from "@/assets/images/career/barista.png";
import samosa1 from "@/assets/images/career/samosa1.png";
import service from "@/assets/images/career/service.png";
// --- DATA ---
const roles = [
  {
    id: "tea-master",
    title: "Tea Master / Tea Brewer",
    description: "Brew different types of tea with consistent taste and quality.",
    image: kettle, 
    responsibilities: [
      "Brew different types of tea with consistent taste and quality",
      "Maintain hygiene and cleanliness of the tea-making area",
      "Monitor stock of tea leaves, milk, sugar, and other ingredients",
      "Ensure fast and accurate preparation during peak hours",
    ],
    requirements: [
      "Knowledge of different tea varieties",
      "Attention to detail",
      "Ability to work under pressure",
      "Minimum 1 year experience",
    ],
    shift: "6:00 AM - 2:00 PM / 2:00 PM - 10:00 PM",
    experience: "1-2 years",
  },
  {
    id: "cashier",
    title: "Cashier",
    description: "Operate POS billing system and handle customer transactions.",
    image: cashier,
    responsibilities: [
      "Operate POS billing system",
      "Handle cash, UPI, and card transactions",
      "Issue bills and maintain daily sales reports",
      "Greet and assist customers politely",
    ],
    requirements: [
      "Basic computer knowledge",
      "Good communication skills",
      "Honesty and integrity",
      "Freshers can apply",
    ],
    shift: "Rotating shifts",
    experience: "Fresher welcome",
  },
  {
    id: "kitchen-helper",
    title: "Kitchen Helper / Cook",
    description: "Prepare snacks and maintain kitchen hygiene standards.",
    image: samosa,
    responsibilities: [
      "Prepare snacks such as samosas, sandwiches, and pakoras",
      "Assist with ingredient cutting and preparation",
      "Maintain hygiene and food safety standards",
      "Help restock kitchen supplies",
    ],
    requirements: [
      "Basic cooking skills",
      "Knowledge of food safety",
      "Ability to work in fast-paced environment",
      "6 months experience preferred",
    ],
    shift: "8:00 AM - 4:00 PM / 4:00 PM - 12:00 AM",
    experience: "6 months - 1 year",
  },
  {
    id: "barista",
    title: "Barista",
    description: "Prepare coffee-based and tea-based specialty beverages.",
    image: barista,
    responsibilities: [
      "Prepare coffee-based and tea-based specialty beverages",
      "Operate espresso machines, blenders, and other equipment",
      "Create visually appealing drinks for customers",
      "Maintain cleanliness of beverage preparation tools",
    ],
    requirements: [
      "Experience with coffee machines",
      "Creative presentation skills",
      "Knowledge of different beverages",
      "Customer service skills",
    ],
    shift: "7:00 AM - 3:00 PM / 3:00 PM - 11:00 PM",
    experience: "1-2 years",
  },
  {
    id: "service-staff",
    title: "Service Staff / Waiter",
    description: "Take orders and serve tea and snacks to customers.",
    image: samosa1,
    responsibilities: [
      "Take orders and serve tea and snacks",
      "Keep tables and seating areas clean",
      "Assist customers with menu items",
      "Help pack takeaway orders",
    ],
    requirements: [
      "Good communication skills",
      "Pleasant personality",
      "Ability to multitask",
      "Freshers can apply",
    ],
    shift: "Rotating shifts",
    experience: "Fresher welcome",
  },
  {
    id: "cleaning-staff",
    title: "Cleaning Staff",
    description: "Maintain cleanliness throughout the tea shop.",
    image: service,
    responsibilities: [
      "Clean floors, tables, utensils, and washroom areas",
      "Dispose of waste properly",
      "Maintain cleanliness in kitchen and serving areas",
      "Follow daily cleaning routines",
    ],
    requirements: [
      "Attention to cleanliness",
      "Physical fitness",
      "Basic understanding of cleaning chemicals",
      "No experience required",
    ],
    shift: "5:00 AM - 1:00 PM / 1:00 PM - 9:00 PM",
    experience: "No experience required",
  },
];

// --- SVG ICONS ---
const IconClock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 3" />
  </svg>
);

const IconBriefcase = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <path d="M3 13h18" />
  </svg>
);

const CustomBullet = () => (
  <span className="mt-1.5 mr-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#A16635]" />
);

// --- MAIN COMPONENT ---
export default function CareersOpenRolesSection({ onApply }) {
  return (
    <section id="explore" className="relative w-full bg-[#F7EFE4] py-16 sm:py-20">
      <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 
            className="text-[2.5rem] uppercase leading-none text-[#3D2413] sm:text-[3.5rem]"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            Join Our Tea Shop Team
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-['Manrope'] text-[1rem] leading-relaxed text-[#5E4637]">
            We're looking for passionate individuals to help us serve the finest tea and snacks. Each role plays a vital part in creating the perfect tea experience for our customers.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
          {roles.map((role, index) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 2) * 0.1, duration: 0.5 }}
              className="relative flex flex-col overflow-hidden rounded-xl border border-[#D1BEA9] bg-[#FCF8F2] shadow-sm"
            >
              {/* Card Background Texture Placeholder */}
              <div 
                className="pointer-events-none absolute inset-0 z-0 opacity-[0.50] mix-blend-multiply"
                style={{
                  backgroundImage: `url(${papertexture})`,
                  backgroundSize: "cover",
                }}
              />

              {/* Top Content */}
              <div className="relative z-10 p-6 sm:p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                  
                  {/* Image Container */}
                  <div className="flex h-24 w-24 shrink-0 items-center justify-center sm:h-28 sm:w-28">
                     <img 
                       src={role.image} 
                       alt={role.title} 
                       className="h-full w-full object-contain drop-shadow-sm" 
                     />
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 
                      className="text-[1.6rem] leading-tight text-[#3D2413] sm:text-[1.8rem]"
                      style={{ fontFamily: "'Anton', sans-serif", fontWeight: "100" }}
                      >
                      {role.title}
                    </h3>
                    <p className="mt-1 font-['Manrope'] text-[0.9rem] leading-relaxed text-[#5E4637]">
                      {role.description}
                    </p>
                  </div>
                </div>

                {/* Lists Grid */}
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  {/* Responsibilities */}
                  <div>
                    <h4 className="mb-2 font-['Manrope'] text-[0.75rem] font-bold uppercase tracking-wider text-[#3D2413]">
                      Key Responsibilities:
                    </h4>
                    <ul className="flex flex-col gap-1.5">
                      {role.responsibilities.map((req, i) => (
                        <li key={i} className="flex items-start font-['Manrope'] text-[0.8rem] leading-snug text-[#5E4637]">
                          <CustomBullet />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Requirements */}
                  <div>
                    <h4 className="mb-2 font-['Manrope'] text-[0.75rem] font-bold uppercase tracking-wider text-[#3D2413]">
                      Requirements:
                    </h4>
                    <ul className="flex flex-col gap-1.5">
                      {role.requirements.map((req, i) => (
                        <li key={i} className="flex items-start font-['Manrope'] text-[0.8rem] leading-snug text-[#5E4637]">
                          <CustomBullet />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottom Bar (Footer) */}
              <div className="relative z-10 mt-auto border-t border-dashed border-[#D1BEA9] bg-[#F7EFE4]/50 p-6 sm:px-8">
                <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                  
                  {/* Shift & Experience Info */}
                  <div className="flex w-full items-center justify-between gap-4 sm:w-auto sm:justify-start sm:gap-8">
                    <div className="flex items-center gap-2">
                      <span className="text-[#A16635]"><IconClock /></span>
                      <div>
                        <p className="font-['Manrope'] text-[0.65rem] font-bold uppercase tracking-wider text-[#3D2413]">Shift Timing</p>
                        <p className="font-['Manrope'] text-[0.75rem] text-[#5E4637]">{role.shift}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className="text-[#A16635]"><IconBriefcase /></span>
                      <div>
                        <p className="font-['Manrope'] text-[0.65rem] font-bold uppercase tracking-wider text-[#3D2413]">Experience</p>
                        <p className="font-['Manrope'] text-[0.75rem] text-[#5E4637]">{role.experience}</p>
                      </div>
                    </div>
                  </div>

                  {/* Apply Button */}
                  <button
                    onClick={() => onApply(role.title)}
                    className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#A16635] px-6 py-2.5 font-['Manrope'] text-[0.75rem] font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-[#8B5E3C] sm:w-auto"
                  >
                    Apply Now
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>

                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}