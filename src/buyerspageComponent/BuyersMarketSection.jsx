import React from 'react';
import image1 from '../assets/images/Image.png';
import image2 from '../assets/images/Image2.png';
import image3 from '../assets/images/Image3.png';

const BuyersMarketSection = () => {
    return (
        <>
         <section className='bg-[#003333] w-full px-10 py-14'>
         <h1 className='text-white text-center font-Manrope font-bold text-[2.5rem] leading-tight md:leading-snug'>Check Our Marketplace</h1>
        

         <div className='flex flex-col md:flex-row gap-5 justify-center items-center mt-10'>
                <div className='bg-[#ffffff] px-4 py-4 rounded-lg basis-[30%]'>
                    <div><img className='w-full' src={image1} alt="Image 1" /></div>
                    
                    <p className='mt-3'>Discover a wide variety of fresh, seasonal produce directly from trusted suppliers</p>
                    <button className='bg-[#009933] px-3 py-2 text-white rounded-lg mt-3'>Sign up for Free</button>
                   
                </div>
                <div className='bg-[#ffffff] px-4 py-4 rounded-lg basis-[30%]'>
                    <img className='w-full' src={image2} alt="Image 2" />
                    
                    <p className='mt-3'>Avoid hidden costs and eliminate the unfair influence of middlemen entirely</p>
                    <button className='bg-[#009933] px-3 py-2 text-white rounded-lg mt-3'>Sign up for Free</button>
                   
                </div>
                <div className='bg-[#ffffff] px-4 py-4 rounded-lg basis-[30%]'>
                    <img className='w-full' src={image3} alt="Image 3" />
                    
                    <p className='mt-3'>Ensure top-quality ingredients every time with guaranteed freshness and care.</p>
                    <button className='bg-[#009933] px-3 py-2 text-white rounded-lg mt-3'>Sign up for Free</button>
                   
                </div>
               
            </div>
         </section>
        </>
    );
};

export default BuyersMarketSection;
