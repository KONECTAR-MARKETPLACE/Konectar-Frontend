import aboutus from '../assets/images/about-us-image.png';
import { Link } from 'react-router-dom';

const AboutUsSection = () => {
    return (
        <>
          <section className="flex flex-col md:flex-row text-left items-center gap-9 justify-center my-16 px-8 md:px-24">
            
            <div className='md:basis-[50%]'>
                <h1 className='font-Manrope font-semibold text-[1.8rem] md:text-[2.8rem] leading-tight md:leading-snug text-[#0d2727]'>About Us</h1>
    
                <p className='mt-5 text-[1rem] md:text-[1.2rem] text-[#003311]'>At Konectar, we are increasing the profitability of smallholder farmers by directly connecting them with 
                    wholesale buyers, eliminating middlemen to ensure fair pricing and greater market access. Konectar facilitates 
                    real-time transactions and guarantees trust through an escrow payment system, ensuring secure and reliable 
                    payments for both parties.
                </p>
    
               
              <Link to='/about'><button type="button"
                className='bg-[#009933] mt-7 px-6 py-2 md:px-9 rounded-lg text-[0.8rem] md:text-[1rem] text-white'
              >
                Learn More...
              </button></Link>
              
    
            </div>
            
            <div className="w-full md:w-1/2 md:basis-[50%] mt-6 md:mt-0">
            <img className="w-full h-auto object-cover rounded-lg" src={aboutus} alt="Hero Image" loading="lazy"  />
              
                 
             </div>    
    
            </section>  
        </>
    );
};

export default AboutUsSection;
