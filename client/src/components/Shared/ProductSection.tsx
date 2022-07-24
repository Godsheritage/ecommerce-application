import { useContext } from "react";
import Card from "../../shared/UI Elements/Card/Card";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import ProductContext from "../../context/ProductContext";
import { contextTypes, productTypes, PRODUCT_SECTION_TYPES } from "../../types";

const ProductSection: React.FC<PRODUCT_SECTION_TYPES> = ({
  products,
  header,
  style,
}) => {
  const { addToCart, fetchSingleProduct } = useContext(
    ProductContext
  ) as contextTypes;

  return (
    <div style={style}>
      <section className="top-letest-product-section">
        <div className="container">
          <div className="section-title">
            <h2>{header}</h2>
          </div>
          <div className="row">
            {products.map((product: any) => (
              <div className="col-lg-3 col-sm-6" key={product._id}>
  
                  <Card style={{height: "22rem"}} className ="m-2">
                  <div className="product-item">
                    <div className="pi-pic">
                      <img
                        src={product.image}
                        alt={product.name}
                        onClick={() => fetchSingleProduct(product)}
                        style={{margin:" auto, 0"}}
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
                      <p>{product.name}</p>
                    </div>
                  </div>
              </Card>
                </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductSection;
