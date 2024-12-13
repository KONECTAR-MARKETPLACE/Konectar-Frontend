import React from 'react';
import Benefit1 from '../assets/images/Linda Gift/Benefit1.png';
import Benefit2 from '../assets/images/Linda Gift/Benefit2.png';


const TBenefitSection = () => {
    return (
        <>
            <section className='w-full bg-[#BFBFD4] p-16'>
                <h1 className='text-[2.3rem] font-bold text-center'>Benefits of Joining Our 3PL Network</h1>

                <div className='mt-14 flex flex-col md:flex-row md:px-36 gap-10'>

                    <div className='bg-white basis-[50%] p-4 rounded-md'>

                        <div className=''>
                            <div><img className=' m-auto' src={Benefit1} alt='Pic 1' /></div>
                        </div>

                        <p className='mt-3'>Access to nationwide and international agricultural trade opportunities that significantly expand your business reach.</p>


                    </div>

                    <div className='bg-white basis-[50%] p-4 rounded-md'>

                        <div className=''>
                            <div><img className='m-auto' src={Benefit2} alt='Pic 2' /></div>
                        </div>

                        <p className='mt-3'>Reliable payments and secure contracts guarantee your financial safety while working with Konectar partners.</p>


                    </div>


                </div>



                <div className='mt-8 flex flex-col md:flex-row md:px-36 gap-10'>

                    <div className='bg-white basis-[50%] p-4 rounded-md'>

                        <div className=''>
                            <div><img className=' m-auto' src={Benefit2} alt='Pic 3' /></div>
                        </div>

                        <p className='mt-3'>Enhanced visibility for your logistics services through our platform increases your market presence and opportunities.</p>


                    </div>

                    <div className='bg-white basis-[50%] p-4 rounded-md'>

                        <div className=''>
                            <div><img className='m-auto' src={Benefit1} alt='Pic 4' /></div>
                        </div>

                        <p className='mt-3'>Optimized delivery routes designed to reduce transportation costs while ensuring timely and efficient service.</p>


                    </div>


                </div>

            </section>
        </>
    );
};

export default TBenefitSection;
