import React from 'react';
import Content from './Readmore';



const FAQSection = () => {

   
    
    return (
        <>
           <section id='faq' className='w-[90%] md:w-[50%] bg-neutral20 rounded-md text-[#003311] mt-10 m-auto py-4 px-6'>

                <h1 className='font-bold text-[2rem] md:text-[2.8rem] text-center text-[#0d2727]'>We know you have questions.</h1>
                <p className='mt-3 text-center mb-12'>So we have answered some of them.</p>
            
                <Content/>
                             
               
                
            </section> 
        </>
    );
};

export default FAQSection;
