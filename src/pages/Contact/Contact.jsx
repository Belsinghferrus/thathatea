import React from 'react'
import ContactHeroSection from '../../components/sections/Contact/ContactHeroSection'
import Navbar from '../../components/layout/Navbar'
import ReachUsSection from '../../components/sections/Contact/ReachUsSection'
import TeaJourneyMapSection from '../../components/sections/Contact/TeaJourneyMapSection'
import StatsMarqueeStrip from '@/components/common/StatsMarqueeStrip'
import ContactFormArtSection from '../../components/sections/Contact/ContactFormSection'
import TeaQuoteStrip from '../../components/sections/Contact/TeaQuoteStrip'
import ThankYouTeaSection from '../../components/sections/Contact/ThankYouTeaSection'
import ConnectBeyondTeaSection from '../../components/sections/Contact/ConnectBeyondTeaSection'
const Contact = () => {
  return (
    <>
    <Navbar />
    <ContactHeroSection />
    
    <TeaJourneyMapSection />
   
    <TeaQuoteStrip />
    <ContactFormArtSection />
    <ThankYouTeaSection />
    <ReachUsSection   />
    <StatsMarqueeStrip />
    <ConnectBeyondTeaSection   />
    </>
  )
}

export default Contact
