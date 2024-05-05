import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const students = [
    {name: "بسمة الحسيني", Image: "./students/basma.jpeg"},
    {name:   "حسناء السيد ", Image: "./students/hasnaa el sayed.jpeg"},
    {name: "دنيا خالد", Image: "./students/donia khaled.jpeg"},
    {name: "إسراء اسامة", Image:  "./students/esraa osama.jpeg"},
    {name: "إسراء عاطف", Image:"./students/esraa atef.jpeg"},
    {name: "رحمة جابر", Image:  "./students/rahman gaber.jpeg"},
    {name:  "حنين علي", Image: "./students/hanen ali.jpeg"},
    {name:  "نهال اكرم ", Image:  "./students/nehal karam.jpeg"},
    {name: "ساره مرسي", Image: "./students/sara morsy.jpeg"},
    {name:  "منة الله ثروت", Image: "./students/menna tharwat.jpeg"},
    {name: "ساره ثروت", Image: "./students/sara tharwat.jpeg"},  
  ];

export default function App() {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'3'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {students.map((student, index) => (
                <SwiperSlide key={index} className="my-5">
                    <div className="swiper-slide-content">
                        <img src={student.Image} alt={student.name} className="rounded-lg"/>
                        <h2 className="text-md md:text-lg text-center">{student.name}</h2>
                    </div>
                </SwiperSlide>
            ))}
        
      </Swiper>
    </>
  );
}
