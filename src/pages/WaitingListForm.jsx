import { useState, useEffect } from "react";

function WaitingListForm() {
    const [iframeHeight, setIframeHeight] = useState("600px");

  useEffect(() => {
    const updateHeight = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 768 && screenWidth < 1024) {
        // Medium screens (md)
        setIframeHeight("1000px");
      } else if (screenWidth >= 1024) {
        // Large screens
        setIframeHeight("1005px");
      } else {
        // Small screens
        setIframeHeight("1100px");
      }
    };

    // Set height initially and on resize
    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div className="w-full">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfcxl_MSsRjGvald8k4GeowpH0BGC_mAlCdQCHyMlWU4v8Srw/viewform?embedded=true"
        width="100%"
        // height="5060"
        height={iframeHeight}
        frameBorder="0"
        // marginheight="0"
        // marginwidth="0"
        allowFullScreen
        title="Waitlist Form"
      >
        Loading…
      </iframe>
    </div>
  );
}


export default WaitingListForm;


// import React, { useState } from 'react';
// // import Trying from './trying';
// import { Link } from 'react-router-dom';
// import { FaWhatsapp } from "react-icons/fa";
// import { IoCheckmarkCircle } from "react-icons/io5";
// import Example from './trying2';
// import axios from 'axios'; // Import axios

// const WaitingListForm = () => {

//     const [showModal, setShowModal] = useState(false);
//     const [inputValues, setInputValues] = useState({});
//     const [message, setMessage] = useState('');
//     const [options, setOptions] = useState({ // Define options state here
//         typesofproduce: [],
//         supplyfrequency: null,
//         distributionchannels: null,
//         additionalofferings: [],
//         referralsource: [],
//     });
//     const [loading, setLoading] = useState(false);

//     // const [otherText, setOtherText] = useState('');

//     // const [error, setError] = useState('');
//     // const [isChecked, setIsChecked] = useState(false);

//     // const handleCheckBox = () => {
//     //     setIsChecked(!isChecked);
//     // };

//     const handleInputChange = (event) => {
//         const name = event.target.name;
//         const value = event.target.value;
//         const type = event.target.type;
//         const checked = event.target.checked;

//         const newValue = type === 'checkbox' ? checked : value;
//         // controling the values of all input fields by mapping and concatenating with the 3 dots
//         setInputValues(values => ({ ...values, [name]: newValue }));
//         // setOtherText(values => ({ ...values, [name]: newValue }));
//         console.log(newValue)

//         // if (!value.trim()) {
//         //     setError('This field is required!');

//         // }
//         // else {
//         //     setError('')
//         // }

//     }

//     // const exampleData = (options) => {
//     //     setInputValues(values => ({ ...values, options}));
//     //         console.log(options)
//     // }
//     const exampleData = (data) => {
//         setOptions((prevOptions) => ({ ...prevOptions, ...data })); // Update options state
//         console.log(data);
//     };

//     //https://konectar-backend-side-15.onrender.com/waitlist

//     // const userExist = async (username, emailcontact) => {
//     //     try {
//     //         const response = await axios.post('https://konectar-backend-side-18.onrender.com/waitlist', {

//     //             username,
//     //             emailcontact,
//     //         });
//     //         return response.data.exists; // Assuming your API returns { exists: true/false }
//     //     } catch (error) {
//     //         console.error('Error checking user existence:', error);
//     //         return false; // Handle error gracefully

//     //     }
//     // };
//     const resetForm = () => {
//         setInputValues({
//             username: '',
//             farmname: '',
//             farmsize: '',
//             farmlocation: '',
//             emailcontact: '',
//             phoneno: '',
//             other: '',
//             mainchallenges: '',
//             receiveupdates: false,

//         });
//         setOptions({
//             typesofproduce: [],
//             supplyfrequency: null,
//             distributionchannels: null,
//             additionalofferings: [],
//             referralsource: [],
//         });
//     };

//     const BouncingLoader = () => (
//         <div className="flex justify-center items-center h-16">
//             <div className="w-4 h-4 bg-[#269149] rounded-full animate-bounce mr-2"></div>
//             <div className="w-4 h-4 bg-[#269149] rounded-full animate-bounce mr-2 delay-200"></div>
//             <div className="w-4 h-4 bg-[#269149] rounded-full animate-bounce delay-400"></div>
//         </div>
//     );

//     const LoadingOverlay = () => (
//         <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
//             <BouncingLoader />
//         </div>
//     );

