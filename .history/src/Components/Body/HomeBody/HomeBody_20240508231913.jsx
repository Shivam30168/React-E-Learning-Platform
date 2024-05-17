import { useEffect, useState } from "react";
import './styles.css';
import productsData from "./productsData";
export default function HomeBody() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(false);
  
  useEffect(() => {
    setLoading(true);
    // Load initial 10 products
    setProducts(productsData.slice(0, 10));
    setLoading(false);
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

  // useEffect(() => {
  //   if (products && products.length === 20) setDisable(true);
  // });
  // if (loading) {
  //   return <div className="product-loading">Loading data! Please wait..</div>;
  // }
  return (
    <div className="box">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={disable} onClick={() => setCount(count + 1)}>Load More products</button>
      </div>
      {disable?<h4 style={{color:"black"}}>No more products</h4>:null}
    </div>
  );
}
