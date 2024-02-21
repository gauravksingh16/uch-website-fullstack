import React from 'react'
import styles from './Error.module.css'
import Button from '../Button/Button'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <div className={styles.errorWrapper}>
      <div className={styles.errorContainer}>
        <div className={styles.image}>
            <img src="https://static.vecteezy.com/system/resources/previews/027/032/748/original/watercolor-fashion-illustration-isolated-png.png" alt="" />
        </div>
        <div className={styles.errorText}>Lost in the Threads</div>
        <div className={styles.errorOverlay}>Lost in the Threads</div>
      </div>
      <div className={styles.button}>
      <NavLink to="/"><Button name="Back To Home"/></NavLink>
      </div>
    </div>
  )
}

export default Error
