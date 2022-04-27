import { useContext } from "react";
import { Link } from "react-router-dom";
import { contextTypes } from "../../types";
import Logo from "../../assets/img/logo.png";
import ProductContext from "../../context/ProductContext";
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
                    <Link to="/signin" className="card-link">Sign In</Link> or <Link to="/" className="card-link">Create Account</Link>
                  </div>
                  <div className="up-item">
                    <div className="shopping-card">
                      <FaShoppingCart size="22px" />
                      <span>{cart.length}</span>
                    </div>
                    <Link to="/cart" className="card-link pl-2">Shopping Cart</Link>
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
                <Link to="/" className="card-link">
                  Home
                </Link>
              </li>
              <li>
                <a href="#" className="card-link">
                  Women
                </a>
              </li>
              <li>
                <a href="#" className="card-link">
                  Men
                </a>
              </li>
              <li>
                <a href="#" className="card-link">
                  Jewelry
                  <span className="new">New</span>
                </a>
              </li>
              <li>
                <Link to="/category" className="card-link">
                  Categories{" "}
                </Link>
                {/* <ul className="sub-menu">
                  <li>
                    <Link to="/" className="card-link">
                      Sneakers
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="card-link">
                      Sandals
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="card-link">
                      Formal Shoes
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="card-link">
                      Boots
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="card-link">
                      Flip Flops
                    </Link>
                  </li>
                </ul> */}
              </li>
              <li>
                <a href="#" className="card-link">
                  Pages
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="./product.html" className="card-link">
                      Product Page
                    </a>
                  </li>
                  <li>
                    <a href="./category.html" className="card-link">
                      Category Page
                    </a>
                  </li>
                  <li>
                    <Link to="/cart" className="card-link">
                      Cart Page
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="card-link">
                      Checkout Page
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="card-link">
                      Contact Page
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/contact" className="card-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
