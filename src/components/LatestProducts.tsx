import React from "react";
import product1 from "../assets/img/product/1.jpg";
import product2 from "../assets/img/product/2.jpg";
import product3 from "../assets/img/product/3.jpg";
import product4 from "../assets/img/product/4.jpg";
import product6 from "../assets/img/product/6.jpg";

import { FaHeart, FaShoppingCart } from "react-icons/fa";

const LatestProducts: React.FC = () => {
  return (
    <div>
      <section className="top-letest-product-section">
        <div className="container">
          <div className="section-title">
            <h2>LATEST PRODUCTS</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="product-item">
                <div className="pi-pic">
                  <img src={product6} alt="" />
                  <div className="pi-links">
                    <a href="#" className="add-card">
                      {/* <i className="flaticon-bag"></i> */}
                      <FaShoppingCart />
                      <span>ADD TO CART</span>
                    </a>
                    <a href="#" className="wishlist-btn">
                      {/* <i className="flaticon-heart"></i> */}
                      <FaHeart />
                    </a>
                  </div>
                </div>
                <div className="pi-text">
                  <h6>$35,00</h6>
                  <p>Flamboyant Pink Top </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="product-item">
                <div className="pi-pic">
                  <div className="tag-sale">ON SALE</div>
                  <img src={product6} alt="" />
                  <div className="pi-links">
                    <a href="#" className="add-card">
                      {/* <i className="flaticon-bag"></i> */}
                      <FaShoppingCart />
                      <span>ADD TO CART</span>
                    </a>
                    <a href="#" className="wishlist-btn">
                      {/* <i className="flaticon-heart"></i> */}
                      <FaHeart />
                    </a>
                  </div>
                </div>
                <div className="pi-text">
                  <h6>$35,00</h6>
                  <p>Black and White Stripes Dress</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="product-item">
                <div className="pi-pic">
                  <img src={product1} alt="" />
                  <div className="pi-links">
                    <a href="#" className="add-card">
                      {/* <i className="flaticon-bag"></i> */}
                      <FaShoppingCart />
                      <span>ADD TO CART</span>
                    </a>
                    <a href="#" className="wishlist-btn">
                      {/* <i className="flaticon-heart"></i> */}
                      <FaHeart />
                    </a>
                  </div>
                </div>
                <div className="pi-text">
                  <h6>$35,00</h6>
                  <p>Flamboyant Pink Top </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="product-item">
                <div className="pi-pic">
                  <img src={product2} alt="" />
                  <div className="pi-links">
                    <a href="#" className="add-card">
                      {/* <i className="flaticon-bag"></i> */}
                      <FaShoppingCart />
                      <span>ADD TO CART</span>
                    </a>
                    <a href="#" className="wishlist-btn">
                      {/* <i className="flaticon-heart"></i> */}
                      <FaHeart />
                    </a>
                  </div>
                </div>
                <div className="pi-text">
                  <h6>$35,00</h6>
                  <p>Flamboyant Pink Top </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="product-item">
                <div className="pi-pic">
                  <img src={product3} alt="" />
                  <div className="pi-links">
                    <a href="#" className="add-card">
                      {/* <i className="flaticon-bag"></i> */}
                      <FaShoppingCart />
                      <span>ADD TO CART</span>
                    </a>
                    <a href="#" className="wishlist-btn">
                      <i className="flaticon-heart"></i>
                      {/* <FaHeart/> */}
                      <FaShoppingCart />
                    </a>
                  </div>
                </div>
                <div className="pi-text">
                  <FaHeart />
                  {/* <h6>$35,00</h6> */}
                  <p>Flamboyant Pink Top </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="product-item">
                <div className="pi-pic">
                  <img src={product4} alt="" />
                  <div className="pi-links">
                    <a href="#" className="add-card">
                      {/* <i className="flaticon-bag"></i> */}
                      <FaShoppingCart />
                      <span>ADD TO CART</span>
                    </a>
                    <a href="#" className="wishlist-btn">
                      {/* <i className="flaticon-heart"></i> */}
                      <FaHeart />
                    </a>
                  </div>
                </div>
                <div className="pi-text">
                  <h6>$35,00</h6>
                  <p>Black and White Stripes Dress</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="product-item">
                <div className="pi-pic">
                  <img src={product2} alt="" />
                  <div className="pi-links">
                    <a href="#" className="add-card">
                      {/* <i className="flaticon-bag"></i> */}
                      <FaShoppingCart />
                      <span>ADD TO CART</span>
                    </a>
                    <a href="#" className="wishlist-btn">
                      {/* <i className="flaticon-heart"></i> */}
                      <FaHeart />
                    </a>
                  </div>
                </div>
                <div className="pi-text">
                  <h6>$35,00</h6>
                  <p>Flamboyant Pink Top </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="product-item">
                <div className="pi-pic">
                  <img src={product6} alt="" />
                  <div className="pi-links">
                    <a href="#" className="add-card">
                      {/* <i className="flaticon-bag"></i> */}
                      <FaShoppingCart />
                      <span>ADD TO CART</span>
                    </a>
                    <a href="#" className="wishlist-btn">
                      {/* <i className="flaticon-heart"></i> */}
                      <FaHeart />
                    </a>
                  </div>
                </div>
                <div className="pi-text">
                  <h6>$35,00</h6>
                  <p>Flamboyant Pink Top </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LatestProducts;
