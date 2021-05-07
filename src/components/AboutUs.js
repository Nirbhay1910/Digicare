import React from 'react';
import './css/aboutUs.css';
import about_img from '../images/AboutUs.png';

function AboutUs() {
  return (
    <div className="about">
      <div className="left">
        <img src={about_img}></img>
      </div>
      <div className="right">
        <div className="right-main">
          <p>About The Platform</p>
        </div>
        <div className="right-sub">
          <p>
            Digicare is the all in one solution for people who can't consult to the doctor due to the panedemic with very minimal or no fees at all. 
          </p>
          <p>
            We know these are very tough times. So, we also have mental care section where people can talk with others with similar interests so that everyone has someone to talk to.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
