import {
  MdArrowOutward,
  MdOutlineVerifiedUser,
  TbTruckDelivery,
  FaFacebook,
  FaLinkedin,
  FaXTwitter,
} from "../../icon";
import Button from "./Button";
import Knife from "./images/8.png";
import CustomersReview from "./CustomersReview";
import { MdKeyboardBackspace } from "../../icon";
import PropTypes from "prop-types";
import { useState } from "react";

function ProfilePreview({ requiredProps, onPrevious }) {
  const [showMore, setShowMore] = useState(false);

  function handleShowMore() {
    setShowMore((show) => !show);
  }
  return (
    <div className="px-14">
      <span
        className="flex items-center cursor-pointer justify-start my-2 gap-1 "
        onClick={onPrevious}
      >
        <MdKeyboardBackspace size={20} />
        <p className="text-sm font-semibold">Back</p>
      </span>
      <span className="text-primary text-sm flex justify-end">
        {showMore ? (
          <span
            className="border-b flex gap-1 cursor-pointer border-b-primary"
            onClick={handleShowMore}
          >
            <p className="">View Less Profile</p>
            <MdArrowOutward size={20} className="" />
          </span>
        ) : (
          <span
            className="border-b flex gap-1 cursor-pointer border-b-primary"
            onClick={handleShowMore}
          >
            <p className="">View Full Profile</p>
            <MdArrowOutward size={20} className="" />
          </span>
        )}
      </span>

      {requiredProps.map((prop, index) => (
        <div key={index} className="">
          <ul className="list-none flex gap-4 items-end mb-7">
            <li className="relative">
              {/* <img src={prop.farmLogo} alt="Farm Logo" className="" /> */}
              <img src={Knife} alt="Farm Logo" className="w-36 h-36" />
              <span className="h-6 w-6 rounded-[50%] flex justify-center items-center absolute bottom-0 right-4 bg-primary ">
                <MdOutlineVerifiedUser className="text-white" size={14} />
              </span>
            </li>
            <li className="flex flex-col">
              <p className="text-primary font-semibold leading-6">
                {prop.farmName}
              </p>
              <p className="text-sm font-medium leading-3">
                {prop.farmLocation}{" "}
              </p>
              <p className="flex gap-3 items-end">
                <span className="text-xs font-medium">
                  No ratings nor reviews yet
                </span>
                <span className="border flex items-center border-primary rounded-2xl gap-1 p-2 ">
                  <p className="h-2 w-2 rounded-[50%] bg-primary "></p>
                  <p className="text-xs text-primary">Online</p>
                </span>
              </p>
            </li>
          </ul>

          <div className="text-sm mb-6">
            <p className="text-primary font-semibold ">
              Top Produce by {prop.farmName}
            </p>
            <p className="font-medium pt-1 pb-3">{prop.products}</p>
            <Button className="px-9 py-2 font-light bg-primary text-white">
              View full products list
            </Button>
          </div>

          {/* About Us */}
          <div className="text-sm mb-6">
            <p className="text-primary font-medium pb-1 ">About Us</p>
            <p className="pb-2">{prop.aboutUs}</p>
            <Button className="px-8 py-2 font-light bg-primary text-xs text-white">
              Contact Vendor
            </Button>
          </div>

          {!showMore ? (
            <span className="text-primary border border-primary w-[28rem] flex items-center gap-2 py-1 px-2 rounded-2xl text-xs mb-6">
              <TbTruckDelivery size={20} /> Delivery within Lagos takes
              2-3hours. Inter-state delivery takes 5-7hours.
            </span>
          ) : (
            ""
          )}

          {showMore && (
            <div className="">
              <div className="grid text-sm grid-cols-1 md:grid-cols-2 gap-y-3 ">
                <div className="">
                  <p className="text-sm pb-1 text-primary font-medium">
                    Contact Information
                  </p>
                  <span className="flex gap-12 items center">
                    <span className="">{prop.phone}</span>
                    <span className="">{prop.altPhone}</span>
                  </span>
                  <span className="flex gap-12 items center">
                    <span className="">{prop.email}</span>
                    <span className="">{prop.altEmail}</span>
                  </span>
                </div>

                <div className="">
                  <p className="text-sm pb-1 text-primary font-medium">
                    Farm Size
                  </p>
                  <span className="">{prop.farmSize}</span>
                </div>

                <div className="">
                  <p className="pb-1 text-primary font-medium">
                    Farming Method
                  </p>
                  <span className="">{prop.farmMethod}</span>
                </div>

                <div className="">
                  <p className="pb-1 text-primary font-medium">
                    Years of Farming Experience
                  </p>
                  <span className="">{prop.yearsOfExperience}</span>
                </div>

                <div className="">
                  <p className="pb-1 text-primary font-medium">
                    Business Hours
                  </p>
                  <span className="">{prop.businessHours}</span>
                </div>

                <div className="">
                  <p className="pb-1 text-primary font-medium">
                    Certifications
                  </p>
                  <ul className="list-none">
                    <li className="flex gap-2 items-center">
                      Certified by Government
                      <span className="text-primary flex gap-1 items-center border-b border-b-primary leading-3">
                        View proof of certification
                        <MdArrowOutward size={15} />
                      </span>
                    </li>
                    <li className="flex gap-2 items-center">
                      Land C of O
                      <span className="text-primary flex items-center gap-1 border-b border-b-primary leading-3">
                        View document <MdArrowOutward size={15} />
                      </span>
                    </li>
                    <li className="flex gap-2 items-center">
                      National ID
                      <span className="text-primary flex gap-1 items-center border-b border-b-primary leading-3">
                        View ID <MdArrowOutward size={15} />
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="text-sm">
                  <p className=" capitalize pb-1 text-primary font-medium">
                    preferred payment method
                  </p>
                  <span className=" uppercase">escrow</span>
                </div>
              </div>

              <h4 className="text-primary text-sm font-medium mt-6">
                Customers Review
              </h4>
              <CustomersReview />

              <div className="flex items-center text-primary gap-3 mb-8">
                <FaFacebook size={20} className="cursor-pointer" />
                <FaXTwitter size={20} className="cursor-pointer" />
                <FaLinkedin size={20} className="cursor-pointer" />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

ProfilePreview.propTypes = {
  requiredProps: PropTypes.object,
  onPrevious: PropTypes.func,
};

export default ProfilePreview;
