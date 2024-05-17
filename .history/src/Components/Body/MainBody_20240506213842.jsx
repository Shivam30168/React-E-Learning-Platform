import React, { useState, useEffect } from 'react';

const MainBody = () => {
  const [product, setProduct] = useState([null]);
  const [productList,setProductList]=useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products/1');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);   

  return (
    <div>
      {
        data && data.length?(data.map((item)=>{
          {item.name}
          {item.description}
          {item.price}
        })):"No data received"
      }
    </div>
  );
};

export default MainBody;
