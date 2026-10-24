import React, { useRef, useState } from 'react'
import Navbar from '../../components/layout/Navbar'
import CareersHeroSection from '../../components/sections/Career/CareerHeroSection'
import CareersApplicationForm from '../../components/sections/Career/CareersApplicationForm'
import CareersSectionBreak from '../../components/sections/Career/CareersSectionBreak'
import Footer from '../../components/layout/Footer'
import CareersBreakSection from '../../components/sections/Career/CareersBreakSection'
import CareersOpenRolesSection from '../../components/sections/Career/CareersOpenRolesSection'

const Career = () => {

  const [selectedRole, setSelectedRole] = useState("");
  const formRef = useRef(null);

  const handleApply = (roleTitle) => {
    setSelectedRole(roleTitle);
    
    // Smooth scroll to form container
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
   <>
   <Navbar />
   <CareersHeroSection />
   <CareersBreakSection />
   <CareersSectionBreak />
   <CareersOpenRolesSection  onApply={handleApply}/>
   <div ref={formRef}>
        <CareersApplicationForm selectedRole={selectedRole} />
      </div>
      <Footer />  
   </>
  )
}

export default Career
