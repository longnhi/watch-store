import React from 'react'
import Carousel from '../../components/carousel/Carousel'
import Contact from '../../components/contact/Contact'
import ProductsHome from './ProductsHome'

function Home() {
  return (
    <>
      <Carousel />
      <ProductsHome />
      <Contact />
    </>
  )
}

export default Home