import React from "react";
import styles from "./Navbar.module.css";
import logo from "../../Images/UCH_logo.svg";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";

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
          <IoIosSearch className={styles.icon} color="#1d2a51" size={30}/>
          </div>
          <div>
            <HiOutlineShoppingBag className={styles.icon} color="#1d2a51" size={30} />
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
