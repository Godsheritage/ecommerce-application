import { useState, createContext } from "react";

const ProductContext = createContext<any>(null);

export const ProductContextProvider: React.FC<any> = ({ children }) => {
  return (
    <ProductContext.Provider value={null}>{children}</ProductContext.Provider>
  );
};

export default ProductContext;
