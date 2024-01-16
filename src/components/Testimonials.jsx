// Swiper React Components
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Required Swiper modules
import { 
  Autoplay 
} from 'swiper/modules';

// Images
import testimonialImg from '../assets/pexels-markus-winkler-18512803.jpg';
// import img1 from '../assets/pexels-tima-miroshnichenko-6169055.jpg';
import img2 from '../assets/pexels-tima-miroshnichenko-6169052.jpg';
import img3 from '../assets/pexels-cottonbro-studio-4554230.jpg';
import img4 from '../assets/pexels-norma-mortenson-4391470.jpg';


const Testimonials = () => {
  return (
    <Swiper 
        centeredSlides={true}
        autoplay={{
        delay: 4000,
        disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={1}
        modules={[Autoplay]}  
        className='py-[7rem] px-[2rem] lg:px-[8rem] flex items-center justify-center overflow-x-hidden'
        style={{
            backgroundImage: `linear-gradient(45deg, #000000d6, #000000d6), url(${testimonialImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
        }}
    >
        <SwiperSlide className='flex flex-col items-center justify-center text-center font-[Cambria] text-white h-full w-full'>
            <img src={img2} className='rounded-full shadow h-[6rem] w-[6rem] mb-2' alt="" />
            <h4 className='text-[1.4rem] font-bold'>John Doe</h4>
            <small>Customer</small>
            <p className='text-[0.9rem] w-[70%]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim voluptate libero quos. Est, accusamus? Maiores placeat, fugit iste, tenetur, qui odit fugiat eius minus necessitatibus reiciendis nam iusto neque nobis?</p>
        </SwiperSlide>

        <SwiperSlide className='flex flex-col items-center justify-center text-center font-[Cambria] text-white h-full w-full'>
            <img src={img3} className='rounded-full shadow h-[6rem] w-[6rem] mb-2' alt="" />
            <h4 className='text-[1.4rem] font-bold'>Jane Doe</h4>
            <small>Customer</small>
            <p className='text-[0.9rem] w-[70%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, natus praesentium. Eos eum molestias, nam nostrum autem provident repellendus facere sapiente beatae. Nihil tempora ea eos tempore provident deserunt totam?</p>
        </SwiperSlide>

        <SwiperSlide className='flex flex-col items-center justify-center text-center font-[Cambria] text-white h-full w-full'>
            <img src={img4} className='rounded-full shadow h-[6rem] w-[6rem] mb-2' alt="" />
            <h4 className='text-[1.4rem] font-bold'>James Doe</h4>
            <small>Customer</small>
            <p className='text-[0.9rem] w-[70%]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam mollitia corporis sequi error quo laudantium provident, sint doloremque nulla iure nostrum enim voluptates libero perspiciatis sapiente exercitationem. Sapiente, illum harum?</p>
        </SwiperSlide>
    </Swiper>
  )
}

export default Testimonials;