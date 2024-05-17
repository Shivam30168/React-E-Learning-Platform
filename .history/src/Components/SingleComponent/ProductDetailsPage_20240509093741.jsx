import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import productsData from '../Body/HomeBody/productsData';
import MainComponent from './MainComponent';

const ProductDetailsPage = () => {
  const {id} = useParams();
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    setProducts(productsData)
  },[])
  const product = { id: products.id, title: products.title, description: products.thumbnail };
  return(
    <div>
            <h1>{product.title}</h1>
            <p>{product.thumbnail}</p>
            {/* Render other product details */}
        </div>
  )
}

export default ProductDetailsPage
