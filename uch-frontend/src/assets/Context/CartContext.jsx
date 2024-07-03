import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch cart items from the backend when the component mounts
    const fetchCart = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/cart');
        setCart(response.data);
      } catch (error) {
        console.error('Failed to fetch cart items', error);
      }
    };
    fetchCart();
  }, []);

  const addToCart = async (product) => {
    try {
      const response = await axios.post('http://localhost:5000/api/cart', product);
      setCart((prevCart) => [...prevCart, response.data]);
    } catch (error) {
      console.error('Failed to add to cart', error);
    }
  };

  const removeFromCart = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/api/cart/${productId}`);
      setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    } catch (error) {
      console.error('Failed to remove from cart', error);
    }
  };

  const clearCart = async () => {
    try {
      await axios.delete('http://localhost:5000/api/cart');
      setCart([]);
    } catch (error) {
      console.error('Failed to clear cart', error);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
