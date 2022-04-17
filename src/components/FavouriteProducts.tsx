import product1 from "../assets/img/product/1.jpg";
import product2 from "../assets/img/product/2.jpg";
import product5 from "../assets/img/product/5.jpg";
import product9 from "../assets/img/product/9.jpg";
import {FaShoppingCart, FaHeart} from 'react-icons/fa'

const FavouriteProducts = () => {
  return (
    <div>
      <section className="related-product-section spad">
        <div className="container">
          <div className="section-title">
            <h2>Your Favorites</h2>
          </div>
          <div className="row">
            <div className="col-lg-3 col-sm-6">
              <div className="product-item">
                <div className="pi-pic">
                  <div className="tag-new">New</div>
                  <img src={product2} alt="product 2" />
                  <div className="pi-links">
                    <a href="#" className="add-card">
                      <FaShoppingCart/>
                      <span>ADD TO CART</span>
                    </a>
                    <a href="#" className="wishlist-btn">
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
                  <img src={product5} alt="product 5" />
                  <div className="pi-links">
                    <a href="#" className="add-card">
                      <FaShoppingCart/>
                      <span>ADD TO CART</span>
                    </a>
                    <a href="#" className="wishlist-btn">
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
                  <img src={product9} alt="product 9" />
                  <div className="pi-links">
                    <a href="#" className="add-card">
                      <FaShoppingCart/>
                      <span>ADD TO CART</span>
                    </a>
                    <a href="#" className="wishlist-btn">
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
                  <img src={product1} alt="product 1" />
                  <div className="pi-links">
                    <a href="#" className="add-card">
                      <FaShoppingCart/>
                      <span>ADD TO CART</span>
                    </a>
                    <a href="#" className="wishlist-btn">
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
        </div>
      </section>
    </div>
  );
};

export default FavouriteProducts;
