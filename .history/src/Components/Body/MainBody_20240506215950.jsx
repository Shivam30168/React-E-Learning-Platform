import { useEffect, useState } from "react";

const MainBody = () => {
const[product,setProduct]=useState([]);
const[loading,setLoading]=useState(false);

  async function fetchData(){
    try{
    setLoading(true)
  const response=await fetch('https://dummyjson.com/products')
  const data=await response.json();
  if(data && data.products && data.products.length)
  {
    setProduct((prevData)=>[...prevData,...data.products])
    setLoading(false)
  }
  }catch(e){
    setLoading(false);
  }}
  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading data! Please wait..</div>;
  }
  return (
    <div>
      {
        product && product.length?
        product.map((item)=>(
          <div className="product" key={item.id}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title}</p>
              </div>
          
          
        )):"no product found"
      }

    </div>
  )
}

export default MainBody
