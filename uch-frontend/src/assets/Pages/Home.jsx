import React from "react";
import Intro from "../Components/IntroSection/Intro";
import Category from "../Components/Category/Category";
import NewArrivals from "../Components/NewArrivals/NewArrivals";
import AboutUs from "../Components/About US/AboutUs";
import Testimonial from "../Components/Testimonial/Testimonial";
import Marquee from "../Components/Marquee/Marquee";

const Home = () => {
  return (
    <div>
      <Intro />
      <Category />
      <NewArrivals pageTitle="Check out our Latest Arrivals" />
      <AboutUs />
      <NewArrivals pageTitle="What people are Buying Most" />
      <Testimonial heading="What Our Customers Say" />
      <Marquee text="We would love to solve your queries? Reach out to us at <a href='mailto:your@email.com'>EMAIL</a> Stay Fashionable, Stay Connected with UCH ●" />
    </div>
  );
};

export default Home;
