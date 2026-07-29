import React from 'react'
import Navbar from '../../components/layout/Navbar'
import Hero from '../../components/sections/Story/Hero'
import StoryTimelineSection from '../../components/sections/Story/StoryTimelineSection'

const Story = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <StoryTimelineSection />
        </>
    )
}

export default Story
