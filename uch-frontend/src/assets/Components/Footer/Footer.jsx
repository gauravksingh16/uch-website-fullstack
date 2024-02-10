import React from "react";
import styles from "./Footer.module.css";
import logo from "../../Images/UCH_logo.svg";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.top}>
        <div className={styles.newsletter}>
          <div className={styles.logo}>
            <img src={logo} alt="" />
          </div>
          <div className={styles.newsletterText}>
            Be the trendsetter you are! Get exclusive early access to new
            arrivals and limited-edition collections before they hit the
            shelves.
          </div>
          <form action="submit" method="post" className={styles.newsletterForm}>
            <input
              name="Email"
              type="email"
              className={styles.newsletterInput}
              placeholder="Enter Your Email"
              required
            />
            <button type="submit">
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
              </svg>
            </button>
          </form>
        </div>
        <div className={styles.links}>
          <div className={styles.head}>Quick Links</div>
          <div className={styles.linklist}>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Shop</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.socialMedia}>
          <div className={styles.head}>Follow Us</div>
          <div className={styles.socialList}>
            <ul>
              <li>
                <a href="#">
                  Instagram <SlSocialInstagram />
                </a>
              </li>
              <li>
                <a href="#">
                  Facebook <TiSocialFacebook />
                </a>
              </li>
              <li>
                <a href="#">
                  Twitter <TiSocialTwitter />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div>
          Copyright &copy; 2023 <a href="">UCH</a>. All rights reserved.
        </div>
        <div>
          Designed and Developed by <a href="">Gaurav K Singh</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
