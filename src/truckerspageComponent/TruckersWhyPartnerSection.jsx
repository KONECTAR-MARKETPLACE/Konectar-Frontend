import React from 'react';
import { IoContractOutline } from "react-icons/io5";
import { IoRocketOutline } from "react-icons/io5";
import { HiArrowTrendingUp } from "react-icons/hi2";

const TruckersWhyPartnerSection = () => {
    return (
        <>
            <section className='px-12 py-16'>

                <h1 className='text-[2rem] font-bold text-center'>Why Partner with Us?</h1>

                <div className='flex flex-col md:flex-row gap-6 mt-16 px-5 md:px-16'>

                    <div className='container bg-[#EDEDF2] rounded-lg p-4 py-6 pr-20'>
                        <div className='text-[#009933] rounded-md w-[56px] h-[54px] flex justify-center items-center'>
                            <IoContractOutline size={45} />
                        </div>

                        <p className='font-bold text-[1rem] md:text-[1.3rem] mt-5'>Direct Access to Demand:</p>

                        <p className='mt-8 text-[1rem] md:text-[1.3rem]'>Tap into a growing network of farmers and buyers seeking reliable cold-chain solutions.

                        </p>

                    </div>



                    <div className='container bg-[#EDEDF2] rounded-lg p-4 py-6 pr-20'>
                        <div className='text-[#009933] rounded-md w-[56px] h-[54px] flex justify-center items-center'>
                            <IoRocketOutline size={45} />
                        </div>

                        <p className='font-bold text-[1rem] md:text-[1.3rem] mt-5'>Increased Revenue Potential:</p>

                        <p className='mt-8 text-[1rem] md:text-[1.3rem]'>Partnering with Konectar opens up new revenue streams by connecting you with diverse agricultural markets in need of cold-chain services
                        </p>

                    </div>


                    <div className='container bg-[#EDEDF2] rounded-lg p-4 py-6 pr-20'>
                        <div className='text-[#009933] rounded-md w-[56px] h-[54px] flex justify-center items-center'>
                            <HiArrowTrendingUp size={45} />
                        </div>

                        <p className='font-bold text-[1rem] md:text-[1.3rem] mt-5'>Streamlined Operations:</p>

                        <p className='mt-8 text-[1rem] md:text-[1.3rem]'>Benefit from our integrated platform that simplifies logistics management, ensuring efficient and timely deliveries
                        </p>

                    </div>

                     <div className='container bg-[#EDEDF2] rounded-lg p-4 py-6 pr-20'>
                        <div className='text-[#009933] rounded-md w-[56px] h-[54px] flex justify-center items-center'>
                            <HiArrowTrendingUp size={45} />
                        </div>

                        <p className='font-bold text-[1rem] md:text-[1.3rem] mt-5'>Enhanced Visibility:</p>

                        <p className='mt-8 text-[1rem] md:text-[1.3rem]'>Gain real-time tracking and updates, allowing you to monitor shipments and maintain transparency with clients.
                        </p>

                    </div>

                </div>

            </section>
        </>
    );
};

export default TruckersWhyPartnerSection;


