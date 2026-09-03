import { Routes, Route } from "react-router-dom";

import Home from "@/pages/Home/Home";
import Story from "@/pages/Story/Story";
import Menu from "@/pages/Menu/Menu";
import Franchise from "@/pages/Franchise/Franchise"
import Gallery from "@/pages/Gallery/Gallery"
import Contact from "@/pages/Contact/Contact"
import ScrollToTop from "../components/common/ScrollToTop";
import Intro from "@/components/sections/Intro/Intro";
import Privacy from "@/pages/Privacy/Privacy"
import Terms from "@/pages/Terms/Terms.jsx"
import Refund from "@/pages/Refund/Refund.jsx"

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
            <Route path="/contact" element={<Contact />} />
            
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/Refund-policy" element={<Refund />} />

            <Route path="/terms-and-conditions" element={<Terms />} />


        </Routes>
        </>
       
    );
}

export default AppRouter;