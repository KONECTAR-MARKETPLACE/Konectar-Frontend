import Button from "./Button";
import { BiImageAdd } from "../../icon";
import PropTypes from "prop-types";

function PersonalInformation({
  onNext,
  fName,
  lName,
  phoneNumber,
  setFName,
  setLName,
  setPhoneNumber,
  selectedImage,
  setSelectedImage,
}) {
  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result); // Use the file's base64 string
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
        <h2 className="pt-6 font-semibold pb-1">Personal Information</h2>
        <p className="text-sm font-normal pb-4">
          Tell us a bit about yourself so that your potential buyers can get to
          know you better
        </p>

        {/* Form */}
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex gap-3 mb-7">
            <input
              type="file"
              name="photo"
              id="photo"
              accept="image/*" // Accept only image files
              className="hidden"
              onChange={handleFileChange}
              required
            />
            <label
              htmlFor="photo"
              className="h-[5.5rem] w-[5.5rem] rounded-[50%] "
            >
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt="User's Photo"
                  className="object-cover w-full h-full rounded-[50%]"
                />
              ) : (
                <span className="cursor-pointer flex w-full h-full items-center rounded-[50%] justify-center bg-neutral40">
                  <BiImageAdd className="text-2xl " />
                </span>
              )}
            </label>

            <span className="mt-11">
              <p className="text-[0.9rem] leading-6">
                Upload a picture of yourself or take a photo
              </p>
              <p className=" text-[0.6rem] leading-3">
                Supported formats:JPG, PNG
              </p>
              <p className="text-[0.6rem]">Maximum size:25MB</p>
            </span>
          </div>

          <label
            htmlFor="fullName"
            className="block text-sm font-medium leading-6"
          >
            Full Name<span className="text-error70">*</span>
          </label>
          <span className="w-full flex flex-col md:flex-row justify-between gap-4 md:gap-3">
            <input
              type="text"
              id="fullName"
              className="border-[1px] rounded  border-black p-1 placeholder-bddark w-full text-black md:w-[50%] font-medium text-sm outline-none "
              placeholder="First Name"
              required
              value={fName}
              onChange={(e) => setFName(e.target.value)}
            />
            <input
              type="text"
              id="fullName"
              className="border-[1px] rounded md:w-[50%] border-black p-1  w-full font-medium text-sm outline-none  "
              required
              value={lName}
              onChange={(e) => setLName(e.target.value)}
              placeholder="Last Name"
            />
          </span>

          <label
            htmlFor="phone"
            className="inline-block mt-6 text-[0.875rem] leading-6 font-medium "
          >
            Verified Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            required
            id="phone"
            className="border-[1px] w-full md:w-[38.5rem] block rounded border-black p-1 text-black font-medium text-sm outline-none"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />

          <span className="flex justify-end my-10">
            <Button
              className="text-basewhite py-2 px-10 font-light bg-primary text-sm"
              onClick={onNext}
            >
              Save & Continue
            </Button>
          </span>
        </form>
      </div>
    </div>
  );
}

PersonalInformation.propTypes = {
  onNext: PropTypes.func,
  fName: PropTypes.string.isRequired,
  setFName: PropTypes.string.isRequired,
  lName: PropTypes.string.isRequired,
  setLName: PropTypes.string.isRequired,
  phoneNumber: PropTypes.number.isRequired,
  setPhoneNumber: PropTypes.number.isRequired,
  selectedImage: PropTypes.object,
  setSelectedImage: PropTypes.func,
};

export default PersonalInformation;
