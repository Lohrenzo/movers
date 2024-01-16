import React, { useRef, useState } from 'react';

// Swiper React Components
import { Swiper, SwiperSlide } from 'swiper/react';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Required Swiper modules
import { 
  Navigation, 
  Autoplay 
} from 'swiper/modules';

// Images
import image1 from '../assets/pexels-tima-miroshnichenko-6169126.jpg';
import image2 from '../assets/pexels-norma-mortenson-4391470.jpg';
import image3 from '../assets/pexels-tima-miroshnichenko-6169052.jpg';

export default function SwiperBanner() {
  return (
    <>
      <Swiper 
        // navigation={true} 
        centeredSlides={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={"auto"}
        modules={[Navigation, Autoplay]} 
        className="h-[72vh] flex items-center justify-center"
      >

        <SwiperSlide 
          style={{
            backgroundImage: `linear-gradient(45deg, #0000009e, #0000009e), url(${image3})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
          }}
          className='flex items-center justify-center h-full w-full' 
          >
          {/* <img src={image3} className=' object-cover h-full w-full' alt="Movers Banner Image One" /> */}
          <p className='uppercase absolute lg:w-[20%] lg:left-16 lg:top-[35%] top-[60%] lg:text-left text-center lg:mx-0 mx-3 font-extrabold lg:text-[3.4rem] text-[2rem] text-[#ffffff]'>Cheaper than a skip.</p>
        </SwiperSlide>

        <SwiperSlide 
          style={{
            backgroundImage: `linear-gradient(45deg, #0000009e, #0000009e), url(${image2})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
          }}
          className='flex items-center justify-center h-full w-full' 
        >
          {/* <img src={image2} className=' object-cover h-full w-full' alt="Movers Banner Image Two" /> */}
          <p className='uppercase lg:absolute lg:top-[80%] top-[10%] font-extrabold lg:mx-0 mx-3 lg:text-[3rem] text-[1.8rem] lg:text-left text-center text-white'>No job is too big, or too small!!</p>
        </SwiperSlide>

        <SwiperSlide 
          style={{
            backgroundImage: `linear-gradient(45deg, #0000009e, #0000009e), url(${image1})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
          }}
          className='flex items-center justify-center h-full w-full' 
        >
          {/* <img src={image1} className=' object-cover h-full w-full' alt="Movers Banner Image Three" /> */}
          <p className='uppercase absolute lg:w-[25%] top-[30%] lg:right-8 lg:mx-0 mx-3 font-extrabold lg:text-[2.2rem] text-[1.8rem] text-white'>At clear cut, we cater to your needs with safety, care and love.</p>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
