import frame1 from "../assets/images/Frame1.png";
import frame2 from '../assets/images/Frame2.png';
import frame3 from '../assets/images/KTruck.png';
import { Link } from "react-router-dom";


const OfferSection = () => {
  return (
    <>
    <section id="offers" className="bg-[linear-gradient(to_right_,rgba(6,8,15,0.8),rgba(6,8,12,0.8)),url('assets/images/bgW.png')] bg-cover bg-center bg-no-repeat font-Manrope justify-center items-center py-14 px-8 md:px-16"> 
       <h1 className='font-Manrope text-white text-center text-[2rem] md:text-[2.8rem] font-bold mb-6'>What We Offer!</h1>
       <hr />

       <div className='flex flex-col md:flex-row gap-5 justify-center items-center mt-10'>
       <div className='bg-[#ffffff] px-4 py-4 rounded-lg basis-[30%] w-full'>
               <img className='w-[100%]' src={frame1} alt="SDG2" loading="lazy" />
               <h1 className='font-bold text-[1.2rem] mt-5'>Konectar for Farmers</h1>
               <p className='mt-3'>Skip multiple middlemen and sell directly to businesses like... <b className='cursor-pointer text-[#009933] hover:text-[1.1rem] hover:text-[#2a6d2a]'> <Link to="/FarmersPage"> Read More </Link> </b></p>
               <Link to="/WaitingListForm"><button className='bg-[#009933] px-3 py-2 text-white rounded-lg mt-3'>Join The Waitlist</button></Link>
              
           </div>
           <div className='bg-[#ffffff] px-4 py-4 rounded-lg basis-[30%]'>
               <img className='w-[100%]' src={frame2} alt="frame 2" loading="lazy" />
               <h1 className='font-bold text-[1.2rem] mt-5'>Konectar for Wholesale Buyers</h1>
               <p className='mt-3'>Effortlessly Find, Order, and Receive High-quality Fruits and Vegetables... <b className='cursor-pointer text-[#009933] hover:text-[1.1rem] hover:text-[#2a6d2a]'><Link to="/BuyersPage"> Read More </Link></b></p>
               <Link to="/ContactForm"><button className='bg-[#009933] px-3 py-2 text-white rounded-lg mt-3'>Contact Us</button></Link>
              
           </div>
           <div className='bg-[#ffffff] px-4 py-4 rounded-lg basis-[30%]'>
               <img className='w-[100%]' src={frame3} alt="frame 3" loading="lazy" />
               <h1 className='font-bold text-[1.2rem] mt-5'>Konectar for Logistics</h1>
               <p className='mt-3'>By becoming a 3rd-party logistics partner, you will gain access to...<b className='cursor-pointer text-[#009933] hover:text-[1.1rem] hover:text-[#2a6d2a]'><Link to="/TruckersPage"> Read More </Link></b></p>
              <Link to='/ContactForm'> <button className='bg-[#009933] px-3 py-2 text-white rounded-lg mt-3'>Contact Us</button></Link>
              
           </div>
          
       </div>
       </section>   
   </>
  )
}

export default OfferSection