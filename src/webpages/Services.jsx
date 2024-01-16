// Images
import img1 from '../assets/pexels-tima-miroshnichenko-6169126.jpg';
import img2 from '../assets/pexels-cottonbro-studio-4554230.jpg';
import img3 from '../assets/pexels-norma-mortenson-4391470.jpg';
import img4 from '../assets/pexels-tima-miroshnichenko-6169052.jpg';
import domesticImg from '../assets/pexels-karolina-grabowska-4498114.jpg';
import siteImg from '../assets/traffic-signs-663360_1280.jpg';
import commercialImg from '../assets/pexels-sevenstorm-juhaszimrus-443383.jpg';
import maintenanceImg from '../assets/pexels-pixabay-209271.jpg';

// React Router Dom
import { Link } from 'react-router-dom';

// Component
import Pricing from '../components/Pricing';
import SingleWorkComponent from '../components/SingleWorkComponent';

const Services = () => {
  return (
    <main>
      <section
          className='h-[40vh] flex items-center justify-center text-gray-400'
          style={{
              backgroundImage: `linear-gradient(45deg, #0000009e, #0000009e), url(${img4})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'scroll',
          }}
      >
          <h2 className='font-bold text-[3rem] capitalize'>Services</h2>
      </section>

      <section className='bg-white font-[Cambria] py-[4rem] px-[2rem] lg:px-[8rem]'>
        <h2 className='text-[2rem] text-black font-bold mb-6 capitalize'>Services we offer</h2>
        <div className='grid lg:grid-cols-3 lg:gap-[6rem] gap-y-6 grid-cols-1'>
          <div className='grid grid-cols-1 rounded-md shadow-md'>
            <img src={domesticImg} alt="Service 1" className='object-cover rounded-t-md h-[14rem] w-full' />
            <div className='rounded-b-md py-4 px-8 text-gray-600 text-center text-[1rem]'>
              <h3 className='capitalize font-bold text-black text-[1.6rem]'>domestic</h3>
              <p>Garden and shed clearance, end of tenancy clearance, loft clearance.</p>
            </div>
          </div>

          <div className='grid grid-cols-1 rounded-md shadow-md'>
            <img src={siteImg} alt="Service 1" className='object-cover rounded-t-md h-[14rem] w-full' />
            <div className='rounded-b-md py-4 px-8 text-gray-600 text-center text-[1rem]'>
              <h3 className='capitalize font-bold text-black text-[1.6rem]'>site</h3>
              <p>Wait and load, light demolition, strip out, builders waste.</p>
            </div>
          </div>

          <div className='grid grid-cols-1 rounded-md shadow-md'>
            <img src={commercialImg} alt="Service 1" className='object-cover rounded-t-md h-[14rem] w-full' />
            <div className='rounded-b-md py-4 px-8 text-gray-600 text-center text-[1rem]'>
              <h3 className='capitalize font-bold text-black text-[1.6rem]'>commercial</h3>
              <p>Hotel clearance, show clearance, warehouse clearance, restaurant clearance, office clearance.</p>
            </div>
          </div>

          <div className='grid grid-cols-1 rounded-md shadow-md'>
            <img src={maintenanceImg} alt="Service 1" className='object-cover rounded-t-md h-[14rem] w-full' />
            <div className='rounded-b-md py-4 px-8 text-gray-600 text-center text-[1rem]'>
              <h3 className='capitalize font-bold text-black text-[1.6rem]'>maintenance</h3>
              <p>Garden Maintenance, property maintenance, block maintenance, office maintenance.</p>
            </div>
          </div>
        </div>
      </section>

      <Pricing />

      <section className='bg-white text-gray-600 font-[Kanit] pt-[4rem] pb-[2rem] px-[2rem] lg:px-[8rem] mb-0'>
        <p className='text-justify text-[1.2rem]'>
          We are proud to provide the services of a fully licensed and insured team, dedicated to meeting your needs. Our professional and reliable team is committed to delivering high-quality services with transparency. We prioritize politeness and respect, and our goal is to exceed your expectations.
        </p>
      </section>

      <section className='bg-white font-[Cambria] pt-[2rem] pb-[4rem] px-[2rem] lg:px-[8rem]'>
        <h2 className='text-[2rem] text-black font-bold mb-6 capitalize lg:text-left md:text-left sm:text-left text-center'>some of our works</h2>
        <div className='grid lg:grid-cols-3 lg:gap-[2rem] gap-6 grid-cols-1'>
          <SingleWorkComponent id="1" img={img1} paragraph="paragraph for our work one ..." />
          <SingleWorkComponent id="2" img={img2} paragraph="paragraph for our work two ..." />
          <SingleWorkComponent id="3" img={img4} paragraph="paragraph for our work three ..." />
          <SingleWorkComponent id="4" img={img3} paragraph="paragraph for our work four ..." />
          <SingleWorkComponent id="5" img={img2} paragraph="paragraph for our work five ..." />
          <SingleWorkComponent id="6" img={img1} paragraph="paragraph for our work six ..." />
        </div>
        <p className='text-center w-fit mx-auto p-3'>
          <Link to="/works" className='text-black hover:text-[#31313197] transition-all duration-200 capitalize text-[1.2rem]'>see all...</Link>
        </p>
      </section>
    </main>
  )
}

export default Services;