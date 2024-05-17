import { useEffect, useState } from "react";
import './data'
import data from "./data";
const MainBody = () => {
const[product,setProduct]=useState([]);
const[loading,setLoading]=useState(false);



  if (loading) {
    return <div>Loading data! Please wait..</div>;
  }
  return (
    <div>
      {/* {
        product && product.length?
        product.map((item)=>(
          <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
        )):"no product found"
      } */}
      {
        <h1>{data.id}</h1>
      }

    </div>
  )
}

export default MainBody
