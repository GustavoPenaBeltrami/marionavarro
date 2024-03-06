"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay } from "swiper/modules";
import Image from "next/image";

export const Swipper = () => {
  return (
    <>
      <div className=" overflow-hidden m-0 p-0 max-h-[475px]">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="swiper"
        >
          {[...Array(4)].map((_, i) => (
            <SwiperSlide key={i} className=" overflow-hidden">
              <div className="absolute h-full w-full bg-yellow-900 opacity-20"></div>
              <Image
                src={`/sl-${i + 1}.jpg`}
                width={1920}
                height={1080}
                alt={`imagen descriptiva de invernadores n ${i + 1}`}
                className=" overflow-hidden"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
