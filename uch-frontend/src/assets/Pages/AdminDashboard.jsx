import Inventory from '../Components/Inventory/Inventory'
import {Sidenav} from '../Components/Navbar/Sidenav'

const AdminDashboard = () => {
  return (
    <div>
      <Sidenav />
      <Inventory />
    </div>
  )
}

export default AdminDashboard
