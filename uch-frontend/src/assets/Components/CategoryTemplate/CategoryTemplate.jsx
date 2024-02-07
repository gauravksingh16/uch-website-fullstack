import React, { useEffect, useRef } from "react";
import styles from "./CategoryTemplate.module.css";
import { GoArrowUpRight } from "react-icons/go";

const CategoryTemplate = ({ categoryText, categoryImage }) => {

  return (
    <div className={styles.templateContainer}>
      <img src={categoryImage} alt="" />
      <div className={styles.categoryDesc}>
        <div className={styles.categoryHead}>{categoryText}</div>
        <div className={styles.categoryLink}><GoArrowUpRight /></div>
      </div>
    </div>
  );
};

export default CategoryTemplate;
