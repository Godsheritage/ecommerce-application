import axios from "axios";
import { useNavigate } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import { productTypes, contextTypes, signInTypes, signUpTypes } from "../types";

const ProductContext = createContext<contextTypes | null>(null);

export const ProductContextProvider: React.FC<any> = ({ children }) => {
  const [cart, setCart] = useState<productTypes[]>([]);
  const [singleProduct, setSingleProduct] = useState<any>();
  const [allProducts, setAllProducts] = useState<productTypes[]>([]);
  const [latestProducts, setLatestProducts] = useState<productTypes[]>([]);
  const [favouriteProducts, setFavouriteProducts] = useState<productTypes[]>(
    []
  );
  const navigate = useNavigate();
  const API_URL = "https://localhost:5000";

  //fetch cart items
  const fetchCartItems: () => Promise<void> = async () => {
    const response = await axios.get(`${API_URL}/cartItems`);
    setCart(response.data);
  };

  // add items to cart
  const addToCart = async (product: productTypes) => {
    const response = await axios.post(`${API_URL}/cartItems`, product);
    // await fetchCartItems();
    setCart([...cart, response.data]);
  };

  //fetch single product
  const fetchSingleProduct: (product: productTypes) => Promise<void> = async (
    product: productTypes
  ) => {
    const ID = product._id;
    const response = await axios.get(`${API_URL}/products/singleproduct/${ID}`);
    setSingleProduct(response.data);
    navigate(`/products/${product.title}`);
  };
  // const fetchSingleProduct: (product: productTypes) => Promise<void> = async (
  //   product: productTypes
  // ) => {
  //   const ID = product._id;
  //   const response = await axios.get(`${API_URL}/products/singleproduct/${ID}`);
  //   setSingleProduct(response.data);
  //   navigate(`/products/${product.title}`);
  // };

  //fetch all products
  const fetchAllProducts: () => Promise<void> = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setAllProducts(response.data);
  };

  //fetch the latest products
  const fetchLatestProducts: () => Promise<void> = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setLatestProducts(response.data);
  };

  //fetch the favourite products
  const fetchFavouriteProducts: () => Promise<void> = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    setFavouriteProducts(response.data);
  };

  //submit contact form
  const submitContact = async (data: any) => {
    await axios.post(`${API_URL}/Contact`, data);
  };

  //signup logic
  const signUsersUp = async (credentials: signUpTypes) => {
    await axios.post(`${API_URL}/auth/signup`, credentials);
  };

  //signin Logic
  const signUsersIn = async (credentials: signInTypes) => {
    await axios.post(`${API_URL}/auth/signin`, credentials);
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
        allProducts,
        singleProduct,
        latestProducts,
        favouriteProducts,
        addToCart,
        signUsersUp,
        signUsersIn,
        submitContact,
        fetchSingleProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
