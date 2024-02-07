import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../Images/UCH_logo.svg";
import search from "../../Images/magnifying-glass-solid.svg";
import bag from "../../Images/shopping-bag-svgrepo-com.svg";

const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navLeft}>
        <img src={logo} alt="UCH Logo" />
      </div>
      <div className={styles.navRight}>
        <div className={styles.navMenu}>
          <div className={styles.navItems}>
            <div className={styles.navLinks}>
              <a href="">Categories</a>
            </div>
          </div>
          <div className={styles.navItems}>
            <div className={styles.navLinks}>
              <a href="">Bestsellers</a>
            </div>
          </div>
        </div>
        <div className={styles.loginContainer}>
          <div>
            <img src={search} alt="" />
          </div>
          <div>
            <img src={bag} alt="" />
          </div>
          <div className={styles.loginBtn}>
            <div>Login</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
