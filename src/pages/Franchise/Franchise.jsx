import React from 'react'
import FranchiseHeroSection from '../../components/sections/Franchise/FranchiseHeroSection'
import Navbar from '../../components/layout/Navbar'
import FranchiseStatsMarquee from '../../components/sections/Franchise/FranchiseStatsMarquee'
import FranchiseSupportJourneySection from '../../components/sections/Franchise/FranchiseSupportJourneySection'
import WhyPartnerSection from '../../components/sections/Franchise/WhyPartnerSection'
import BrewSuccessSection from '../../components/sections/Franchise/BrewSuccessSection'

const Franchise = () => {
  return (
   <>
   <Navbar  />
   <FranchiseHeroSection />
   <WhyPartnerSection />
   <BrewSuccessSection />
   {/* <FranchiseSupportJourneySection /> */}
  
   </>
  )
}

export default Franchise
