import React from "react";
// import userImage from '../../../public/Asset/Img/user.png';
// import userImage from '../../../public/Asset/Img/user.png'
import './Customerreview.css'
export default function Customerreview() {
  return (
    <>
      <div className="container-fluid py-5" id="custreview-cf">
        <div id="demo" class="carousel slide py-5" data-ride="carousel">
          <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
          </ul>

          <div class="carousel-inner">
            <div class="carousel-item active">
                <div className="col-5 py-4 text-center mx-auto" id="custreview-item">
                    <div className="col">
                    <img src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png" alt="User" />
                    </div>
                    <div className="col">
                        <p><b>Lorem ipsum</b></p>
                        <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti non distinctio sed cupiditate dolorum dignissimos ex quia culpa totam saepe.</span>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div className="col-5 py-4 text-center mx-auto" id="custreview-item">
                    <div className="col">
                    <img src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png" alt="User" />
                    </div>
                    <div className="col">
                        <p><b>Lorem ipsum</b></p>
                        <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti non distinctio sed cupiditate dolorum dignissimos ex quia culpa totam saepe.</span>
                    </div>
                </div>
            </div>
            <div class="carousel-item">
                <div className="col-5 py-4 text-center mx-auto" id="custreview-item">
                    <div className="col">
                    <img src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-Clipart.png" alt="User" />
                    </div>
                    <div className="col">
                        <p><b>Lorem ipsum</b></p>
                        <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti non distinctio sed cupiditate dolorum dignissimos ex quia culpa totam saepe.</span>
                    </div>
                </div>
            </div>
          </div>

          <a class="carousel-control-prev" href="#demo" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </a>
          <a class="carousel-control-next" href="#demo" data-slide="next">
            <span class="carousel-control-next-icon"></span>
          </a>
        </div>
      </div>
    </>
  );
}
