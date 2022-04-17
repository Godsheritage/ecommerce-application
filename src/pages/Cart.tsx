import Header from "../components/Header";
import Footer from "../components/Footer";
import FavouriteProducts from "../components/FavouriteProducts";

import cartImg1 from "../assets/img/cart/1.jpg";
import cartImg2 from "../assets/img/cart/2.jpg";
import cartImg3 from "../assets/img/cart/3.jpg";



const Cart = () => {
  return (
    <div>
      <Header />

      <div className="page-top-info">
        <div className="container">
          <h4>Your cart</h4>
          <div className="site-pagination">
            <a href="">Home</a> /<a href="">Your cart</a>
          </div>
        </div>
      </div>
      {/* <!-- Page info end --> */}

      {/* <!-- cart section end --> */}
      <section className="cart-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="cart-table">
                <h3>Your Cart</h3>
                <div className="cart-table-warp">
                  <table>
                    <thead>
                      <tr>
                        <th className="product-th">Product</th>
                        <th className="quy-th">Quantity</th>
                        <th className="size-th">SizeSize</th>
                        <th className="total-th">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="product-col">
                          <img src={cartImg1} alt="cartImage1" />
                          <div className="pc-title">
                            <h4>Animal Print Dress</h4>
                            <p>$45.90</p>
                          </div>
                        </td>
                        <td className="quy-col">
                          <div className="quantity">
                            <div className="pro-qty">
                              <input type="text" value="1" />
                            </div>
                          </div>
                        </td>
                        <td className="size-col">
                          <h4>Size M</h4>
                        </td>
                        <td className="total-col">
                          <h4>$45.90</h4>
                        </td>
                      </tr>
                      <tr>
                        <td className="product-col">
                          <img src={cartImg2} alt="cartImage2" />
                          <div className="pc-title">
                            <h4>Ruffle Pink Top</h4>
                            <p>$45.90</p>
                          </div>
                        </td>
                        <td className="quy-col">
                          <div className="quantity">
                            <div className="pro-qty">
                              <input type="text" value="1" />
                            </div>
                          </div>
                        </td>
                        <td className="size-col">
                          <h4>Size M</h4>
                        </td>
                        <td className="total-col">
                          <h4>$45.90</h4>
                        </td>
                      </tr>
                      <tr>
                        <td className="product-col">
                          <img src={cartImg3} alt="cartImage3" />
                          <div className="pc-title">
                            <h4>Skinny Jeans</h4>
                            <p>$45.90</p>
                          </div>
                        </td>
                        <td className="quy-col">
                          <div className="quantity">
                            <div className="pro-qty">
                              <input type="text" value="1" />
                            </div>
                          </div>
                        </td>
                        <td className="size-col">
                          <h4>Size M</h4>
                        </td>
                        <td className="total-col">
                          <h4>$45.90</h4>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="total-cost">
                  <h6>
                    Total <span>$99.90</span>
                  </h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4 card-right">
              <form className="promo-code-form">
                <input type="text" placeholder="Enter promo code" />
                <button>Submit</button>
              </form>
              <a href="" className="site-btn">
                Proceed to checkout
              </a>
              <a href="" className="site-btn sb-dark">
                Continue shopping
              </a>
            </div>
          </div>
        </div>
      </section>

      <FavouriteProducts />
      <Footer />
    </div>
  );
};

export default Cart;
