import { useContext } from "react";
import { contextTypes } from "../../../types";
import { Link } from "react-router-dom";
import Header from "../components/Home/Header";
import Footer from "../components/Home/Footer";
import CartTable from "../components/CartTable";
import ProductContext from "../context/ProductContext";
import PageTopInfo from "../components/Shared/PageTopInfo";
import ProductSection from "../components/Shared/ProductSection";
import FavouriteProducts from "../components/Home/FavouriteProducts";



const Cart: React.FC = () => {

  const { cart, favouriteProducts } = useContext(ProductContext) as contextTypes;

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
      <ProductSection products={favouriteProducts} header = 'Your Favourites' />
      <FavouriteProducts />
      <Footer />
    </>
  );
};

export default Cart;
