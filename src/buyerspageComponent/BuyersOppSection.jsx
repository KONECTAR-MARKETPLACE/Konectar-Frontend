import React from 'react';
import { FiTruck } from "react-icons/fi";
import { GiFlowers } from "react-icons/gi";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

const BuyersOppSection = () => {
    return (
        <>
            <section className='bg-[#EDEDF2] w-full px-6 md:px-10 py-14'>

                <div className=' w-full md:w-[45%] text-center md:text-left md:ml-16'>
                    <h1 className='font-Manrope font-bold text-[1.7rem] md:text-[2.5rem] leading-tight md:leading-snug'>Maximize every opportunity with Konectar.</h1>
                    <p className='mt-6'>Konectar connects businesses with farmers globally for easy, seamless transactions.</p>
                </div>


                <div className='flex flex-col md:flex-row gap-6 mt-10 px-5 md:px-16'>

                    <div className='container bg-white rounded-lg p-4 py-6 pr-20'>
                        <div className='bg-[#003311] text-white rounded-md w-[56px] h-[54px] flex justify-center items-center'>
                            <GiFlowers size={35} />
                        </div>

                        <p className='font-bold text-[1rem] md:text-[1.3rem] mt-5'>Marketplace</p>

                        <p className='mt-8 text-[1rem] md:text-[1.3rem]'>A wide variety of fresh, seasonal produce is available with no location limits, ensuring
                            access for all customers.
                        </p>

                    </div>



                    <div className='container bg-white rounded-lg p-4 py-6 pr-20'>
                        <div className='bg-[#003311] text-white rounded-md w-[56px] h-[54px] flex justify-center items-center'>
                            <FiTruck size={35} />
                        </div>

                        <p className='font-bold text-[1rem] md:text-[1.3rem] mt-5'>Logistics</p>

                        <p className='mt-8 text-[1rem] md:text-[1.3rem]'>Konectar enhances logistics with efficient long distance shipping, reliable transport, and real-time tracking
                        </p>

                    </div>




                </div>


                <div className='flex flex-col md:flex-row gap-6 mt-10 px-5 md:px-16'>

                    <div className='container bg-white rounded-lg p-4 py-6 pr-20'>
                        <div className='bg-[#003311] text-white rounded-md w-[56px] h-[54px] flex justify-center items-center'>
                            <MdOutlineConnectWithoutContact size={35} />
                        </div>

                        <p className='font-bold text-[1rem] md:text-[1.3rem] mt-5'>Connect</p>

                        <p className='mt-8 text-[1rem] md:text-[1.3rem]'>Connect directly with farmers to negotiate fair prices and cut out middlemen for more equitable deals
                        </p>

                    </div>



                    <div className='container bg-white rounded-lg p-4 py-6 pr-20'>
                        <div className='bg-[#003311] text-white rounded-md w-[56px] h-[54px] flex justify-center items-center'>
                            <AiOutlineSafetyCertificate size={35} />
                        </div>

                        <p className='font-bold text-[1rem] md:text-[1.3rem] mt-5'>Enjoy</p>

                        <p className='mt-8 text-[1rem] md:text-[1.3rem]'>Ensure secure, timely payments, enable personal evaluations, and simplify transactions for smooth and easy processes.
                        </p>

                    </div>




                </div>



            </section>
        </>
    );
};

export default BuyersOppSection;
