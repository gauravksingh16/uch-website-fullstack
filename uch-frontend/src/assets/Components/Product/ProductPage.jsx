import React, { useState } from "react";
import styles from "./ProductPage.module.css";
import Button from "../Button/Button";

const ProductPage = () => {
  const [mainImage, setMainImage] = useState(
    "https://static.vecteezy.com/system/resources/previews/034/028/843/original/fashion-model-girl-in-jeans-and-white-top-png.png"
  );

  const [image1, setImage1] = useState(
    "https://static.vecteezy.com/system/resources/previews/013/281/542/original/polo-shirt-3d-realistic-png.png"
  ); 
  const [image2, setImage2] = useState(
    "https://static.vecteezy.com/system/resources/previews/013/281/546/original/polo-shirt-3d-realistic-png.png"
  ); 


  const handleImageClick = (image) => {
    const temp = mainImage;
    setMainImage(image);
    if (image === image1) {
      setImage1(temp);
    } else if (image === image2) {
      setImage2(temp);
    }
  };

  return (
    <div className={styles.desccontainer}>
      <div className={styles.productTitle}>
        <div className={styles.name}>Product Name</div>
        <div className={styles.price}>₹ 1500</div>
        <div>
          <Button name="Add to cart" />
        </div>
      </div>
      <div className={styles.productImg}>
        <img id="mainImg" src={mainImage} alt="" onClick={() => handleMainImageClick(mainImage)} />
      </div>
      <div className={styles.productDesc}>
        <div className={styles.imageSelector}>
          <div>
            <img id="img1" src={image1} alt="" onClick={() => handleImageClick(image1)} />
          </div>
          <div>
            <img id="img2" src={image2} alt="" onClick={() => handleImageClick(image2)} />
          </div>
        </div>
        <div className={styles.heading}>Description</div>
        <div className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          euismod, nunc nec vehicula fringilla, nunc libero vestibulum est, nec
          luctus nunc nunc ac purus. Donec euismod, nunc nec vehicula fringilla,
          nunc libero vestibulum est, nec luctus nunc nunc ac purus.
        </div>
        <div className={styles.sizeContainer}>
          <div className={styles.heading}>Select Size</div>
          <div className={styles.buttongroup}>
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
