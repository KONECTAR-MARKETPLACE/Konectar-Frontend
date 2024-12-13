import React from 'react';
import phone1 from '../assets/images/ip11.png'
import phone2 from '../assets/images/ip10.png'
import phone3 from '../assets/images/ip12.png'






const BuyersHowItWorks = () => {
    return (
        <>
            <section className='w-full bg-[#003311] py-16 md:px-6 text-white'>
            
            <h1 className='px-3 md:px-1 text-center font-Manrope font-bold text-[2rem] md:text-[2.8rem] leading-tight md:leading-snug'>How It Works in 3 Simple Steps</h1>
 
            <div className='w-full flex justify-between gap-2 md:gap-0 items-center mt-10 px-6 md:px-20'>
 
             <div className='basis-[65%] bg-[#b6d8c1] rounded-xl text-[#003311] p-5 md:p-10'>
             <h1 className='text-[1rem] md:text-[1.8rem] font-bold md:ml-32'>Step 1</h1>
             <h1 className='text-[0.9rem] md:text-[1.4rem] font-bold mt-3'>Sign Up and Prompt-to-Procure</h1>
                
                    <p className='text-[0.8rem] md:text-[1.4rem] mt-3 md:mt-5'>Create your buyer account by providing details such as your business name, location, and contact 
                        information. Once registered, you can immediately start sourcing suppliers. Use our smart search 
                        feature to type a prompt based on product type, price, proximity, quantity, and quality. Browse the 
                        results, view farmers profiles, and connect with suppliers that meet your specific requirements.
                    </p>

                
             </div>
 
             <div className='basis-[35%] md:basis-[30%] flex items-end gap-3'>
                 <div className=''><img className='' src={phone3} alt="Picture 1" loading="lazy"/></div>
                 
             </div>
            </div>
 
            
            
            <div className='w-full flex justify-between gap-6 items-center mt-10 md:mt-14 px-6 md:px-20'>
 
            <div className='basis-[35%] md:basis-[30%] flex items-end gap-3'>
                 <div className=''><img className='' src={phone2} alt="Picture 2" loading="lazy"/></div>
                
             </div>
             
             <div className='basis-[65%] bg-[#b6d8c1] rounded-xl text-[#003311] p-5 md:p-10'>
             <h1 className='text-[1rem] md:text-[1.8rem] font-bold md:ml-32'>Step 2</h1>
             <h1 className='text-[0.9rem] md:text-[1.4rem] font-bold mt-3'>Place Orders, Negotiate and Secure Payment</h1>
                
                    <p className='text-[0.8rem] md:text-[1.4rem] mt-3 md:mt-5'>After selecting the produce that fits your needs, place an order through the platform. Negotiate 
                        terms with the supplier and finalize the deal. Our secure escrow payment system ensures your money 
                        is safely held until you confirm that the delivery meets your expectations.
                    </p>

                
             </div>
 
            </div>
 
           
           
            <div className='w-full flex justify-between gap-2 md:gap-0 items-center mt-10 px-6 md:px-20'>
 
            <div className='basis-[65%] bg-[#b6d8c1] rounded-xl text-[#003311] p-5 md:p-10'>
             <h1 className='text-[1rem] md:text-[1.8rem] font-bold md:ml-32'>Step 3</h1>
             <h1 className='text-[0.9rem] md:text-[1.4rem] font-bold mt-3'>Track Delivery, Receive and Review</h1>
                
                    <p className='text-[0.8rem] md:text-[1.4rem] mt-3 md:mt-5'>Track your shipment in real-time as it makes its way from the farm to your location. Upon delivery, 
                        inspect the produce, and once satisfied, release the payment. Drop your feedbacks to help farmers maintain quality standards.
                    </p>

                
             </div>
 
             <div className='basis-[35%] md:basis-[30%] flex items-center gap-3'>
                 <div className=''><img className='' src={phone1} alt="Picture 3" loading="lazy"/></div>
              
             </div>
 
            </div>



           
             </section> 
        </>
    );
};

export default BuyersHowItWorks;
