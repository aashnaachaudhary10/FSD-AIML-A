import React, { useState } from "react";
import "./Cart.css";

const Cart = () => {
  const [items, setItems] = useState([
    { id: 1, name: "T-shirt", price: 500 },
    { id: 2, name: "Jeans", price: 1200 },
    { id: 3, name: "Shoes", price: 2000 },
  ]);

  const total = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart 🛍️</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span> — ₹{item.price}
          </li>
        ))}
      </ul>
      <h3>Total: ₹{total}</h3>
      <button className="checkout-btn">Checkout</button>
    </div>
  );
};

export default Cart;
