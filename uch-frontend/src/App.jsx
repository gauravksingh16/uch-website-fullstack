import './App.css'
import Navbar from './assets/Components/Navbar/Navbar'
import Footer from './assets/Components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
