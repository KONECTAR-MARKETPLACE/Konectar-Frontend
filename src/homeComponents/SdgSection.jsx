import { useState } from 'react';
import sdg2 from '../assets/images/sdg2.png';
import hover2 from '../assets/images/hover2.png'; 
import hover8 from '../assets/images/hover8.png';
import sdg9 from '../assets/images/sdg9.png';
import hover9 from '../assets/images/hover9.png';
import sdg12 from '../assets/images/sdg12.png';
import hover12 from '../assets/images/hover12.png';
import sdgpic8 from '../assets/images/sdgpic8.png';

const SdgSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const sdgImages = [
    { default: sdg2, hover: hover2, alt: 'SDG 2' },
    { default: sdgpic8, hover: hover8, alt: 'Placeholder' },
    { default: sdg9, hover: hover9, alt: 'SDG 9' },
    { default: sdg12, hover: hover12, alt: 'SDG 12' }
  ];

  return (
    <section className='bg-[#003333] py-20'>
      <h1 className='font-Manrope text-white text-[2rem] md:text-[2.8rem] font-bold mb-6 text-center'>Konectar's SDG Mission</h1>
      <hr />

      <div className='grid grid-cols-2 md:grid-cols-4 gap-5 justify-center items-center mt-10 px-10'>
        {sdgImages.map((image, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="transition-all duration-500 ease-in-out"
          >
            <img
              className='h-[100%] w-[100%]'
              src={hoveredIndex === index ? image.hover : image.default}
              alt={image.alt}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SdgSection;
