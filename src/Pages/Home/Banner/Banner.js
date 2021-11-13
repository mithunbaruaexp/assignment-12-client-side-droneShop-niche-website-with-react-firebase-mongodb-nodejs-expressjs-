import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>
              We Can Make Your Celibration
              <span> Extraordinary</span>
            </h1>
            <p>
              While they might seem like toys, a high-quality drone is a serious
              investment. We've flown plenty and there are a lot of good
              performers that we use.
            </p>
            <button>Explore</button>
          </div>
          <div className="col-md-6">
            <img
              className="w-100 drone-img"
              src="https://i.ibb.co/ZcrW1sp/inner-product-06-1200x640.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
