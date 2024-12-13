import React from 'react';
import pic1 from '../assets/images/bn9.png';
import pic2 from '../assets/images/bn7.png';
import pic3 from '../assets/images/bn8.png';

const BuyersBenefitsSection = () => {
    return (
        <>
            <section className='w-full p-10 text-[#003311] pb-32'>

                <h1 className='text-[2rem] md:text-[2.8rem] font-bold text-center'>The Benefits: For Wholesale Buyers</h1>

                <div className='flex flex-col md:flex-row justify-center items-center md:items-end md:px-12 mt-10 gap-5 md:gap-0'>

                    <div className='md:basis-[42%] md:z-40 md:mr-[-2rem] md:mb-[-2.5rem]'><img className='rounded-lg w-full h-full' src={pic1} alt="Picture 1" loading="lazy"/></div>

                    <div className='container bg-[#9acfab] rounded-lg py-3 md:py-16 px-16 md:basis-[58%]'>

                        <p className='font-bold text-[1rem] md:text-[1.4rem]'>Quality Assurance</p>

                        <p className='mt-4 md:mt-8 text-[0.8rem] md:text-[1.3rem]'>Buyers can source fresh produce from verified farmers through the platform, ensuring 
                            high-quality standards. The inclusion of quality checks at collection centers further 
                            guarantees that buyers receive only the best products.


                        </p>

                    </div>

                </div>



                <div className='flex flex-col md:flex-row justify-center items-center md:items-end md:px-14 mt-10 md:mt-20 gap-5 md:gap-0'>

                    <div className='md:basis-[42%] md:z-40 md:mr-[-2rem] md:mb-[-2.5rem]'><img className='rounded-lg w-full h-full' src={pic2} alt="Picture 2" loading="lazy"/></div>

                    <div className='container bg-[#9acfab] rounded-lg py-3 md:py-20 px-16 md:basis-[58%]'>

                        <p className='font-bold text-[1rem] md:text-[1.4rem]'>Time and Cost Efficiency</p>

                        <p className='mt-4 md:mt-8 text-[0.8rem] md:text-[1.3rem]'>Konectar streamlines the procurement process, allowing buyer to easily search for and 
                            connect with suppliers based on specific needs. This saves time and reduces costs associated 
                            with traditional sourcing methods.

                        </p>

                    </div>

                </div>



                <div className='flex flex-col md:flex-row justify-center items-center md:items-end md:px-14 mt-10 md:mt-20 gap-5 md:gap-0'>

                    <div className='md:basis-[42%] md:z-40 md:mr-[-2rem] md:mb-[-2.5rem]'><img className='rounded-lg w-full h-full' src={pic3} alt="Picture 3" loading="lazy"/></div>

                    <div className='container bg-[#9acfab] rounded-lg py-3 md:py-20 px-16 md:basis-[58%]'>

                        <p className='font-bold text-[1rem] md:text-[1.4rem]'>Real-Time Tracking and Transparency</p>

                        <p className='mt-4 md:mt-8 text-[0.8rem] md:text-[1.3rem]'>Buyers can track their shipments in real-time, enhancing transparency throughout the deliver 
                            process. This allows for the better inventory management and ensures timely deliver of fresh produce.

                        </p>

                    </div>

                </div>


            </section>
        </>
    );
};

export default BuyersBenefitsSection;
