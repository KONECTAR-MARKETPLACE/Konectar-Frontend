import React, { useState, useEffect } from 'react';
import FarmersFAQSection from '../farmspageComponents/LandingPage/FarmersFAQSection';
import FarmersWhatWeOffer from '../farmspageComponents/LandingPage/FarmersWhatWeOffer';
import FarmersHowItWorks from '../farmspageComponents/LandingPage/FarmersHowItWorks';
import FarmersBenefit from '../farmspageComponents/LandingPage/FarmersBenefit';
import FarmersHeroSection from '../farmspageComponents/LandingPage/FarmersHeroSection';

const FarmersPage = () => {
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
            <FarmersHeroSection />
            <FarmersWhatWeOffer />
            <FarmersHowItWorks />
            <FarmersBenefit />
            <FarmersFAQSection />

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

export default FarmersPage;
