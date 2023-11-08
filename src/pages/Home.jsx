import React from 'react'
import { Header } from '../component/Header'
import { Banner } from '../component/Banner'
import { Footer } from '../component/Footer'
import { Ads } from '../component/Ads'
import { Products } from '../component/Products'

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Products />
      <Ads />
      <Footer />
    </>
  )
}

export default Home