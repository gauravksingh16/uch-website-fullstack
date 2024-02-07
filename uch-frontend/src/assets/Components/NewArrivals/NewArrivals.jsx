import React from "react";
import styles from "./NewArrivals.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import ProductCard from "../ProductCard/ProductCard";

const NewArrivals = () => {
  return (
    <div className={styles.newArrivalsWrapper}>
      <div className={styles.newArrivalHead}>Check out our Latest Arrivals</div>
      <div className={styles.newArrivalSwiper}>
        <Swiper slidesPerView={4} spaceBetween={16} className={styles.mySwiper}>
          <SwiperSlide className={styles.swiperSlide}>
            <ProductCard
              productImage="https://i.pinimg.com/564x/89/d9/34/89d9341d4290fa56cfbe670b75686389.jpg"
              productName="Abstract Printed Kurti"
              productPrice="Rs. 1500"
            />
          </SwiperSlide>
          <SwiperSlide><ProductCard
              productImage="https://i.pinimg.com/564x/89/d9/34/89d9341d4290fa56cfbe670b75686389.jpg"
              productName="Abstract Printed Kurti"
              productPrice="Rs. 1500"
            /></SwiperSlide>
          <SwiperSlide><ProductCard
              productImage="https://i.pinimg.com/564x/89/d9/34/89d9341d4290fa56cfbe670b75686389.jpg"
              productName="Abstract Printed Kurti"
              productPrice="Rs. 1500"
            /></SwiperSlide>
          <SwiperSlide><ProductCard
              productImage="https://i.pinimg.com/564x/89/d9/34/89d9341d4290fa56cfbe670b75686389.jpg"
              productName="Abstract Printed Kurti"
              productPrice="Rs. 1500"
            /></SwiperSlide>
          <SwiperSlide><ProductCard
              productImage="https://i.pinimg.com/564x/89/d9/34/89d9341d4290fa56cfbe670b75686389.jpg"
              productName="Abstract Printed Kurti"
              productPrice="Rs. 1500"
            /></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default NewArrivals;
