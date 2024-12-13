import React from 'react';
import {useState} from 'react';
import Logo from '../assets/images/KLogo.png';
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {

    const [email, setEmail] = useState('');

    // Handle input change
    const handleChange = (e) => {
        setEmail(e.target.value);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission
        console.log('Submitted email:', email); 
        alert('You have successfully subscribed to our newsletter!')
        setEmail(''); // Optionally clear the input after submission
    };

    return (

        <>
            <section className='w-full bg-[#CECEDE] flex flex-col justify-center items-center py-11 px-12 md:px-4'>


                <div className='flex justify-center'>
                    <img className='w-[40%] md:w-[18%]' src={Logo} alt="Logo" />
                </div>

                <h1 className='text-center mt-5 font-Manrope font-bold text-[1rem] md:text-[1.7rem] leading-tight md:leading-snug'>Subscribe to our newsletter to get first hand updates.</h1>

                <form onSubmit={handleSubmit} className='mt-5 flex flex-col md:flex-row justify-center items-center md:items-start gap-5'>
                    <input className='w-[200px] md:w-[400px] border-solid border-[#948e8e] border-[1px] rounded-lg py-1 md:py-1.5 px-5'
                        type='text'
                        placeholder='Enter Email'
                        name='email'
                        value={email} // Controlled input
                        onChange={handleChange} // Update state on change
                    />


                    <button type='submit' className='bg-[#003333] text-white px-6 py-2 md:px-8 md:py-2.5 rounded-lg text-[0.8rem] md:text-[1rem]'>
                        Subscribe
                    </button>

                </form>


            </section>

            <section className='w-full bg-white py-11 flex flex-col md:flex-row px-20 items-left justify-center md:items-center gap-3 md:gap-14'>

                <div className='basis-[30%]'>


                    <div>
                        <img className='w-[44%]' src={Logo} alt="Konectar Logo" />
                    </div>

                    <p className='mt-4'>Connecting Farms to Businesses: Nigeria's Leading Marketplace for Fresh Fruits and Vegetables</p>

                    <p className='font-bold mt-5'>Social Media</p>

                    <div className='cursor-pointer mt-5 flex gap-8'>
                        <div className='text-[#20348d] hover:text-[#b86e3d]'><a href="https://www.facebook.com/profile.php?id=61566026614806&mibextid=ZbWKwL"><FaFacebook size={20} /></a></div>
                        <div className='hover:text-[#b86e3d]'><a href="https://www.instagram.com/konectar_b2b?igsh=a2poM2JtejBxdnVt"><FaInstagram size={20} /></a></div>
                        <div className='text-[#20348d] hover:text-[#b86e3d]'><a href="https://www.linkedin.com/company/konectar.com/"><FaLinkedin size={20} /></a></div>
                    </div>



                </div>


                <div className='flex flex-col gap-1 md:gap-4 cursor-pointer basis-[10%]'>

                    <h1 className='font-bold'>Company</h1>

                    <Link to='/about'><p className='hover:text-[#009933]'>About</p></Link>
                    <Link to='ContactForm'><p className='hover:text-[#009933]'>Contact</p></Link>
                    <p className='hover:text-[#009933]'>Blog</p>


                </div>


                <div className='flex flex-col gap-1 md:gap-4 cursor-pointer basis-[10%]'>

                    <h1 className='font-bold'>Resources</h1>

                    <p className='hover:text-[#009933]'>Product</p>
                    <p className='hover:text-[#009933]'>Blog</p>
                    <ScrollLink to="faq"
           smooth={true}
           duration={500}
           offset={-60}><p className='hover:text-[#009933]'>FAQs</p></ScrollLink>


                </div>


                <div className='flex flex-col gap-1 md:gap-4 cursor-pointer basis-[15%]'>

                    <h1 className='font-bold'>Legal</h1>

                    <Link to='konectar-terms-of-use'><p className='hover:text-[#009933]'>Terms and Conditions</p></Link>
                    <Link to='konectar-privacy-policy'><p className='hover:text-[#009933]'>Privacy Policy</p></Link>
                    <p className='hover:text-[#009933]'>FAQs</p>


                </div>


                <div className='flex flex-col gap-1 md:gap-4 basis-[10%]'>

                    <h1 className='font-bold'>Contact</h1>

                    <p className=''>Address: ITF House, Plot 12, Funsho Williams Avenue, Iponri Surulere</p>
                    <p className=''>Phone: 09070645178</p>
                    <a className='hover:text-[#009933]' href="mailto:konectar.ag@gmail.com">konectar.ag@gmail.com</a>


                </div>


            </section>

            <section className='w-full bg-[#003311] py-3 text-center text-white px-3'>
                <p>Konectar Copyright, 2024. All rights reserved.</p>
            </section>
        </>
    );
};

export default Footer;
