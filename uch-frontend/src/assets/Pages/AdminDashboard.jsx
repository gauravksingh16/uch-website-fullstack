import {Sidenav} from '../Components/Navbar/Sidenav'
import styles from './AdminDashboard.module.css'
import {Outlet} from 'react-router-dom'

const AdminDashboard = () => {
  return (
      <div className={styles.mainContainer}>
        <Sidenav />
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
  )
}

export default AdminDashboard
