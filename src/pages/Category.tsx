import Header from "../components/Home/Header";
import Footer from "../components/Home/Footer";
import ProductContext from "../context/ProductContext";
import { useContext } from "react";
import { contextTypes } from "../types";
import PageTopInfo from "../components/Shared/PageTopInfo";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const Category = () => {
  const { topSellingProducts, addToCart } = useContext(ProductContext) as contextTypes;
  return (
    <>
      <Header />
      <PageTopInfo page="categories" link="/category" />

      <section className="category-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 order-2 order-lg-1">
              <div className="filter-widget">
                <h2 className="fw-title">Categories</h2>
                <ul className="category-menu">
                  <li>
                    <a href="#">Woman wear</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="#">
                          Midi Dresses <span>(2)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Maxi Dresses<span>(56)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Prom Dresses<span>(36)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Little Black Dresses <span>(27)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Mini Dresses<span>(19)</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Man Wear</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="#">
                          Midi Dresses <span>(2)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Maxi Dresses<span>(56)</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Prom Dresses<span>(36)</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Children</a>
                  </li>
                  <li>
                    <a href="#">Bags & Purses</a>
                  </li>
                  <li>
                    <a href="#">Eyewear</a>
                  </li>
                  <li>
                    <a href="#">Footwear</a>
                  </li>
                </ul>
              </div>
              <div className="filter-widget mb-0">
                <h2 className="fw-title">refine by</h2>
                <div className="price-range-wrap">
                  <h4>Price</h4>
                  <div
                    className="price-range ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content"
                    data-min="10"
                    data-max="270"
                  >
                    <div
                      className="ui-slider-range ui-corner-all ui-widget-header"
                      style={{ left: "0%", width: "100%" }}
                    ></div>
                    <span
                      className="ui-slider-handle ui-corner-all ui-state-default"
                      style={{ left: "0%" }}
                    >
                      {" "}
                    </span>
                    <span
                      className="ui-slider-handle ui-corner-all ui-state-default"
                      style={{ left: "100%" }}
                    ></span>
                  </div>
                  <div className="range-slider">
                    <div className="price-input">
                      <input type="text" id="minamount" />
                      <input type="text" id="maxamount" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-widget mb-0">
                <h2 className="fw-title">color by</h2>
                <div className="fw-color-choose">
                  <div className="cs-item">
                    <input type="radio" name="cs" id="gray-color" />
                    <label className="cs-gray" htmlFor="gray-color">
                      <span>(3)</span>
                    </label>
                  </div>
                  <div className="cs-item">
                    <input type="radio" name="cs" id="orange-color" />
                    <label className="cs-orange" htmlFor="orange-color">
                      <span>(25)</span>
                    </label>
                  </div>
                  <div className="cs-item">
                    <input type="radio" name="cs" id="yollow-color" />
                    <label className="cs-yollow" htmlFor="yollow-color">
                      <span>(112)</span>
                    </label>
                  </div>
                  <div className="cs-item">
                    <input type="radio" name="cs" id="green-color" />
                    <label className="cs-green" htmlFor="green-color">
                      <span>(75)</span>
                    </label>
                  </div>
                  <div className="cs-item">
                    <input type="radio" name="cs" id="purple-color" />
                    <label className="cs-purple" htmlFor="purple-color" />
                    <span>(9)</span>
                    <label />
                  </div>
                  <div className="cs-item">
                    <input type="radio" name="cs" id="blue-color" checked />
                    <label className="cs-blue" htmlFor="blue-color">
                      <span>(29)</span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="filter-widget mb-0">
                <h2 className="fw-title">Size</h2>
                <div className="fw-size-choose">
                  <div className="sc-item">
                    <input type="radio" name="sc" id="xs-size" />
                    <label htmlFor="xs-size">XS</label>
                  </div>
                  <div className="sc-item">
                    <input type="radio" name="sc" id="s-size" />
                    <label htmlFor="s-size">S</label>
                  </div>
                  <div className="sc-item">
                    <input type="radio" name="sc" id="m-size" checked />
                    <label htmlFor="m-size">M</label>
                  </div>
                  <div className="sc-item">
                    <input type="radio" name="sc" id="l-size" />
                    <label htmlFor="l-size">L</label>
                  </div>
                  <div className="sc-item">
                    <input type="radio" name="sc" id="xl-size" />
                    <label htmlFor="xl-size">XL</label>
                  </div>
                  <div className="sc-item">
                    <input type="radio" name="sc" id="xxl-size" />
                    <label htmlFor="xxl-size">XXL</label>
                  </div>
                </div>
              </div>
              <div className="filter-widget">
                <h2 className="fw-title">Brand</h2>
                <ul className="category-menu">
                  <li>
                    <a href="#">
                      Abercrombie & Fitch <span>(2)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Asos<span>(56)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Bershka<span>(36)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Missguided<span>(27)</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Zara<span>(19)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-9  order-1 order-lg-2 mb-5 mb-lg-0">
              <div className="row">
                {topSellingProducts.map((product) => (
                  <div className="col-lg-4 col-sm-6" key={product.id}>
                    <div className="product-item">
                      <div className="pi-pic">
                        <div className="tag-sale">ON SALE</div>
                        <img src={product.image} alt={product.name} />
                        <div className="pi-links">
                          <button
                            className="add-card"
                            onClick={() => addToCart(product)}
                          >
                            <FaShoppingCart className="i" />
                            <span>ADD TO CART</span>
                          </button>
                          <button className="wishlist-btn">
                            <FaHeart className="i" />
                          </button>
                        </div>
                      </div>
                      <div className="pi-text">
                        <h6>${product.price}</h6>
                        <p>{product.name}</p>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="text-center w-100 pt-3">
                  <button className="site-btn sb-line sb-dark">
                    LOAD MORE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Category;
