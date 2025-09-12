import Blob from "./components/Blob";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Section_3 from "./components/sections/Section_3";
import Section_1 from "./components/sections/Section_1";
import Section_2 from "./components/sections/Section_2";
import Section_4 from "./components/sections/Section_4";
import Section_6 from "./components/sections/Section_6";
import Section_7 from "./components/sections/Section_7";
import Section_8 from "./components/sections/Section_8";
import Section_9 from "./components/sections/Section_9";
import Section_5 from "./components/sections/Section_5";
import Section_10 from "./components/sections/Section_10";
import Section_11 from "./components/sections/Section_11";
import Section_13 from "./components/sections/Section_13";
import Section_12 from "./components/sections/Section_12";
// import MouseEffectWrapper from "./components/MouseEffectWrapper";

// Component to render all sections (home page)
function AllSections() {
  return (
    <>
      <Section_1 />
      <Section_2 />
      <Section_3 />
      <Section_4 />
      <Section_5 />
      <Section_6 />
      <Section_7 />
      <Section_8 />
      <Section_9 />
      <Section_10 />
      <Section_11 />
      <Section_12 />
      <Section_13 />
    </>
  );
}

function App() {
  const [active, setActive] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const checkScroll = () => {
      const s12 = document.getElementById("faq");
      const s13 = document.getElementById("contact");

      if (!s12 || !s13) {
        setActive(true);
        return;
      }

      const scrollY = window.scrollY + window.innerHeight / 2;
      const s12Start = s12.offsetTop;
      const s13End = s13.offsetTop + s13.offsetHeight;

      // Hide blob if scrolled into Section_12 or Section_13
      setActive(!(scrollY >= s12Start && scrollY <= s13End));
    };

    checkScroll();
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  useEffect(() => {
    const sectionId = location.pathname.slice(1);
    if (sectionId && sectionId !== "") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <main className="relative mx-auto flex flex-col items-center">
      <Blob active={active} />
      <Header />

      <Routes>
        <Route path="/" element={<AllSections />} />
        <Route path="/home" element={<AllSections />} />
        <Route path="/video" element={<AllSections />} />
        <Route path="/scenario" element={<AllSections />} />
        <Route path="/pricing" element={<AllSections />} />
        <Route path="/review" element={<AllSections />} />
        <Route path="/faq" element={<AllSections />} />
        <Route path="/contact" element={<AllSections />} />
        <Route path="/report" element={<AllSections />} />
      </Routes>

      <Footer />
    </main>
  );
}

export default App;
