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
    const response = await axios.post(`${API_URL}/cartItems`, product);
    // await fetchCartItems();
    setCart([...cart, response.data])
  };

  //fetch single product
  const fetchSingleProduct = async (product: productTypes) => {
    const ID = product._id;
    const response = await axios.get(`${API_URL}/products/singleproduct/${ID}`);
    setSingleProduct(response.data);
    navigate(`/products/${product.name}`);
  };

  //fetch all products
  const fetchAllProducts = async () => {
    const response = await axios.get(`${API_URL}/products/allproducts`);
    setAllProducts(response.data);
  };

  //fetch the latest products
  const fetchLatestProducts = async () => {
    const response = await axios.get(`${API_URL}/products/latestproducts`);
    setLatestProducts(response.data);
  };

  //fetch the favourite products
  const fetchFavouriteProducts = async () => {
    const response = await axios.get(`${API_URL}/products/favouriteproducts`);
    setFavouriteProducts(response.data);
  };

  //submit contact form
  const submitContact = async (data: any) => {
    await axios.post(`${API_URL}/Contact`, data);
  };

  //signup 
  const signUsersUp = async (credentials: signUpTypes) => {
    await axios.post(`${API_URL}/auth/signup`, credentials);
  };

  //signin
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
        latestProducts,
        favouriteProducts,
        allProducts,
        singleProduct,
        signUsersUp,
        signUsersIn,
        addToCart,
        submitContact,
        fetchSingleProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
