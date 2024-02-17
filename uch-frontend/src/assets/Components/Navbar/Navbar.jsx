import React, { useState } from "react";
import styles from "./Navbar.module.css";
import logo from "../../Images/UCH_logo.svg";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import Button from "../Button/Button";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={styles.navContainer}>
      <div className={styles.navLeft}>
        <Link to="/">
          <img src={logo} alt="UCH Logo" />
        </Link>
      </div>
      <div className={styles.navRight}>
        <div className={styles.navMenu}>
          <div className={styles.navItems}>
            <NavLink to="/productcategory">Categories</NavLink>
          </div>
          <div className={styles.navItems}>
            <NavLink>Bestsellers</NavLink>
          </div>
          <div className={styles.navItems}>
            <NavLink>New Arrivals</NavLink>
          </div>
        </div>
        <div className={styles.loginContainer}>
          <div>
            <IoIosSearch className={styles.icon} color="#1d2a51" size={30} />
          </div>
          <Link to="/cart">
            <div className={styles.cartContainer}>
              <HiOutlineShoppingBag
                className={styles.icon}
                color="#1d2a51"
                size={30}
              />
              <div className={styles.cartCount}>0</div>
            </div>
          </Link>
          <Link to="/login">
            <Button name="Login" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
