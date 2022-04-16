import React from "react";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/Footer";
import Features from "../../components/Features";
import LatestProducts from "../../components/LatestProducts";
import Banner from "../../components/Banner";
import ProductsFilterSection from "../../components/ProductsFilterSection";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features/>
      <LatestProducts/>
      <ProductsFilterSection/>
      <Banner/>
      <Footer />
    </>
  );
};

export default Home;
