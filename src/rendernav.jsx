import { Route, Routes } from 'react-router-dom';
import Navbar from "./homeComponents/Navbar";
import Home from './pages/home';
import About from './pages/about';
import FarmersPage from './pages/FarmersPage';
import Footer from './homeComponents/Footer';
import BuyersPage from './pages/BuyersPage';
import TruckersPage from './pages/TruckersPage';
import WaitingListForm from './pages/WaitingListForm';
import ContactForm from './pages/ContactForm';
import ScrollToTop from './ScrollToTop';
import KonectarPrivacyPolicy from './pages/konectar-privacy-policy';
import KonectarTermsOfUse from './pages/konectar-terms-of-use';
import OfferSection from './homeComponents/OfferSection';
import GroupedCheckboxSelect from './pages/checking';
import FarmersProfile from './farmspageComponents/profilesetup/FarmersProfile'


const Rendernav = () => {
    return (
        <>
         <Navbar />
         <ScrollToTop />      
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/FarmersPage' element={<FarmersPage />} />
            <Route path='/BuyersPage' element={<BuyersPage />} />
            <Route path='/TruckersPage' element={<TruckersPage />} />
            <Route path='/WaitingListForm' element={<WaitingListForm />} />
            <Route path='/ContactForm' element={<ContactForm />} />
            <Route path='/konectar-privacy-policy' element={<KonectarPrivacyPolicy />} />
            <Route path='/konectar-terms-of-use' element={<KonectarTermsOfUse />} />
            <Route path='/OfferSection' element={<OfferSection />} />
            <Route path='/checking' element={<GroupedCheckboxSelect/>} />
            <Route path='/farmers-profile' element={<FarmersProfile/>} />
            
            
        
        
        </Routes>   

        <Footer/>
        </>
    );
};

export default Rendernav;
