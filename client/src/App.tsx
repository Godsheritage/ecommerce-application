import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact";
import Category from "./pages/Category";
import Checkout from "./pages/Checkout";
import Men from "./pages/categories/Men";
import Women from "./pages/categories/Women";
import Jewelry from "./pages/categories/Jewelry";
import Signup from "./pages/SignUp";
import SingleProduct from "./components/Shared/SingleProduct";
import ProductSection from "./components/Shared/ProductSection";
import { ProductContextProvider } from "./context/ProductContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <ProductContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/women" element={<Women />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/jewelry" element={<Jewelry />} />
          <Route path="/category" element={<Category />} />
          <Route path="/checkout" element={<Checkout />} />
          {/* <Route path="/products/:product" element={<ProductSection />} /> */}
          <Route path="/products/*" element={<SingleProduct />} />
        </Routes>
      </ProductContextProvider>
    </Router>
  );
};

export default App;
