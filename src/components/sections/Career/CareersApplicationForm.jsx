import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import vintagebg from "@/assets/images/career/vintage-bg.webp"; 
export default function CareersApplicationForm({ selectedRole }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    applyingFor: "",
    coverLetter: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Auto-fill the role when the parent updates the selectedRole prop
  useEffect(() => {
    if (selectedRole) {
      setFormData((prev) => ({ ...prev, applyingFor: selectedRole }));
      setIsSubmitted(false); // Reset submitted state if they apply for a new role
    }
  }, [selectedRole]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // Optionally reset form here: setFormData({ ... })
    }, 1500);
  };

  // List of roles for the dropdown
  const rolesList = [
    "Tea Master / Tea Brewer",
    "Cashier",
    "Kitchen Helper / Cook",
    "Barista",
    "Service Staff / Waiter",
    "Cleaning Staff",
  ];

  return (
    <section id="application-form" className="relative w-full bg-[#F7EFE4] py-16 sm:py-24">
      
      {/* Background Texture / Color Match */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-60 "
        style={{
          backgroundImage: `url(${vintagebg})`,
          backgroundSize: "cover",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-3xl px-5 sm:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h2 
            className="text-[2.5rem] uppercase leading-none text-[#3D2413] sm:text-[3.5rem]"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            Apply Now
          </h2>
          <p className="mt-3 font-['Manrope'] text-[1rem] text-[#5E4637]">
            Fill out the form below and we'll get back to you soon.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative overflow-hidden rounded-2xl border border-[#D1BEA9] bg-[#FCF8F2] p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] sm:p-10"
        >
          {isSubmitted ? (
            /* Success State */
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-16 text-center"
            >
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#EEDFCB] text-[#A16635]">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <h3 className="font-['Cormorant_Garamond'] text-3xl font-bold text-[#3D2413]">
                Application Received!
              </h3>
              <p className="mt-3 max-w-md font-['Manrope'] text-[#5E4637]">
                Thank you for applying for the <strong>{formData.applyingFor}</strong> position. Our team will review your application and contact you shortly.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-8 font-['Manrope'] text-[0.8rem] font-bold uppercase tracking-wider text-[#A16635] underline decoration-[#A16635]/30 underline-offset-4 hover:text-[#3D2413]"
              >
                Submit another application
              </button>
            </motion.div>
          ) : (
            /* Form Fields */
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              
              {/* Row 1: Name & Email */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="font-['Manrope'] text-[0.75rem] font-bold uppercase tracking-wider text-[#3D2413]">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="h-12 rounded-lg border border-[#D1BEA9] bg-[#F7EFE4] px-4 font-['Manrope'] text-[0.9rem] text-[#3D2413] outline-none transition-colors focus:border-[#A16635] focus:bg-white"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-['Manrope'] text-[0.75rem] font-bold uppercase tracking-wider text-[#3D2413]">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="h-12 rounded-lg border border-[#D1BEA9] bg-[#F7EFE4] px-4 font-['Manrope'] text-[0.9rem] text-[#3D2413] outline-none transition-colors focus:border-[#A16635] focus:bg-white"
                  />
                </div>
              </div>

              {/* Row 2: Phone & Experience */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="font-['Manrope'] text-[0.75rem] font-bold uppercase tracking-wider text-[#3D2413]">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="h-12 rounded-lg border border-[#D1BEA9] bg-[#F7EFE4] px-4 font-['Manrope'] text-[0.9rem] text-[#3D2413] outline-none transition-colors focus:border-[#A16635] focus:bg-white"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-['Manrope'] text-[0.75rem] font-bold uppercase tracking-wider text-[#3D2413]">
                    Experience (Years)
                  </label>
                  <input
                    type="text"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="e.g. 2 years, Fresher"
                    className="h-12 rounded-lg border border-[#D1BEA9] bg-[#F7EFE4] px-4 font-['Manrope'] text-[0.9rem] text-[#3D2413] outline-none transition-colors focus:border-[#A16635] focus:bg-white"
                  />
                </div>
              </div>

              {/* Row 3: Applying For */}
              <div className="flex flex-col gap-1.5">
                <label className="font-['Manrope'] text-[0.75rem] font-bold uppercase tracking-wider text-[#3D2413]">
                  Applying For *
                </label>
                <select
                  name="applyingFor"
                  required
                  value={formData.applyingFor}
                  onChange={handleChange}
                  className="h-12 rounded-lg border border-[#D1BEA9] bg-[#F7EFE4] px-4 font-['Manrope'] text-[0.9rem] text-[#3D2413] outline-none transition-colors focus:border-[#A16635] focus:bg-white appearance-none"
                  style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23A16635'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 1rem center", backgroundSize: "1rem" }}
                >
                  <option value="" disabled>Select a position</option>
                  {rolesList.map((role) => (
                    <option key={role} value={role}>{role}</option>
                  ))}
                </select>
              </div>

              {/* Row 4: Cover Letter */}
              <div className="flex flex-col gap-1.5">
                <label className="font-['Manrope'] text-[0.75rem] font-bold uppercase tracking-wider text-[#3D2413]">
                  Cover Letter (Optional)
                </label>
                <textarea
                  name="coverLetter"
                  rows="4"
                  value={formData.coverLetter}
                  onChange={handleChange}
                  placeholder="Tell us why you'd be a great fit for Thatha Tea..."
                  className="resize-none rounded-lg border border-[#D1BEA9] bg-[#F7EFE4] p-4 font-['Manrope'] text-[0.9rem] text-[#3D2413] outline-none transition-colors focus:border-[#A16635] focus:bg-white"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 flex h-14 w-full items-center justify-center gap-3 rounded-lg bg-[#A16635] font-['Manrope'] text-[0.9rem] font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#8B5E3C] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Application
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>

            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}