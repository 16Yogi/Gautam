import React from 'react'
import About from '../Components/About/About'
import Navbar from '../Components/Navbar/Navbar'
import Banner2 from '../Components/Banner/Banner2'
import About2 from '../Components/About/About2'
import Ourporjects from '../Components/Projects/Ourporjects'
import Contact from '../Components/Contact/Contact'
import Footer from '../Components/Footer/Footer'
import Customerreview from '../Components/Customerreview/Customerreview'
import Event from '../Components/Event/Event'

export default function Aboutpage() {
  return (
   <>
      <Navbar/>
      <Banner2 bannerName="About us"/>
      <About/>
      <About2/>
      <Customerreview/>
      {/* <Event/> */}
      {/* <Contact/> */}
      <Footer/>
   </> 
  )
}
