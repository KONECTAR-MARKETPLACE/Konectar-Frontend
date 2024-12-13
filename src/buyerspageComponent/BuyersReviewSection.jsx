import React from 'react';
import { IoStarSharp } from "react-icons/io5";

const BuyersReviewSection = () => {
    return (
        <>
            <section className='w-full py-14 bg-[#003333] px-8 md:px-20'>
                <h1 className='mb-20 text-center font-Manrope font-bold text-white text-[2.3rem] leading-tight md:leading-snug'>See what they are saying about Konectar</h1>

                <div className='flex flex-col md:flex-row gap-16 justify-center items-center'>

                    <div className='bg-white rounded-md w-full px-16 py-9'>

                        <p>Konectar transformed our menu! The quality and consistency of the produce are unmatched, and our customers
                            are raving about the fresh local flavors.
                        </p>

                        <div className='flex justify-around items-center font-bold text-[1.3rem] mt-6'>
                            <h1>Remi<span className='text-[#009933]'> Kola</span></h1>
                            <div className='flex text-[#009933]'>
                                <IoStarSharp size={12} />
                                <IoStarSharp size={12} />
                                <IoStarSharp size={12} />
                                <IoStarSharp size={12} />
                                <IoStarSharp size={12} />
                            </div>
                        </div>

                    </div>

                    <div className='bg-white rounded-md w-full px-16 py-9'>

                        <p>Konectar transformed our menu! The quality and consistency of the produce are unmatched, and our customers
                            are raving about the fresh local flavors.
                        </p>

                        <div className='flex justify-around items-center font-bold text-[1.3rem] mt-6'>
                            <h1>Farmers<span className='text-[#009933]'> Mart</span></h1>
                            <div className='flex text-[#009933]'>
                                <IoStarSharp size={12} />
                                <IoStarSharp size={12} />
                                <IoStarSharp size={12} />
                                <IoStarSharp size={12} />
                                <IoStarSharp size={12} />
                            </div>
                        </div>

                    </div>

                    <div className='bg-white rounded-md w-full px-16 py-9'>

                        <p>Konectar transformed our menu! The quality and consistency of the produce are unmatched, and our customers
                            are raving about the fresh local flavors.
                        </p>

                        <div className='flex justify-around items-center font-bold text-[1.1rem] mt-6'>
                            <h1>Zara<span className='text-[#009933]'> Restaurant</span></h1>
                            <div className='flex text-[#009933]'>
                                <IoStarSharp size={12} />
                                <IoStarSharp size={12} />
                                <IoStarSharp size={12} />
                                <IoStarSharp size={12} />
                                <IoStarSharp size={12} />
                            </div>
                        </div>

                    </div>

                </div>






            </section>
        </>
    );
};

export default BuyersReviewSection;
