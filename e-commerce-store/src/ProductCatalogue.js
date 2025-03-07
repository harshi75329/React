import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCatalogue.css";

function ProductCatalogue({ addToCart }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("loggedIn")) {
      navigate("/");
    }
  }, [navigate]);

  const products = [
    { id: 1, name: "Laptop", price: "$1000", image: "laptop.jpg" },
    { id: 2, name: "Phone", price: "$500", image: "smartphone.jpg" },
    { id: 3, name: "Headphones", price: "$200", image: "headphones.jpg" },
    { id: 4, name: "Smart Watch", price: "$300", image: "smartwatch.jpg" },
  ];

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    navigate("/");
  };

  return (
    <div className="product-container">
      <h2 className="fade-in">Product Catalogue</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-item slide-in">
            <img src={product.image} alt={product.name} className="product-image" />
            <p className="product-name">{product.name}</p>
            <p className="product-price">{product.price}</p>
            <button className="add-to-cart" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Buttons at Bottom with Spacing */}
      <div className="button-container">
        <button className="cart-button" onClick={() => navigate("/cart")}>Go to Cart</button>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default ProductCatalogue;
