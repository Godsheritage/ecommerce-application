import React from "react";
import bg2 from "../assets/img/bg-2.jpg";
import bg from "../assets/img/bg.jpg";
// import webpack from 'webpack'
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel';

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={bg} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={bg} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={bg2} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* <section className="hero-section">
        <div className="hero-slider owl-carousel">
          <div className="hs-item set-bg" data-setbg={bg}>
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-7 text-white">
                  <span>New Arrivals</span>
                  <h2>denim jackets</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum sus-pendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis.{" "}
                  </p>
                  <button className="site-btn sb-line">DISCOVER</button>
                  <button className="site-btn sb-white">ADD TO CART</button>
                </div>
              </div>
              <div className="offer-card text-white">
                <span>from</span>
                <h2>$29</h2>
                <p>SHOP NOW</p>
              </div>
            </div>
          </div>
          <div className="hs-item set-bg" data-setbg={bg2}>
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-7 text-white">
                  <span>New Arrivals</span>
                  <h2>denim jackets</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum sus-pendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis.{" "}
                  </p>
                  <button className="site-btn sb-line">DISCOVER</button>
                  <button className="site-btn sb-white">ADD TO CART</button>
                </div>
              </div>
              <div className="offer-card text-white">
                <span>from</span>
                <h2>$29</h2>
                <p>SHOP NOW</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="slide-num-holder" id="snh-1"></div>
        </div>
  </section>*/}
    </div>
  );
};

export default Hero;
