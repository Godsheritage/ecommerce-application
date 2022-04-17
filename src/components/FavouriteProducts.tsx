import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { contextTypes } from "../types";

const FavouriteProducts = () => {
  const { favouriteProducts } = useContext(ProductContext) as contextTypes;

  return (
    <div>
      <section className="related-product-section spad">
        <div className="container">
          <div className="section-title">
            <h2>Your Favorites</h2>
          </div>
          <div className="row">
            {favouriteProducts.map((product) => (
              <div className="col-lg-3 col-sm-6">
                <div className="product-item">
                  <div className="pi-pic">
                    <div className="tag-new">New</div>
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
        </div>
      </section>
    </div>
  );
};

export default FavouriteProducts;
