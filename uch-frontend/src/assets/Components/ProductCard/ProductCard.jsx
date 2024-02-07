import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard = ({ productImage, productName, productPrice }) => {
  return (
    <div className={styles.productWrapper}>
      <img src={productImage} alt="" />
      <div className={styles.productDesc}>
        <div className={styles.productHead}>{productName}</div>
        <div className={styles.priceTag}>{productPrice}</div>
      </div>
    </div>
  );
};

export default ProductCard;
