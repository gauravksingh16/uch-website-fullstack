import React from "react";
import styles from "./LoginPage.module.css";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import { Route, Routes, useLocation, Navigate, BrowserRouter } from "react-router-dom";

const LoginPage = () => {

  return (
    <div className={styles.LoginContainer}>
      <div className={styles.loginDets}>
        <div className={styles.transparentBg}>
          <div>
            <div className={styles.intro}>Style that defines you.</div>
            <div className={styles.desc}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
              veniam quos.
            </div>
          </div>
        </div>
        <Routes> {/* Use Routes for conditional rendering */}
          <Route path="/" element={<SignIn />} exact />
          <Route path="/register" element={<SignUp />} exact />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </div>
  );
};

export default LoginPage;
