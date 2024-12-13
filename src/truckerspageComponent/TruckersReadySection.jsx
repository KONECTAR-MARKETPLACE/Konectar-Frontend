import React from 'react';

const TruckersReadySection = () => {
    return (
        <>
           <section className="w-full bg-[linear-gradient(to_right_,rgba(6,8,15,0.9),rgba(6,8,15,0.6)),url('assets/images/KTruck.png')] bg-cover bg-no-repeat text-[white] text-center justify-center items-center flex flex-col py-20 md:py-36 px-10 md:px-16"> 

                    <h1 className='text-center font-bold text-[2.3rem]'>Ready to join the Future of Agriculture Logistics?</h1>

                    <div className='flex flex-row gap-4 mt-6 items-center md:items-start'>
                        <button className='bg-[#009933] px-6 py-2 md:px-7 md:py-2.5 rounded-lg text-[0.7rem] md:text-[1rem]'>Partner with Us</button>
                        <button className='bg-transparent border-[#009933] border px-6 py-2 md:px-6 md:py-2.5 rounded-lg text-[0.7rem] md:text-[1rem]'>Join Our Network</button>
                    </div>

           </section> 
        </>
    );
};

export default TruckersReadySection;
