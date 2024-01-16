// Images
import img1 from '../assets/pexels-tima-miroshnichenko-6169126.jpg';
import img2 from '../assets/pexels-cottonbro-studio-4554230.jpg';
import img3 from '../assets/pexels-norma-mortenson-4391470.jpg';
import img4 from '../assets/pexels-tima-miroshnichenko-6169052.jpg';


// Icons 
import { TiTick } from "react-icons/ti";
import { FaLaughWink } from "react-icons/fa";
import { GoChecklist } from "react-icons/go";
import { TfiPackage } from "react-icons/tfi";
import { PiVanLight } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

// Components
import Testimonials from '../components/Testimonials';
import WelcomeIcon from '../components/WelcomeIcon';
import Faqs from '../components/Faqs';

// React Router Dom
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <main>
        <section
            className='h-[40vh] flex items-center justify-center text-gray-400'
            style={{
                backgroundImage: `linear-gradient(45deg, #0000009e, #0000009e), url(${img1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'scroll',
            }}
        >
            <h2 className='font-bold text-[3rem] capitalize'>About us</h2>
        </section>

        <section className='bg-white text-[#3B393C] py-[4rem] px-[2rem] lg:px-[8rem]'>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-y-9 mb-4'>
                <img src={img3} className='lg:block hidden h-[50vh] rounded-lg shadow object-cover' alt="" />
                <div className='grid grid-cols-1'>
                    <h2 className='text-[3rem] leading-none font-semibold mb-1'><span className='font-bold text-[4rem]'>Hi, </span>Welcome to <span className='text-[#96C507]'>Clear Cut</span></h2>
                    <p className='text-justify '>You may have come accross many moving companies, so why choose us? <br /> Let us tell you why...</p>
                    <div className='flex items-center justify-start'>
                        <TiTick className='text-[2rem]'/>
                        <p>Cheaper than a skip.</p>
                    </div>
                    <div className='flex items-center justify-start'>
                        <TiTick className='text-[2rem]'/>
                        <p>No job is too big, or too small.</p>
                    </div>
                    <div className='flex items-center justify-start'>
                        <TiTick className='text-[2rem]'/>
                        <p>We attend to all your moving and maintenance needs.</p>
                    </div>
                    <div className='flex items-center justify-start'>
                        <TiTick className='text-[2rem]'/>
                        <p>24 hours a day, 7 days a week.</p>
                    </div>
                    <div className='flex items-center justify-start mb-2'>
                        <TiTick className='text-[2rem]'/>
                        <p>Fully licensed and insured removal team.</p>
                    </div>
                    <div className='lg:mt-0 mt-5 lg:mx-0 mx-auto'>
                        <Link to="/services" className='bg-[#96C507] hover:bg-[#69c507] duration-200 transition-all uppercase rounded py-3 px-6 text-[1rem] text-[#ffffff] hover:text-[#ffffff] font-semibold'>view our services</Link>
                    </div>
                </div>
                <img src={img3} className='lg:hidden block h-[50vh] rounded-lg shadow object-cover' alt="" />
            </div>
            <br />
            <div className="grid lg:grid-cols-4 grid-cols-1">
                <WelcomeIcon icon={GoChecklist} text="Book our service"/>
                <WelcomeIcon icon={TfiPackage} text="Pack your goods"/>
                <WelcomeIcon icon={TbTruckDelivery} text="Move your goods"/>
                <WelcomeIcon icon={AiOutlineSafetyCertificate} text="Safe delivery"/>
            </div>
        </section>

        <Testimonials />

        <Faqs />

        <section></section>
    </main>
  )
}

export default About;