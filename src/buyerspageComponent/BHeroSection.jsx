import React from 'react';

const BHeroSection = () => {
    return (
        <>
        <section className="bg-[linear-gradient(to_right_,rgba(6,8,15,0.6),rgba(6,8,15,0.2)),url('assets/images/Bhero-image.png')] h-screen bg-cover bg-center bg-no-repeat text-[white] text-left justify-start items-center flex lg:px-0 px-8"> 
            
            <div className='md:w-[45%] md:ml-24'>
                      <h1 className='font-Manrope font-semibold text-left text-[2rem] md:text-[2.8rem]'>Source For Your Fresh Produce In One Prompt</h1>
                      <p className='text-[0.8rem] md:text-[1rem] mt-8'>Efficiently source the best produce, reduce operational costs, and simplify procurement 
                        with Konectar's streamlined platform for business.
                      </p>
            
            <div className='mt-8 font-Manrope'>
        <button type="button"
       className='bg-[#009933] px-7 rounded-lg py-2 text-white text-[0.8rem] md:text-[1rem]'>Sign up for free</button>
        
    
            </div>
            </div>
        </section> 

        <div>
            <div className='border-x-2 border-solid border-s-violet-100 border-y-4 border-[white]'></div>
        </div>
        </>
    );
};

export default BHeroSection;
