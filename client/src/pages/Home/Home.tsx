import React from "react";
import Header from "../../components/Home/Header";
import Hero from "../../components/Home/Hero";
import Footer from "../../components/Home/Footer";
import Features from "../../components/Home/Features";
import LatestProducts from "../../components/Home/LatestProducts";
import Banner from "../../components/Home/Banner";
import ProductsFilterSection from "../../components/Home/ProductsFilterSection";

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
