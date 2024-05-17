import { useParams } from "react-router-dom";

import React, { useEffect, useState } from "react";
import productsData from "../Components/Body/HomeBody/productsData";
const SubjectCard = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    setProducts(productsData);
  }, []);
  const param = useParams();
  
  function checkData() {
    const foundProduct = products.find(item => item.title === param.subject);
    return foundProduct ? foundProduct.title : "No data";
  }
  return (
    <div>
      
        {products && products.length ? checkData() : "no data"}
      </h1>
    </div>
  );
};

export default SubjectCard;
