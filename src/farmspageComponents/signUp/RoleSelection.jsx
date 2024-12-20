import { useState } from "react";
import { useNavigate } from "react-router-dom";
import image1 from "../../assets/images/image1.jpeg";
import image2 from "../../assets/images/image2.jpeg";
import image3 from "../../assets/images/image3.jpeg";
// import konectarLogo from "../../assets/images/kon.png";
import fram1 from "../../assets/images/Fram1.png";
import fram2 from "../../assets/images/Fram2.png";
import fram3 from "../../assets/images/Fram3.png";


const RoleSelection = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState("");

  const roles = [
    {
      id: "farmer",
      title: "I am a farmer",
      description: "Looking for a platform to sell my fresh produces.",
      icon: <img src={fram1} alt="plant" className="h-8 w-8" />,
    },
    {
      id: "buyer",
      title: "I am a buyer",
      description: "Looking for a platform to buy fresh produces.",
      icon: <img src={fram2} alt="cart" className="h-8 w-8" />,
    },
    {
      id: "delivery",
      title: "I want to be a delivery partner",
      description: "Looking for a platform to partner with.",
      icon: <img src={fram3} alt="delivery" className="h-8 w-8" />,
    },
  ];

  return (
    <div className="flex flex-col md:flex-row text-left items-center gap-9 justify-center my-5">
      {/* Logo
      <div className="absolute top-8 left-16">
        <img src={konectarLogo} alt="Konectar logo" className="w-32 h-auto" />
      </div> */}

      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start px-6 md:px-16">
        <h1 className="text-2xl md:text-3xl font-bold text-green-950 mb-4">
          Get Started with Konectar
        </h1>
        <p className="mb-8 text-sm md:text-base">
          Kickstart your journey with Konectar today as a farmer, buyer, or
          delivery partner.
        </p>

        {/* Role Options */}
        <div className="space-y-4 mb-6 w-full">
          {roles.map((role) => (
            <div
              key={role.id}
              className={`flex items-center p-4 rounded-lg border cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md ${
                selectedRole === role.id
                  ? "border-green-500 bg-green-50"
                  : "border-gray-300 bg-white"
              }`}
              onClick={() => setSelectedRole(role.id)}
              aria-label={role.title}
            >
              <div
                className={`p-2 rounded-full mr-4 ${
                  selectedRole === role.id ? "text-green-600" : "text-gray-500"
                }`}
              >
                {role.icon}
              </div>
              <div>
                <h3
                  className={`font-semibold text-base md:text-lg ${
                    selectedRole === role.id
                      ? "text-green-600"
                      : "text-gray-800"
                  }`}
                >
                  {role.title}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm">
                  {role.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Continue Button */}
        <button
          className={`w-full py-2 md:py-3 rounded-lg transition-all ${
            selectedRole
              ? "bg-green-600 text-white hover:bg-green-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          onClick={() => selectedRole && navigate("/phone-number")}
          // disabled={!selectedRole}
        >
          Continue
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

export default RoleSelection;
