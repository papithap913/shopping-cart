import React from 'react';
import { CartProvider } from './context/CartContext';
import { ProductsProvider } from './context/ProductsContext';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
  return (
    <ProductsProvider>
      <CartProvider>
        <div className="App">
          <h1>Shopping Cart</h1>
          <ProductList />
          <Cart />
        </div>
      </CartProvider>
    </ProductsProvider>
  );
};

export default App;
