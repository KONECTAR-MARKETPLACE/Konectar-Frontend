import React from 'react';
import LindaJohnson from '../assets/images/Linda Gift/LindaJohnson.png';
import RobertSmith from '../assets/images/Linda Gift/RobertSmith.png';
import BosunThomas from '../assets/images/Linda Gift/BosunThomas.png';
import ReginaTina from '../assets/images/Linda Gift/ReginaTina.png';

const ReviewSection = () => {
    return (
        <>
           <section className='w-full bg-[#CECEDE] py-16 px-5'>
            
                <h1 className='text-center font-bold text-[1.3rem] md:text-[2rem]'>What Clients say about us</h1>

                <div className='text-white flex flex-col md:flex-row px-8 md:px-36 gap-6 mt-8'>

                    <div className='flex rounded-md py-0 md:py-8 basis-[50%] max-h-fit md:max-h-full'>
                        <div className='basis-[50%]'><img className='w-full h-full' src={LindaJohnson} alt="First customer" /></div>
                        <div className='bg-[#003311] basis-[50%] rounded-r-md p-3 text-[0.7rem] md:text-[0.8rem]'><p>"Before Konectar, I used to depend on middlemen who often delayed payments and offered unfair prices. Now, I connect directly with buyers, negotiate better deals, and receive my payments on time. It's given me the confidence to expand my farm!"
</p>
                            <p className='mt-3'>Musa Adebayo,</p>
                            <p className='text-[0.6rem]'>Bell Peppers Farmer, Ogun State.</p>
                            </div>

                    </div>


                    <div className='flex rounded-md py-0 md:py-8 basis-[50%] max-h-fit md:max-h-full'>
                        <div className='basis-[50%]'><img className='w-full h-full' src={RobertSmith} alt="Second customer" /></div>
                        <div className='bg-[#003311] basis-[50%] rounded-r-md p-3 text-[0.7rem] md:text-[0.8rem]'><p>"As a small-scale farmer, it was always hard to find reliable buyers. But with Konectar, I’ve been able to access wholesale buyers who value my fresh produce. The best part? I no longer worry about the quality checks or payment delays – Konectar takes care of that!"
</p>
                            <p className='mt-3'>Grace Ogunseyin,</p>
                            <p className='text-[0.6rem]'>Vegetable Farmer, Ekiti State.</p>
                            </div>

                    </div>


                </div>




                <div className='text-white flex flex-col md:flex-row px-8 md:px-36 gap-6 mt-6 md:mt-0'>

                    <div className='flex rounded-md py-0 md:py-8 basis-[50%] max-h-fit md:max-h-full'>
                        <div className='basis-[50%]'><img className='w-full h-full' src={BosunThomas} alt="First customer" /></div>
                        <div className='bg-[#003311] basis-[50%] rounded-r-md p-3 text-[0.7rem] md:text-[0.8rem]'><p>"Konectar has completely changed the way I do business. I don’t have to wait for market days or struggle with low prices anymore. I just post my produce, and buyers come directly to me. It’s made farming so much easier, and I can now plan my harvests knowing I have a ready market."</p>
                            <p className='mt-3'>Aliyu Muritador, </p>
                            <p className='text-[0.6rem]'>Tomato Farmer, Plateau State.</p>
                            </div>

                    </div>


                    <div className='flex rounded-md py-0 md:py-8 basis-[50%] max-h-fit md:max-h-full'>
                        <div className='basis-[50%]'><img className='w-full h-full' src={ReginaTina} alt="Second customer" /></div>
                        <div className='bg-[#003311] basis-[50%] rounded-r-md p-3 text-[0.7rem] md:text-[0.8rem]'><p>"I was skeptical at first, but Konectar has proven to be a game-changer. The platform helped me find buyers faster, and I get paid securely through their escrow system. Now, I have more time to focus on growing high-quality tomatoes instead of worrying about finding buyers."</p>
                            <p className='mt-3'>Fatima Abdulrafiu,</p>
                            <p className='text-[0.6rem]'>Tomato Farmer, Kaduna State.</p>
                            </div>

                    </div>


                </div>


            </section> 
        </>
    );
};

export default ReviewSection;
