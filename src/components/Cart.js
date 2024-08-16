import React, { useContext } from 'react';
import CartContext from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);

  const increaseQuantity = (product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  const decreaseQuantity = (product) => {
    if (product.quantity > 1) {
      dispatch({ type: 'REMOVE_ITEM', payload: product });
    }
  };

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalAmount = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.title} className="cart-image" />
          <div className="cart-details">
            <h4>{item.title}</h4>
            <p>${item.price} x {item.quantity}</p>
            <div className="cart-buttons">
              <button onClick={() => increaseQuantity(item)}>+</button>
              <button onClick={() => decreaseQuantity(item)}>-</button>
            </div>
          </div>
        </div>
      ))}
      <hr />
      <p>Total Quantity: {totalQuantity}</p>
      <p>Total Amount: ${totalAmount.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
