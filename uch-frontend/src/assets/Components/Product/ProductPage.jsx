import React from "react";
import styles from "./ProductPage.module.css";
import Button from "../Button/Button";

const ProductPage = () => {
  return (
    <div className={styles.container}>
      <div>
        <div>Product Name</div>
        <div>₹ 1500</div>
        <div>
          <Button name="Add to cart" />
        </div>
      </div>
      <div>
        <img
          src="https://www.pngimages.in/uploads/png-webp/2022/2022-February/female-models-png-Transparent-Images.webp"
          alt=""
        />
      </div>
      <div>
        <div>Description</div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          euismod, nunc nec vehicula fringilla, nunc libero vestibulum est, nec
          luctus nunc nunc ac purus. Donec euismod, nunc nec vehicula fringilla,
          nunc libero vestibulum est, nec luctus nunc nunc ac purus.
        </div>
        <div>
          <div>Select Size</div>
          <div>
            <Button name="S" />
            <Button name="M" />
            <Button name="L" />
            <Button name="XL" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
