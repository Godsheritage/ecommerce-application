import React, { useContext } from "react";

import product1 from "../assets/img/product/1.jpg";
import product2 from "../assets/img/product/2.jpg";
import product3 from "../assets/img/product/3.jpg";
import product4 from "../assets/img/product/4.jpg";
import product6 from "../assets/img/product/6.jpg";

import { FaHeart, FaShoppingCart } from "react-icons/fa";
import ProductContext from "../context/ProductContext";
import { contextTypes } from "../types";

const LatestProducts: React.FC = () => {
  const { latestProduct, addToCart } = useContext(ProductContext) as contextTypes;


  return (
    <div>
      <section className="top-letest-product-section">
        <div className="container">
          <div className="section-title">
            <h2>LATEST PRODUCTS</h2>
          </div>
          <div className="row">
            {latestProduct.map((product) => (
              <div className="col-lg-3 col-sm-6" key={product.id}>
                <div className="product-item">
                  <div className="pi-pic">
                    <img src={product.image} alt={product.name} />
                    <div className="pi-links">
                      <a  onClick={() => addToCart(product)} className="add-card">
                        <FaShoppingCart />
                        <span>ADD TO CART</span>
                      </a>
                      <a href="#" className="wishlist-btn">
                        <FaHeart />
                      </a>
                    </div>
                  </div>
                  <div className="pi-text">
                    <h6>${product.price}</h6>
                    <p>{product.name}</p>
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
