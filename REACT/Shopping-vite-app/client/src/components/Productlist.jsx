import React from "react";
import "./ProductList.css";

const ProductList = ({ addToCart }) => {
  const products = [
  {
    id: 1,
    name: "Denim Jeans",
    price: 999,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=300",
  },
  {
    id: 2,
    name: "Floral Dress",
    price: 1499,
    image: "https://images.unsplash.com/photo-1584957040386-7e3a3e2e4a3d?w=300",
  },
  {
    id: 3,
    name: "Hoodie",
    price: 1299,
    image: "https://images.unsplash.com/photo-1618354691271-9d64e4f1a4d0?w=300",
  },
  {
    id: 4,
    name: "White T-Shirt",
    price: 499,
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?w=300",
  },
];

  return (
    <div className="products-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart 🛒</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
