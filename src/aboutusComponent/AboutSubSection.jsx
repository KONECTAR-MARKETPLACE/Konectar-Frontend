import React from 'react';

const AboutSubSection = () => {
    return (
        <>
            <section className='w-full bg-[#003333] text-white p-10 py-20'>

                <div className='flex flex-col md:flex-row gap-10 px-10'>
                    <div className='border-l-4 border-white basis-[40%] h-[4.5rem] pl-3 py-0 text-[2rem] md:text-[2.5rem] font-extrabold'><h1>About Us</h1></div>

                    <div className='basis-[50%]'><p>At Konectar, we are increasing the profitability of smallholder farmers by directly connecting 
                        them with wholesale buyers, eliminating middlemen to ensure fair pricing and greater market access.</p>

                        <p className='mt-6'>Konectar facilitates real-time transactions and guarantees trust through an escrow payment system, ensuring 
                            secure and reliable payments for both parties.
                        </p>

                        <p className='mt-6'>We also offer Cold Chain Logistics, ensuring that fresh produce is preserved during transportation, 
                            maintaining the highest quality standards from farm to buyer.
                        </p>

                        <p className='mt-6'>Konectar delivers a seamless marketplace focused on Transparency, Quality, and Sustainability from Nigeria 
                            to the rest of Africa and beyond.
                        </p>
                        </div>
                </div>



                <div className='flex flex-col md:flex-row gap-10 px-10 mt-20 md:mt-30'>
                    <div className='border-l-4 border-white basis-[40%] h-[4.5rem] pl-3 py-0 text-[2rem] md:text-[2.5rem] font-extrabold'><h1>What We Do</h1></div>

                    <div className='basis-[50%]'><p>At Konectar, we provide a digital marketplace that directly connects smallholder farmers with 
                        wholesale buyers, enabling secure, real-time tansactions. We streamline the horticultural supply chain 
                        by offering solutions such as escrow payments. Cold Chain Logistics, and quality assurance through 
                        our network of Collection Centers.
                    </p>

                        </div>
                </div>


                <div className='flex flex-col md:flex-row gap-10 px-10 mt-20 md:mt-30'>
                    <div className='border-l-4 border-white basis-[40%] h-[4.5rem] pl-3 py-0 text-[2rem] md:text-[2.5rem] font-extrabold'><h1>How We Do It</h1></div>

                    <div className='basis-[50%]'><p>Konectar leverges technology to create a seamless and transparent trading experience.
                        Our platform allows farmers and buyers to connect and transact in real-time, backed by an escrow 
                        payment system for secure transactions. We ensure quality through our Collection Centers, where produce 
                        undergoes checks before delivery. Additionally, our Cold Chain Logistics mainatain the freshness and integrity 
                        of the produce during tansportation, guaranteeing timely and safe deliveries.
                    </p>

                        </div>
                </div>

            </section>
        </>
    );
};

export default AboutSubSection;
