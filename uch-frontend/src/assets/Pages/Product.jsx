import React from 'react'
import ProductPage from '../Components/Product/ProductPage'
import ProductDets from '../Components/Product/ProductDets'
import Marquee from '../Components/Marquee/Marquee'
import Testimonial from '../Components/Testimonial/Testimonial'
import ProductRecommend from '../Components/Product/ProductRecommend'

const Product = () => {
  return (
    <div>
      <ProductPage/>
      <Marquee text="Be the talk of the town with eye-catchy fashion • Dare to be different, express your uniqueness with fashion •" />
      <ProductDets />
      <Testimonial heading="What Our Customers Say" />
      <ProductRecommend/>
    </div>
  )
}

export default Product
