import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Banner from '../Components/Banner/Banner'
import About from '../Components/About/About'
import Services from '../Components/Services/Services'
import Footer from '../Components/Footer/Footer'
import Contact from '../Components/Contact/Contact'
import Ourporjects from '../Components/Projects/Ourporjects'
import Event from '../Components/Event/Event'
import Customerreview from '../Components/Customerreview/Customerreview'

export default function Home() {
  return (
    <>
       <Navbar/>
       <Banner/>
       <About/>
       <Services/>
       <Ourporjects/>
       <Event/>
       <Customerreview/>
       <Contact/>
       <Footer/>
    </>
  )
}
