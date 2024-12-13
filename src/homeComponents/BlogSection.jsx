import { blogs } from "../constants";
import blogimage1 from '../assets/images/blogImage1.png';
import blogimage2 from '../assets/images/blogImage2.png';
import blogimage3 from '../assets/images/blogImage3.png';
import blogimage4 from '../assets/images/blogImage4.png';
import blogimage5 from '../assets/images/blogImage5.png';
import { ArrowRight } from "lucide-react";



const BlogSection = () => {
  return (
    <section className="bg-[#001F0A] font-Manrope justify-center items-center py-14 md:px-16 px-10">
      <h1 className='font-Manrope text-white text-[2rem] md:text-[2.8rem] font-bold mb-6 text-center'>Our Blog Post</h1>
      <div className='flex flex-col md:flex-row md:flex-wrap gap-5 justify-center items-center mt-10'>
        {blogs.map((blog, index) => (
          <div key={index} className='bg-[#ffffff] px-4 py-4 rounded-lg basis-[40%]'>
            <img className='w-[100%]' src={blog.image} alt={blog.title} loading="lazy" />
            <h1 className='font-bold text-[1.2rem] mt-5'>{blog.title}</h1>
            <p className='mt-3'>{blog.description}</p>
            <div className='flex justify-between mt-5'>
              <div className='flex flex-col'>
                <p className='text-[0.9rem]'>{blog.author}</p>
                <p className='text-neutral-400 text-[0.8rem]'>{blog.date}</p>
              </div>
              <div className='flex gap-3 items-center cursor-pointer'>
                <h1 className='font-bold'>Read More</h1>
                <div><ArrowRight size={20} /></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BlogSection;
