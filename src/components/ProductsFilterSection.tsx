import product5 from "../assets/img/product/5.jpg";
import product6 from "../assets/img/product/6.jpg";
import product7 from "../assets/img/product/7.jpg";
import product8 from "../assets/img/product/8.jpg";
import product9 from "../assets/img/product/9.jpg";
import product10 from "../assets/img/product/10.jpg";
import product11 from "../assets/img/product/11.jpg";
import product12 from "../assets/img/product/12.jpg";

import { FaShoppingCart, FaHeart } from "react-icons/fa";


const ProductsFilterSection = () => {
  return (
    <div>
      <section className="product-filter-section">
        <div className="container">
          <div className="section-title">
            <h2>BROWSE TOP SELLING PRODUCTS</h2>
          </div>
          <ul className="product-filter-menu">
            <li>
              <a href="#">TOPS</a>
            </li>
            <li>
              <a href="#">JUMPSUITS</a>
            </li>
            <li>
              <a href="#">LINGERIE</a>
            </li>
            <li>
              <a href="#">JEANS</a>
            </li>
            <li>
              <a href="#">DRESSES</a>
            </li>
            <li>
              <a href="#">COATS</a>
            </li>
            <li>
              <a href="#">JUMPERS</a>
            </li>
            <li>
              <a href="#">LEGGINGS</a>
            </li>
          </ul>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="product-item">
                <div className="pi-pic">
                  <img src={product5} alt="" />
                  <div className="pi-links">
                    <a href="#" className="add-card">
                      {/* <i className="flaticon-bag"></i> */}
                      <FaShoppingCart/>
                      <span>ADD TO CART</span>
                    </a>
                    <a href="#" className="wishlist-btn">
                      {/* <i className="flaticon-heart"></i> */}
                      <FaHeart/>
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
                      <FaShoppingCart/>
                      <span>ADD TO CART</span>
                    </a>
                    <a href="#" className="wishlist-btn">
                      {/* <i className="flaticon-heart"></i> */}
                      <FaHeart/>
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
                  <img src={product7} alt="" />
                  <div className="pi-links">
                    <a href="#" className="add-card">
                      {/* <i className="flaticon-bag"></i> */}
                      <FaShoppingCart/>
                      <span>ADD TO CART</span>
                    </a>
                    <a href="#" className="wishlist-btn">
                      {/* <i className="flaticon-heart"></i> */}
                      <FaHeart/>
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
                  <img src={product8} alt="" />
                  <div className="pi-links">
                    <a href="#" className="add-card">
                      {/* <i className="flaticon-bag"></i> */}
                      <FaShoppingCart/>
                      <span>ADD TO CART</span>
                    </a>
                    <a href="#" className="wishlist-btn">
                      {/* <i className="flaticon-heart"></i> */}
                      <FaHeart/>
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
                  <img src={product9} alt="" />
                  <div className="pi-links">
                    <a href="#" className="add-card">
                      {/* <i className="flaticon-bag"></i> */}
                      <FaShoppingCart/>
                      <span>ADD TO CART</span>
                    </a>
                    <a href="#" className="wishlist-btn">
                      <i className="flaticon-heart"></i>
                      {/* <FaHeart/> */}
                      <FaShoppingCart/>
                    </a>
                  </div>
                </div>
                <div className="pi-text">
                  
                  <FaHeart/>{/* <h6>$35,00</h6> */}
                  <p>Flamboyant Pink Top </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="product-item">
                <div className="pi-pic">
                  <img src={product10} alt="" />
                  <div className="pi-links">
                    <a href="#" className="add-card">
                      {/* <i className="flaticon-bag"></i> */}
                      <FaShoppingCart/>
                      <span>ADD TO CART</span>
                    </a>
                    <a href="#" className="wishlist-btn">
                      {/* <i className="flaticon-heart"></i> */}
                      <FaHeart/>
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
                  <img src={product11} alt="" />
                  <div className="pi-links">
                    <a href="#" className="add-card">
                      {/* <i className="flaticon-bag"></i> */}
                      <FaShoppingCart/>
                      <span>ADD TO CART</span>
                    </a>
                    <a href="#" className="wishlist-btn">
                      {/* <i className="flaticon-heart"></i> */}
                      <FaHeart/>
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
                  <img src={product12} alt="" />
                  <div className="pi-links">
                    <a href="#" className="add-card">
                      {/* <i className="flaticon-bag"></i> */}
                      <FaShoppingCart/>
                      <span>ADD TO CART</span>
                    </a>
                    <a href="#" className="wishlist-btn">
                      {/* <i className="flaticon-heart"></i> */}
                      <FaHeart/>
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
          <div className="text-center pt-5">
            <button className="site-btn sb-line sb-dark">LOAD MORE</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsFilterSection;
