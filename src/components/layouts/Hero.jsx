import React from "react";
import { HeroImg } from "../../img";

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
            <button className='btn btn-primary'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
