import React from 'react'
import ContactHeroSection from '../../components/sections/Contact/ContactHeroSection'
import Navbar from '../../components/layout/Navbar'
import ReachUsSection from '../../components/sections/Contact/ReachUsSection'
import TeaJourneyMapSection from '../../components/sections/Contact/TeaJourneyMapSection'
import StatsMarqueeStrip from '@/components/common/StatsMarqueeStrip'
import ContactFormArtSection from '../../components/sections/Contact/ContactFormSection'
const Contact = () => {
  return (
    <>
    <Navbar />
    <ContactHeroSection />
    <StatsMarqueeStrip />
    <TeaJourneyMapSection />
    <ReachUsSection   />
    <ContactFormArtSection />
    </>
  )
}

export default Contact
