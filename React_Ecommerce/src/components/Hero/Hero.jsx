import React from "react";
import "./Hero.css";
import handIcon from "../assets/hand_icon.png";
import arrowIcon from "../assets/arrow.png";

import headset from "../assets/headset.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h1>NEW ARRIVALS</h1>
        <div className="hero-left-text-part">
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={handIcon} alt="" />
          </div>
          <p>Collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrowIcon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={headset} alt="" />
      </div>
    </div>
  );
};

export default Hero;
