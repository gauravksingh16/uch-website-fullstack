import React from "react";
import styles from "./Marquee.module.css";

const Marquee = () => {
  return (
    <div className={styles.marqueeContainer}>
      <div className={styles.marquee}>
        <div>
          We would love to solve your queries? Reach out to us at<a href="">EMAIL</a>{" "}
          Stay Fashionable, Stay Connected with UCH ●
        </div>
        <div>
          We would love to solve your queries? Reach out to us at<a href="">EMAIL</a>{" "}
          Stay Fashionable, Stay Connected with UCH ●
        </div>
      </div>
    </div>
  );
};

export default Marquee;
