import React from 'react';
import pic1 from '../assets/images/Offering1.png';
import pic2 from '../assets/images/Offering2.png';
import pic3 from '../assets/images/Offering3.png';

const BuyersOurOffering = () => {
    return (
        <>
           <section className='bg-[#EDEDF2] w-full px-10 py-14'>
         <h1 className='text-center font-Manrope font-bold text-[2.5rem] leading-tight md:leading-snug'>Our Offering</h1>
        

         <div className='flex flex-col md:flex-row gap-5 justify-center items-center mt-10 text-center'>
                <div className='bg-[#ffffff] px-4 py-4 rounded-lg basis-[30%]'>
                    <div><img className='w-full' src={pic1} alt="Image 1" /></div>
                    
                    <h1 className='font-bold mt-2'>Agriculture Products</h1>
                    <p className='mt-3'>Discover a wide variety of fresh, seasonal produce directly from trusted suppliers</p>
                    
                   
                </div>
                <div className='bg-[#ffffff] px-4 py-4 rounded-lg basis-[30%]'>
                    <img className='w-full' src={pic2} alt="Image 2" />
                    
                    <h1 className='font-bold mt-2'>Daily Products</h1>
                    <p className='mt-3'>Avoid hidden costs and eliminate the unfair influence of middlemen entirely</p>
                    
                   
                </div>
                
               
            </div>

            <div className='flex justify-center items-center mt-5 text-center'>
            <div className='bg-[#ffffff] px-4 py-4 rounded-lg md:basis-[30%]'>
                    <img className='w-full' src={pic1} alt="Image 3" />
                    
                    <h1 className='font-bold mt-2'>Access To A Wide Range Of Verified Suppliers.</h1>
                    <p className='mt-3'>Ensure top-quality ingredients every time with guaranteed freshness and care.</p>
                </div>
            </div>



            <div className='flex flex-col md:flex-row gap-5 justify-center items-center mt-10 text-center'>
                <div className='bg-[#ffffff] px-4 py-4 rounded-lg basis-[30%]'>
                    <div><img className='w-full' src={pic1} alt="Image 4" /></div>
                    
                    <h1 className='font-bold mt-2'>Fresh Tomatoes</h1>
                    <p className='mt-3'>Discover a wide variety of fresh, seasonal produce directly from trusted suppliers</p>
                    
                   
                </div>
                <div className='bg-[#ffffff] px-4 py-4 rounded-lg basis-[30%]'>
                    <img className='w-full' src={pic3} alt="Image 5" />
                    
                    <h1 className='font-bold mt-2'>Fresh Vegetables</h1>
                    <p className='mt-3'>Avoid hidden costs and eliminate the unfair influence of middlemen entirely</p>
                    
                   
                </div>
                
               
            </div>
         </section> 
        </>
    );
};

export default BuyersOurOffering;
