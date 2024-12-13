import React from 'react';
import { useState } from 'react';

const TruckersWhatWeOffer = () => {

    const [isHovered, setIsHovered] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);
    const [isHovered5, setIsHovered5] = useState(false);


    return (
        <>
            <section className='w-full bg-[#CECEDE] p-10 py-24 text-center'>
                <h1 className='text-center text-[#0d2727] font-bold text-[2rem] md:text-[2.8rem]'>What We Offer</h1>
                <p className='text-center text-[1rem] md:text-[1.3rem] text-[#003311] font-semibold'>Receive Orders, Pickup, and Deliver</p>

                <div className='flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24 mt-8'>
                   
                    <div className={`h-[85px] w-[300px] cursor-default text-white py-6 px-5 rounded-lg ${isHovered ? 'bg-[#030a04] text-[0.8rem] text-center py-4' : 'bg-[#07190B]'
                        }`}
                        onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >

                        <p>{isHovered ? 'Grow your business by servicing multiple transactions on the Konectar platform' : 'Increased Business Opportunities'}</p></div>
                  
                    <div className={`h-[85px] w-[300px] cursor-default text-white py-6 px-12 rounded-lg ${isHovered2 ? 'bg-[#030a04] text-[0.8rem] text-center py-[0.5rem]' : 'bg-[#07190B]'
                        }`}
                        onMouseEnter={() => setIsHovered2(true)} onMouseLeave={() => setIsHovered2(false)} >

                        <p>{isHovered2 ? 'Avoid traffic and deliver on time with our route optimization feature embedded on the Marketplace' : 'Route Optimization'}</p></div>
                </div>

                <div className='flex justify-center items-center gap-24 mt-8'>
                   
                <div className={`h-[80px] w-[300px] text-white cursor-default py-6 px-4 rounded-lg ${isHovered3 ? 'bg-[#030a04] text-[0.8rem] text-center py-4' : 'bg-[#07190B]'
                        }`}
                        onMouseEnter={() => setIsHovered3(true)} onMouseLeave={() => setIsHovered3(false)} >

                        <p>{isHovered3 ? 'Get connected with a large pool of farmers and buyers in need of cold-chain services' : 'Access to Verified Clients'}</p></div>
                   
               </div>


               <div className='flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24 mt-8'>
                   
                   <div className={`h-[80px] w-[300px] cursor-default text-white py-6 px-12 rounded-lg ${isHovered4 ? 'bg-[#030a04] text-[0.8rem] text-center py-4 px-6' : 'bg-[#07190B]'
                        }`}
                        onMouseEnter={() => setIsHovered4(true)} onMouseLeave={() => setIsHovered4(false)} >

                        <p>{isHovered4 ? 'Provide buyers and farmers with real-time updates on delivery status' : 'Real-Time Tracking'}</p></div>
                  
                   <div className={`h-[80px] w-[300px] cursor-default text-white py-6 px-7 rounded-lg ${isHovered5 ? 'bg-[#030a04] text-[0.8rem] text-center py-4' : 'bg-[#07190B]'
                        }`}
                        onMouseEnter={() => setIsHovered5(true)} onMouseLeave={() => setIsHovered5(false)} >

                        <p>{isHovered5 ? 'Maximize your cold-chain capacity with regular and consistent contracts' : 'Improved Asset Utilization'}</p></div>
               </div>

            </section>
        </>
    );
};

export default TruckersWhatWeOffer;
