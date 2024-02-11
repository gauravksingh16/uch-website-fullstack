import React from "react";
import styles from "./Button.module.css";

const Button = ({ name }) => {
  return (
    <div className={styles.button}>
      <div>{name}</div>
    </div>
  );
};

export default Button;
