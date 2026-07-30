import React from 'react'
import Navbar from '../../components/layout/Navbar'
import Hero from '../../components/sections/Story/Hero'
import StoryTimelineSection from '../../components/sections/Story/StoryTimelineSection'
import StorySectionBreak from '../../components/sections/Story/StorySectionBreak'
import MissionVisionSection from '../../components/sections/Story/MissionVisionSection'

const Story = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <StoryTimelineSection />
            <StorySectionBreak />
            <MissionVisionSection />
        </>
    )
}

export default Story
