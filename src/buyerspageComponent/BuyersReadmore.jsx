import React, { useState } from 'react';
import { buydata } from '../homeComponents/data';

const BuyersReadMore = ({ buytrial }) => {


    // const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);

    }



    return (
        <div className='text-[#003311] bg-neutral20 rounded-md py-2 px-3 mb-7 font-semibold'>
            
            
            <div className='flex justify-between items-center'>
                <p>{buytrial.question}</p>
                <p className='cursor-pointer text-[2.3rem] font-bold' onClick={toggleReadMore}>{isReadMore ? "+" : " -"}</p>
            </div>
            

            <div className="mt-4">
                {isReadMore ? "" : <div>{buytrial.answer.map(item => <p key={item}>{item}</p> )}</div>}

            </div>
        </div>
    );
};


const BuyersContent = () => {
    
    const [isExpanded, setIsExpanded] = useState(false); // State for expanding/collapsing the first ReadMore

    
    const toggleViewMore = () => {
        setIsExpanded(!isExpanded);
        
    };
    
    return (
        <div>
            {buydata.slice(0, 5).map(item => (
                <BuyersReadMore key={item.question} buytrial={item}/>
                   
            ))}

            {isExpanded && (
                buydata.slice(5)).map(item => (
                    <BuyersReadMore key={item.question} buytrial={item}/>
                        
                ))
            }
            
                <div className='flex justify-end font-bold'><button onClick={toggleViewMore} className='text-[#003311] rounded-md bg-white p-3'>
                {isExpanded ? "View Less FAQs" : "View More FAQs"}
            </button></div>
        </div>
    );
};
 
export default BuyersContent;
