import React from "react";
import styles from "./CartPage.module.css";
import CartItem from "../CartItem/CartItem";
import Button from "../Button/Button";

const CartPage = ({ itemCount }) => {
  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartHead}>Shopping Cart</div>
      <div className={styles.cartDetails}>
        <div className={styles.items}>
          <CartItem />
          <CartItem />
        </div>
        <div className={styles.totalItems}>
          <div className={styles.cartPrice}>
            <div className={styles.priceDetails}>
              <div className={styles.cartPriceText}>Price</div>
              <div className={styles.cartAmount}>₹3000.oo</div>
            </div>
            <div className={styles.priceDetails}>
              <div className={styles.cartPriceText}>Shipping</div>
              <div className={styles.cartAmount}>₹30.00</div>
            </div>
          </div>
          <div className={styles.cartTotal}>
            <div className={styles.cartTotalText}>Total Amount</div>
            <div className={styles.cartTotalAmount}>₹3030.00</div>
          </div>
          <div className={styles.cartCheckout}>
            <Button name='Check Out' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
