import React from 'react';
import Tcust1 from '../assets/images/Linda Gift/Tcust1.png';
import Tcust2 from '../assets/images/Linda Gift/Tcust2.png';
import { ImQuotesLeft } from "react-icons/im";


const TruckersReviewSection = () => {
    return (
        <>
            <section className='w-full p-16'>
                <h1 className='text-[2.3rem] text-center font-bold'>What Our Partners Are Saying</h1>


            <div className='flex flex-col md:flex-row mt-10 gap-6'>

                    <div className='bg-[#003333] text-white p-5 rounded-md'>

                        <div className=''><ImQuotesLeft size={30} /></div>

                        <p className='mt-5'>"Partnering with Konectar has transformed our business. The direct access to farmers and buyers has significantly increased our order volume, and the platform's ease of use makes our logistics management a breeze!"
</p>

                        <div className='flex gap-3 items-center mt-4'>

                            <div><img className='size-8' src={Tcust1} alt="First Customer" /></div>

                            <p className='text-[0.9rem]'>Amaka Nwosu, Cold-Chain Logistics Provider
</p>
                        </div>
                    </div>


                    <div className='bg-[#003333] text-white p-5 rounded-md'>

                        <div className=''><ImQuotesLeft size={30} /></div>

                        <p className='mt-5'>“The real-time tracking feature is a game changer. It allows us to provide timely updates to our clients, enhancing transparency and trust. Our efficiency has skyrocketed since we joined Konectar!"</p>

                        <div className='flex gap-3 items-center mt-4'>

                            <div><img className='size-8' src={Tcust2} alt="Second Customer" /></div>

                            <p className='text-[0.9rem]'>Tunde Adeyemi, Logistics Manager</p>
                        </div>
                    </div>


                    <div className='bg-[#003333] text-white p-5 rounded-md'>

                        <div className=''><ImQuotesLeft size={30} /></div>

                        <p className='mt-5'>"Konectar's commitment to quality aligns perfectly with our values. Working together, we ensure that fresh produce arrives in optimal condition, which keeps our clients happy and coming back for more!"</p>

                        <div className='flex gap-3 items-center mt-4'>

                            <div><img className='size-8' src={Tcust2} alt="Second Customer" /></div>

                            <p className='text-[0.9rem]'>Chinonso Eze, Owner of Eze Logistics</p>
                        </div>
                    </div>


            </div>





            <div className='flex flex-col md:flex-row mt-6 md:mt-10 gap-6'>

                    <div className='bg-[#003333] text-white p-5 rounded-md'>

                        <div className=''><ImQuotesLeft size={30} /></div>

                        <p className='mt-5'>"Since joining Konectar, we have expanded our client base beyond what we thought was possible. The networking opportunities and collaborative spirit among partners are truly inspiring!"</p>

                        <div className='flex gap-3 items-center mt-4'>

                            <div><img className='size-8' src={Tcust1} alt="First Customer" /></div>

                            <p className='text-[0.9rem]'>Fatima Shehu, Cold-Chain Operator</p>
                        </div>
                    </div>


                    <div className='bg-[#003333] text-white p-5 rounded-md'>

                        <div className=''><ImQuotesLeft size={30} /></div>

                        <p className='mt-5'>“What I love most about Konectar is the community. Being part of a network that prioritizes efficiency and quality in agriculture logistics is rewarding, and it has helped us build lasting relationships in the industry."</p>

                        <div className='flex gap-3 items-center mt-4'>

                            <div><img className='size-8' src={Tcust2} alt="Second Customer" /></div>

                            <p className='text-[0.9rem]'>Jide Ogundipe, Supply Chain Expert</p>
                        </div>
                    </div>


            </div>


            </section>
        </>
    );
};

export default TruckersReviewSection;
