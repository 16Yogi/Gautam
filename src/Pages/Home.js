import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Banner from '../Components/Banner/Banner'
import About from '../Components/About/About'
import Services from '../Components/Services/Services'
import Footer from '../Components/Footer/Footer'
import Contact from '../Components/Contact/Contact'

export default function Home() {
  return (
    <>
       <Navbar/>
       <Banner/>
       <About/>
       <Services/>
       <Contact/>
       <Footer/>
    </>
  )
}
