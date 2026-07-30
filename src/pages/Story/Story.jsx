import React from 'react'
import Navbar from '../../components/layout/Navbar'
import Hero from '../../components/sections/Story/Hero'
import StoryTimelineSection from '../../components/sections/Story/StoryTimelineSection'
import StorySectionBreak from '../../components/sections/Story/StorySectionBreak'
import MissionVisionSection from '../../components/sections/Story/MissionVisionSection'
import WhatMakesUsSpecialStrip from '../../components/sections/Story/WhatMakesUsSpecialStrip'
import GrowthMapSection from '../../components/sections/Story/GrowthMapSection'

const Story = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <WhatMakesUsSpecialStrip />
            <StoryTimelineSection />
      
            
            <MissionVisionSection />
            <StorySectionBreak />
            <GrowthMapSection />

        </>
    )
}

export default Story
