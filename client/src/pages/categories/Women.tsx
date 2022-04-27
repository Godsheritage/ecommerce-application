import PageTopInfo from "../../components/Shared/PageTopInfo";
import Header from "../../components/Home/Header";
import Footer from "../../components/Home/Footer";
import { CategoryMain } from "../Category";

const Women = () => {
  return (
    <div>
      <Header />
      <PageTopInfo page="Category/women" link="/women" />
      <CategoryMain/>
      <Footer />
    </div>
  );
};

export default Women;
