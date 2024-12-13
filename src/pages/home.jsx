import { useState, useEffect } from 'react';

import MissionSection from "../homeComponents/MissionSection";
import HeroSection from "../homeComponents/HeroSection";
import SdgSection from "../homeComponents/SdgSection";
import OfferSection from "../homeComponents/OfferSection";
import ProcessSection from "../homeComponents/ProcessSection";
import BlogSection from "../homeComponents/BlogSection";
import PartnersSection from "../homeComponents/PartnersSection";
import TeamSection from "../homeComponents/TeamSection";

import FAQSection from '../homeComponents/FAQSection';
import AboutUsSection from '../homeComponents/AboutUsSection';
import OurVisionSection from '../homeComponents/OurVisionSection';
import ProductsSection from '../homeComponents/ProductsSection';
// import { Link } from 'react-router-dom';

const Home = () => {

    const [showButton, setShowButton] = useState(false);

// Function to scroll to the top
const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Show the button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


    return (
        <>
    
    <HeroSection />
    <AboutUsSection/>
    <OurVisionSection/>
    <MissionSection />
    <ProductsSection/>
    <SdgSection />
    <PartnersSection />
    <OfferSection />
    <ProcessSection />
    <BlogSection />
    
    <FAQSection />
    <TeamSection />
  
       {/* Scroll to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#009933] text-white p-3 rounded-full shadow-lg hover:bg-[#003311] transition duration-300"
        >
          Back to Top ↑
        </button>
      )}

        </>
    );
};

export default Home;
