import { createContext, useEffect, useState } from "react";

import { productTypes, contextTypes } from "../types";
import axios from "axios";

const ProductContext = createContext<contextTypes | null>(null);

export const ProductContextProvider: React.FC<any> = ({ children }) => {
  const [allProducts, setAllProducts] = useState<productTypes[]>([]);
  const [latestProducts, setLatestProducts] = useState<productTypes[]>([]);
  const [favouriteProducts, setFavouriteProducts] = useState<productTypes[]>(
    []
  );
  const [cart, setCart] = useState<productTypes[]>([]);

  const addToCart = (product: productTypes) => {
    if (cart.some((cartItems) => cartItems._id === product._id)) {
      product.quantity++;
      let price = product.price;
      product.price = product.price + price;
    } else {
      setCart([...cart, product]);
    }
  };

  // const fetchAllProducts = async () => {
  //   const response = await axios.get("https://localhost:5000/products/allproducts");
  // };
  //Todo create fetch alll products aput it in state and pass it ti=o the category page
  const fetchAllProducts = async () => {
    const response = await axios.get(
      "https://localhost:5000/products/allproducts"
    );
    setAllProducts(response.data);
  };
  const fetchLatestProducts = async () => {
    const response = await axios.get(
      "https://localhost:5000/products/latestproducts"
    );
    setLatestProducts(response.data);
  };
  const fetchFavouriteProducts = async () => {
    const response = await axios.get(
      "https://localhost:5000/products/favouriteproducts"
    );
    setFavouriteProducts(response.data);
  };

  useEffect(() => {
    fetchAllProducts();
    fetchLatestProducts();
    fetchFavouriteProducts();
  }, []);

  const sum: any = cart.reduce((total: any, curVal: any) => {
    return total + curVal.price;
  }, 0);

  return (
    <ProductContext.Provider
      value={{
        cart,
        sum,
        latestProducts,
        favouriteProducts,
        allProducts,
        addToCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
