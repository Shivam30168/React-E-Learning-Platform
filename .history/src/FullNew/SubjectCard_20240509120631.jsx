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
  }, [products, param]); // Include checkData in the dependency array

  function checkData() {
    const foundProduct = products.find(item => item.title.toLowerCase() === param.subject);
    if (foundProduct) {
      setAllData({
        title: foundProduct.title,
        thumbnail: foundProduct.thumbnail
      });
      console.log(allData);
    } else {
      setAllData({});
    }
  }

  return (
    <div className='java-cards'>
        {console.log(allData.title)}
      <Card style={{ width: '20rem' }} className='card'>
        <Card.Img variant="top" src={allData.thumbnail}/>
        <Card.Body>
          {allData.title ? allData.title : "No data"}
          <Card.Text>
            It is the first step, to begin with, Java.Core Java covers the basic concepts of the Java programming language.
          </Card.Text>
          <Button variant="primary" href='https://www.javatpoint.com/what-is-core-java'>Go to Javapoint</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SubjectCard;