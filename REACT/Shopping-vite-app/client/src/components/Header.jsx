import React from "react";
import "./Header.css";

const Header = ({ cartCount }) => {
  return (
    <header className="header">
      <h1>SHOPPING VITE APP</h1>
      <div className="cart-info">🛍️ Cart: {cartCount}</div>
    </header>
  );
};

export default Header;
