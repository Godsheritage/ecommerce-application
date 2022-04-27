import React from "react";
import PageTopInfo from "../../components/Shared/PageTopInfo";
import Header from "../../components/Home/Header";
import Footer from "../../components/Home/Footer";

const Men = () => {
  return (
    <div>
      <Header />
      <PageTopInfo page="Category/men" link="/men" />
      <Footer />
    </div>
  );
};

export default Men;
