import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/clearcut-logo-nobg.png'

// Icons
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from 'react';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className='relative top-0 right-0 left-0 shadow-md h-[18vh] lg:px-[8rem] px-[2rem] text-[1.4rem] bg-white flex items-center justify-between z-40'>
        <div className='cursor-pointer lg:h-[100px] h-[60px]'>
          <Link to="/">
            <img src={logo} alt="" className=' object-cover h-full w-full' onClick={closeMenu}/>
          </Link>
        </div>
        {menuOpen ? 
          <IoClose className='lg:hidden inline-block text-[#000000] text-[3rem]' onClick={() => setMenuOpen(false)} /> :
          <IoMenu className='lg:hidden inline-block text-[#000000] text-[3rem]' onClick={() => setMenuOpen(true)} />
        }
        <ul className={`capitalize px-3 lg:flex hidden gap-x-[2rem] justify-center items-center relative`}>
            <NavLink to="/" className="cursor-pointer duration-300 transition-all text-black hover:text-black hover:scale-110" onClick={closeMenu} activeclass='active'>home</NavLink>
            <NavLink to="/about" className='cursor-pointer duration-300 transition-all text-black hover:text-black hover:scale-110' onClick={closeMenu} activeclass='active'>about us</NavLink>
            <NavLink to="/services" className='cursor-pointer duration-300 transition-all text-black hover:text-black hover:scale-110' onClick={closeMenu} activeclass='active'>services</NavLink>
            <NavLink to="/contact" className='cursor-pointer duration-300 transition-all ease-in-out text-black hover:text-black hover:scale-110' onClick={closeMenu} activeclass='active'>contact us</NavLink>
        </ul>

        <ul className={`capitalize px-3 py-4 lg:hidden grid grid-cols-1 gap-x-[2rem] justify-center items-center absolute bg-white top-[18vh] w-[100%] z-10`} style={{ left: menuOpen ? "0" : "-500vw", transition: "left 0.3s ease-in-out" }}>
          <NavLink to="/" className="cursor-pointer duration-300 transition-all text-black hover:text-black hover:scale-110" onClick={closeMenu} >home</NavLink>
          <NavLink to="/about" className='cursor-pointer duration-300 transition-all text-black hover:text-black hover:scale-110' onClick={closeMenu} >about us</NavLink>
          <NavLink to="/services" className='cursor-pointer duration-300 transition-all text-black hover:text-black hover:scale-110' onClick={closeMenu} >services</NavLink>
          <NavLink to="/contact" className='cursor-pointer duration-300 transition-all ease-in-out text-black hover:text-black hover:scale-110' onClick={closeMenu} >contact us</NavLink>
        </ul>
    </nav>
  )
}

export default NavBar;