//TODO  this component is unused and to be deleted

import { useContext } from "react";
import { contextTypes } from "../../types";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import ProductContext from "../../context/ProductContext";
import ProductSection from "../Shared/ProductSection";

const LatestProducts: React.FC = () => {
  const { latestProducts, addToCart } = useContext(
    ProductContext
  ) as contextTypes;

  const fetchSingleProd = (product: any) => {};

  return (
    <div>
      <section className="top-letest-product-section">
        <div className="container">
          <div className="section-title">
            <h2>LATEST PRODUCTS</h2>
          </div>
          <div className="row">
            {latestProducts.map((product) => (
              <div className="col-lg-3 col-sm-6" key={product._id}>
                <div className="product-item">
                  <div className="pi-pic">
                    <img
                      src={product.image}
                      alt={product.title}
                      onClick={() => fetchSingleProd(product)}
                    />
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
                    <p>{product.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LatestProducts;
