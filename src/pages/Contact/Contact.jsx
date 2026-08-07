import React from 'react'
import ContactHeroSection from '../../components/sections/Contact/ContactHeroSection'
import Navbar from '../../components/layout/Navbar'
import ReachUsSection from '../../components/sections/Contact/ReachUsSection'
import TeaJourneyMapSection from '../../components/sections/Contact/TeaJourneyMapSection'
import WhatMakesUsSpecialStrip from '@/components/common/WhatMakesUsSpecialStrip'
const Contact = () => {
  return (
    <>
    <Navbar />
    <ContactHeroSection />
    <WhatMakesUsSpecialStrip />
    <TeaJourneyMapSection />
    <ReachUsSection   />
    </>
  )
}

export default Contact