//     const submitFormData = async (data) => {
//         setLoading(true);
//         try {
//             const response = await axios.post('https://konectar-backend-side-19.onrender.com/waitlist', data, {
//                 headers: {
//                     'Content-Type': 'application/json'
//                 }
//             });

//             setMessage(response.data.message);
//             // Show modal on successful submission
//             setShowModal(true);

//             // Reset the form fields here
//             resetForm(); // Call a function to reset the form

//             // } catch (error) {
//             //     console.error('Error submitting form:', error);
//             //     setMessage('Failed to submit form!');
//         }

//         catch (error) {
//             // Check if there's a response and extract the message
//             if (error.response && error.response.data) {
//                 const errorMessage = error.response.data.error
//                 console.error(errorMessage);
//                 alert(errorMessage)
//                 setMessage('Failed to submit form!');
//             } else {
//                 setMessage('An unexpected error occurred!');
//             }
//         } finally {
//             setLoading(false); // Set loading to false after handling the response
//         }
//     };

//     //function to drop an alert messeage, as well as print input values into the console, if all fields have been filled
//     const handleSubmit = async (event) => {

//         event.preventDefault();

//         // Check if user or email exists
//         //   const userExists = await userExist(inputValues.username, inputValues.emailcontact);
//         //     if (userExists) {
//         //         setMessage('A user with this username or email already exists!');
//         //         return; // Prevent form submission if user exists
//         //     }
//         const fruits = options.typesofproduce.filter(option =>option.category==='fruit').map(option => option.value)
//         const vegetables = options.typesofproduce.filter(option =>option.category==='vegetable').map(option => option.value)
//         const fruityVegetables = options.typesofproduce.filter(option =>option.category==='fruity-vegetable').map(option => option.value)

//         const payload = {
//             username: inputValues.username,
//             farmname: inputValues.farmname,
//             farmsize: inputValues.farmsize,
//             farmlocation: inputValues.farmlocation,
//             contactinformation: {
//                 emailcontact: inputValues.emailcontact,
//                 phoneno: inputValues.phoneno,
//             },
//             typeofproduce: {fruits, vegetables, fruityVegetables}, // Use options state
//             supplyfrequency: options.supplyfrequency?.value || '',
//             customSupplyfrequency: inputValues.other,
//             distributionchannels: options.distributionchannels?.value || '',
//             additionalofferings: options.additionalofferings.map(option => option.value || ''),
//             referralsource: options.referralsource.map(option => option.value || ''),
//             mainchallenges: inputValues.mainchallenges,
//             receiveupdates: inputValues.receiveupdates || false, // Default value
//         };

//         console.log('Form submitted with input:', { payload });
//         await submitFormData(payload);

//         /*if (!error) {
//             setShowModal(true);
//             console.log('Form submitted with input:', { inputValues});

//         } */
//     }

//     return (
//         <>
//             {loading && <LoadingOverlay />} {/* Show overlay when loading */}

//             <section className='mt-10 mb-10 m-auto w-[90%] md:w-[50%] px-8 py-12 rounded-md border-solid border-[1px] border-[#afb8c299]'>

//                 <h1 className='font-bold text-center text-[1rem] md:text-[1.5rem]'>Register Your Farm with Konectar</h1>

//                 <form className='mt-10' onSubmit={handleSubmit}>
//                     {/*form input fields  */}
//                     <label className='font-bold' htmlFor='username'>
//                         Full Name  </label><br></br>

//                     {/* specifying input type as 'text' name as 'username' (used to track input valuesin 'value={inputValues.username}, placeholder to give info in the inputfield, and the handleInputChange to handle onChange events*/}
//                     {/* inserting 'required' in my form fields (example on line 57) helps validate the form by putting up the notification 'Please fill out this field' whenever a user fails to fill in all fields */}
//                     <input className='bg-[#dcd6ec99] mt-3 border-b-[#a7abad] hover:border-t-[#a7abad] hover:border-b-black focus:outline-none focus:border-t-white focus:border-b-black focus:bg-white cursor-pointer border-solid border-[1px]  rounded-md px-5 py-1 md:py-2 w-full'
//                         type="text"
//                         name='username'
//                         placeholder='Enter your full name'
//                         value={inputValues.username || ""}
//                         onChange={handleInputChange} required />
//                     <br></br><br></br>

//                     <label className='font-bold' htmlFor='farmname'>
//                         Farm Name  </label><br></br>

