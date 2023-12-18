import React from 'react'
import './About.css'

export default function About() {
  return (
    <>
       <div className='container-fluid py-5' id='about-cf'>
           <div className='container'>
               <div className='col text-center'>
                   <h2 className='py-3'>About Us</h2>
               </div>
               <div className='row py-5'>
                   <div className='col-lg-6 col-md-6 col-sm-12'>
                       <div className='col p-0' id='about-img'></div>
                   </div>
                   <div className='col-lg-6 col-md-6 col-sm-12'>
                       <div className='col py-4'>
                            <h4>This is About me...</h4>
                            <p>I've worked in the fields of marketing, branding, and design for over a decade, with large, established firms and studios. I learned a lot from them but decided to fly solo by establishing my own consultancy.This is my way of bridging the gaps I saw in the industry, and of bringing a distinctive and personalized approach to the science and art of branding.</p>
                            <p>I've worked in the fields of marketing, branding, and design for over a decade, with large, established firms and studios. I learned a lot from them but decided to fly solo by establishing my own consultancy.This is my way of bridging the gaps I saw in the industry, and of bringing a distinctive and personalized approach to the science and art of branding.</p>
                       </div>
                   </div>
               </div>
           </div>
       </div>
       
    </>
  )
}
