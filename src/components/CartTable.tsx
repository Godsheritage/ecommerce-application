import React from "react";
import { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { contextTypes } from "../types";
import { Link } from "react-router-dom";
import { FaPlus, FaMinus } from "react-icons/fa";

const CartTable = () => {
  const { cart } = useContext(ProductContext) as contextTypes;

  //sum all the products
  const sum = cart.reduce((total: any, curVal: any) => {
    return total + curVal.price;
  }, 0);

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
                      <tr key={cartItem.id}>
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
                            <FaMinus className="qtybtn" onClick={ () => (cartItem.quantity + 1)}/>
                              <input type="text" defaultValue={cartItem.quantity} />
                            <FaPlus className="qtybtn"/>
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
            <Link to="/checkout" className="site-btn">
              Proceed to checkout
            </Link>
            <Link to="/" className="site-btn sb-dark">
              Continue shopping
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="input-group plus-minus-input">
  <div className="input-group-button">
    <button type="button" className="button hollow circle" data-quantity="minus" data-field="quantity">
      <i className="fa fa-minus" aria-hidden="true"></i>
    </button>
  </div>
  <input className="input-group-field" type="number" name="quantity" value="0"/>
  <div className="input-group-button">
    <button type="button" className="button hollow circle" data-quantity="plus" data-field="quantity">
      <i className="fa fa-plus" aria-hidden="true"></i>
    </button>
  </div>
</div> */}
    </section>
  );
};

export default CartTable;
