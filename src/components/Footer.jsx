// Images
import logo from '../assets/clearcut-logo-nobg.png';

// Icons
import { IoLogoWhatsapp } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <section className='bg-[#000000] font-[Cambria] text-gray-400 px-[2rem] lg:px-[8rem] pt-[6rem]'>
        <div className='lg:flex flex-wrap grid grid-cols-1 gap-y-6 items-center justify-between lg:mb-2 mb-7'>
            <div className='lg:max-w-[35%] lg:text-left text-justify'>
                <img src={logo} alt="Logo" className='w-[200px] h-[140px] object-cover mb-2' />
                <p className=''>Our team is professional, always here for our customers and their needs. We are reliable, transparent, offer high quality service, polite, respectful and we will fulfil beyond your expectations.</p>
                {/* <p>Clear cut offers 24/7 high quality and professional man and van services in and around LONDON <br />Look no further, we've got you covered.</p> */}
            </div>

            <div>
                <h3 className='text-white capitalize text-[1.4rem] font-bold mb-1 lg:mb-4'>Contact Us</h3>
                <p className='cursor-pointer text-[1.2rem] w-fit'><Link className='text-gray-400 hover:text-gray-600 flex flex-row gap-2 items-center justify-start' to="tel:+442071013469"><IoCall /> 02071013469</Link></p>
                <p className='cursor-pointer text-[1.2rem] w-fit'><Link className='text-gray-400 hover:text-gray-600 flex flex-row gap-2 items-center justify-start' to="tel:+447963783469"><IoCall /> 07963783469</Link></p>
                <p className='cursor-pointer text-[1.2rem] w-fit'><Link className='text-gray-400 hover:text-gray-600 flex flex-row gap-2 items-center justify-start' to="https://wa.me/+447776979369"><IoLogoWhatsapp /> 07776979369</Link></p>
            </div>

            <div>
                <h3 className='text-white capitalize text-[1.4rem] font-bold mb-1 lg:mb-4'>useful links</h3>
                <p className='cursor-pointer text-[1.2rem] w-fit'><Link className='text-gray-400 hover:text-gray-600' to="/">Home</Link></p>
                <p className='cursor-pointer text-[1.2rem] w-fit'><Link className='text-gray-400 hover:text-gray-600' to="/about">About Us</Link></p>
                <p className='cursor-pointer text-[1.2rem] w-fit'><Link className='text-gray-400 hover:text-gray-600' to="/services">Services</Link></p>
            </div>
        </div>
        <hr />
        <p className='flex items-center justify-center pt-4 pb-8'>2024 © Clear Cut. All rights reserved.</p>
    </section>
  )
}

export default Footer;