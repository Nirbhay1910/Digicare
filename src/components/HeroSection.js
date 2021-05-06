import { Button } from "@material-ui/core";
import React from "react";
import "./css/heroSection.css";
import hero_img from "../images/doc_illustration_1.png";

function HeroSection() {
  return (
    <div className="hero">
      <div className="left">
        <p id="hero-main">Don't Spend thousands on doctor consultation</p>
        <p id="hero-sub">
          our Passionate and verified doctors will do it for free or for 1% of
          the cost
        </p>
        <div>
          <Button id="button" variant="contained" color="primary">
            Consult now
          </Button>
        </div>
      </div>
      <div className="right">
        <img src={hero_img} alt="hero "></img>
      </div>
    </div>
  );
}

export default HeroSection;
