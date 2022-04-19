import { Link } from "react-router-dom";
import Header from "../components/Home/Header";
import Footer from "../components/Home/Footer";
import PageTopInfo from "../components/Shared/PageTopInfo";
import FavouriteProducts from "../components/Home/FavouriteProducts";

import CartTable from "../components/CartTable";

import { useContext } from "react";
import ProductContext from "../context/ProductContext";
import { contextTypes } from "../types";

const Cart: React.FC = () => {
  const { cart } = useContext(ProductContext) as contextTypes;
  //sum all the cart items

  return (
    <>
      <Header />
      <PageTopInfo page="Cart" link="/cart" />
      {cart.length === 0 ? (
        <p className="text-center font-weight-bold">
          You do not have any items in your cart go back to{" "}
          <Link to="/">Home</Link> to add more products{" "}
        </p>
      ) : (
        <CartTable />
      )}
      <FavouriteProducts />
      <Footer />
    </>
  );
};

export default Cart;
