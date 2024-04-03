import React from "react";
import styles from "./SidebarItem.module.css";

const SidebarItem = ({ icon, text, active, onClick }) => {
  const handleClick = () => {
    onClick(text);
  };
  
  return (
    <div
      className={`${styles.wrapper} ${active === true ? styles.active : ""}`}
      onClick={handleClick}
    >
      <div className={styles.icon}>{icon}</div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default SidebarItem;
