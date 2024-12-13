import React from 'react';
import { useState } from 'react';

const BuyersWhatWeOffer = () => {

    const [isHovered, setIsHovered] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);
    const [isHovered5, setIsHovered5] = useState(false);




    return (
        <>
            <section className='w-full bg-[#CECEDE] p-10 py-24 text-center'>
                <h1 className='text-center text-[#0d2727] font-bold text-[2rem] md:text-[2.8rem]'>What We Offer</h1>
                <p className='text-center text-[1rem] md:text-[1.3rem] text-[#003311] font-semibold'>Prompt, Source, Negotiate and Procure Quality Fruits and Vegetables.</p>

                <div className='flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24 mt-8'>
                   
                    <div className={`h-[80px] w-[300px] cursor-default text-white py-6 px-12 rounded-lg ${isHovered ? 'bg-[#030a04] text-[0.8rem] text-center py-4' : 'bg-[#07190B]'
                        }`}
                        onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >

                        <p>{isHovered ? 'Negotiate directly with farmers to secure the best deals' : 'Competitive Pricing'}</p></div>
                   
                    <div className={`h-[80px] w-[300px] cursor-default text-white py-6 px-12 rounded-lg ${isHovered2 ? 'bg-[#030a04] text-[0.8rem] text-center py-[0.7rem]' : 'bg-[#07190B]'
                        }`}
                        onMouseEnter={() => setIsHovered2(true)} onMouseLeave={() => setIsHovered2(false)} >

                        <p>{isHovered2 ? 'Prompt, Compare, Select and Order produce with ease through our platform' : 'Convenient Sourcing'}</p></div>
                </div>

                <div className='flex justify-center items-center gap-24 mt-8'>
                   
                <div className={`h-[80px] w-[300px] text-white cursor-default py-6 px-4 rounded-lg ${isHovered3 ? 'bg-[#030a04] text-[0.8rem] text-center py-3' : 'bg-[#07190B]'
                        }`}
                        onMouseEnter={() => setIsHovered3(true)} onMouseLeave={() => setIsHovered3(false)} >

                        <p>{isHovered3 ? 'Access a wide range of verified farmers for consistent and high-quality produce' : 'Direct Access to Verified Farmers'}</p></div>
                   
               </div>


               <div className='flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24 mt-8'>
                   
                   <div className={`h-[80px] w-[300px] cursor-default text-white py-6 px-12 rounded-lg ${isHovered4 ? 'bg-[#030a04] text-[0.8rem] text-center py-[0.3rem]' : 'bg-[#07190B]'
                        }`}
                        onMouseEnter={() => setIsHovered4(true)} onMouseLeave={() => setIsHovered4(false)} >

                        <p>{isHovered4 ? 'Payments are secured in escrow until farmers fulfill the requirements of your purchase order' : 'Payment Protection'}</p></div>
                   
                   <div className={`h-[85px] w-[300px] cursor-default text-white py-7 px-12 rounded-lg ${isHovered5 ? 'bg-[#030a04] text-[0.8rem] text-center py-[2px]' : 'bg-[#07190B]'
                        }`}
                        onMouseEnter={() => setIsHovered5(true)} onMouseLeave={() => setIsHovered5(false)} >

                        <p>{isHovered5 ? 'We conduct quality checks at our Packing House to ensure farmers meet your specific needs and requirements' : 'Quality Assurance'}</p></div>
               </div>

            </section>
        </>
    );
};

export default BuyersWhatWeOffer;
