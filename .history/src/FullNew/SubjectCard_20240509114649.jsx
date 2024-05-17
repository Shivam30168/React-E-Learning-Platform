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
    console.log(param.subject);
    console.log(products.title);
    return param.subject == products.title ? products.title : " data";
  }
  return (
    <div>
      <h1 id="myhead" style={{ backgroundColor: "aqua" }}>
        {/* Inside {param.subject} {param.name}Details */}
        {products && products.length ? checkData() : "no data"}
      </h1>
    </div>
  );
};

export default SubjectCard;
