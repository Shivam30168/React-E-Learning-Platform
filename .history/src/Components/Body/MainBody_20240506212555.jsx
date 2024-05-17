import { useEffect } from "react";

const MainBody = () => {
  useEffect(()=>{
    const fetchData=fetch('https://dummyjson.com/products/1')
    const data=fetchData.json.toString()
    console.log(data);
  })
  return (
    <div>
      

    </div>
  )
}

export default MainBody
