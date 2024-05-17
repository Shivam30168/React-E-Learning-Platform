import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from "react";
import productsData from "../Components/Body/HomeBody/productsData";
import './SubjectCard.css'

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
    if (foundProduct) {
      setAllData({
        title: foundProduct.title,
        thumbnail: foundProduct.thumbnail,
        description:foundProduct.description,
        website:foundProduct.website
      });
    } else {
      setAllData({});
    }
  }

  return (
    <div className='java-cards'>
      <Card  className='card' style={{width: '18rem'}} text="light" bg="secondary">
        <Card.Img variant="top" src={allData.thumbnail} />
        <Card.Body>
          {allData.title ? allData.title : "No data"}
          <Card.Text>
            {allData.description}
          </Card.Text>
          <Button variant="primary" href={allData.website}  target="_blank" rel="noopener noreferrer">Go to Official website</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SubjectCard;
