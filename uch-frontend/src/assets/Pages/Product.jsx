import React from 'react'
import ProductPage from '../Components/Product/ProductPage'
import ProductDets from '../Components/Product/ProductDets'
import Testimonial from '../Components/Testimonial/Testimonial'
import ProductRecommend from '../Components/Product/ProductRecommend'

const Product = () => {
  return (
    <div>
      <ProductPage/>
      <ProductDets />
      <Testimonial heading="What Our Customers Say" />
      <ProductRecommend/>
    </div>
  )
}

export default Product
