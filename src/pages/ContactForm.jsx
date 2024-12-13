import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios


const ContactForm = () => {

  const [showModal, setShowModal] = useState(false);
  const [inputValues, setInputValues] = useState({});
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  // const [error, setError] = useState('');

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputValues(values => ({ ...values, [name]: value }));

    // if (!value.trim()) {
    //   setError('This field is required!');
    // }
    // else {
    //   setError('')
    // }
  }

  const resetForm = () => {
    setInputValues({
      firstname: '',
      lastname: '',
      email: '',
      phoneno: '',
      message: '',

    });
  }

  const BouncingLoader = () => (
    <div className="flex justify-center items-center h-16">
      <div className="w-4 h-4 bg-[#269149] rounded-full animate-bounce mr-2"></div>
      <div className="w-4 h-4 bg-[#269149] rounded-full animate-bounce mr-2 delay-200"></div>
      <div className="w-4 h-4 bg-[#269149] rounded-full animate-bounce delay-400"></div>
    </div>
  );

  const LoadingOverlay = () => (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <BouncingLoader />
    </div>
  );

  const submitFormData = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post('https://konectar-backend-side-19.onrender.com/contact', data, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      setMessage(response.data.message);
      // Show modal on successful submission
      setShowModal(true);

      // Reset the form fields here
      resetForm(); // Call a function to reset the form
  
    } 
    catch (error) {
      // Check if there's a response and extract the message
      if (error.response && error.response.data) {
        const errorMessage = error.response.data.error
        console.error(errorMessage);

        setMessage('Failed to submit form!');
      } else {
        setMessage('An unexpected error occurred!');
      }
    } finally {
      setIsLoading(false); // Set loading to false after handling the response
    }

    //   } catch (error) {
    //     console.error('Error submitting form:', error);
    //     setMessage('Failed to submit form!');
    //   }

  };
  const handleSubmit = async (event) => {

    event.preventDefault();

    const payload2 = {
      firstname: inputValues.firstname,
      lastname: inputValues.lastname,
      email: inputValues.email,
      phoneno: inputValues.phoneno,
      message: inputValues.message,

    };

    console.log('Form submitted with input:', { payload2 });
    await submitFormData(payload2);


  }


  return (
    <>
      {isLoading && <LoadingOverlay />} {/* Show overlay when loading */}
      <section className="bg-[linear-gradient(to_right_,rgba(6,8,15,0.1),rgba(6,8,15,0.1)),url('assets/images/Hero1.png')] h-screen bg-cover md:bg-top bg-center bg-no-repeat w-full p-4 md:p-20 flex justify-center itmes-center">

        <div className='m-auto md:w-[60%] px-8 py-7 rounded-xl bg-white container'>

          <h1 className='text-[1.5rem] md:text-[2rem] text-[#003311] font-bold'>How can we help?</h1>
          <p className='text-[#003311] font-semibold'>Reach out and we will get in touch in 24 hours.</p>
          <form className='mt-3 md:mt-1' onSubmit={handleSubmit}>

            <div className='flex gap-5'>

              <div className='flex flex-col basis-[70%] md:basis-[50%]'>
                <label className='font-bold ' htmlFor='firstname'>
                  First Name  </label>
                <input className='mt-3 text-[0.8rem] md:text-[1rem] border-[#a7abad] hover:border-t-[#a7abad] hover:border-b-black focus:outline-none focus:border-t-white focus:border-b-black focus:bg-white cursor-pointer border-solid border-[1px]  rounded-md px-5 py-2 w-full'
                  type="text"
                  name='firstname'
                  placeholder='First Name'
                  value={inputValues.firstname || ""}
                  onChange={handleInputChange} required />
              </div>


              <div className='flex flex-col basis-[70%] md:basis-[50%]'>
                <label className='font-bold' htmlFor='lastname'>
                  Last Name  </label>
                <input className='text-[0.8rem] md:text-[1rem] mt-3 border-[#a7abad] hover:border-t-[#a7abad] hover:border-b-black focus:outline-none focus:border-t-white focus:border-b-black focus:bg-white cursor-pointer border-solid border-[1px]  rounded-md px-5 py-2 w-full'
                  type="text"
                  name='lastname'
                  placeholder='Last Name'
                  value={inputValues.lastname || ""}
                  onChange={handleInputChange} required />
              </div>

            </div>


            <div className='flex gap-5 mt-6'>

              <div className='flex flex-col basis-[70%] md:basis-[50%]'>
                <label className='font-bold' htmlFor='email'>
                  Email Address  </label>
                <input className='text-[0.8rem] md:text-[1rem] mt-3 border-[#a7abad] hover:border-t-[#a7abad] hover:border-b-black focus:outline-none focus:border-t-white focus:border-b-black focus:bg-white cursor-pointer border-solid border-[1px]  rounded-md px-5 py-2 w-full'
                  type="email"
                  name='email'
                  placeholder='Enter your email address'
                  value={inputValues.email || ""}
                  onChange={handleInputChange} required />
              </div>


              <div className='flex flex-col basis-[70%] md:basis-[50%]'>
                <label className='font-bold' htmlFor='phoneno'>
                  Phone Number </label>
                <input className='text-[0.8rem] md:text-[1rem] mt-3 border-[#a7abad] hover:border-t-[#a7abad] hover:border-b-black focus:outline-none focus:border-t-white focus:border-b-black focus:bg-white cursor-pointer border-solid border-[1px]  rounded-md px-5 py-2 w-full'
                  type="tel"
                  name='phoneno'
                  placeholder='Enter your phone number'
                  value={inputValues.phoneno || ""}
                  onChange={handleInputChange} required />
              </div>

            </div>



            <label className='font-bold' htmlFor='message'>
              Send Us A Message  </label><br></br>
            <textarea className='text-[0.8rem] md:text-[1rem] h-[150px] md:h-[120px] bg-[#dcd6ec99] mt-3 border-b-[#a7abad] hover:border-t-[#a7abad] hover:border-b-black focus:bg-white cursor-pointer border-solid border-[1px] rounded-md px-5 py-1 md:py-2 w-full'
              name="message"
              placeholder='Send us a message'
              value={inputValues.message || ""}
              onChange={handleInputChange} required></textarea>
            <br></br><br></br>

            {/* {error && <p className='text-error70 ease-in font-bold'>{error}</p>} */}
            <button type="submit"
              className='bg-[#009933] px-6 py-2 md:px-7 md:py-2.5 rounded-lg text-[0.8rem] md:text-[1rem]'
              disabled={isLoading}
            >
              {isLoading ? 'Submitting...' : 'Submit'} {/* Change button text */}
            </button>

            {message && <p className='text-red-500'>{message}</p>}
          </form>



          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out">
              <div className="bg-white p-8 w-[90%] md:w-[35%] rounded-md shadow-md text-center transition-all duration-300 ease-in-out scale-95">

                <h1 className="text-[1.4rem] font-bold mt-11">Thank you for Contacting Us! We would reach out to you soon!</h1>


                <div className='flex gap-4 mt-6 justify-center items-center font-bold'>



                  <Link to="/"><button
                    type='button'
                    className='bg-[#009933] px-6 py-2 rounded-lg text-[0.9rem] md:text-[1rem] text-white'
                  >
                    Back to Home
                  </button>
                  </Link>
                </div>


              </div>

            </div>
          )}
        </div>

      </section>
    </>
  );
};

export default ContactForm;
