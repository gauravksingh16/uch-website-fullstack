import './App.css'
import AboutUs from './assets/Components/About US/AboutUs'
import Category from './assets/Components/Category/Category'
import Intro from './assets/Components/IntroSection/Intro'
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
    </>
  )
}

export default App
