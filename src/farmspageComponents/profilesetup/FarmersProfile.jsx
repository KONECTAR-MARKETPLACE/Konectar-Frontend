// import Logo from "../../assets/images/KLogo.png";
import PersonalInformation from "./PersonalInformation";
import FarmInformation from "./FarmInformation";
import UploadDocuments from "./UploadDocuments";
import { useState } from "react";
import Success from "./Success";
import ProfilePreview from "./ProfilePreview";

function FarmersProfile() {
  // Personal Information
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // Farm Information
  const [farmLogo, setFarmLogo] = useState("");
  const [farmName, setFarmName] = useState("");
  const [farmLocation, setFarmLocation] = useState("");
  const [farmSize, setFarmSize] = useState("");
  const [farmMethod, setFarmMethod] = useState("");
  const [businessHours, setBusinessHours] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");
  const [phone, setPhone] = useState("");
  const [altPhone, setAltPhone] = useState("");
  const [email, setEmail] = useState("");
  const [altEmail, setAltEmail] = useState("");
  const [products, setProducts] = useState("");
  const [aboutUs, setAboutUs] = useState("");

  // Upload Documents
  const [CAC, setCAC] = useState("");
  const [farmOwnership, setFarmOwnership] = useState("");
  const [nationalID, setNationalID] = useState("");
  const [capturedImage, setCapturedImage] = useState(null);

  // State to manage current step
  const [currentStep, setCurrentStep] = useState(1);

  // Function to navigate to the next step
  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  // Function to navigate to the previous step
  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  // Navigate to ProfilePreview
  const handleToPreview = () => setCurrentStep(5);

  // sending the required props to the profile preview
  const requiredProps = [
    {
      firstName: fName,
      lastName: lName,
      phoneNumber: phoneNumber,
      farmLogo: farmLogo,
      farmName: farmName,
      farmLocation: farmLocation,
      farmSize: farmSize,
      farmMethod: farmMethod,
      businessHours: businessHours,
      yearsOfExperience: yearsOfExperience,
      phone: phone,
      altPhone: altPhone,
      email: email,
      altEmail: altEmail,
      products: products,
      aboutUs: aboutUs,
      CAC: CAC,
      nationalID: nationalID,
      farmOwnership: farmOwnership,
      capturedImage: capturedImage,
    },
  ];

  return (
    <section className="bg-basewhite font-Manrope ">
      <div className="">
        {currentStep >= 1 && currentStep <= 3 ? (
          <div className="">
            {/* <img src={Logo} alt="" className="w-24 h-7 ml-20" /> */}
            <p className="font-bold text-[1.2rem] leading-6 mt-8 mb-1 text-center text-primary ">
              Create Your Profile
            </p>

            <div className="flex pl-20 items-center gap-10 border-y-2 border-neutral30 py-3">
              <div
                className={`flex items-center justify-between gap-3 ${
                  currentStep >= 1 ? "text-primary" : "text-bddark"
                }`}
              >
                <span className="flex gap-2 items-center">
                  <p
                    className={`text-neutral10 bg-primary rounded-[50%] w-6 h-6 text-[0.85rem] flex justify-center items-center  ${
                      currentStep >= 1 ? "bg-primary" : "bg-bddark"
                    } `}
                  >
                    1
                  </p>

                  <p className="text-base font-medium">Personal Information</p>
                </span>
                <span className="font-bold text-2xl">&gt;</span>
              </div>

              <div
                className={`flex items-center justify-between gap-3 ${
                  currentStep >= 2 ? "text-primary" : "text-bddark"
                }`}
              >
                <span className="flex gap-2 items-center">
                  <p
                    className={`text-neutral10 rounded-[50%] w-6 h-6 text-[0.85rem] flex justify-center items-center  ${
                      currentStep >= 2 ? "bg-primary" : "bg-bddark"
                    } `}
                  >
                    2
                  </p>

                  <p className="text-base font-medium">Farm Information</p>
                </span>
                <span className="font-bold text-2xl">&gt;</span>
              </div>

              <div
                className={`flex items-center justify-between gap-3 ${
                  currentStep >= 3 ? "text-primary" : "text-bddark"
                }`}
              >
                <span className="flex gap-2 items-center">
                  <p
                    className={`text-neutral10  rounded-[50%] w-6 h-6 text-[0.85rem] flex justify-center items-center  ${
                      currentStep >= 3 ? "bg-primary" : "bg-bddark"
                    } `}
                  >
                    3
                  </p>

                  <p className="text-base font-medium">
                    Upload Documents & Verification
                  </p>
                </span>
                <span className="font-bold text-2xl">&gt;</span>
              </div>
            </div>
          </div>
        ) : ""}

        <div className=" p-2 rounded shadow">
          {currentStep === 1 && (
            <PersonalInformation
              onNext={handleNext}
              fName={fName}
              setFName={setFName}
              lName={lName}
              setLName={setLName}
              phoneNumber={phoneNumber}
              setPhoneNumber={setPhoneNumber}
            />
          )}

          {currentStep === 2 && (
            <FarmInformation
              onNext={handleNext}
              onPrevious={handlePrevious}
              farmLogo={farmLogo}
              setFarmLogo={setFarmLogo}
              farmName={farmName}
              setFarmName={setFarmName}
              farmLocation={farmLocation}
              setFarmLocation={setFarmLocation}
              farmSize={farmSize}
              setFarmSize={setFarmSize}
              farmMethod={farmMethod}
              setFarmMethod={setFarmMethod}
              businessHours={businessHours}
              setBusinessHours={setBusinessHours}
              yearsOfExperience={yearsOfExperience}
              setYearsOfExperience={setYearsOfExperience}
              phone={phone}
              setPhone={setPhone}
              altPhone={altPhone}
              setAltPhone={setAltPhone}
              email={email}
              setEmail={setEmail}
              altEmail={altEmail}
              setAltEmail={setAltEmail}
              products={products}
              setProducts={setProducts}
              aboutUs={aboutUs}
              setAboutUs={setAboutUs}
            />
          )}

          {currentStep === 3 && (
            <UploadDocuments
              onPrevious={handlePrevious}
              onNext={() => setCurrentStep(4)}
              CAC={CAC}
              setCAC={setCAC}
              farmOwnership={farmOwnership}
              nationalID={nationalID}
              setNationalID={setNationalID}
              setFarmOwnership={setFarmOwnership}
              setCapturedImage={setCapturedImage}
            />
          )}

          {currentStep === 4 && <Success onPreviewProfile={handleToPreview} onPrevious={handlePrevious} />}

          {currentStep === 5 && (
            <ProfilePreview requiredProps={requiredProps} onPrevious={handlePrevious}/>
          )}
        </div>
      </div>
    </section>
  );
}



export default FarmersProfile;

// const tabs = [
//   {
//     id: 1,
//     title: "Personal Information",
//   },
//   {
//     id: 2,
//     title: "Farm Information",
//   },
//   {
//     id: 3,
//     title: "Upload Documents & Verification",
//   },
// ];

// const tabs = [
//   {
//     id: 1,
//     title: "Personal Information",
//     content: <PersonalInformation/>,
//   },
//   {
//     id: 2,
//     title: "Farm Information",
//     content: <FarmInformation/>,
//   },
//   {
//     id: 3,
//     title: "Upload Documents & Verification",
//     content: <UploadDocuments/>,
//   },
// ];

{
  /* {tabs.map((tab) => (
            <div key={tab.id} className={`flex items-center justify-between gap-3 ${step >= 1 ? "text-primary" : ""}`} >
              <span className="flex gap-2 items-center">
                <p className="text-neutral10 bg-primary rounded-[50%] w-6 h-6 text-[0.85rem] flex justify-center items-center ">{tab.id}</p>
                
              <p className="text-primary text-base font-medium">{tab.title}</p>
              <span className="font-bold text-primary text-2xl">&gt;</span>
              </span>
            </div>
          ))} */
}
