import React from 'react'
import './About2.css'
export default function About2() {
  return (
    <>
       <div className="container-fluid py-5" id='about2-cf'>
        <div className="container">
            <div className="col">
                <h3>Frequently asked</h3>
            </div>
            <div className="row">
                <div className="col-lg-6 col-sm-12 col-md-6">
                    <div className="col py-5">
                        <p><b>WHICH MARKETS DO YOU CURRENTLY SERVE?</b></p>
                        <p>We have head offices in North America, Asia Pacific and Europe, which gives us a broad reach. We are currently well-positioned to serve clients in both emerging and developed markets. </p>
                        <p><b>HOW CAN I SET UP A CONSULTATION & DEMO?</b></p>
                        <span>We offer a free initial consultation to new clients, to better understand their needs and explain our services. Simply email us to book your session.</span>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12 col-md-6">
                    <div className="col">
                        <img src="https://images.pexels.com/photos/518973/pexels-photo-518973.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    </div>
                </div>
            </div>
        </div>
       </div>
    </>
  )
}
