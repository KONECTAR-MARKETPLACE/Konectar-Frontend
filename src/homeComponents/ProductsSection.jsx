import React from 'react';
import { FaMobileAlt } from "react-icons/fa";
import { BsShop } from "react-icons/bs";
import { RiSecurePaymentFill } from "react-icons/ri";
import { GoPeople } from "react-icons/go";
import { FaTruck } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";

const ProductsSection = () => {
    return (
        <>
            <section className='w-full p-10 md:p-16 md:px-24'>
                <div className='md:w-[80%] md:text-left'> <h1 className='font-bold text-[2rem] md:text-[2.8rem]'>Products: Features of The Platform</h1>
                    <p className='text-[#003311] text-[1rem] md:text-[1.3rem] font-semibold mt-4'>Our products showcase the value Konectar brings to both buyers and suppliers, emphasizing financial
                        security, convenience and quality assurance.
                    </p></div>

                <div className='flex flex-col md:flex-row justify-center items-center gap-8 mt-10 w-full'>

                    <div className='bg-[#003311] text-white rounded-lg font-bold p-5 md:h-[24rem] md:w-[40rem]'>


                        <div className='text-white'><FaMobileAlt size={35} /></div>
                        <h1 className='text-[1.2rem] mt-3'>Mobile-Friendly Interace</h1>
                        <p className='mt-4'>Access the marketplace anytime, anywhere through our user-friendly mobile platform,
                            designed for ease of use on the go
                        </p>
                    </div>


                    <div className='bg-[#003311] text-white rounded-lg font-bold p-5 md:h-[24rem] md:w-[40rem]'>


                        <div className='text-white'><BsShop size={35} /></div>
                        <h1 className='text-[1.2rem] mt-3'>Centralized Marketplace with Data Insights</h1>
                        <p className='mt-4'>Connect with verified buyers and sellers instantly, facilitating seamless transactions
                            for fresh fruits and vegetables while getting valuable market insights, pricing trends and
                            performance analytics to help make you make informed decisions for your business
                        </p>
                    </div>

                    <div className='bg-[#003311] text-white rounded-lg font-bold p-5 md:h-[24rem] md:w-[40rem]'>


                        <div className='text-white'><RiSecurePaymentFill size={35} /></div>
                        <h1 className='text-[1.2rem] mt-3'>Escrow Payment Servies</h1>
                        <p className='mt-4'>Secure transactions with our built-in escrow payment system, ensuring that payments are only
                            released when both parties are satisfied.
                        </p>
                    </div>

                </div>

                <div className='flex flex-col md:flex-row justify-center items-center gap-8 mt-8 w-full'>



                    <div className='bg-[#003311] text-white rounded-lg font-bold p-5 md:h-[24rem] md:w-[40rem]'>


                        <div className='text-white'><GoPeople size={35} /></div>
                        <h1 className='text-[1.2rem] mt-3'>Buyer & Supplier Matching</h1>
                        <p className='mt-4'>Smart matching algorithms that connects with the most suitable buyers or suppliers based
                            on your preferences like product type, price, proximity, quality and quantity.
                        </p>
                    </div>



                    <div className='bg-[#003311] text-white rounded-lg font-bold p-5 md:h-[24rem] md:w-[40rem]'>


                        <div className='text-white'><FaTruck size={35} /></div>
                        <h1 className='text-[1.2rem] mt-3'>Cold-Chain Logistics</h1>
                        <p className='mt-4'>Access temperature-controlled logistics to maintain the freshness and quality of produce
                            during transportation from farm to market.
                        </p>
                    </div>


                    <div className='bg-[#003311] text-white rounded-lg font-bold p-5 md:h-[24rem] md:w-[40rem]'>


                        <div className='text-white'><FaTools size={35} /></div>
                        <h1 className='text-[1.2rem] mt-3'>Quality Assurance & Collection Centers</h1>
                        <p className='mt-4'>Ensure high-quality standards with produce checks at our collection centers and packinghouses
                            before delivery to buyers.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductsSection;
