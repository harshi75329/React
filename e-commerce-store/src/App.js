import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import LoginPage from "./Login";
import ProductCatalogue from "./ProductCatalogue";
import Cart from "./Cart";
import Payment from "./Payment";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/products" element={<ProductCatalogue addToCart={addToCart} />} />
      <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
      <Route path="/payment" element={<Payment cart={cart} />} /> {/* ✅ Pass cart here */}
    </Routes>
  );
}

export default App;
