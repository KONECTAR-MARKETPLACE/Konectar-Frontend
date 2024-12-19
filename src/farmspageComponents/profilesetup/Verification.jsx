import { useRef, useState } from "react";
import Webcam from "react-webcam";
import { SlCamera } from "../../icon";
import { MdFlashOff, MdFlashOn, MdFlashAuto } from "../../icon";
import PropTypes from "prop-types";

function IdVerification({setCapturedImage}) {
  const [showCamera, setShowCamera] = useState(false);
  // const [capturedImage, setCapturedImage] = useState(null);
  const webcamRef = useRef(null);
  const [flashMode, setFlashMode] = useState("off"); // Flash state: 'on', 'off', or 'auto'

  // Toggle flash mode
  const toggleFlash = () => {
    setFlashMode((prevMode) =>
      prevMode === "off" ? "on" : prevMode === "on" ? "auto" : "off"
    );
  };

  // Function to capture photo
  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
    setShowCamera(false); // Close camera after capture
  };

  return (
    <div className="">
      <h2 className="pt-6 font-semibold leading-7">Identity Verification</h2>
      <label htmlFor="" className="font-medium text-xs">
        Click on the camera to get started and follow the instructions.
      </label>
      {/* Input Trigger */}
        <input
          type="text"
          name="idVerification"
          id="idVerification"
          className="cursor-pointer hidden "
          required
          readOnly
          onClick={() => setShowCamera(true)} // Open camera overlay
        />
        <label
          htmlFor="idVerification"
          className="cursor-pointer flex flex-col w-[30rem] gap-1 h-[14rem] items-center justify-center bg-bdlight rounded-xl mt-2 mb-5 "
        >
          <SlCamera size={35} className="" />
          <span
            className="text-xs leading-[0.5rem] font-medium border-b border-b-neutral60 "
            
          >
            Click to get started
          </span>
        </label>

      {/* Camera Overlay */}
      {showCamera && (
        <div className="camera fixed  top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-90 z-50 bg-gradient-to-b from-neutral60 via-neutral70 to-neutral90  ">
          {/* Camera Interface */}
          <div className="relative flex flex-col items-center justify-center w-full h-full">
            {/* Webcam */}
            <Webcam
              ref={webcamRef}
              screenshotFormat="image/jpg"
              videoConstraints={{ facingMode: "user" }} // Front camera
              className="w-[15rem] h-[15rem] absolute top-52 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
            />

            {/* Centered Face Alignment Box */}
            <div className="absolute top-52 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-64 border-[1.5px] border-white/40 rounded-md">
              {/* Border corners */}
              <div className="absolute -top-0.5 -left-0.5 w-7 h-7 border-t-[3px] border-l-[3px] border-white rounded-tl-md " />
              <div className="absolute -top-0.5 -right-0.5 w-7 h-7 border-t-[3px] border-r-[3px] border-white rounded-tr-md" />
              <div className="absolute -bottom-0.5 -left-0.5 w-7 h-7 border-b-[3px] border-l-[3px] border-white rounded-bl-md" />
              <div className="absolute -bottom-0.5 -right-0.5 w-7 h-7 border-b-[3px] border-r-[3px] border-white rounded-br-md " />
            </div>

            {/* Instructions */}
            <div className="absolute bottom-32 text-white text-center">
              <p className="text-sm font-light">
                Align your face in the middle
              </p>
              <p className="text-[0.8rem] font-thin text-neutral40 mt-1">
                Make sure your face is inside the box before you take a photo
              </p>
            </div>

            {/* Capture Button */}
            <div className="absolute bottom-10 flex items-center pl-10 gap-8 ">
              <button
                onClick={capture}
                className=" w-14 h-14  rounded-full border border-white/40 flex items-center justify-center shadow-md"
              >
                <div className="w-11 h-11 bg-white rounded-full" />
              </button>

              {/* Toggle Flash */}
              <button
                onClick={toggleFlash}
                className=" text-gray-300  hover:text-white"
              >
                {flashMode === "on" && <MdFlashOn className="text-2xl" />}
                {flashMode === "off" && <MdFlashOff className="text-2xl" />}
                {flashMode === "auto" && (
                  <MdFlashAuto className="text-2xl text-yellow-400" /> // Auto mode
                )}
              </button>
              {/* Flash Mode Indicator */}
              {/* <p className="mt-4 text-gray-300">
                Flash: {flashMode.charAt(0).toUpperCase() + flashMode.slice(1)}
              </p> */}
            </div>

            {/* Cancel Button */}
            <button
              onClick={() => setShowCamera(false)}
              className="absolute top-5 left-5 text-white text-[0.6rem] font-semibold h-5 w-5 border border-white rounded-[50%] flex items-center justify-center "
            >
              &#x2715;
            </button>
          </div>
        </div>
      )}

      {/* Display Captured Image */}
      {/* {capturedImage && (
        <div className="mt-6 text-center">
          {/* <h3 className="text-lg font-semibold mb-2">Captured Image</h3>
          <img
            src={capturedImage}
            alt="Captured"
            className="w-48 h-48 rounded-lg border border-gray-300"
          />  
        </div>
      )}*/}

      
    </div>
  );
}

IdVerification.propTypes = {
  setCapturedImage: PropTypes.shape
};

export default IdVerification;

{
  /* <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      {/* Input Trigger *
      <div className="p-4">
        <label className="block mb-2 text-gray-700 font-medium">
          Identity Verification (click the camera and follow instructions)
        </label>
        <input
          type="text"
          placeholder="Click here to start"
          className="w-full p-2 border rounded cursor-pointer"
          readOnly
          onClick={() => setShowCamera(true)} // Open camera overlay
        />
      </div>

      {/* Camera Overlay *
      {showCamera && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-90 z-50">
          {/* Camera Interface *}
          <div className="relative flex flex-col items-center justify-center w-full h-full">
            {/* Webcam *}
            <Webcam
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              videoConstraints={{ facingMode: "user" }} // Front camera
              className="w-full h-full object-cover"
            />

            {/* Centered Face Alignment Box *}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-80 border-4 border-white rounded-md">
              {/* Border corners *}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-white" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-white" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-white" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-white" />
            </div>

            {/* Instructions *}
            <div className="absolute bottom-32 text-white text-center">
              <p className="text-lg font-semibold">Align your face in the middle</p>
              <p className="text-sm text-gray-300 mt-2">
                Make sure your face is inside the box before you take a photo
              </p>
            </div>

            {/* Capture Button *}
            <button
              onClick={capture}
              className="absolute bottom-10 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md"
            >
              <div className="w-12 h-12 bg-gray-800 rounded-full" />
            </button>

            {/* Cancel Button *}
            <button
              onClick={() => setShowCamera(false)}
              className="absolute top-5 left-5 text-white text-2xl font-bold"
            >
              &#x2715;
            </button>
          </div>
        </div>
      )}

      {/* Display Captured Image *}
      {capturedImage && (
        <div className="mt-6 text-center">
          <h3 className="text-lg font-semibold mb-2">Captured Image</h3>
          <img
            src={capturedImage}
            alt="Captured"
            className="w-48 h-48 rounded-lg border border-gray-300"
          />
        </div>
      )}
    </div> */
}
