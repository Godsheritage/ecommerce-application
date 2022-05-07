import React from "react";
import { useContext } from "react";
import { contextTypes } from "../../types";
import Hero from "../../components/Home/Hero";
import Banner from "../../components/Home/Banner";
import Footer from "../../components/Home/Footer";
import Header from "../../components/Home/Header";
import Features from "../../components/Home/Features";
import ProductContext from "../../context/ProductContext";
import ProductSection from "../../components/Shared/ProductSection";
import LatestProducts from "../../components/Home/LatestProducts";
import ProductsFilterSection from "../../components/Home/ProductsFilterSection";

const Home:React.FC = () => {
  const {latestProducts } = useContext(ProductContext) as contextTypes
  
  return (
    <>
      <Header />
      <Hero />
      <Features/>
      <ProductSection products = {latestProducts} header = 'LATEST PRODUCTS'/>
       <ProductsFilterSection/> 
      <Banner/>
      <Footer />
    </>
  );
};

export default Home;
