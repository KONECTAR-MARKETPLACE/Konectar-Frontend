import SuccessImage from "../../assets/images/profileSuccessImage.png";
import { MdKeyboardBackspace } from "../../icon";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

function Success({onPrevious, onPreviewProfile}) {
  return (
    <div className="px-14 font-Manrope">
      
        <span className="flex items-center cursor-pointer justify-start my-2 gap-1 " onClick={onPrevious}>
          <MdKeyboardBackspace size={20} />
          <p className="text-sm font-semibold">Back</p>
        </span>
      

      <ul className="list-none text-sm w-full flex justify-center font-medium flex-col items-center gap-y-2 text-center mb-10">
        <li className="text-lg leading-4 text-primary font-bold">
          Congratulations!
        </li>
        <li className="">
          You can now
          <span className="text-primary mx-1 underline cursor-pointer">
            upload produce
          </span>
          for potential buyers
        </li>
        <li className="">
          <img src={SuccessImage} alt="Success Image" className="h-96 w-96" />
        </li>
        <li className="">
          Click
          <span className="text-primary underline mx-1 cursor-pointer" onClick={onPreviewProfile}>
            here
          </span>
          to preview your profile
        </li>
      </ul>
    </div>
  );
}

Success.propTypes = {
  onPrevious: PropTypes.func,
  onPreviewProfile: PropTypes.func,
};

export default Success;
