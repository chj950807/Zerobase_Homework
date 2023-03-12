import React from 'react'
import ControlledCarousel from './carousel/Carousel'
import Foot from './footer/Foot'
import Head from './header/Head'
import Product from './product/Product';

export default function Total() {
  return (
    <div className="bg-white h-screen">
      <Head />
      <ControlledCarousel />
      <Product />
      <Foot />
    </div>
  );
}
