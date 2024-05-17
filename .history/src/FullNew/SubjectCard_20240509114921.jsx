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
    {
        products && products.length>0?(
            products.map((item)=>
            {
                item.title
            })
        ):"no data came"
    }
    return param.subject == item.title ? item.title : " data";
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
