import { Link } from 'react-router-dom';

const FarmersHeroSection = () => {
    return (
        <>
           <section className="bg-[linear-gradient(to_right_,rgba(6,8,15,0.6),rgba(6,8,15,0.2)),url('assets/images/Imagholder.png')] h-screen bg-cover md:bg-top bg-center bg-no-repeat text-[white] text-left justify-start items-center flex lg:px-0 px-8"> 
            
            <div className='md:w-[45%] md:ml-24'>
                      <h1 className='font-Manrope font-semibold text-left text-[2rem] md:text-[2.8rem]'>Unlock New Markets and Increase Profits</h1>
                      <p className='text-[0.8rem] md:text-[1rem] mt-8'>Skip multiple middlemen and sell directly to businesses like: Supermarkets, Quick Service, Restaurants, 
                      Hotels and Food Processors in One Click!
                      </p>
            
            <div className='mt-8'>
            <Link to="/WaitingListForm">
          <button type="button"
            className='bg-[#009933] mt-4 px-6 py-2 md:px-9 rounded-lg text-[0.8rem] md:text-[1rem] text-white'
          >
            Join Waitlist
          </button>
          </Link>
            <Link to="/farmers-profile">
          <button type="button"
            className='bg-[#009933] mt-4 px-6 py-2 md:px-9 rounded-lg text-[0.8rem] md:text-[1rem] text-white ml-6'
          >
            Create Profile
          </button>
          </Link>
        
    
            </div>
            </div>
        </section>  
        </>
    );
};

export default FarmersHeroSection;
