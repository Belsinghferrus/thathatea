import AppRouter from "@/router/AppRouter";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);



  return <AppRouter />;
}

export default App;