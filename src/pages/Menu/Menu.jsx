import React from 'react'
import HeroSection from '../../components/sections/Menu/HeroSection'
import Navbar from '../../components/layout/Navbar'
import MenuBrowserSection from '../../components/sections/Menu/MenuSection'
import WhatMakesUsSpecialStrip from '../../components/common/WhatMakesUsSpecialStrip'

const Menu = () => {
  return (
   <>
   <Navbar />
   <HeroSection />
   <WhatMakesUsSpecialStrip />
   <MenuBrowserSection />
   </>
  )
}

export default Menu
