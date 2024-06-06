import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import logo from "../../Images/UCH_logo.svg";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { IoIosSearch, IoIosClose } from "react-icons/io";
import Button from "../Button/Button";
import { Link, NavLink , useNavigate } from "react-router-dom";
import { useUser } from "../../Context/UserContext";
import { FiPackage } from "react-icons/fi";
import { IoMdLogOut } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const { user, logoutUser } = useUser();
  const [usernameInitial, setUsernameInitial] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (user && user.name) {
      setUsernameInitial(user.name.charAt(0).toUpperCase());
      console.log(user.name);
    } else {
      setUsernameInitial("");
    }
  }, [user]);

  const handleSearchClick = () => {
    setIsSearchActive(!isSearchActive);
  };

  const handleLogoutClick = (e) => {
    e.preventDefault();
    logoutUser();
    navigate("/")
  };

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
            <NavLink to="/bestsellers">Bestsellers</NavLink>
          </div>
          <div className={styles.navItems}>
            <NavLink to="/newarrivals">New Arrivals</NavLink>
          </div>
        </div>
        <div className={styles.loginContainer}>
          {isSearchActive && (
            <div className={styles.searchBar}>
              <input
                type="text"
                placeholder="Search..."
                className={styles.searchInput}
              />
            </div>
          )}
          <div className={styles.searchIcon} onClick={handleSearchClick}>
            {isSearchActive ? (
              <IoIosClose className={styles.icon} color="#1d2a51" size={30} />
            ) : (
              <IoIosSearch className={styles.icon} color="#1d2a51" size={30} />
            )}
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
          {usernameInitial ? (
            <div className={styles.userInitial}>
              {usernameInitial}
              <div class={styles.userDrop}>
                <Link to="/profile"><CgProfile /> Profile</Link>
                <Link to="/orders"><FiPackage /> Orders</Link>
                <Link to="/" onClick={handleLogoutClick}><IoMdLogOut /> Logout</Link>
              </div>
            </div>
          ) : (
            <Link to="/login">
              <Button name="Login" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
