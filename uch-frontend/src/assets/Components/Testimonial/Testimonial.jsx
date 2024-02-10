import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import styles from "./Testimonial.module.css";

import { Autoplay } from "swiper/modules";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

const Testimonial = () => {
  return (
    <div className={styles.testimonialWrapper}>
      <div className={styles.radialBg}></div>
      <div className={styles.testimonialHead}>What Our Customers Say</div>
      <div className={styles.gradient}></div>
      <div className={styles.swiperContainer}>
        <div>
          <Swiper
            loop={true}
            slidesPerView={3}
            spaceBetween={16}
            autoplay={{
              delay: 0,
              disableOnInteraction: true,
            }}
            speed={5000}
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
        <div>
          <Swiper
            loop={true}
            slidesPerView={3}
            spaceBetween={16}
            autoplay={{
              delay: 0,
              disableOnInteraction: true,
              reverseDirection: true,
            }}
            speed={5000}
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
