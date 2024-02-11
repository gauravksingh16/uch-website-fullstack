import React from 'react'
import Intro from '../Components/IntroSection/Intro'
import Category from '../Components/Category/Category'
import NewArrivals from '../Components/NewArrivals/NewArrivals'
import AboutUs from '../Components/About US/AboutUs'
import Testimonial from '../Components/Testimonial/Testimonial'
import Marquee from '../Components/Marquee/Marquee'

const Home = () => {
  return (
    <div>
      <Intro />
      <Category />
      <NewArrivals pageTitle="Check out our Latest Arrivals" />
      <AboutUs />
      <NewArrivals pageTitle="What people are Buying Most" />
      <Testimonial />
      <Marquee  />
    </div>
  )
}

export default Home
