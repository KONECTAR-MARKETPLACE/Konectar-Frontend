// import { useState } from "react";
import Button from "./Button";
import { BiImageAdd } from "../../icon";
import PropTypes from "prop-types";

export default function FarmInformation({
  onNext,
  onPrevious,
  farmLogo,
  setFarmLogo,
  farmName,
  setFarmName,
  farmLocation,
  setFarmLocation,
  farmSize,
  setFarmSize,
  farmMethod,
  setFarmMethod,
  businessHours,
  setBusinessHours,
  yearsOfExperience,
  setYearsOfExperience,
  phone,
  setPhone,
  altPhone,
  setAltPhone,
  email,
  setEmail,
  altEmail,
  setAltEmail,
  products,
  setProducts,
  aboutUs,
  setAboutUs,
}) {

  // Handle file selection
  const handleFarmLogo = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setFarmLogo(reader.result); // Use the file's base64 string
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
        <h2 className="pt-6 font-semibold pb-1">Farm Information</h2>
        <p className="text-sm font-normal pb-4">
          Give us detailed information about your farm
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex gap-3 mb-7">
          <input
              type="file"
              name="logo"
              id="logo"
              alt="Farm Logo"
              accept="image/*"
              className="hidden"
              onChange={handleFarmLogo}
              required
            />
            <label
              htmlFor="logo"
              className="h-[5.5rem] w-[5.5rem] rounded-[50%] "
            >
              {farmLogo ? (
                <img
                  src={farmLogo}
                  alt="Farm Logo"
                  className="object-cover w-full h-full rounded-[50%]"
                />
              ) : (
                <span className="cursor-pointer flex w-full h-full items-center rounded-[50%] justify-center bg-neutral40">
                  <BiImageAdd className="text-2xl " />
                </span>
              )}
            </label>
            <span className="mt-11">
              <p className="text-[0.9rem] leading-6">Upload your farm logo</p>
              <p className=" text-[0.6rem] leading-3">
                Supported formats:JPG, PNG
              </p>
              <p className="text-[0.6rem]">Maximum size:25MB</p>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-7 ">
            <div>
              <label htmlFor="farmName" className="block font-medium leading-8">
                Farm Name<span className="text-error70">*</span>
              </label>
              <input
                type="text"
                id="farmName"
                className="w-full border rounded-md border-black p-2 placeholder-bddark text-black font-medium text-sm outline-none "
                placeholder="Farm Name"
                value={farmName}
                onChange={(e) => setFarmName(e.target.value)}
                required/>
            </div>
            <div>
              <label htmlFor="location" className="block font-medium leading-8">
                Farm Location<span className="text-error70">*</span>
              </label>
              <input
                type="text"
                id="location"
                placeholder="e.g Ikeja Lagos state, Nigeria"
                className="w-full border rounded-md border-black p-2 placeholder-bddark text-black font-medium text-sm outline-none "
                required
                value={farmLocation}
                onChange={(e) => setFarmLocation(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="farmSize" className="block font-medium leading-8">
                Farm Size<span className="text-error70">*</span>
              </label>
              <input
                type="text"
                id="farmSize"
                placeholder="e.g 10 hectares, 5 acres, 2 plots etc."
                className="w-full border rounded-md border-black p-2 placeholder-bddark text-black font-medium text-sm outline-none "
                required
                value={farmSize}
                onChange={(e) => setFarmSize(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="farmingMethod"
                className="block font-medium leading-8"
              >
                Farming Method<span className="text-error70">*</span>
              </label>
              <input
                type="text"
                id="farmingMethod"
                placeholder="e.g Open field farming, green-house farming etc."
                className="w-full border rounded-md border-black p-2 placeholder-bddark text-black font-medium text-sm outline-none "
                required
                value={farmMethod}
                onChange={(e) => setFarmMethod(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="businessHours"
                className="block font-medium leading-8"
              >
                Business Hours<span className="text-error70">*</span>
              </label>
              <input
                type="text"
                id="businessHours"
                placeholder="e.g 8am-5pm (Monday - Friday) etc."
                className="w-full border rounded-md border-black p-2 placeholder-bddark text-black font-medium text-sm outline-none "
                required
                value={businessHours}
                onChange={(e) => setBusinessHours(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="yearsOfExperience"
                className="block font-medium leading-8"
              >
                Years of Farming Experience
                <span className="text-error70">*</span>
              </label>
              <input
                type="text"
                id="yearsOfExperience"
                placeholder="e.g 5 years etc"
                className="w-full border rounded-md border-black p-2 placeholder-bddark text-black font-medium text-sm outline-none "
                required
                value={yearsOfExperience}
                onChange={(e) => setYearsOfExperience(e.target.value)}
              />
            </div>
          </div>

          {/* Contact Information */}
          <ContactInformation
            phone={phone}
            setPhone={setPhone}
            altPhone={altPhone}
            setAltPhone={setAltPhone}
            email={email}
            setEmail={setEmail}
            altEmail={altEmail}
            setAltEmail={setAltEmail}
          />

          {/* Social Media Links */}
          <SocialMediaLinks />

          {/* Products */}
          <div>
            <label htmlFor="produce" className="block font-medium leading-8">
              Types of Fruits and Vegetables Produced from your Farm
              <span className="text-error70">*</span>
            </label>
            <textarea
              placeholder="e.g Onions, Yellow habanero pepper, Red habanero pepper, Spinach etc."
              rows="3"
              id="produce"
              className="w-full border rounded-md border-black p-2 placeholder-bddark text-black font-medium text-sm outline-none "
              required
              value={products}
              onChange={(e) => setProducts(e.target.value)}
            ></textarea>
          </div>

          {/* About Us */}
          <div>
            <label className="block font-medium leading-8">
              About Us<span className="text-error70">*</span>
            </label>
            <textarea
              placeholder="Other details you would love your potential buyers to know about you farm"
              rows="4"
              className="w-full border rounded-md border-black p-2 placeholder-bddark text-black font-medium text-sm outline-none "
              required
              value={aboutUs}
              onChange={(e) => setAboutUs(e.target.value)}
            />
            <span className="block text-[0.7rem]">
              Minimum of 150 characters
            </span>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-4 pt-10 pb-20">
            <Button
              type="button"
              className="px-10 text-primary font-semibold py-2"
              onClick={onPrevious}
            >
              Previous
            </Button>
            <Button
              type="submit"
              className="px-10 py-2 bg-primary text-white"
              onClick={onNext}
            >
              Save & Continue
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

FarmInformation.propTypes = {
  onPrevious: PropTypes.func,
  onNext: PropTypes.func,
  farmLogo: PropTypes.string.isRequired,
  setFarmLogo: PropTypes.func.isRequired,
  farmName: PropTypes.string.isRequired,
  setFarmName: PropTypes.string.isRequired,
  farmLocation: PropTypes.string.isRequired,
  setFarmLocation: PropTypes.string.isRequired,
  farmSize: PropTypes.string.isRequired,
  setFarmSize: PropTypes.string.isRequired,
  farmMethod: PropTypes.string.isRequired,
  setFarmMethod: PropTypes.string.isRequired,
  businessHours: PropTypes.string.isRequired,
  setBusinessHours: PropTypes.string.isRequired,
  yearsOfExperience: PropTypes.string.isRequired,
  setYearsOfExperience: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  setPhone: PropTypes.func.isRequired,
  altPhone: PropTypes.string,
  setAltPhone: PropTypes.func,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.string.isRequired,
  altEmail: PropTypes.string,
  setAltEmail: PropTypes.string,
  products: PropTypes.string.isRequired,
  setProducts: PropTypes.string.isRequired,
  aboutUs: PropTypes.string.isRequired,
  setAboutUs: PropTypes.string.isRequired,
};

function ContactInformation({
  phone,
  setPhone,
  altPhone,
  setAltPhone,
  email,
  setEmail,
  altEmail,
  setAltEmail,
}) {
  return (
    <div className="pt-1">
      <label htmlFor="contact" className="block font-medium leading-8">
        Contact Information
        <span className="text-error70">*</span>
      </label>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-3">
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full border rounded-md border-black p-2 placeholder-bddark text-black font-medium text-sm outline-none"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="tel"
          placeholder="Alternative phone number (Optional)"
          className="w-full border rounded-md border-black p-2 placeholder-bddark text-black font-medium text-sm outline-none"
          value={altPhone}
          onChange={(e) => setAltPhone(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email Address"
          className="w-full border rounded-md border-black p-2 placeholder-bddark text-black font-medium text-sm outline-none"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Alternative email address (Optional)"
          className="w-full border rounded-md border-black p-2 placeholder-bddark text-black font-medium text-sm outline-none"
          value={altEmail}
          onChange={(e) => setAltEmail(e.target.value)}
        />
      </div>
    </div>
  );
}

ContactInformation.propTypes = {
  phone: PropTypes.number.isRequired,
  setPhone: PropTypes.number.isRequired,
  altPhone: PropTypes.number,
  setAltPhone: PropTypes.number,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.string.isRequired,
  altEmail: PropTypes.string,
  setAltEmail: PropTypes.string,
};

function SocialMediaLinks() {
  return (
    <div className="pt-2">
      <label htmlFor="link" className="block font-medium leading-8">
        Social Media Links<span className="text-error70">*</span>
      </label>

      <div className="flex items-center gap-3 mb-2">
        <select
          id="links"
          className="w-full md:w-48 text-sm border rounded-md border-black py-2 px-1 font-medium "
          required
        >
          {/* md:w-1/3 text */}
          <option value="Facebook">Facebook</option>
          <option value="Instagram">Instagram</option>
          <option value="Twitter">Twitter</option>
        </select>
        <input
          type="text"
          placeholder="Enter link"
          className="w-full border rounded-md border-black p-2 placeholder-bddark text-black font-medium text-sm outline-none"
        />
      </div>
      <Button className="border-primary border flex items-center  bg-primary font-light text-basewhite mt-4 text-sm py-[0.1rem] px-6 ">
        <span className="text-xl  pr-1">+</span> Add
      </Button>
    </div>
  );
}

// const [socialLinks, setSocialLinks] = useState([{ id: 1, platform: "Facebook" }]);

//   const addSocialLink = () => {
//     setSocialLinks([...socialLinks, { id: socialLinks.length + 1, platform: "" }]);
//   };

{
  /* {socialLinks.map((link) => (
              <div key={link.id} className="flex items-center gap-2 mb-2">
                <select className="w-full md:w-1/3 px-3 py-2 border rounded-md">
                  <option value="Facebook">Facebook</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Twitter">Twitter</option>
                </select>
                <input
                  type="text"
                  placeholder="Enter link"
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
            ))} */
}
