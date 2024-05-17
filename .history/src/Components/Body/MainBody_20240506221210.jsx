import {  useState } from "react";
import './data'
import data from "./data";
const MainBody = () => {
const[loading,setLoading]=useState(false);

  if (loading) {
    return <div>Loading data! Please wait..</div>;
  }
  return (
    <div>
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
