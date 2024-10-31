import React from 'react'
import HeroSection from './components/HeroSection'
import Card_Product from './components/Card_Product'
import Services from './components/Services'

function Home() {
  return (
    <>
    <HeroSection />
      <Card_Product />
      <Services />
    </>
  )
}

export default Home