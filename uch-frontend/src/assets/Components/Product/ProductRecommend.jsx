import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductRecommend.module.css";

const ProductRecommend = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        Similar to what you are looking for
      </div>
      <div className={styles.recProduct}>
        <ProductCard
          productImage="https://images.unsplash.com/photo-1554412933-514a83d2f3c8?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          productName="Solid Black Overcoat"
          productPrice="Rs. 7999"
          active="false"
        />
        <ProductCard
          productImage="https://images.unsplash.com/photo-1554412933-514a83d2f3c8?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          productName="Solid Black Overcoat"
          productPrice="Rs. 7999"
          active="false"
        />
        <ProductCard
          productImage="https://images.unsplash.com/photo-1554412933-514a83d2f3c8?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          productName="Solid Black Overcoat"
          productPrice="Rs. 7999"
          active="false"
        />
        <ProductCard
        productImage="https://images.unsplash.com/photo-1554412933-514a83d2f3c8?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        productName="Solid Black Overcoat"
        productPrice="Rs. 7999"
        active="false"
      />
      </div>
    </div>
  );
};

export default ProductRecommend;
