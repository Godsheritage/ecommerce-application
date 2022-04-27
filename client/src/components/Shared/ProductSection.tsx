import { useContext } from "react";
import { contextTypes, productTypes } from "../../types";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import ProductContext from "../../context/ProductContext";

const ProductSection: React.FC<any> = ( {products} ) => {
  const { addToCart, fetchSingleProduct } = useContext(
    ProductContext
  ) as contextTypes;

  return (
    <div>
      <section className="top-letest-product-section">
        <div className="container">
          <div className="section-title">
            <h2>LATEST PRODUCTS</h2>
          </div>
          <div className="row">
            {products.map((product: any) => (
              <div className="col-lg-3 col-sm-6" key={product._id}>
                <div className="product-item">
                  <div className="pi-pic">
                    <img src={product.image} alt={product.name} onClick = {() => fetchSingleProduct(product) } />
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductSection;
