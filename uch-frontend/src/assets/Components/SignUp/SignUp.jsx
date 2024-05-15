import React, {useState} from 'react'
import styles from './SignUp.module.css'
import Button from '../Button/Button'
import {Link, useNavigate} from 'react-router-dom'
import { GoHomeFill } from "react-icons/go";
import axios from 'axios'


const SignUp = () => {
  const [data, setData] = useState ({
    username: "",
    password: "",
    email: "",
    phone: ""
  })
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({currentTarget: input}) => {
    setData({...data, [input.name]: input.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const url = "http://localhost:5000/api/register";
      const {data:res} = await axios.post(url, data)
      navigate("/login")
      console.log(res.message)
    }catch(error){ 
      if(error.response && error.response.status >= 400 && error.response.status <= 500){
        setError(error.response.data.message)
        console.log(error.response.data.message)
      }
    }
  }

  return (
    <div className={styles.loginForm}>
      <div>
        <Link to="/"><GoHomeFill className={styles.icon}/></Link>
      </div>
      <div className={styles.head}>Glad you came!</div>
      <form onSubmit={handleSubmit}>
        <input type="text" name ="username" value={data.username} placeholder="Username" required onChange={handleChange} />
        <input type="password" name ="password" value={data.password} placeholder="Password" required onChange={handleChange}/>
        <input type="email" name ="email" value={data.email} placeholder="Email Address" required onChange={handleChange} />
        <input type="tel" name ="phone" value={data.phone} placeholder="Phone Number" required  maxLength={10} onChange={handleChange}/>

        {error && window.alert(error)}

        <button  type="submit" className={styles.btn} onClick={handleSubmit}>
          <Button name="Register" />
        </button>
        <button type="submit" className={styles.btn}>
          <Button name="Sign Up with Google" />
        </button>
      </form>
      <div className={styles.changeForm}>
        Already have an account? <Link to="/login">Sign In</Link>
      </div>
    </div>
  )
}

export default SignUp
