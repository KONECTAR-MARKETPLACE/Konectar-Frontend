import React from 'react';
import pic1 from '../assets/images/ben1.png';
import pic2 from '../assets/images/ben2.png';
import pic3 from '../assets/images/ben3.png';



const TruckersBenefitSection = () => {
    return (
        <>
            <section className='w-full p-10 text-[#003311] pb-32'>

                <h1 className='text-[2rem] md:text-[2.8rem] font-bold text-center'>The Benefits: For Logistics Providers</h1>

                <div className='flex flex-col md:flex-row justify-center items-center md:items-end md:px-14 mt-10 gap-5 md:gap-0'>

                    <div className='md:basis-[42%] md:z-40 md:mr-[-2rem] md:mb-[-2.5rem]'><img className='rounded-lg w-full h-full' src={pic1} alt="Picture 1" loading="lazy"/></div>

                    <div className='container bg-[#9acfab] rounded-lg py-3 md:py-10 px-16 md:basis-[58%]'>

                        <p className='font-bold text-[1rem] md:text-[1.4rem]'>Consistent Demand for Services</p>

                        <p className='mt-4 md:mt-8 text-[0.8rem] md:text-[1.3rem]'>By Partnering with Konectar, Cold Chain Logistics providers gain access to a growing network 
                            of farmers and buyers, ensuring a steady demand for temperature-controlled transportation services. 
                            This creates a reliable stream of business opportunities within the agricultural sector.


                        </p>

                    </div>

                </div>



                <div className='flex flex-col md:flex-row justify-center items-center md:items-end md:px-14 mt-10 md:mt-20 gap-5 md:gap-0'>

                    <div className='md:basis-[42%] md:z-40 md:mr-[-2rem] md:mb-[-2.5rem]'><img className='rounded-lg w-full h-full' src={pic2} alt="Picture 1" loading="lazy"/></div>

                    <div className='container bg-[#9acfab] rounded-lg py-3 md:py-14 px-16 md:basis-[58%]'>

                        <p className='font-bold text-[1rem] md:text-[1.4rem]'>Optimized Route Planning</p>

                        <p className='mt-4 md:mt-8 text-[0.8rem] md:text-[1.3rem]'>With Konectar's platform, logistics providers can plan and optimize their delivery routes 
                            based on real-time orders from farmers and buyers. This helps reduce operational costs, improve 
                            delivery times, and maximize vehicle utilization.

                        </p>

                    </div>

                </div>



                <div className='flex flex-col md:flex-row justify-center items-center md:items-end md:px-14 mt-10 md:mt-20 gap-5 md:gap-0'>

                    <div className='md:basis-[42%] md:z-40 md:mr-[-2rem] md:mb-[-2.5rem]'><img className='rounded-lg w-full h-full' src={pic3} alt="Picture 3" loading="lazy"/></div>

                    <div className='container bg-[#9acfab] rounded-lg py-3 md:py-10 px-16 md:basis-[58%]'>

                        <p className='font-bold text-[1rem] md:text-[1.4rem]'>Enhanced Market Visibility</p>

                        <p className='mt-4 md:mt-8 text-[0.8rem] md:text-[1.3rem]'>Cold Chain providers listed on Konectar benefit from increased visibility to farmers and 
                            wholesale buyers who require reliable logistics for transporting perishable goods. This 
                            enhances their market presence and allows them to build long-term partnerships with key players 
                            in the agricultural supply chain.

                        </p>

                    </div>

                </div>


            </section>
        </>
    );
};

export default TruckersBenefitSection;
