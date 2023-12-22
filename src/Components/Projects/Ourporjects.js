import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import './Ourproject.css';
export default function Ourporjects() {
  
  return (
    <>
      <div className="container-fluid py-5" id="project-cf">
        <div className="container py-5">
        <div className="col">
          <h2>Our Projects</h2>
          <p>Lorem ipsum dolor sit</p>
        </div>
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="py-4"
          >
            <SwiperSlide className="my-3 p-0 col-lg-3 col-md-6 col-sm-12" id="project-item">
              <div className="col p-0">
                <div className="col p-0">
                  <img src="https://images.pexels.com/photos/2898199/pexels-photo-2898199.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </div>
                <div className="col py-2">
                  <p><b>Lorem ipsum dolor sit</b></p>
                  <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores totam sed id magnam a sint non dolore iusto alias unde.</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="my-3 p-0 col-lg-3 col-md-6 col-sm-12" id="project-item">
              <div className="col p-0">
                <div className="col p-0">
                  <img src="https://images.pexels.com/photos/2898199/pexels-photo-2898199.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </div>
                <div className="col py-2">
                  <p><b>Lorem ipsum dolor sit</b></p>
                  <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores totam sed id magnam a sint non dolore iusto alias unde.</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="my-3 p-0 col-lg-3 col-md-6 col-sm-12" id="project-item">
              <div className="col p-0">
                <div className="col p-0">
                  <img src="https://images.pexels.com/photos/2898199/pexels-photo-2898199.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </div>
                <div className="col py-2">
                  <p><b>Lorem ipsum dolor sit</b></p>
                  <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores totam sed id magnam a sint non dolore iusto alias unde.</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="my-3 p-0 col-lg-3 col-md-6 col-sm-12" id="project-item">
              <div className="col p-0">
                <div className="col p-0">
                  <img src="https://images.pexels.com/photos/2898199/pexels-photo-2898199.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </div>
                <div className="col py-2">
                  <p><b>Lorem ipsum dolor sit</b></p>
                  <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores totam sed id magnam a sint non dolore iusto alias unde.</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="my-3 p-0 col-lg-3 col-md-6 col-sm-12" id="project-item">
              <div className="col p-0">
                <div className="col p-0">
                  <img src="https://images.pexels.com/photos/2898199/pexels-photo-2898199.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </div>
                <div className="col py-2">
                  <p><b>Lorem ipsum dolor sit</b></p>
                  <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores totam sed id magnam a sint non dolore iusto alias unde.</span>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="my-3 p-0 col-lg-3 col-md-6 col-sm-12" id="project-item">
              <div className="col p-0">
                <div className="col p-0">
                  <img src="https://images.pexels.com/photos/2898199/pexels-photo-2898199.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </div>
                <div className="col py-2">
                  <p><b>Lorem ipsum dolor sit</b></p>
                  <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores totam sed id magnam a sint non dolore iusto alias unde.</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
