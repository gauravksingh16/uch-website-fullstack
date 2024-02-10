import './App.css'
import AboutUs from './assets/Components/About US/AboutUs'
import Category from './assets/Components/Category/Category'
import Footer from './assets/Components/Footer/Footer'
import Intro from './assets/Components/IntroSection/Intro'
import Marquee from './assets/Components/Marquee/Marquee'
import Navbar from './assets/Components/Navbar/Navbar'
import NewArrivals from './assets/Components/NewArrivals/NewArrivals'
import Testimonial from './assets/Components/Testimonial/Testimonial'

function App() {

  return (
    <>
      <Navbar />
      <Intro />
      <Category/>
      <NewArrivals pageTitle="Check out our Latest Arrivals"/>
      <AboutUs/>
      <NewArrivals pageTitle="What people are Buying Most"/>
      <Testimonial />
      <Marquee />
      <Footer/>
    </>
  )
}

export default App
