import { Routes, Route } from "react-router-dom";

import Home from "@/pages/Home/Home";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/franchise" element={<Franchise />} /> */}
    </Routes>
  );
}

export default AppRouter;