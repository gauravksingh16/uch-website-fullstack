import React from "react";
import styles from "./Category.module.css";
import CategoryTemplate from "../CategoryTemplate/CategoryTemplate";

const Category = () => {
  return (
    <div className={styles.categoryWrapper}>
      <div className={styles.categoryHead}>You are shopping for</div>
      <div className={styles.categoryList}>
        <CategoryTemplate
          categoryText="Men"
          categoryImage="https://assets.vogue.com/photos/649b01f76d7f8002d20f80cd/1:1/w_1080,h_1080,c_limit/00-promo.jpg"
        />
        <CategoryTemplate
          categoryText="Women"
          categoryImage="https://i.insider.com/5b3fdf8a7708e925065f9af0?width=700"
        />
        <CategoryTemplate
          categoryText="Kids"
          categoryImage="https://franchiseindia.s3.ap-south-1.amazonaws.com/uploads/content/fi/art/5a311dd066a2a.jpg"
        />
      </div>
    </div>
  );
};

export default Category;