//                     <input className='bg-[#dcd6ec99] mt-3 border-b-[#a7abad] hover:border-t-[#a7abad] hover:border-b-black focus:outline-none focus:border-t-white focus:border-b-black focus:bg-white cursor-pointer border-solid border-[1px] rounded-md px-5 py-1 md:py-2 w-full'
//                         type="text"
//                         name='farmname'
//                         placeholder='Enter your farm name'
//                         value={inputValues.farmname || ""}
//                         onChange={handleInputChange} required />
//                     <br></br><br></br>

//                     <label className='font-bold' htmlFor='farmlocation'>
//                         Farm Location  </label><br></br>

//                     <input className='bg-[#dcd6ec99] mt-3 border-b-[#a7abad] hover:border-t-[#a7abad] hover:border-b-black focus:outline-none focus:border-t-white focus:border-b-black focus:bg-white cursor-pointer border-solid border-[1px] rounded-md px-5 py-1 md:py-2 w-full'
//                         type="text"
//                         name='farmlocation'
//                         placeholder='Where is your farm located (city, state, country)?'
//                         value={inputValues.farmlocation || ""}
//                         onChange={handleInputChange} required />
//                     <br></br><br></br>

//                     <label className='font-bold' htmlFor="contact">
//                         Contact Information  </label><br></br>

//                     <input className='bg-[#dcd6ec99] mt-3 border-b-[#a7abad] hover:border-t-[#a7abad] hover:border-b-black focus:outline-none focus:border-t-white focus:border-b-black focus:bg-white cursor-pointer border-solid border-[1px] rounded-md px-5 py-1 md:py-2 w-full'
//                         type="email"
//                         id='contact'
//                         name='emailcontact'
//                         placeholder='Enter email address'
//                         value={inputValues.emailcontact || ""}
//                         onChange={handleInputChange} required />
//                     <br></br>

//                     <input className='bg-[#dcd6ec99] mt-3 border-b-[#a7abad] hover:border-t-[#a7abad] hover:border-b-black focus:outline-none focus:border-t-white focus:border-b-black focus:bg-white cursor-pointer border-solid border-[1px] rounded-md px-5 py-1 md:py-2 w-full'
//                         type="tel"
//                         id='contact'
//                         name='phoneno'
//                         placeholder='Enter phone number'
//                         value={inputValues.phoneno || ""}
//                         onChange={handleInputChange} required />
//                     <br></br><br></br>

//                     <label className='font-bold' htmlFor='farmsize'>
//                         Farm Size  </label><br></br>

//                     <input className='bg-[#dcd6ec99] mt-3 border-b-[#a7abad] hover:border-t-[#a7abad] hover:border-b-black focus:outline-none focus:border-t-white focus:border-b-black focus:bg-white cursor-pointer border-solid border-[1px] rounded-md px-5 py-1 md:py-2 w-full'
//                         type="text"
//                         name='farmsize'
//                         placeholder='What is the approximate size of your farm (in, plots, acres or hectares e.g., 2-7 acres, less than 2 acres, more than 20 acres, etc.'
//                         value={inputValues.farmsize || ""}
//                         onChange={handleInputChange} required />
//                     <br></br><br></br>

//                     <Example
//                         handleChange={exampleData}
//                         handleOptionText={handleInputChange}
//                     />

//                     <label className='font-bold' htmlFor='mainchallenges'>
//                         Main Challenges  </label><br></br>
//                     <textarea className='h-[300px] bg-[#dcd6ec99] mt-3 border-b-[#a7abad] hover:border-t-[#a7abad] hover:border-b-black focus:bg-white cursor-pointer border-solid border-[1px] rounded-md px-5 py-1 md:py-2 w-full'
//                         name="mainchallenges"
//                         placeholder='Describe the challenges you face'
//                         value={inputValues.mainchallenges || ""}
//                         onChange={handleInputChange} required></textarea>
//                     <br></br><br></br>

//                     <label className='font-bold' htmlFor='checkbox1'>
//                         Update and Notifications  </label><br></br>

//                     <input className='bg-[#32be51] mt-3'
//                         type="checkbox"
//                         name='receiveupdates'
//                         id='receiveupdates'
//                         value={inputValues.isChecked}
//                         onChange={handleInputChange} required />

//                     <label className='ml-2 text-[0.8rem]' htmlFor='receiveupdates'>
//                         I agree to receive updates and notifications from Konectar  </label><br></br> <br />

//                     {/* {error && <p className='text-error70 ease-in font-bold'>{error}</p>} */}

