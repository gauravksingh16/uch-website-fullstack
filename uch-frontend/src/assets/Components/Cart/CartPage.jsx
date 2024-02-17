import React from "react";
import styles from "./CartPage.module.css";
import CartItem from "../CartItem/CartItem";

const CartPage = ({ itemCount }) => {
  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartHead}>Shopping Cart</div>
      <CartItem />
      <CartItem />
    </div>
  );
};

export default CartPage;
