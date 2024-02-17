import React from "react";
import styles from "./CartItem.module.css";
import { AiOutlineDelete } from "react-icons/ai";

const CartItem = () => {
  return (
    <div className={styles.itemContainer}>
      <div className={styles.productImage}>
        <img src="https://via.placeholder.com/150" alt="product" />
      </div>
      <div className={styles.productContainer}>
        <div className={styles.productDetails}>
          <div className={styles.name}>Product Name</div>
          <div className={styles.price}>₹1500.00</div>
        </div>
        <div className={styles.counterContainer}>
          <button className={styles.counterButton}>-</button>
          <div className={styles.quantity}>1</div>
          <button className={styles.counterButton}>+</button>
        </div>
        <div>
          <div className={styles.remove}>
            <AiOutlineDelete />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
