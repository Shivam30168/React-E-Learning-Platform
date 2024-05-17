import React, { useEffect, useState } from "react";
import './styles.css';
import productsData from "./productsData";

export default function HomeBody() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    setLoading(true);
    // Simulate loading delay
    setTimeout(() => {
      // Load initial 10 products
      setProducts(productsData.slice(0, 10));
      setLoading(false);
    }, 1000); // Adjust loading delay as needed
  }, []);

  const loadMoreProducts = () => {
    setLoading(true);
    const nextCount = count + 1;
    const startIndex = nextCount * 5; // Start index for loading next 5 products
    const endIndex = startIndex + 5; // End index for loading next 5 products
    const newProducts = productsData.slice(0, endIndex);
    setCount(nextCount);
    setProducts(newProducts);
    setLoading(false);
    if (newProducts.length >= productsData.length) {
      setDisable(true); // Disable button when all products are loaded
    }
  };

  return (
    <div className="container">
      <div className="product-list">
        {products.map((item) => (
          <div className="product-item" key={item.id}>
            <img className="product-image" src={item.thumbnail} alt={item.title} />
            <p className="product-title">{item.title}</p>
          </div>
        ))}
      </div>
      <div className="button-container">
        <button
          className="load-more-button"
          disabled={disable}
          onClick={loadMoreProducts}
        >
          Load More Products
        </button>
      </div>
      {disable && <h4 className="product-loading">No more products</h4>}
    </div>
  );
}
