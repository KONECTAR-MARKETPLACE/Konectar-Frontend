import Image1 from '../assets/images/missionImg.png'

const MissionSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center my-16 px-8 md:px-24">
      {/* Left side: Mission text */}
      <div className="md:w-1/2 text-left">
        <h1 className='font-Manrope font-semibold text-[2rem] md:text-[2.8rem] leading-tight md:leading-snug text-[#0d2727]'>Our Mission</h1>
        <p className="mt-4 text-[1rem] md:text-[1.2rem] text-[#003311]">

          "At Konectar, our mission is to increase the Profitability of Fruits and Vegetables Farmers by providing direct market access, ensuring fair trade, increasing smallholder farmers' resilience.”

        </p>
      </div>

      {/* Right side: Image */}
      <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6">
        <img
          src={Image1}
          alt="mission image"
          loading="lazy"
          className="w-full h-auto object-cover rounded-lg"
        />
      </div>
    </section>
  )
}

export default MissionSection
