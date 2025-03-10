//src/App.js
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import Login from './Login';
import ProductCatalogue from './ProductCatalogue';
import Cart from './Cart';
import './App.css';
import StartPage from './StartPage';

const App = () => {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/" element={<StartPage />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/products" element={<ProductCatalogue addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
