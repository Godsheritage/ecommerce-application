import PageTopInfo from "../../components/Shared/PageTopInfo";
import Header from "../../components/Home/Header";
import Footer from "../../components/Home/Footer";

const Jewelry:React.FC = () => {
  return (
    <div>
      <Header />
      <PageTopInfo page="Category/Jewelry" link="/jewelry" />
      <Footer />
    </div>
  );
};

export default Jewelry;
