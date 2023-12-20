import React from "react";
import { Navigation, Pagination } from "swiper/modules";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function Ourporjects() {
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div class="swiper">
          
            <div class="swiper-wrapper">
             
              <div class="swiper-slide">Slide 1</div>
              <div class="swiper-slide">Slide 2</div>
              <div class="swiper-slide">Slide 3</div>
            </div>
           
            <div class="swiper-pagination"></div>

           
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

           
            <div class="swiper-scrollbar"></div>
          </div>
        </div>
      </div>
    </>
  );
}
