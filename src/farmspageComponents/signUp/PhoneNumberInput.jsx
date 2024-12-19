// import konectarLogo from '../../assets/images/kon.png'
import image1 from "../../assets/images/image1.jpeg";
import image2 from "../../assets/images/image2.jpeg";
import image3 from "../../assets/images/image3.jpeg";
// import { Navigate, useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function PhoneNumberInput() {
  const navigate = useNavigate();

    return (
        <div className='flex flex-col md:flex-row text-left items-center gap-9 justify-center my-5'>
            

            {/* Left Section */}
      <div className="w-4/5 md:w-1/2 flex flex-col justify-center px-8 items-start pt-20 md:px-20">
        {/* Back Button */}
        <button className="text-gray-600 text-sm mb-4 flex items-center"
        onClick={() => navigate(-1)}
        >
          <span className="mr-2">&larr;</span> Back
        </button>

        {/* Sign Up Content */}
        <h1 className="text-3xl font-bold text-green-600 mb-4">Sign Up</h1>
        <p className="text-gray-700 mb-8">
          Sign up with your phone number in order to receive a verification code to get started.
        </p>

        {/* Input Field */}
        <input
          type="text"
          placeholder="Enter your phone number here"
          className="w-full border-2 rounded-md py-2 px-4 text-gray-600 focus:outline-none focus:ring-2 focus:ring-green-400 mb-6"
        />

        {/* Send Code Button */}
        <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700"
        onClick={() => navigate('/verification')}
        >
          Send Code
        </button>
      </div>

          {/* Right Section - Images */}
          <div className="flex flex-col md:flex-row justify-center items-center w-full md:w-3/6 p-4">
        {/* Farmer Image */}
        <img
          src={image1}
          alt="Farmer"
          className="rounded-lg object-cover w-full md:h-3/5 md:w-2/6 mb-4 md:mb-0"
        />
      
        {/* Fruits and Vegetables Images */}
        <div className="flex flex-col gap-3 md:flex-col justify-center items-center w-full md:w-2/5">
          <img
            src={image2}
            alt="Fruits"
            className="rounded-lg object-cover w-full md:h-4/6 md:w-4/5"
          />
          <img
            src={image3}
            alt="Vegetables"
            className="rounded-lg object-cover w-full md:h-2/6 md:w-4/5"
          />
        </div>
      </div>
        </div>
      );
      
}
