'use client'
import React from 'react'
import Navbar from './components/navbar'
import Introduction from './components/introduction'
import Premium from './components/premium'
import Footer from './components/footer'

const Landing = () => {
  return (
    <div>
        <Navbar />
        <Introduction />
        <Premium />
        <Footer />
    </div>
  )
}

export default Landing