import PageTopInfo from "../../components/Shared/PageTopInfo";
import Header from "../../components/Home/Header";
import Footer from "../../components/Home/Footer";
import { CategoryMain } from "../Category";

const Jewelry:React.FC = () => {
  return (
    <div>
      <Header />
      <PageTopInfo page="Category/Jewelry" link="/jewelry" />
      <CategoryMain/>
      <Footer />
    </div>
  );
};

export default Jewelry;
