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
import FeaturedOutletsSection from '../../components/sections/Franchise/FeaturedOutletsSection'
import FranchiseDesignBreakSection from '../../components/sections/Franchise/FranchiseDesignBreakSection'
import FranchiseEnquirySection from '../../components/sections/Franchise/FranchiseEnquirySection'
import FranchiseFaqSection from '../../components/sections/Franchise/FranchiseFaqSection'
import FranchiseMarqueeStrip from '../../components/sections/Franchise/FranchiseMarqueeStrip'
import Footer from '../../components/layout/Footer'

const Franchise = () => {
  return (
    <>
      <Navbar />
      <main>
        <FranchiseHeroSection />
        <WhyPartnerSection />
        <BrewSuccessSection />
        <BrewMomentsSection />
        <WhatMakesUsSpecialStrip />
        <FranchiseSupportJourneySection />

        <FeaturedOutletsSection />
        <FranchiseDesignBreakSection />
        <FranchiseFaqSection />
        <FranchiseMarqueeStrip />
        {/* <FranchiseEnquirySection /> */}
      </main>
      <Footer />
      <FranchiseStickyBanner />
    </>
  )
}

export default Franchise
