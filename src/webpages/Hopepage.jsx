import React from 'react'

// Icons 
import { FaLaughWink } from "react-icons/fa";
import { GoChecklist } from "react-icons/go";
import { TfiPackage } from "react-icons/tfi";
import { PiVanLight } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

// Components
import SwiperBanner from '../components/SwiperBanner';
import WelcomeIcon from '../components/WelcomeIcon';
import ServicesComponent from '../components/ServicesComponent';
import Testimonials from '../components/Testimonials';

const Hopepage = () => {
  return (
    <main>
        <SwiperBanner />
        {/* <section 
            className='py-6 px-[2rem] lg:px-[8rem] hidden lg:flex justify-between items-center gap-x-8 text-[2.2rem] text-white font-bold'
            style={{background: 'linear-gradient(-60deg, #292E36, #1F232B)'}} 
        >

            <div>
                <p className='uppercase'>Cheaper than a skip</p>
                <p className='flex items-center gap-x-1'>No job is too big, or too small <FaLaughWink /></p>
                <p>At clear cut, we cater to your needs with safety, care and love.</p>
            </div>

            <button className='bg-white uppercase rounded py-3 px-6 text-[1rem] text-[#000000] font-semibold'>Book Now</button>

        </section> */}

        <section className='bg-white text-[#3B393C] py-[4rem] px-[2rem] lg:px-[8rem]'>
            <h2 className='text-[2rem] font-semibold mb-6'>Welcome to <span className='text-[#96C507]'>Clear Cut</span></h2>
            <p className='text-justify'>At clear cut, we offer quality and professional man and van services in and around LONDON</p>
            <div className="grid lg:grid-cols-4 grid-cols-1">
                <WelcomeIcon icon={GoChecklist} text="Book our service"/>
                <WelcomeIcon icon={TfiPackage} text="Pack your goods"/>
                <WelcomeIcon icon={TbTruckDelivery} text="Move your goods"/>
                <WelcomeIcon icon={AiOutlineSafetyCertificate} text="Safe delivery"/>
            </div>
        </section>

        <ServicesComponent />

        <Testimonials />
    </main>
  )
}

export default Hopepage;