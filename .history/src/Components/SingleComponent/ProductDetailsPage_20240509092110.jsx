import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import productsData from '../Body/HomeBody/productsData';
import MainComponent from './MainComponent';

const ProductDetailsPage = () => {
  const param = useParams();
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    setProducts(productsData)
  },[])
  return(
    <MainComponent products={products}/>
  )
}

export default ProductDetailsPage