//                         <button type="submit"
//                             className='bg-[#009933] px-6 py-2 md:px-7 md:py-2.5 rounded-lg text-[0.8rem] md:text-[1rem] w-full'
//                             disabled={loading}
//                         >
//                             {loading ? 'Submitting...' : 'Submit'} {/* Change button text */}
//                         </button>

//                 </form>

//                 {message && <p className='text-red-500'>{message}</p>}
//             </section>

//             {showModal && (
//                 <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out">
//                     <div className="bg-white p-8 w-[90%] md:w-[35%] rounded-md shadow-md text-center transition-all duration-300 ease-in-out scale-95">
//                         <div className='flex justify-center items-center'><div className='text-[#009933] '><IoCheckmarkCircle size={100} /></div></div>
//                         <h1 className="text-[1.4rem] font-bold mt-11">Thank you for joining the Konectar Waitlist</h1>

//                         <p className="mt-3">We've received your information and you're now on the list to be one of the first to
//                             experience our platform. Keep an eye on your inbox for updates, and we'll notify you as soon
//                             as we're ready to launch!
//                         </p>

//                         <div className='flex gap-4 mt-6 justify-center items-center font-bold'>

//                             <button type="button"
//                                 className='bg-[#009933] px-6 py-3 rounded-lg text-[0.8rem] md:text-[1rem] text-white flex gap-2 items-center'
//                             ><a className='flex items-center gap-2' href="https://chat.whatsapp.com/GaTyitdKOvgBCu7W2ANMWY">
//                                     Join Whatsapp <FaWhatsapp size={15} className='text-white' />
//                                 </a></button>

//                             <Link to="/"><button
//                                 type='button'
//                                 className='bg-white px-6 py-2 rounded-lg text-[0.8rem] md:text-[1rem] text-[#009933]'
//                             >
//                                 Back to Home
//                             </button>
//                             </Link>
//                         </div>
//                         {/* hover:-translate-y-1 hover:scale-110 hover:w-24 hover:rounded-xl duration-300" */}

//                     </div>

//                 </div>
//             )}
//         </>
//     );
// };

// export default WaitingListForm;

// {/* <div className='text-[0.7rem] md:text-[0.9rem] flex bg-[#dcd6ec99] p-4 rounded-md md:w-[70%] gap-8'>

//                         <div className='flex flex-col gap-4'>

//                             <div><input className='bg-[#32be51]'
//                                 type="checkbox"
//                                 name='checkbox1'
//                                 value={inputValues.checkbox1 || ""}
//                                 onChange={handleInputChange} required />

//                                 <label className='ml-2' htmlFor='checkbox1'>
//                                     Leafy Greens  </label><br></br></div>

//                             <div><input className='bg-[#32be51]'
//                                 type="checkbox"
//                                 name='checkbox2'
//                                 value={inputValues.checkbox2 || ""}
//                                 onChange={handleInputChange} required />

//                                 <label className='ml-2' htmlFor='checkbox2'>
//                                     Root Vegetables  </label><br></br></div>

//                             <div><input className='bg-[#32be51]'
//                                 type="checkbox"
//                                 name='checkbox3'
//                                 value={inputValues.checkbox3 || ""}
//                                 onChange={handleInputChange} required />

//                                 <label className='ml-2' htmlFor='checkbox3'>
//                                     Cruciferous Vegetables  </label><br></br></div>

//                         </div>

//                         <div className='flex flex-col gap-4'>

//                             <div><input className='bg-[#32be51]'
//                                 type="checkbox"
//                                 name='checkbox1'
//                                 value={inputValues.checkbox1 || ""}
//                                 onChange={handleInputChange} required />

//                                 <label className='ml-2' htmlFor='checkbox1'>
//                                     Starchy Vegetables  </label><br></br></div>

//                             <div><input className='bg-[#32be51]'
//                                 type="checkbox"
//                                 name='checkbox2'
//                                 value={inputValues.checkbox2 || ""}
//                                 onChange={handleInputChange} required />

//                                 <label className='ml-2' htmlFor='checkbox2'>
//                                     Fruiting Vegetables  </label><br></br></div>

//                             <div><input className='bg-[#32be51]'
//                                 type="checkbox"
//                                 name='checkbox3'
//                                 value={inputValues.checkbox3 || ""}
//                                 onChange={handleInputChange} required />

//                                 <label className='ml-2' htmlFor='checkbox3'>
//                                     Fruiting Vegetables  </label><br></br></div>

//                         </div>

//                     </div> */}
