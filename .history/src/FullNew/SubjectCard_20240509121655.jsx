import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from "react";
import productsData from "../Components/Body/HomeBody/productsData";

const SubjectCard = () => {
  const [products, setProducts] = useState([]);
  const [allData, setAllData] = useState({});
  const param = useParams();

  useEffect(() => {
    setProducts(productsData);
  }, []);

  useEffect(() => {
    checkData();
  }, [products, param]);

  function checkData() {
    const foundProduct = products.find(item => item.url === param.subject);
    console.log("found ",foundProduct);
    if (foundProduct) {
      setAllData({
        title: foundProduct.title,
        thumbnail: foundProduct.thumbnail
      });
    } else {
      setAllData({});
    }
  }

  return (
    <div className='java-cards'>
        console.log(allData);
      <Card style={{ width: '20rem' }} className='card'>
        <Card.Img variant="top" src={allData.thumbnail}/>
        <Card.Body>
          {allData.title ? allData.title : "No data"}
          <Card.Text>
            {allData.description}
          </Card.Text>
          <Button variant="primary" href='https://www.javatpoint.com/what-is-core-java'>Go to Javapoint</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SubjectCard;
