import React from 'react'
import './Banner2.css'
export default function Banner2(BannerTitle) {
  return (
    <>
       <div className="container-fluid" id='banner2-cf'>
        <div className="container">
            <div className="col">
                <h3 className='text-center'>{BannerTitle.bannerName}</h3>
            </div>
        </div>
       </div>
    </>
  )
}
