import React from "react";
import { HeroImg } from "../../img";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-img">
        <img src={HeroImg} alt="" />
      </div>
      <div className="hero-description">
        <h1 className='heading'>More than just shorter links</h1>
        <p className='paragraph'>
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </p>
        <div>
            <Button link='#!'>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
