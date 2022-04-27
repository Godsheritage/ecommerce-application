import { useContext } from "react";
import { contextTypes } from "../../types";
import ProductSection from "../Shared/ProductSection";
import { FILTER_MENU_TYPES } from "../../types";
import ProductContext from "../../context/ProductContext";
import { FaShoppingCart, FaHeart } from "react-icons/fa";

const ProductsFilterSection = () => {
  const { latestProducts, addToCart } = useContext(
    ProductContext
  ) as contextTypes;

  const FILTER_MENU: FILTER_MENU_TYPES[] = [
    {
      name: "TOPS",
      link: "/",
    },
    {
      name: "jumpsuites",
      link: "/",
    },
    {
      name: "lingerie",
      link: "/",
    },
    {
      name: "JEANS",
      link: "/",
    },
    {
      name: "DRESSINGS",
      link: "/",
    },
    {
      name: "COATS",
      link: "/",
    },
    {
      name: "JUMPERRS",
      link: "/",
    },
    {
      name: "LEGGINGS",
      link: "/",
    },
  ];

  return (
    <div>
      <section className="product-filter-section">
        <div className="container">
          <div className="section-title">
            <h2>BROWSE TOP SELLING PRODUCTS</h2>
          </div>
          <ul className="product-filter-menu">
            {FILTER_MENU.map((item, index) => (
              <li key={index}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
          <div className="row">
            <ProductSection
              products={latestProducts}
              style={{ marginTop: "-5rem" }}
            />
          </div>
          <div className="text-center pt-5">
            <button className="site-btn sb-line sb-dark">LOAD MORE</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsFilterSection;
