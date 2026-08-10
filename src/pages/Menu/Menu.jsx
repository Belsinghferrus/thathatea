import React from 'react'
import HeroSection from '../../components/sections/Menu/HeroSection'
import Navbar from '../../components/layout/Navbar'
import MenuBrowserSection from '../../components/sections/Menu/MenuSection'
import WhatMakesUsSpecialStrip from '../../components/common/WhatMakesUsSpecialStrip'
import Footer from '../../components/layout/Footer'

const Menu = () => {
  return (
   <>
   <Navbar />
   <HeroSection />
   <WhatMakesUsSpecialStrip />
   <MenuBrowserSection />
   <Footer />
   </>
  )
}

export default Menu
