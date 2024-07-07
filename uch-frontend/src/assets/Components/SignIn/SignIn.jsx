// src/assets/Components/LoginPage/SignIn.jsx
import { useState } from "react";
import styles from "./SignIn.module.css";
import Button from "../Button/Button";
import { Link, useNavigate } from 'react-router-dom';
import { GoHomeFill } from "react-icons/go";
import { API_URL } from "../../../Constants";
import axios from 'axios';
import { useUser } from '../../Context/UserContext';

const SignIn = () => {
  const [data, setData] = useState({
    password: "",
    email: ""
  });

  const navigate = useNavigate();
  const { loginUser } = useUser();
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${API_URL}/login`;
      const { data: res } = await axios.post(url, data);
      const { token, username, role } = res.data;
      loginUser(token, username, role);
      if (role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/');
      }
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status <= 500) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className={styles.loginForm}>
      <div>
        <Link to="/"><GoHomeFill className={styles.icon} /></Link>
      </div>
      <div className={styles.head}>Welcome back!</div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" value={data.email} placeholder="Email Address" required onChange={handleChange} />
        <input type="password" name="password" value={data.password} placeholder="Password" required onChange={handleChange} />
        <div className={styles.forgotPassword}>
          <Link to="">Forgot Password?</Link>
        </div>
        {error && <div className={styles.error}>{error}</div>}
        <button type="submit" onClick={handleSubmit} className={styles.btn}>
          <Button name="Login" />
        </button>
        <button type="submit" className={styles.btn}>
          <Button name="Sign In with Google" />
        </button>
      </form>
      <div className={styles.changeForm}>
        Don't have an account? <Link to="/register">Sign up</Link>
      </div>
    </div>
  );
};

export default SignIn;
