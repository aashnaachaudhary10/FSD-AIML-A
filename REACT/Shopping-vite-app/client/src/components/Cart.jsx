import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-section">
      <h2>🧾 Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items yet 😅</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} — ₹{item.price}
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ₹{total}</h3>
    </div>
  );
};

export default Cart;
