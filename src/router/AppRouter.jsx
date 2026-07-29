import { Routes, Route } from "react-router-dom";

import Home from "@/pages/Home/Home";
import Story from "@/pages/Story/Story";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/franchise" element={<Franchise />} /> */}
      <Route path="/story" element={<Story />} />
    </Routes>
  );
}

export default AppRouter;