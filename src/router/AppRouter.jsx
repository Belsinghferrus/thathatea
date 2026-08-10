import { Routes, Route } from "react-router-dom";

import Home from "@/pages/Home/Home";
import Story from "@/pages/Story/Story";
import Menu from "@/pages/Menu/Menu";
import Franchise from "@/pages/Franchise/Franchise"
import Gallery from "@/pages/Gallery/Gallery"
import Contact from "@/pages/Contact/Contact"
import ScrollToTop from "../components/common/ScrollToTop";
import Intro from "@/components/sections/Intro/Intro";



function AppRouter() {
    return (

        <>
         <ScrollToTop />
         <Intro />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story" element={<Story />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/franchise" element={<Franchise />} />
            {/* <Route path="/gallery" element={<Gallery />} /> */}
            <Route path="/contact" element={<Contact />} />
        </Routes>
        </>
       
    );
}

export default AppRouter;