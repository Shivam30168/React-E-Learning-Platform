import { useState } from "react";
import './MainBody.css'
import data from "./data";

const MainBody = () => {
const[loading,setLoading]=useState(false);

  if (loading) {
    return <div>Loading data! Please wait..</div>;
  }
  return (
    <div className="data-itemlist">
      {
        data && data.length>0?
        data.map((item)=>(
          <>
        <div className="data-id">{item.id}</div>  
        <div className="data-title">{item.title}</div>  <br />          
          </>
        ))
        :setLoading(true)
      }    

    </div>
  )
}

export default MainBody
