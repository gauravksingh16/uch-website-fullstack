import React from "react";
import styles from "./NewArrivals.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import ProductCard from "../ProductCard/ProductCard";

const NewArrivals = () => {
  return (
    <div className={styles.newArrivalsWrapper}>
      <div className={styles.newArrivalHead}>Check out our Latest Arrivals</div>
      <div className={styles.newArrivalList}>
        <div className={styles.newArrivalsLeft}>
          <ProductCard
            productImage="https://images.unsplash.com/photo-1554412933-514a83d2f3c8?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            productName="Solid Black Overcoat"
            productPrice="Rs. 7999"
            active = "true"
          />
        </div>
        <div className={styles.newArrivalsRight}>
          <div className={styles.top}>
            <ProductCard
              productImage="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              productName="Abstract Printed Kurti"
              productPrice="Rs. 1500"
            />
            <ProductCard
              productImage="https://images.unsplash.com/photo-1485811904074-04513843270c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              productName="Abstract Printed Kurti"
              productPrice="Rs. 1500"
            />
          </div>
          <div className={styles.bottom}>
            <ProductCard
              productImage="https://images.unsplash.com/photo-1536294738309-2fc595e788fb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              productName="Abstract Printed Kurti"
              productPrice="Rs. 1500"
            />
            <ProductCard
              productImage="https://images.unsplash.com/photo-1492447273231-0f8fecec1e3a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              productName="Abstract Printed Kurti"
              productPrice="Rs. 1500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
