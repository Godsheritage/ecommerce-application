import axios from "axios";
import { useNavigate } from "react-router-dom";
import { productTypes, contextTypes } from "../../../types";
import { createContext, useEffect, useState } from "react";

const ProductContext = createContext<contextTypes | null>(null);

export const ProductContextProvider: React.FC<any> = ({ children }) => {
  const [allProducts, setAllProducts] = useState<productTypes[]>([]);
  const [singleProduct, setSingleProduct] = useState<any>();
  const [latestProducts, setLatestProducts] = useState<productTypes[]>([]);
  const [favouriteProducts, setFavouriteProducts] = useState<productTypes[]>(
    []
  );
  const [cart, setCart] = useState<productTypes[]>([]);
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
    await axios.post(`${API_URL}/cartItems`, product);
    await fetchCartItems();
  };

  //fetch single product
  const fetchSingleProduct = async (product: productTypes) => {
    const ID = product._id;
    const response = await axios.get(
      `${API_URL}/products/singleproduct/${ID}`
    );
    setSingleProduct(response.data);
    navigate(`/products/${product.name}`);
  };

  //fetch all products
  const fetchAllProducts = async () => {
    const response = await axios.get(
      `${API_URL}/products/allproducts`
    );
    setAllProducts(response.data);
  };

  //fetch the latest products
  const fetchLatestProducts = async () => {
    const response = await axios.get(
      `${API_URL}/products/latestproducts`
    );
    setLatestProducts(response.data);
  };

  //fetch the favourite products
  const fetchFavouriteProducts = async () => {
    const response = await axios.get(
      `${API_URL}/products/favouriteproducts`
    );
    setFavouriteProducts(response.data);
  };

  const submitContact = async (data:any) => {
    await axios.post(`${API_URL}/Contact`, data)
  }
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
        submitContact,
        fetchSingleProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
