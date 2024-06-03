import React, { useState , useEffect} from "react";
import styles from "./Navbar.module.css";
import logo from "../../Images/UCH_logo.svg";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoIosSearch, IoIosClose } from "react-icons/io";
import Button from "../Button/Button";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleSearchClick = () => {
    setIsSearchActive(!isSearchActive);
  };

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const response = await axios.get("http://localhost:5000/api/user", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
        } catch (error) {
          console.error("Error fetching user data", error);
        }
      }
    };

    fetchUserData();
  }, []);

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
              <button type="submit">
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#1d2a51"
                    d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"
                  />
                </svg>
              </button>
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
          {user ? (
            <>
              <li>Welcome, {user.name}</li>
              <li>
                <a
                  href="/logout"
                  onClick={() => {
                    localStorage.removeItem("token");
                    window.location = "/";
                  }}
                >
                  <Button name="Logout" />
                </a>
              </li>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button name="Login" />
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
