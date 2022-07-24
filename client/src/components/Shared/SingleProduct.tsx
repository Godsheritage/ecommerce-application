import Footer from "../Home/Footer";
import Header from "../Home/Header";
import PageTopInfo from "./PageTopInfo";
import { contextTypes } from "../../types";
import { useContext, useEffect } from "react";
import ProductSection from "./ProductSection";
import ProductContext from "../../context/ProductContext";
import {
  FaFacebook,
  FaGooglePlus,
  FaMinus,
  FaPinterest,
  FaPlus,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const SingleProduct: React.FC = () => {
  const { singleProduct, favouriteProducts, addToCart } = useContext(
    ProductContext
  ) as contextTypes;

  if (typeof singleProduct === "undefined") {
    window.location.replace("/");
  }

  const sizes = [
    {
      size: "",
      htmlFor: "",
    },
  ];

  return (
    <div>
      <Header />
      <PageTopInfo page="category" link="/" />
      <section className="product-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="product-pic-zoom">
                <img
                  className="product-big-img"
                  src="img/single-product/1.jpg"
                  alt=""
                />
              </div>
              <div
                className="product-thumbs"
                style={{ overflow: "hidden", outline: "none" }}
              >
                <div className="product-thumbs-track">
                  <div
                    className="pt active"
                    data-imgbigurl="img/single-product/1.jpg"
                  >
                    <img src="img/single-product/thumb-1.jpg" alt="" />
                  </div>
                  <div className="pt" data-imgbigurl="img/single-product/2.jpg">
                    <img src="img/single-product/thumb-2.jpg" alt="" />
                  </div>
                  <div className="pt" data-imgbigurl="img/single-product/3.jpg">
                    <img src="img/single-product/thumb-3.jpg" alt="" />
                  </div>
                  <div className="pt" data-imgbigurl="img/single-product/4.jpg">
                    <img src="img/single-product/thumb-4.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 product-details">
              <h2 className="p-title">{singleProduct.title}</h2>
              <h3 className="p-price">${singleProduct.price}</h3>
              <h4 className="p-stock">
                Available: <span>In Stock</span>
              </h4>
              <div className="p-rating">
                <i className="fa fa-star-o"></i>
                <i className="fa fa-star-o"></i>
                <i className="fa fa-star-o"></i>
                <i className="fa fa-star-o"></i>
                <i className="fa fa-star-o fa-fade"></i>
              </div>
              <div className="fw-size-choose">
                <p>Size</p>
                <div className="sc-item">
                  <input type="radio" name="sc" id="xs-size" />
                  <label htmlFor="xs-size">32</label>
                </div>
                <div className="sc-item">
                  <input type="radio" name="sc" id="s-size" />/{" "}
                  <label htmlFor="s-size">34</label>
                </div>
                <div className="sc-item">
                  <input type="radio" name="sc" id="m-size" defaultChecked />
                  <label htmlFor="m-size">36</label>
                </div>
                <div className="sc-item">
                  <input type="radio" name="sc" id="l-size" />/{" "}
                  <label htmlFor="l-size">38</label>
                </div>
                <div className="sc-item disable">
                  <input type="radio" name="sc" id="xl-size" disabled />
                  <label htmlFor="xl-size">40</label>
                </div>
                <div className="sc-item">
                  <input type="radio" name="sc" id="xxl-size" />
                  <label htmlFor="xxl-size">42</label>
                </div>
              </div>
              <div className="quantity">
                <div className="pro-qty">
                  <FaMinus
                    className="qtybtn1"
                    onClick={() => singleProduct.quantity--}
                  />
                  <input type="text" value={singleProduct.quantity} />
                  <FaPlus
                    className="qtybtn1"
                    onClick={() => singleProduct.quantity++}
                  />
                </div>
              </div>
              <button
                className="site-btn"
                onClick={() => addToCart(singleProduct)}
              >
                ADD TO CART
              </button>
              <div id="accordion" className="accordion-area">
                <div className="panel">
                  <div className="panel-header" id="headingOne">
                    <button
                      className="panel-link active"
                      data-toggle="collapse"
                      data-target="#collapse1"
                      aria-expanded="true"
                      aria-controls="collapse1"
                    >
                      information
                    </button>
                  </div>
                  <div
                    id="collapse1"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div className="panel-body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin pharetra tempor so dales. Phasellus sagittis
                        auctor gravida. Integer bibendum sodales arcu id te
                        mpus. Ut consectetur lacus leo, non scelerisque nulla
                        euismod nec.
                      </p>
                      <p>
                        Approx length 66cm/26" (Based on a UK size 8 sample)
                      </p>
                      <p>Mixed fibres</p>
                      <p>
                        The Model wears a UK size 8/ EU size 36/ US size 4 and
                        her height is 5'8"
                      </p>
                    </div>
                  </div>
                </div>
                <div className="panel">
                  <div className="panel-header" id="headingTwo">
                    <button
                      className="panel-link"
                      data-toggle="collapse"
                      data-target="#collapse2"
                      aria-expanded="false"
                      aria-controls="collapse2"
                    >
                      care details{" "}
                    </button>
                  </div>
                  <div
                    id="collapse2"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordion"
                  >
                    <div className="panel-body">
                      <img src="./img/cards.png" alt="" />
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin pharetra tempor so dales. Phasellus sagittis
                        auctor gravida. Integer bibendum sodales arcu id te
                        mpus. Ut consectetur lacus leo, non scelerisque nulla
                        euismod nec.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="panel">
                  <div className="panel-header" id="headingThree">
                    <button
                      className="panel-link"
                      data-toggle="collapse"
                      data-target="#collapse3"
                      aria-expanded="false"
                      aria-controls="collapse3"
                    >
                      shipping & Returns
                    </button>
                  </div>
                  <div
                    id="collapse3"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordion"
                  >
                    <div className="panel-body">
                      <h4>7 Days Returns</h4>
                      <p>
                        Cash on Delivery Available
                        <br />
                        Home Delivery <span>3 - 4 days</span>
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin pharetra tempor so dales. Phasellus sagittis
                        auctor gravida. Integer bibendum sodales arcu id te
                        mpus. Ut consectetur lacus leo, non scelerisque nulla
                        euismod nec.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="social-sharing">
                <a href="https://google.com">
                  <i className="fa fa-google-plus">
                    <FaGooglePlus />
                  </i>
                </a>
                <a href="https://google.com">
                  <FaPinterest />
                </a>
                <a href="https://google.com">
                  <FaFacebook />
                </a>
                <a href="https://google.com">
                  <FaTwitter />
                </a>
                <a href="https://google.com">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ProductSection products={favouriteProducts} header="RELATED PRODUCTS" />
      <Footer />
    </div>
  );
};

export default SingleProduct;

//todo create product section and pass the state item into the sections so as to be able to toop over the items and return roducts
