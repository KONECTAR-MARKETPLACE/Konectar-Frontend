import React from 'react';
import pic1 from '../assets/images/pic1.png';

const BuyersOfferSection = () => {
    return (
        <>
           <section className='bg-[#EDEDF2] w-full px-10 py-14'>
           <h1 className='text-center font-Manrope font-bold text-[2.5rem] leading-tight md:leading-snug'>What We Offer</h1>

           <div className='flex flex-col justify-center items-center md:flex-row mt-8 gap-14'>

            <div className='basis-[40%]'>
                <img className='' src={pic1} alt="Pic1" />
            </div>

            <div className='basis-[30%] flex flex-col gap-8 text-center md:text-left'>
            <h1 className='font-Manrope font-extrabold text-[2.5rem] leading-tight md:leading-snug'>Powerful Search and matching tools</h1>

            <p className=''>Find buyers actively seeking your specific produce and locations
             </p>

             <button type="button"
       className='bg-[#009933] w-[30%] rounded-lg py-2 text-white text-[1rem] m-auto md:m-0'>Try Now</button>
            
            </div>

           </div>
            </section> 
        </>
    );
};

export default BuyersOfferSection;
