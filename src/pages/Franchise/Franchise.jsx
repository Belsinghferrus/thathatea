import React from 'react'
import FranchiseHeroSection from '../../components/sections/Franchise/FranchiseHeroSection'
import Navbar from '../../components/layout/Navbar'
import FranchiseStatsMarquee from '../../components/sections/Franchise/FranchiseStatsMarquee'
import FranchiseSupportJourneySection from '../../components/sections/Franchise/FranchiseSupportJourneySection'
import WhyPartnerSection from '../../components/sections/Franchise/WhyPartnerSection'
import BrewSuccessSection from '../../components/sections/Franchise/BrewSuccessSection'
import BrewMomentsSection from '../../components/sections/Franchise/BrewMomentsSection'
import WhatMakesUsSpecialStrip from '../../components/sections/Story/WhatMakesUsSpecialStrip'
import FranchiseStickyBanner from '../../components/sections/Franchise/FranchiseStickyBanner'

const Franchise = () => {
  return (
   <>
   <Navbar  />
   <FranchiseHeroSection />
   <WhyPartnerSection />
   <BrewSuccessSection />
   <BrewMomentsSection  />
   <WhatMakesUsSpecialStrip />
   <FranchiseSupportJourneySection />
  <FranchiseStickyBanner />
   </>
  )
}

export default Franchise
