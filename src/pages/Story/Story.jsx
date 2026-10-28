import React from 'react'
import Navbar from '../../components/layout/Navbar'
import Hero from '../../components/sections/Story/Hero'
import StoryTimelineSection from '../../components/sections/Story/StoryTimelineSection'
import StorySectionBreak from '../../components/sections/Story/StorySectionBreak'
import MissionVisionSection from '../../components/sections/Story/MissionVisionSection'
import WhatMakesUsSpecialStrip from '../../components/sections/Story/WhatMakesUsSpecialStrip'
import GrowthMapSection from '../../components/sections/Story/GrowthMapSection'
import FoundersNoteSection from '../../components/sections/Story/FoundersNoteSection'
import TeaQuoteStrip20vh from '../../components/sections/Contact/TeaQuoteStrip'
import StoryInNumbersSection from '../../components/sections/Story/StoryInNumbersSection'
import Footer from '../../components/layout/Footer'
import PortfolioSection from '../../components/sections/Story/PortfolioSection'
import StoryInnovationSection from '../../components/sections/Story/StoryInnovationSection'

const Story = () => {
    return (
        <>
            <Navbar />
            <Hero />
            {/* <WhatMakesUsSpecialStrip />
            <StoryTimelineSection />
            <MissionVisionSection /> */}
            {/* <StorySectionBreak /> */}
            <TeaQuoteStrip20vh />
            <StoryInnovationSection />
            <GrowthMapSection />
            <FoundersNoteSection    />
            <StoryInNumbersSection />
                <PortfolioSection   />
            <Footer />
        </>
    )
}

export default Story
