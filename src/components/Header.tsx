import { useContext } from "react";
import { contextTypes } from "../types";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import ProductContext from "../context/ProductContext";
import { FaUser, FaShoppingCart, FaSearch } from "react-icons/fa";

const Header: React.FC = () => {
  const { cart } = useContext(ProductContext) as contextTypes;
  return (
    <div>
      <header className="header-section">
        <div className="header-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 text-center text-lg-left">
                <Link to="/" className="site-logo">
                  <img src={Logo} alt="logo" />
                </Link>
              </div>
              <div className="col-xl-6 col-lg-5">
                <form className="header-search-form">
                  <input type="text" placeholder="Search on divisima ...." />
                  <button>
                    <FaSearch size="18px" />
                  </button>
                </form>
              </div>
              <div className="col-xl-4 col-lg-5">
                <div className="user-panel">
                  <div className="up-item">
                    <FaUser size="22px" />
                    <a href="#">Sign</a> In or <a href="#">Create Account</a>
                  </div>
                  <div className="up-item">
                    <div className="shopping-card">
                      <i className="flaticon-bag"></i>
                      <FaShoppingCart size="22px" />
                      <span>{cart.length}</span>
                    </div>
                    <Link to="/cart">Shopping Cart</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav className="main-navbar">
          <div className="container">
            <ul className="main-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">
                  Jewelry
                  <span className="new">New</span>
                </a>
              </li>
              <li>
                <a href="#">Shoes</a>
                <ul className="sub-menu">
                  <li>
                    <a href="#">Sneakers</a>
                  </li>
                  <li>
                    <a href="#">Sandals</a>
                  </li>
                  <li>
                    <a href="#">Formal Shoes</a>
                  </li>
                  <li>
                    <a href="#">Boots</a>
                  </li>
                  <li>
                    <a href="#">Flip Flops</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Pages</a>
                <ul className="sub-menu">
                  <li>
                    <a href="./product.html">Product Page</a>
                  </li>
                  <li>
                    <a href="./category.html">Category Page</a>
                  </li>
                  <li>
                    <Link to="/cart">Cart Page</Link>
                  </li>
                  <li>
                    <a href="./checkout.html">Checkout Page</a>
                  </li>
                  <li>
                    <a href="./contact.html">Contact Page</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
