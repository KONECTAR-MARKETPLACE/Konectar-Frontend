import Logo from '../assets/images/KLogo.png'
// import { navItems } from "../constants";
import { Menu, X} from "lucide-react";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";


const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleNavbar = () => {
    setMobileMenu(!mobileMenu);
  };

  const toggleSubNav = () => {
    setIsHovered(!isHovered);
  };

  return (
    <nav className='sticky top-0 z-50 py-3 bg-neutral20 border-b border-neutral70/'>
    <div className='container mx-auto px-8 md:px-16'>
    <div className='flex justify-between items-center'>
    
     {/* logo */}
    <div className='basis-[40%] lg:basis-[20%]'>
    <img className='size-full' src={Logo}  alt="Logo" loading="lazy"/>
    </div>
    {/* { label: "Home", href: "/" },
  { label: "About", href: "about" },
  { label: "Our Services", href: "" },
  { label: "Blog", href: "blog" }, */}
    <ul className='hidden lg:flex space-x-12'>
    
      <li><Link to='/' onMouseEnter={() => import("../pages/home")}>Home</Link></li>
      <li><Link to='/about' onMouseEnter={() => import("../pages/about")}>About</Link></li>
      <li className={`drop ${isHovered ? 'active' : ''}`}  onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}><Link>Our Services<span className={`font-extrabold arrow ${isHovered ? 'rotate' : ''}`}><IoIosArrowDown /></span></Link>
        <ul onClick={toggleSubNav}  className='dropdown absolute bg-gray-100 min-w-[160px] shadow-lg z-20 hidden'>
          
          <li className='p-4 hover:bg-[#009933] block mt-5'><Link to='/FarmersPage' onMouseEnter={() => import("../pages/FarmersPage")}>Konectar for Farmers</Link></li>
          <li className='p-4 hover:bg-[#009933] block'><Link to='/BuyersPage' onMouseEnter={() => import("../pages/BuyersPage")}>Konectar for Buyers</Link></li>
          <li className='p-4 hover:bg-[#009933] block'><Link to='/TruckersPage' onMouseEnter={() => import("../pages/TruckersPage")}>Konectar for Truckers</Link></li>
        </ul>
      </li>
      <li><Link to='/blog'>Blog</Link></li>
      {/* <li><Link to='/checking'>checking</Link></li> */}
    
    </ul>

    <div className='hidden lg:flex justify-center items-center space-x-12'>
    
    <Link to="/WaitingListForm" onMouseEnter={() => import("../pages/WaitingListForm")}><button type="button"
       className='bg-[#009933] px-7 rounded-lg py-2 text-white text-[0.8rem] md:text-[1rem]'>Join Waitlist</button></Link>
    </div>

    <div className='lg:hidden md:flex flex-col justify-end'>
    <button onClick={toggleNavbar}>
    {mobileMenu ? <X /> : <Menu />}
    </button>
    </div>

    </div>
    </div>
    <div>

    {mobileMenu && (
      <div className='lg:hidden w-full py-12 bg-white ease-in-out duration-500 flex flex-col border-solid border-[1px] border-[#4665] justify-center items-center fixed top-15 z-50'>
      <ul className=''>
      
        <li  onClick={toggleNavbar} className='py-4'><Link to='/' onMouseEnter={() => import("../pages/home")}>Home</Link></li>
        <li  onClick={toggleNavbar} className='py-4'><Link to='/about' onMouseEnter={() => import("../pages/about")}>About</Link></li>
        <li className={`py-4 drop ${isHovered ? 'active' : ''}`}  onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}><Link to='/'>Our Services<span className={`font-extrabold arrow ${isHovered ? 'rotate' : ''}`}><IoIosArrowDown /></span></Link>
        <ul  onClick={toggleNavbar} className='dropdown hidden '>
        <li className='py-4 block mt-4'><Link to='/FarmersPage' onMouseEnter={() => import("../pages/FarmersPage")}>Konectar for Farmers</Link></li>
        <li className='py-4 block'><Link to='/BuyersPage' onMouseEnter={() => import("../pages/BuyersPage")}>Konectar for Buyers</Link></li>
        <li className='py-4  block'><Link to='/TruckersPage' onMouseEnter={() => import("../pages/TruckersPage")}>Konectar for Truckers</Link></li>
        </ul>
        </li>
        <li  onClick={toggleNavbar} className='py-4'><Link to='/blog'>Blog</Link></li>
      </ul>
      <Link to="/WaitingListForm"  onClick={toggleNavbar} onMouseEnter={() => import("../pages/WaitingListForm")}><button type="button"
       className='bg-[#009933] px-7 rounded-lg py-2 text-white text-[0.8rem] md:text-[1rem]'>Join Waitlist</button></Link>
     
      
      </div>
    )}

    </div>
    </nav>
  )
}

export default Navbar