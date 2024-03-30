import React from "react";
import styles from "./Marquee.module.css";

const Marquee = ( {text} ) => {
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marquee}>
        <div dangerouslySetInnerHTML={{ __html: text }}></div>
        <div dangerouslySetInnerHTML={{ __html: text }}></div>
      </div>
    </div>
  );
};

export default Marquee;
