import { createContext, useEffect, useState } from "react";
import { productTypes, contextTypes } from "../types";
import axios from "axios";

const ProductContext = createContext<contextTypes | null>(null);
const API_URL = "https://localhost:5000";

export const ProductContextProvider: React.FC<any> = ({ children }) => {
  const [allProducts, setAllProducts] = useState<productTypes[]>([]);
  const [singleProduct, setSingleProduct] = useState<any>();
  const [latestProducts, setLatestProducts] = useState<productTypes[]>([]);
  const [favouriteProducts, setFavouriteProducts] = useState<productTypes[]>(
    []
  );
  const [cart, setCart] = useState<productTypes[]>([]);

  //fetch cart items
  const fetchCartItems = async () => {
    const response = await axios.get(`${API_URL}/cartItems`);
    setCart(response.data);
  };

  // add items to cart
  const addToCart = async (product: productTypes) => {
    // if (cart.some((cartItems) => cartItems._id === product._id)) {
    //   product.quantity++;
    //   let price = product.price;
    //   product.price = product.price + price;
    // } else {
    //   setCart([...cart, product]);
    // }
    await axios.post(`${API_URL}/cartItems`, product);
    await fetchCartItems();
  };


  //fetch single product
  const fetchSingleProduct = async (ID:string) => {
    const response = await axios.get(
      `https://localhost:5000/products/singleproduct/${ID}`
      );
      setSingleProduct(response.data);
    };
    
    
    //fetch all products
  const fetchAllProducts = async () => {
    const response = await axios.get(
      "https://localhost:5000/products/allproducts"
    );
    setAllProducts(response.data);
  };

  //fetch the latest products
  const fetchLatestProducts = async () => {
    const response = await axios.get(
      "https://localhost:5000/products/latestproducts"
    );
    setLatestProducts(response.data);
  };

  //fetch the favourite products
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
    fetchCartItems();
  }, []);

  // sum items in cart
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
        singleProduct,
        addToCart,
        fetchSingleProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
