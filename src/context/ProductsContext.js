import React, { createContext } from 'react';
import productsData from '../data/products.json';

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  return (
    <ProductsContext.Provider value={productsData.products}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
