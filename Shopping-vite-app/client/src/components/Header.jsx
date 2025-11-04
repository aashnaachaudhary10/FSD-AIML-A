import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>🛒 Shopping Store</h1>
      <nav>
        <ul className="nav-links">
          <li>Home</li>
          <li>Products</li>
          <li>Cart</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
