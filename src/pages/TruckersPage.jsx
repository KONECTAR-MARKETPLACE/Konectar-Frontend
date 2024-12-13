import { useState, useEffect } from 'react';
import TruckersFAQSection from '../truckerspageComponent/TruckersFAQSection';
import TruckersWhatWeOffer from '../truckerspageComponent/TruckersWhatWeOffer';
import TruckersHeroSection from '../truckerspageComponent/TruckersHeroSection';
import TruckersHowItWorks from '../truckerspageComponent/TruckersHowItWorks';
import TruckersBenefitSection from '../truckerspageComponent/TruckersBenefitSection';

const TruckersPage = () => {

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
      <TruckersHeroSection />
      <TruckersWhatWeOffer />
      <TruckersHowItWorks />
      <TruckersBenefitSection />
      <TruckersFAQSection />

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

export default TruckersPage;
