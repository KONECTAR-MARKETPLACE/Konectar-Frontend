import pic1 from '../../assets/images/Linda Gift/sec1.png';
import pic2 from '../../assets/images/Linda Gift/sec2.png';
import pic3 from '../../assets/images/Linda Gift/sec3.png';

const FarmersOfferSection = () => {
    return (
        <>
           <section className='w-full bg-[#55D480] py-16'>
            
           <h1 className='text-center font-Manrope font-semibold text-[1.4rem] md:text-[2.3rem] leading-tight md:leading-snug'>What Konectar Offers Farmers</h1>

           <div className='w-full flex justify-between gap-3 md:gap-0 items-center mt-10'>

            <div className='basis-[46%] ml-12'>
            <h1 className='text-[1rem] md:text-[1.8rem] font-bold'>Unlocking Market Potential</h1>
            <p className='text-[0.8rem] md:text-[1.4rem]'>Konectar bridges the gap between farmers and markets, providing unparalleled access to buyers and wholesalers. 
                By eliminating intermediaries, farmers reap better prices for their produces, boosting sales revenue 
                and negotiation power.
            </p>
            </div>

            <div className='basis-[47%]'>
                <img className='h-full w-full' src={pic1} alt="Picture 1" loading="lazy"/>
            </div>

           </div>

           
           
           <div className='w-full flex justify-between items-center mt-10 gap-3 md:gap-0'>

            <div className='basis-[47%]'>
                <img className='h-full w-full' src={pic2} alt="Picture 2" loading="lazy"/>
            </div>


            <div className='basis-[46%] md:mr-12 mr-6'>
            <h1 className='text-[1rem] md:text-[1.8rem] font-bold'>Boosting Farmers Productivity</h1>
            <p className='text-[0.8rem] md:text-[1.4rem]'>Konectar provides a much-needed solution to the challenges faced by farmers in accessing markets and 
                sourcing raw materials. With our platform, farmers can reduce spoilage and increase their earnings.
            </p>
            </div>

           </div>

          
          
           <div className='w-full flex justify-between items-center mt-10 gap-3 md:gap-0'>

            <div className='basis-[46%] ml-12'>
            <h1 className='text-[1rem] md:text-[1.8rem] font-bold'>Supply Chain Efficiency</h1>
            <p className='text-[0.8rem] md:text-[1.4rem]'>Konectar provides streamlined logistics by collaborating with logistics providers. Konectar&#39;s logistics 
                module optimizes route planning, tracking and delivery scheduling. This reduces transportation costs and 
                improves delivery times.
            </p>
            </div>

            <div className='basis-[47%]'>
                <img className='h-full w-full' src={pic3} alt="Picture 3" loading="lazy"/>
            </div>

           </div>

            </section> 
        </>
    );
};

export default FarmersOfferSection;
