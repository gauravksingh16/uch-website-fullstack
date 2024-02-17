import React from "react";
import styles from "./SignIn.module.css";
import Button from "../Button/Button";
import {Link} from 'react-router-dom'

const SignIn = () => {
  return (
    <div className={styles.loginForm}>
      <div className={styles.head}>Welcome back!</div>
      <form>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
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
