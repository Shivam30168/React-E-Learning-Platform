import { useEffect, useState } from "react";
import './styles.css';
import productsData from "./productsData";
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
const  HomeBody=({searchTerm})=>{
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    setLoading(true)
    setProducts(productsData);
  }, []);

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
                <Nav.Link as={Link} to={item.url} className='Links'>{item.title}</Nav.Link><hr/>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default HomeBody;
