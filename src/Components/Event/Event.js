import React from 'react'
import './Event.css'

export default function Event() {
  return (
    <>
       <div className="container-fluid py-5" id='event-cf'>
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="col">
                        <img src="https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="col text-center py-5">
                        <h3>Our culture drives what we do.</h3>
                        <p>Our values shape every action we take and decision we make.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi doloremque totam eius velit eum minus ipsa, perspiciatis corrupti doloribus. Odit repudiandae id corrupti alias, accusantium architecto explicabo fugiat veniam aliquid?</p>
                        <button className="btn btn-info">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
       </div>
    </>
  )
}
