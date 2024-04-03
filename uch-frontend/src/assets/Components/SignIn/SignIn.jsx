import React from "react";
import styles from "./SignIn.module.css";
import Button from "../Button/Button";
import {Link} from 'react-router-dom'
import { GoHomeFill } from "react-icons/go";

const SignIn = () => {
  return (
    <div className={styles.loginForm}>
      <div>
        <Link to="/"><GoHomeFill className={styles.icon}/></Link>
      </div>
      <div className={styles.head}>Welcome back!</div>
      <form>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <div className={styles.forgotPassword}>
          <Link to="">Forgot Password?</Link>
        </div>
        <div className={styles.btn}>
          <Button name="Login" />
        </div>
        <div className={styles.btn}>
          <Button name="Sign In with Google" />
        </div>
      </form>
      <div className={styles.changeForm}>
        Don't have an account? <Link to="/register">Sign up</Link>
      </div>
    </div>
  );
};

export default SignIn;
