import React from "react";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Footer from "../../components/footer/Footer";
import Features from "../../components/Features";
import LatestProducts from "../../components/LatestProducts";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features/>
      <LatestProducts/>
      <Footer />
    </>
  );
};

export default Home;
