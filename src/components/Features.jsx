import React from "react";
import { IconBrand, IconDetail, IconCustomisable } from "../img";

const Features = (props) => {
  return (
    <section className="features">
      <div className="features-heading">
        <h2 className="heading">Advanced Statistics</h2>
        <p className="paragraph">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="feature-section">
        <div className="line-through"></div>
        <div className="feature">
          <div className="feature-item">
            <div className="icon-wrapper">
              <img src={IconBrand} alt="" />
            </div>
            <h3 className="heading">Brand Recognition</h3>
            <p className="paragraph">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
          <div className="feature-item">
            <div className="icon-wrapper">
              <img src={IconDetail} alt="" />
            </div>
            <h3 className="heading">Detailed Records</h3>
            <p className="paragraph">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div className="feature-item">
            <div className="icon-wrapper">
              <img src={IconCustomisable} alt="" />
            </div>
            <h3 className="heading">Fully Customizable</h3>
            <p className="paragraph">
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
