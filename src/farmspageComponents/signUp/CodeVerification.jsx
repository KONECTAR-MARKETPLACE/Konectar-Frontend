import React, { useState } from "react";
import konectarLogo from "../../assets/images/kon.png";
import image1 from "../../assets/images/image1.jpeg";
import image2 from "../../assets/images/image2.jpeg";
import image3 from "../../assets/images/image3.jpeg";
import { useNavigate } from "react-router-dom";

export default function CodeVerification() {
    const navigate = useNavigate();
    const [code, setCode] = useState(["", "", "", "", ""]);

    const handleChange = (value, index) => {
        const newCode = [...code];
        newCode[index] = value.slice(-1);
        setCode(newCode);

        if (value && index < 4) {
            document.getElementById(`code-input-${index + 1}`).focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && index > 0 && !code[index]) {
            document.getElementById(`code-input-${index - 1}`).focus();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Entered Code:", code.join(""));
    };

    return (
        <div className="flex flex-col md:flex-row text-left items-center gap-9 justify-center my-5">
            
            {/* Left section */}
            <div className=" flex flex-col justify-center px-16">
                <h1 className="text-2xl font-semibold text-green-800">Enter Code</h1>
                <p className="mt-2 ">
                    A code has been sent to your phone. Enter the code you received to complete sign-up.
                </p>
                <form onSubmit={handleSubmit} className="mt-6">
                    <div className="flex justify-around  gap-2">
                        {code.map((digit, index) => (
                            <input
                                key={index}
                                id={`code-input-${index}`}
                                type="text"
                                maxLength="1"
                                value={digit}
                                onChange={(e) => handleChange(e.target.value, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                className="h-14 w-14 rounded-md border border-black text-center text-xl outline-none focus:border-green-500"
                            />
                        ))}
                    </div>
                    <button
                        type="submit"
                        className={`mt-6 w-full rounded-md py-3 ${
                         "bg-green-600 hover:bg-green-700 text-white"
                        }`}
                        disabled={code.some((digit) => digit === "")}
                        onClick={() => navigate('/success')}
                    >
                        Sign Up
                    </button>
                </form>
                <p className="mt-4 text-sm ">
                    Didn't receive any code?{" "}
                    <a href="#" className="text-green-500 underline">
                        Send code again
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
}
