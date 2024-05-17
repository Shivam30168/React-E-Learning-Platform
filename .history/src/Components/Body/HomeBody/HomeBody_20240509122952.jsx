import { useEffect, useState } from "react";
import './styles.css';
import productsData from "./productsData";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
export default function HomeBody() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disable, setDisable] = useState(false);
  
  useEffect(() => {
    setLoading(false)
    setProducts(productsData);
  }, []);

  // useEffect(() => {
  //   if (products && products.length === 20) setDisable(true);
  // });
  if (loading) {
    return <div className="product-loading">Loading data! Please wait..</div>;
  }
  return (
    <div className="box">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => (
              <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                {/* <p>{item.title}</p> */}
                <Nav.Link as={Link} to={item.url} className='Links'>{item.title}</Nav.Link><hr/>
              </div>
            ))
          : null}
      </div>
      {/* <div className="button-container">
        <button disabled={disable} onClick={() => setCount(count + 1)}>Load More products</button>
      </div> */}
      {disable?<h4 style={{color:"black"}}>No more products</h4>:null}
    </div>
  );
}
