import React from "react";
import styles from "./ProductCard.module.css";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const ProductCard = ({ productImage, productName, productPrice, active }) => {
  return (
    <div className={styles.productWrapper}>
      <img src={productImage} alt="" />
      <div className={styles.productDesc}>
        <div className={styles.addToCart}>
          <HiOutlineShoppingBag />
        </div>
        <div className={active ? styles.productDets : styles.productDetsHidden}>
          <div className={styles.productHead}>{productName}</div>
          <div className={styles.priceTag}>{productPrice}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

