import { useState } from 'react';
import { farmdata } from "./farmdata"
import PropTypes from "prop-types";


const FarmersReadMore = ({ farmtrial }) => {


   
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);

    }



    return (
        <div className='text-[#003311] bg-neutral20 rounded-md py-2 px-3 mb-7 font-semibold'>
            
            
            <div className='flex justify-between items-center'>
                <p>{farmtrial.question}</p>
                <p className='cursor-pointer text-[2.3rem] font-bold' onClick={toggleReadMore}>{isReadMore ? "+" : " -"}</p>
            </div>
            

            <div className="mt-4">
                {isReadMore ? "" : <div>{farmtrial.answer.map(item => <p key={item}>{item}</p> )}</div>}
               
            </div>
        </div>
    );
};

FarmersReadMore.propTypes = {
    farmtrial: PropTypes.func
}

const FarmersContent = () => {
    const [isExpanded, setIsExpanded] = useState(false); // State for expanding/collapsing the first ReadMore

    
    const toggleViewMore = () => {
        setIsExpanded(!isExpanded);
        
    };
    
    return (
        <div className='block'>
            {farmdata.slice(0, 5).map((item) => (
                <FarmersReadMore key={item.question} farmtrial={item}/>
                   
                
            ))}

            {isExpanded && (
                farmdata.slice(5)).map((item) => (
                    <FarmersReadMore key={item.question} farmtrial={item}/>
                      
                ))
            }
                <div className='flex justify-end font-bold'><button onClick={toggleViewMore} className='text-[#003311] rounded-md bg-white p-3'>
                {isExpanded ? "View Less FAQs" : "View More FAQs"}
            </button></div>
        </div>
    );
};
 
export default FarmersContent;
