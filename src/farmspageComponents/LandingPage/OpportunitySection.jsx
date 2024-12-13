import { PiPottedPlant } from "react-icons/pi";
import { VscDebugDisconnect } from "react-icons/vsc";
import { FiTruck } from "react-icons/fi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

const OpportunitySection = () => {
    return (
        <>
            <section className='w-full bg-white p-10'>

                <h1 className='text-center font-Manrope font-semibold text-[1.4rem] md:text-[2.3rem] leading-tight md:leading-snug'>Maximize Every Opportunity with Konectar</h1>

                <div className='flex flex-col md:flex-row gap-6 mt-10 px-5 md:px-16'>

                    <div className='container bg-[#55D480] rounded-lg p-4 pr-20'>
                        <div className='bg-[#003311] text-white rounded-md w-[46px] h-[42px] flex justify-center items-center'>
                            <PiPottedPlant size={35} />
                        </div>

                        <p className='font-bold text-[1rem] md:text-[1.3rem] mt-5'>Optimize Your Farm Profile</p>

                        <p className='mt-8 text-[1rem] md:text-[1.3rem]'>Create a detailed and professional profile showcasing your products, certifications and farming
                            practices to stand out to buyers.
                        </p>

                    </div>



                    <div className='container bg-[#55D480] rounded-lg p-4 pr-20'>
                        <div className='bg-[#003311] text-white rounded-md w-[46px] h-[42px] flex justify-center items-center'>
                            <VscDebugDisconnect size={35} />
                        </div>

                        <p className='font-bold text-[1rem] md:text-[1.3rem] mt-5'>Engage Atively with Buyers</p>

                        <p className='mt-8 text-[1rem] md:text-[1.3rem]'>Respond promptly to inquiries and negotiate deals efficiently to establish trust and long-term business
                            relationships
                        </p>

                    </div>

                </div>

                <div className='flex flex-col md:flex-row gap-6 mt-6 px-5 md:px-16'>

                    <div className='container bg-[#55D480] rounded-lg p-4 pr-20'>
                        <div className='bg-[#003311] text-white rounded-md w-[46px] h-[42px] flex justify-center items-center'>
                            <FiTruck size={35} />
                        </div>

                        <p className='font-bold text-[1rem] md:text-[1.3rem] mt-5'>Ensure Timely Deliveries</p>

                        <p className='mt-8 text-[1rem] md:text-[1.3rem]'>Work closely with logistics partners to ensure timely and reliable delivery which enhances buyer satisfaction
                            and encourages repeat business.

                        </p>

                    </div>



                    <div className='container bg-[#55D480] rounded-lg p-4 pr-20'>
                        <div className='bg-[#003311] text-white rounded-md w-[46px] h-[42px] flex justify-center items-center'>
                            <AiOutlineSafetyCertificate size={35} />
                        </div>

                        <p className='font-bold text-[1rem] md:text-[1.3rem] mt-5'>Leverage Market Insights</p>

                        <p className='mt-8 text-[1rem] md:text-[1.3rem]'>Use Konectar data and market trends to understand demand, adjust pricing and target high-demand products,
                            maximizing your sale potential.
                        </p>

                    </div>

                </div>

                <div className='flex justify-center items-center'>
                    <div className='container bg-[#55D480] rounded-lg p-4 pr-20 w-[90%] md:w-[46%] mt-6'>
                        <div className='bg-[#003311] text-white rounded-md w-[46px] h-[42px] flex justify-center items-center'>
                            <AiOutlineSafetyCertificate size={35} />
                        </div>

                        <p className='font-bold text-[1rem] md:text-[1.3rem] mt-5'>Maintain Consistent Quality</p>

                        <p className='mt-8 text-[1rem] md:text-[1.3rem]'>Consistently offer high quality produce to attract more buyers and build a strong reputation 
                            on the platform.
                        </p>

                    </div>
                </div>



            </section>
        </>
    );
};

export default OpportunitySection;
