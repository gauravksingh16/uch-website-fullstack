import {Sidenav} from '../Components/Navbar/Sidenav'
import { SidebarProvider } from '../Context/SidebarContext'
import styles from './AdminDashboard.module.css'
import {Outlet} from 'react-router-dom'

const AdminDashboard = () => {
  return (
    <SidebarProvider>
      <div className={styles.mainContainer}>
        <Sidenav />
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </SidebarProvider>
  )
}

export default AdminDashboard
