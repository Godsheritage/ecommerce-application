import { useContext, useState } from "react";
import { contextTypes } from "../types";
import { Link } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa";
import ProductContext from "../context/ProductContext";

const CartTable = () => {
  const { cart, sum } = useContext(ProductContext) as contextTypes;

  const [quantity, setQuantity] = useState<number>(1);

  // const plusOne = () => {
  //   cartItem.quantity++
  //   setQuantity(quantity + 1);
  // };

  // const minusOne = () => {
  //   cartItem.quantity --
  //   setQuantity(quantity + 1);
  // };

  // const defaultn = 1


//TODO make a way for the value of the quantity to change on click of the + or - btn

  return (
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
                    {cart.map((cartItem) => (
                      <tr key={cartItem._id}>
                        <td className="product-col">
                          <img src={cartItem.image} alt="cartImage1" />
                          <div className="pc-title">
                            <h4>{cartItem.name}</h4>
                            <p>${cartItem.price}</p>
                          </div>
                        </td>
                        <td className="quy-col">
                          <div className="quantity">
                            <div className="pro-qty">
                              <FaMinus
                                className="qtybtn"
                                onClick={() => cartItem.quantity--  }
                              />
                              <input
                                type="text"
                                value={cartItem.quantity}
                              />
                              <FaPlus
                                className="qtybtn"
                                onClick={() => cartItem.quantity ++ }
                              />
                            </div>
                          </div>
                        </td>
                        <td className="size-col">
                          <h4>Size {cartItem.size}</h4>
                        </td>
                        <td className="total-col">
                          <h4>${cartItem.price}</h4>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="total-cost">
                <h6>
                  Total <span>${sum}</span>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-lg-4 card-right">
            <form className="promo-code-form">
              <input type="text" placeholder="Enter promo code" />
              <button>Submit</button>
            </form>
            <Link to="/checkout" className="site-btn card-link">
              Proceed to checkout
            </Link>
            <Link to="/" className="site-btn sb-dark card-link">
              Continue shopping
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartTable;
