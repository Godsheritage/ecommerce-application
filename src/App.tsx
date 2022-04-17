import Home from "./pages/Home/Home";
import { ProductContextProvider } from "./context/ProductContext";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <ProductContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ProductContextProvider>
  );
};

export default App;

//TODO
