import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
        <>
        <div className='container-fluid py-5' id='footer-cf'>
           <div className='container'>
               <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-12 my-3'>
                        <div className='col-lg-8 col-md-6 col-sm-12'>
                            <h4>Wardiere Inc</h4>
                            <p>Stay in the loop and sign up for the Wardiere newsletter:</p>
                            <div className='f-email '>
                                <input type='text' className='px-3' placeholder='enter your email'></input>
                                <button className='btn py-3'>Send</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2 col-md-6 col-sm-12 my-3'>
                        <div className='col'>
                            <p><b>Documentation</b></p>
                            <p>Help Center</p>
                            <p>Contact</p>
                            <p>Privacy Policy</p>
                        </div>
                    </div>
                    <div className='col-lg-2 col-md-6 col-sm-12 my-3'>
                        <div className='col'>
                            <p><b>Company</b></p>
                            <p>Home</p>
                            <p>About</p>
                            <p>Service</p>
                        </div>
                    </div>
                    
                    <div className='col-lg-2 col-md-6 col-sm-12 my-3'>
                        <div className='col'>
                            <p><b>Social</b></p>
                            <p>Facebook</p>
                            <p>Instagram</p>
                            <p>Youtube</p>
                            <p>Twitter</p>
                        </div>
                    </div>
               </div>
           </div>
        </div>
        <div className='container-fluid text-center py-3' id='down-footer-cf'>
            <div className='container'>
                <div className='col'>
                    <b>© Wardiere Inc. All Rights Reserved 2023</b>
                </div>
            </div>
        </div>
        </>
      
  )
}
