import React from "react";
import banner from "../assets/img/banner-bg.jpg";

const Banner: React.FC = () => {
  return (
    <div>
      <section className="banner-section">
        <div className="container">
          <div className="banner set-bg" data-setbg={banner}>
            <div className="tag-new">NEW</div>
            <span>New Arrivals</span>
            <h2>STRIPED SHIRTS</h2>
            <button className="site-btn">SHOP NOW</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
