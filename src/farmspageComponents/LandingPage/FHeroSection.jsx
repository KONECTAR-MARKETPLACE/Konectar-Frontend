import frame1 from "../../assets/images/Frame1.png";
import { Link } from 'react-router-dom';

const FHeroSection = () => {
    return (
        <>
          <section className="flex flex-col-reverse md:flex-row text-center md:text-left items-center gap-5 justify-center my-16 px-8 md:px-16">
            
        <div className='md:basis-[50%]'>
            <h1 className='font-Manrope font-semibold text-[1.8rem] md:text-[2.8rem] leading-tight md:leading-snug'>Unlock New Markets and Increase Profits</h1>

            <p className='mt-5'>Skip multiple middlemen and sell directly to businesses like: Supermarkets, Quick Servie, Restaurants, 
              Hotels and Food Processors in One Click!
            </p>

            <Link to="/WaitingListForm">
          <button type="button"
            className='bg-[#009933] mt-4 px-6 py-2 md:px-9 rounded-lg text-[0.8rem] md:text-[1rem] text-white'
          >
            Join Waitlist
          </button>
          </Link>

        </div>
        
        <div className="w-full md:w-1/2 md:basis-[50%] mt-6 md:mt-0">
        <img className="w-full h-auto object-cover rounded-lg" src={frame1} alt="farmer's image"  />
          
             
         </div>    

        </section>  
        </>
    );
};

export default FHeroSection;
