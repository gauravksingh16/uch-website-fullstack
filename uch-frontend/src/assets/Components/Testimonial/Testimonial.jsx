import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import styles from "./Testimonial.module.css";

import { Autoplay } from "swiper/modules";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

const Testimonial = ( {heading} ) => {
  return (
    <div className={styles.testimonialWrapper}>
      <div className={styles.radialBg}></div>
      <div className={styles.testimonialHead}>{heading}</div>
      <div className={styles.gradient}></div>
      <div className={styles.swiperContainer}>
        <div>
          <Swiper
            loop={true}
            slidesPerView= {1}
            spaceBetween={16}
            autoplay={{
              delay: 0,
              disableOnInteraction: true,
            }}
            speed={5000}
            modules={[Autoplay]}
            breakpoints={
              {
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }
            }
            className={styles.mySwiper}
          >
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
          </Swiper>
        </div>
        <div>
          <Swiper
            loop={true}
            slidesPerView={1}
            spaceBetween={16}
            autoplay={{
              delay: 0,
              disableOnInteraction: true,
              reverseDirection: true,
            }}
            speed={5000}
            breakpoints={
              {
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }
            }
            modules={[Autoplay]}
            className={styles.mySwiper}
          >
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
