import React from "react";
import Header from "../../components/Home/Header";
import Hero from "../../components/Home/Hero";
import ProductSection from "../../components/Shared/ProductSection";
import { useContext } from "react";
import ProductContext from "../../context/ProductContext";
import { contextTypes } from "../../types";
import Footer from "../../components/Home/Footer";
import Features from "../../components/Home/Features";
import LatestProducts from "../../components/Home/LatestProducts";
import Banner from "../../components/Home/Banner";
import ProductsFilterSection from "../../components/Home/ProductsFilterSection";

const Home = () => {
  const {latestProducts } = useContext(ProductContext) as contextTypes
  
  return (
    <>
      <Header />
      <Hero />
      <Features/>
      <ProductSection products = {latestProducts} header = 'LATEST PRODUCTS'/>
      <LatestProducts/> 
       <ProductsFilterSection/> 
      <Banner/>
      <Footer />
    </>
  );
};

export default Home;
