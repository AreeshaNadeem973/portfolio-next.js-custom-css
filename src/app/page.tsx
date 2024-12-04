import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default page
