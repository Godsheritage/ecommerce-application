import Cart from "./pages/Cart";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact";
import Category from "./pages/Category";
import Checkout from "./pages/Checkout";
import { ProductContextProvider } from "./context/ProductContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <ProductContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </Router>
    </ProductContextProvider>
  );
};

export default App;


