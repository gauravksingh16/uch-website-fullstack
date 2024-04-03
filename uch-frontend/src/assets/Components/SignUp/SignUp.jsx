import React from 'react'
import styles from './SignUp.module.css'
import Button from '../Button/Button'
import {Link} from 'react-router-dom'
import { GoHomeFill } from "react-icons/go";


const SignUp = () => {
  return (
    <div className={styles.loginForm}>
      <div>
        <Link to="/"><GoHomeFill className={styles.icon}/></Link>
      </div>
      <div className={styles.head}>Glad you came!</div>
      <form>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        <input type="email" placeholder="Email Address" required />
        <input type="tel" placeholder="Phone Number" required maxLength={10}/>
        <div className={styles.btn}>
          <Button name="Register" />
        </div>
        <div className={styles.btn}>
          <Button name="Sign Up with Google" />
        </div>
      </form>
      <div className={styles.changeForm}>
        Already have an account? <Link to="/login">Sign In</Link>
      </div>
    </div>
  )
}

export default SignUp
