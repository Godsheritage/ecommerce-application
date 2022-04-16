import { useContext } from "react";
import { contextTypes } from "../types";
import ProductContext from "../context/ProductContext";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

const ProductsFilterSection = () => {
  const { topSellingProducts } = useContext(ProductContext) as contextTypes;

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
            {topSellingProducts.map((product) => (
              <div className="col-lg-3 col-sm-6" key={product.id}>
                <div className="product-item">
                  <div className="pi-pic">
                    <img src={product.image} alt={product.name} />
                    <div className="pi-links">
                      <a href="#" className="add-card">
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
          <div className="text-center pt-5">
            <button className="site-btn sb-line sb-dark">LOAD MORE</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsFilterSection;
