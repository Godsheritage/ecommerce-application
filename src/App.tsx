import Home from "./pages/Home/Home";
import { ProductContextProvider } from "./context/ProductContext";

const App = () => {
  return (
    <ProductContextProvider>
      <Home />
    </ProductContextProvider>
  );
};

export default App;

//TODO
