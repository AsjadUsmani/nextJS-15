import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Rates from './components/Rates'
import Footer from './components/Footer'

const page = () => {
  return (
    <div className='bg-gradient-to-b from-purple-50 to-orange-50'>
      <Hero/>
      <About/>
      <Services/>
      <FAQ/>
      <Rates/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default page
