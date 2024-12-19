import { FaRegFileAlt } from "../../icon";
import IdVerification from "./Verification";
import Button from "./Button";
import PropTypes from "prop-types";
import { useState } from "react";

function UploadDocuments({
  onPrevious,
  onNext,
  setUploadedFiles,
  setCapturedImage,
}) {

  const[certificate, setCertificate] = useState(null)
  const[farmOwnership, setFarmOwnership] = useState(null)
  const[nationalID, setNationalID] = useState(null)


  const handleFileChange = (e, setFile) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFile(reader.result);
        setUploadedFiles((prev) => ({
          ...prev,
          [e.target.name]: reader.result, 
        }));
      };
      reader.readAsDataURL(file); // Read file as a Data URL
    }
  };



  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div>
      <div className="px-14">
        <h2 className="pt-6 font-semibold pb-1">Upload Documents</h2>
        <p className="text-sm font-normal pb-4">
          Upload the necessary documents to improve your potential buyers trust.
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-y-1 md:grid-cols-2">

            {/* CAC */}
            <div className="">
              <label htmlFor="" className="font-medium leading-[4rem]">
                Upload certificate of incorporation (C.A.C)
              </label>
              <input
                type="file"
                name="certificate"
                id="certificate"
                className=" hidden "
                required
                // value={CAC}
                onChange={(e)=>handleFileChange(e, setCertificate )}
              />

              
              <label
                htmlFor="certificate"
                className="w-[22rem] h-[12rem] "
              >
                {certificate ? (
                  <img
                  src={certificate}
                  alt="certificate"
                  className="object-cover w-[23rem] h-[12rem] rounded-2xl mb-4"
                />
                ) : (
                  <span className="cursor-pointer ml-3 outline-dashed outline-offset-8 outline-2 outline-neutral40 flex flex-col w-[22rem] gap-1 h-[12rem] items-center justify-center bg-bdlight rounded-xl mb-5 ">
                <FaRegFileAlt size={35} className="" />
                <span className="text-xs">
                  Drag and drop file here or
                  <span className="underline cursor-pointer ml-1">
                    choose file
                  </span>
                </span>
                </span>
                )

                }
              </label>
              <span className="flex justify-between w-[23rem] text-[0.6rem]">
                <span className="">Supported formats:PDF,DOC</span>
                <span className="">Maximum size: 25MB</span>
              </span>
            </div>

            {/* OWNERSHIP */}
            <div className="">
              <label htmlFor="" className="font-medium leading-[4rem]">
                Upload proof of farmland ownership
              </label>
              <input
                type="file"
                name="document"
                id="document"
                className="hidden "
                required
                // value={farmOwnership}
                onChange={(e)=>handleFileChange(e, setFarmOwnership)}
              />
              <label
                htmlFor="document"
                className=""
              >
                {farmOwnership ? (
                  <img
                  src={farmOwnership}
                  alt="document"
                  className="object-cover w-[23rem] h-[12rem] rounded-2xl mb-4"
                />
                ) : (
                  <span className="cursor-pointer ml-3 outline-dashed outline-offset-8 outline-2 outline-neutral40 flex flex-col w-[22rem] gap-1 h-[12rem] items-center justify-center bg-bdlight rounded-xl mb-5 ">
                <FaRegFileAlt size={35} className="" />
                <span className="text-xs">
                  Drag and drop file here or
                  <span className="underline cursor-pointer ml-1">
                    choose file
                  </span>
                </span>
                </span>
                )

                }
              </label>
              <span className="flex justify-between w-[23rem] text-[0.6rem]">
                <span className="">Supported formats:PDF,DOC</span>
                <span className="">Maximum size: 25MB</span>
              </span>
            </div>

            {/* IDENTIFICATION */}
            <div className="">
              <label htmlFor="" className="font-medium leading-[4rem]">
                Upload means of identification (e.g National ID)
              </label>
              <input
                type="file"
                name="id"
                id="id"
                className="hidden "
                required
                onChange={(e)=>handleFileChange(e, setNationalID)}
              />
              <label
                htmlFor="id"
                className=""
              >
                {nationalID ? (
                  <img
                  src={nationalID}
                  alt="certificate"
                  className="object-cover w-[23rem] h-[12rem] rounded-2xl mb-4"
                />
                ) : (
                  <span className="cursor-pointer ml-3 outline-dashed outline-offset-8 outline-2 outline-neutral40 flex flex-col w-[22rem] gap-1 h-[12rem] items-center justify-center bg-bdlight rounded-xl mb-5 ">
                <FaRegFileAlt size={35} className="" />
                <span className="text-xs">
                  Drag and drop file here or
                  <span className="underline cursor-pointer ml-1">
                    choose file
                  </span>
                </span>
                </span>
                )

                }
              </label>
              <span className="flex justify-between w-[23rem] text-[0.6rem]">
                <span className="">Supported formats:PDF,DOC</span>
                <span className="">Maximum size: 25MB</span>
              </span>
            </div>
          </div>

          {/* ID Verification */}
          <IdVerification setCapturedImage={setCapturedImage} />

          {/* {capturedImage && (
        <div className="mt-6 text-center">
           <h3 className="text-lg font-semibold mb-2">Captured Image</h3>
          <img
            src={capturedImage}
            alt="Captured"
            className="w-48 h-48 rounded-lg border border-gray-300"
          />  
        </div>
      )} */}

          <div className="flex justify-end gap-2 pb-16">
            <Button
              className="px-8 text-primary font-semibold py-1"
              onClick={onPrevious}
            >
              Previous
            </Button>

            
              <Button className="px-8 py-1 bg-primary text-white" onClick={onNext}>Done</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

UploadDocuments.propTypes = {
  CAC: PropTypes.object, // `node` allows any renderable content
  setCAC: PropTypes.object,
  farmOwnership: PropTypes.object,
  nationalID: PropTypes.object,
  setNationalID: PropTypes.object,
  setFarmOwnership: PropTypes.object,
  setCapturedImage: PropTypes.object,
  onPrevious: PropTypes.func,
  onNext: PropTypes.func,
  setUploadedFiles: PropTypes.func,
};

export default UploadDocuments;

// function IdVerification() {
//     return (
//         <div className="">
//             <h2 className="pt-6 font-semibold leading-7">Identity Verification</h2>
//             <label htmlFor="" className="font-medium text-xs">
//               Click on the camera to get started and follow the instructions.
//             </label>
//             <input
//               type="file"
//               name="idVerification"
//               id="idVerification"
//               className="cursor-pointer hidden "
//               required
//             />
//             <label
//               htmlFor="idVerification"
//               className="cursor-pointer flex flex-col w-[28rem] gap-1 h-[14rem] items-center justify-center bg-bdlight rounded-xl mt-2 mb-5 "
//             >
//               <SlCamera size={35} className="" />
//               <a href="" className="text-xs font-medium underline decoration-neutral60 ">
//                 Click to get started</a>

//             </label>
//           </div>
//     )
// }
