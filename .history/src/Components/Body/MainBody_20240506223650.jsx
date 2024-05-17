import { useState } from "react";
import './MainBody.css'


const MainBody = () => {
const[loading,setLoading]=useState(false);

  if (loading) {
    return <div>Loading data! Please wait..</div>;
  }
  return (
    <div>
        

    </div>
  )
}

export default MainBody
