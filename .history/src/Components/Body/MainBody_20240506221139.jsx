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
        data && data.length>0?
        data.map((item)=>(
          <>
        <div className="data-id">{item.id}</div>  
        <div className="data-title">{item.title}</div>            
          </>
        ))
        :"no data available"
      }    

    </div>
  )
}

export default MainBody
