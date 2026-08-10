// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // always scroll to top on route change
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // this component doesn't render anything
}