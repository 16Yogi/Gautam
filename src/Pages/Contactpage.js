import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Banner2 from '../Components/Banner/Banner2'
import Footer from '../Components/Footer/Footer'
import Contact from '../Components/Contact/Contact'

export default function Contactpage() {
  return (
    <>
       <Navbar/>
       <Banner2 bannerName="Contact us"/>
       <Contact/>
       <Footer/>
    </>
  )
}
