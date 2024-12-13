// import person1 from "../assets/images/Hero Image-1.png"
import { ImQuotesLeft } from "react-icons/im";
import cust1 from '../assets/images/Linda Gift/cust1.png';
import cust2 from '../assets/images/Linda Gift/cust2.png';
import cust3 from '../assets/images/Linda Gift/cust3.png';

const FarmersReviewSection = () => {
    return (
        <>
            <section className='bg-[#003311] w-full p-14'>
            <h1 className='mb-20 text-center font-Manrope font-bold text-white text-[1.4rem] md:text-[2.3rem] leading-tight md:leading-snug'>What People Say About Us</h1>

                <div className='flex flex-col md:flex-row gap-20 md:gap-6 mt-10 px-2 md:px-16'>

                    <div className='container bg-white rounded-lg px-4 py-5 text-center flex flex-col items-center'>
                        <div className='size-24 mt-[-3.9rem]'>
                        <img className='w-full h-full' src={cust1} alt="First Review Customer" />
                        </div>        

                        <div className='text-[#003311] mt-14'>
                        <ImQuotesLeft size={35}/>
                        </div>

                       

                        <p className='text-[0.8rem] md:text-[1.1rem] mt-7'>Since I joined Konectar, my farm has been flourishing. No more wasted fruits or vegetables 
                            on the way to the wholesalers and buyers.
                        </p>

                        <h1 className='text-[#003311] font-bold mt-9'>YTM Farms</h1>
                        <p className='text-[#003311]'>Farmer</p>

                    </div>


                    <div className='container bg-white rounded-lg px-4 py-5 text-center flex flex-col items-center'>
                        <div className='size-24 mt-[-3.9rem]'>
                        <img className='w-full h-full' src={cust2} alt="First Review Customer" />
                        </div>        

                        <div className='text-[#003311] mt-14'>
                        <ImQuotesLeft size={35}/>
                        </div>

                       

                        <p className='text-[0.8rem] md:text-[1.1rem] mt-7'>Konectar has opened doors I never knew existed. My fruits and vegetables selling business 
                            has started thriving like never before. Thank you Konectar!
                        </p>

                        <h1 className='text-[#003311] font-bold mt-9'>Remi Kola</h1>
                        <p className='text-[#003311]'>Wholesaler</p>

                    </div>

                    <div className='container bg-white rounded-lg px-4 py-5 text-center flex flex-col items-center'>
                        <div className='size-24 mt-[-3.9rem]'>
                        <img className='w-full h-full' src={cust3} alt="First Review Customer" />
                        </div>        

                        <div className='text-[#003311] mt-14'>
                        <ImQuotesLeft size={35}/>
                        </div>

                       

                        <p className='text-[0.8rem] md:text-[1.1rem] mt-7'>Konectar is the first platform that offers streamlined logistics for transporting perishable 
                            foods such as fruits and vegetables and it has been a lovely ride with them so far.
                        </p>

                        <h1 className='text-[#003311] font-bold mt-9'>Alli Bamako</h1>
                        <p className='text-[#003311]'>Buyer</p>

                    </div>



                    
                </div>

            </section>
        </>
    );
};

export default FarmersReviewSection;
