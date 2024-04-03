import React, { useContext } from "react";
import styles from "./SidebarItem.module.css";
import { SidebarContext } from "./Sidenav.jsx";

const SidebarItem = ({ icon, text, active, onClick }) => {
  const { expanded } = useContext(SidebarContext);

  const handleClick = () => {
    onClick(text);
  };

  return (
    <div
      className={`${styles.wrapper} ${active === true ? styles.active : ""}`}
      onClick={handleClick}
    >
      <div className={styles.icon}>{icon}</div>
      <div className={`${styles.text} ${expanded ? "" : styles.hidden}`}>
        {text}
      </div>
    </div>
  );
};

export default SidebarItem;
