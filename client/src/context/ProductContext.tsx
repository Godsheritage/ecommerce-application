import { createContext, useEffect, useState } from "react";
import { productTypes, contextTypes } from "../types";
import axios from "axios";

const ProductContext = createContext<contextTypes | null>(null);
const API_URL = 'https://localhost:5000'

export const ProductContextProvider: React.FC<any> = ({ children }) => {
  const [allProducts, setAllProducts] = useState<productTypes[]>([]);
  const [latestProducts, setLatestProducts] = useState<productTypes[]>([]);
  const [favouriteProducts, setFavouriteProducts] = useState<productTypes[]>(
    []
  );
  const [cart, setCart] = useState<productTypes[]>([]);
  

  const addToCart = async (product: productTypes) => {
    // if (cart.some((cartItems) => cartItems._id === product._id)) {
    //   product.quantity++;
    //   let price = product.price;
    //   product.price = product.price + price;
    // } else {
    //   setCart([...cart, product]);
    // }
    await axios.post(`${API_URL}/cart`, product)
  };


  //to fetch all products
  const fetchAllProducts = async () => {
    const response = await axios.get(
      "https://localhost:5000/products/allproducts"
    );
    setAllProducts(response.data);
  };

//to fetch the latest products 
  const fetchLatestProducts = async () => {
    const response = await axios.get(
      "https://localhost:5000/products/latestproducts"
    );
    setLatestProducts(response.data);
  };

//to fetch the favourite products
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
