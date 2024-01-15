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
import image1 from '../assets/pexels-cottonbro-studio-4554230.jpg';
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

        <SwiperSlide className='flex items-center justify-center h-full w-full' >
          <img src={image1} className=' object-cover h-full w-full' alt="Movers Banner Image One" />
        </SwiperSlide>
        
        <SwiperSlide className='flex items-center justify-center h-full w-full' >
          <img src={image2} className=' object-cover h-full w-full' alt="Movers Banner Image Two" />
        </SwiperSlide>
        
        <SwiperSlide className='flex items-center justify-center h-full w-full' >
          <img src={image3} className=' object-cover h-full w-full' alt="Movers Banner Image Three" />
        </SwiperSlide>

      </Swiper>
    </>
  );
}
