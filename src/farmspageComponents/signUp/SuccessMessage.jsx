import React from "react";
import image1 from '../../assets/images/image1.jpeg'
import image2 from '../../assets/images/image2.jpeg'
import image3 from '../../assets/images/image3.jpeg'
import konectarLogo from '../../assets/images/kon.png'
import success from '../../assets/images/success.png'

const SuccessPage = () => {
  return (
      <div className="flex flex-col md:flex-row text-left items-center gap-9 justify-center my-5">
        
        {/* Left Section */}
        <div className="flex flex-col items-center justify-center w-screen align-middle md:w-3/6 p-8 text-center">
          {/* Success Icon */}
          <div className="flex items-center justify-center w-24 h-24 bg-green-500 rounded-full mb-4">
            <img
                src={success}
                alt="success-logo"
            />
          </div>
          {/* Text */}
          <h1 className="text-2xl font-bold mb-2">
            Welcome To Konectar!
          </h1>
          <p className=" mb-4">
            You have successfully signed up as a farmer to join Konectar.
            Proceed to{" "}
            <a
              href="#"
              className="text-green-500 font-medium hover:underline"
            >
              Create Profile &rarr;
            </a>
          </p>
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
  <div className="flex flex-col md:flex-col justify-center items-center w-full md:w-2/5 space-y-4 md:space-y-0">
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
};

export default SuccessPage;
