import phone1 from "../../assets/images/ip1.png"
import phone2 from '../../assets/images/ip2.png'
import phone3 from '../../assets/images/ip3.png'
import phone4 from '../../assets/images/ip4.png'
import phone5 from '../../assets/images/ip5.png'

const FarmersHowItWorks = () => {
    return (
        <>
          <section className='w-full bg-[#003311] py-16 md:px-6 text-white'>
            
            <h1 className='px-4 md:px-1 text-center font-Manrope font-bold text-[2rem] md:text-[2.8rem] leading-tight md:leading-snug'>How It Works in 3 Simple Steps</h1>
 
            <div className='w-full flex justify-between gap-2 md:gap-0 items-center mt-10 px-6 md:px-20'>
 
             <div className='basis-[65%] md:basis-[65%] bg-[#b6d8c1] rounded-xl text-[#003311] p-5 md:p-10'>
             <h1 className='text-[1rem] md:text-[1.8rem] font-bold md:ml-32'>Step 1</h1>
             <h1 className='text-[0.9rem] md:text-[1.4rem] font-bold mt-3'>Sign Up and Add Your Farm Information</h1>
                
                    <p className='text-[0.8rem] md:text-[1.4rem] mt-3 md:mt-5'>Get started by creating an account on Konectar. Fill in your farm details, including 
                        location, crops grown, and expected harvest timelines. This helps connect you with the right buyers.
                    </p>

                
             </div>
 
             <div className='basis-[40%] md:basis-[30%] flex items-end gap-3'>
                 <div className='basis-[60%]'><img className='' src={phone1} alt="Picture 1" loading="lazy"/></div>
                 <div className='basis-[60%] mb-[-2rem] md:mb-[-4rem]'><img className='' src={phone2} alt="Picture 2" loading="lazy"/></div>
             </div>
 
            </div>
 
            
            
            <div className='w-full flex justify-between gap-6 items-center mt-10 md:mt-14 px-6 md:px-20'>
 
            <div className='basis-[45%] md:basis-[35%] flex items-end gap-3'>
                 <div className='basis-[60%]'><img className='' src={phone3} alt="Picture 1" loading="lazy"/></div>
                 <div className='basis-[60%] mb-[-3rem] md:mb-[-5rem]'><img className='' src={phone4} alt="Picture 2" loading="lazy"/></div>
             </div>
             
             <div className='basis-[65%] md:basis-[65%] bg-[#b6d8c1] rounded-xl text-[#003311] p-5 md:p-10'>
             <h1 className='text-[1rem] md:text-[1.8rem] font-bold md:ml-32'>Step 2</h1>
             <h1 className='text-[0.9rem] md:text-[1.4rem] font-bold mt-3'>Upload Your Produce and Manage Inventory</h1>
                
                    <p className='text-[0.8rem] md:text-[1.4rem] mt-3 md:mt-5'>Easily upload your available produce to the platform. Add quantities, quality specifications and 
                        pricing. Keep track of your inventory in real-time and make updates as needed.
                    </p>

                
             </div>
 
            </div>
 
           
           
            <div className='w-full flex justify-between gap-2 md:gap-0 items-center mt-10 px-6 md:px-20'>
 
            <div className='basis-[60%] md:basis-[75%] bg-[#b6d8c1] rounded-xl text-[#003311] p-5 md:p-10'>
             <h1 className='text-[1rem] md:text-[1.8rem] font-bold md:ml-32'>Step 3</h1>
             <h1 className='text-[0.9rem] md:text-[1.4rem] font-bold mt-3'>Manage Orders and Confirm Payments</h1>
                
                    <p className='text-[0.8rem] md:text-[1.4rem] mt-3 md:mt-5'>Once buyers place orders, manage them through your dashboard. Confirm sales, arrange delivery 
                        and receive secure payments through our escrow system, ensuring peace of mind with every transaction.
                    </p>

                
             </div>
 
             <div className='basis-[25%] md:basis-[20%]'>
                 <img className='[60%]' src={phone5} alt="Picture 3" loading="lazy"/>
             </div>
 
            </div>



           
             </section>   
        </>
    );
};

export default FarmersHowItWorks;
