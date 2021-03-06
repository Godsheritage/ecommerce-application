import { useContext } from "react";
import { contextTypes } from "../../types";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import ProductContext from "../../context/ProductContext";

const FavouriteProducts = () => {
  const { favouriteProducts, addToCart } = useContext(
    ProductContext
  ) as contextTypes;

  return (
    <div>
      <section className="related-product-section spad">
        <div className="container">
          <div className="section-title">
            <h2>Your Favorites</h2>
          </div>
          <div className="row">
            {favouriteProducts.map((product) => (
              <div className="col-lg-3 col-sm-6" key={product._id}>
                <div className="product-item">
                  <div className="pi-pic">
                    <div className="tag-new">New</div>
                    <img src={product.image} alt={product.title} />
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

export default FavouriteProducts;
