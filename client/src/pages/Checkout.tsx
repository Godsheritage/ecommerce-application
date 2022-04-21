import { useContext, useState } from "react";
import { contextTypes } from "../types";
import paypal from "../assets/img/paypal.png";
import Header from "../components/Home/Header";
import Footer from "../components/Home/Footer";
import mastercard from "../assets/img/mastercart.png";
import ProductContext from "../context/ProductContext";
import PageTopInfo from "../components/Shared/PageTopInfo";

const Checkout: React.FC = () => {
  const { cart, sum } = useContext(ProductContext) as contextTypes;

  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div>
      <Header />
      <PageTopInfo page="Checkout" link="/checkout" />

      <section className="checkout-section spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 order-2 order-lg-1">
              <form className="checkout-form">
                <div className="cf-title">Billing Address</div>
                <div className="row">
                  <div className="col-md-7">
                    <p>*Billing Information</p>
                  </div>
                  <div className="col-md-5">
                    <div className="cf-radio-btns address-rb">
                      <div className="cfr-item">
                        <input type="radio" name="pm" id="one" checked/>
                        <label htmlFor="one">Use my regular address</label>
                      </div>
                      <div className="cfr-item">
                        <input type="radio" name="pm" id="two" />
                        <label htmlFor="two">Use a different address</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row address-inputs">
                  <div className="col-md-12">
                    <input type="text" placeholder="Address" />
                    <input type="text" placeholder="Address line 2" />
                    <input type="text" placeholder="Country" />
                  </div>
                  <div className="col-md-6">
                    <input type="text" placeholder="Zip code" />
                  </div>
                  <div className="col-md-6">
                    <input type="text" placeholder="Phone no." />
                  </div>
                </div>
                <div className="cf-title">Delievery Info</div>
                <div className="row shipping-btns">
                  <div className="col-6">
                    <h4>Standard</h4>
                  </div>
                  <div className="col-6">
                    <div className="cf-radio-btns">
                      <div className="cfr-item">
                        <input
                          type="radio"
                          name="shipping"
                          id="ship-1"
                          checked
                          onClick={() => setChecked(false)}
                        />
                        <label htmlFor="ship-1">Free</label>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <h4>Next day delievery </h4>
                  </div>
                  <div className="col-6">
                    <div className="cf-radio-btns">
                      <div className="cfr-item">
                        <input
                          type="radio"
                          name="shipping"
                          id="ship-2"
                          onClick={() => setChecked(true)}
                        />
                        <label htmlFor="ship-2">$3.45</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cf-title">Payment</div>
                <ul className="payment-list">
                  <li>
                    Paypal
                    <a href="https://paypal.com">
                      <img src={paypal} alt="" />
                    </a>
                  </li>
                  <li>
                    Credit / Debit card
                    <a href="https://mastercard.com">
                      <img src={mastercard} alt="" />
                    </a>
                  </li>
                  <li>Pay when you get the package</li>
                </ul>
                <button className="site-btn submit-order-btn">
                  Place Order
                </button>
              </form>
            </div>
            <div className="col-lg-4 order-1 order-lg-2">
              <div className="checkout-cart">
                <h3>Your Cart</h3>
                <ul className="product-list">
                  {cart.map((cartItem) => (
                    <li key={cartItem.id}>
                      <div className="pl-thumb">
                        <img src={cartItem.image} alt={cartItem.name} />
                      </div>
                      <h6>{cartItem.name}</h6>
                      <p>${cartItem.price}</p>
                    </li>
                  ))}
                </ul>
                <ul className="price-list">
                  <li>
                    Total<span>${sum}</span>
                  </li>
                  <li>
                    Shipping
                    <span>{checked === true ? <>Standard</> : <>free</>} </span>
                  </li>
                  <li className="total">
                    Total<span>${checked === true ? sum + 3.45 : sum}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Checkout;
