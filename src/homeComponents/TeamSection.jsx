import { teamMembers } from "../constants";

const TeamSection = () => {
  return (
    <>
      <section className="text-center px-12 mt-10">
        <h1 className="text-[2rem] md:text-[2.8rem] font-bold text-[#0d2727]">Our Team: The Beacons</h1>
        <div className="md:w-[60%] m-auto">
          <p className="mt-5 text-[#003311] font-semibold">
            We are a passionate and diverse group of professionals, driven by innovation and a shared commitment to delivering exceptional results.
          </p>
        </div>
      </section>

      {/* Team members grid gap-12 md:gap-28 */}
      <section className="flex flex-col md:flex-row justify-center items-center px-16 gap-12 md:gap-32 mt-10 py-10">
        {teamMembers.map((member, index) => (
          <div key={index} className="basis-[20%] flex flex-col items-center justify-center">
            <div className="rounded-full flex justify-center items-center">
              <img
                className="size-full rounded-[50%]"
                // style={{
                //   height: member.imageHeight,
                //   width: member.imageWidth,
                // }}
                src={member.image}
                alt={`Team Member ${index + 1}`}
              loading="lazy"
              />
            </div>
            <div className="text-center">
              <p className="font-bold">{member.name}</p>
              <p className="text-[#0b0c0b] text-[0.8rem] mt-1">{member.role}</p>
              <p className="text-[0.8rem] mt-4 font-bold">{member.experience}</p>
              <p className="text-[0.8rem] mt-2 text-[#009933] font-semibold">{member.portfolio}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}

export default TeamSection