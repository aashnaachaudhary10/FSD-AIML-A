import React, { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/Productlist";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  // Function to add product to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <>
      <Header cartCount={cart.length} />
      <div className="main-section">
        <ProductList addToCart={addToCart} />
        <Cart cart={cart} />
      </div>
      <Footer />
    </>
  );
}

export default App;
