import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, { useEffect, useState } from "react";
import productsData from "../Components/Body/HomeBody/productsData";
const SubjectCard = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    setProducts(productsData);
  }, []);
  const param = useParams();
  
  const[allData,setAllData]=useState([]);
  function checkData() {
    const foundProduct = products.find(item => item.title === param.subject);
     foundProduct ? allData([foundProduct.title,foundProduct.thumbnail]) : "No data";
  }
  return (
    // <div>
    //   <h1 id="myhead" style={{ backgroundColor: "aqua" }}>
        // {products && products.length ? checkData() : "no data"}
    //   </h1>
    // </div>
    <div className='java-cards'>
    <Card style={{ width: '20rem' }} className='card'>
      <Card.Img variant="top" src="https://ritjaipur.in/wp-content/uploads/2024/02/Core-Java-Pro.jpg" />
      <Card.Body>
        {/* <Card.Title>Learn Core Java</Card.Title> */}
        {products && products.length ? checkData() : "no data"}
        <Card.Text>
        It is the first step, to begin with, Java.Core Java covers the basic concepts of the Java programming language.
        </Card.Text>
        <Button variant="primary" href='https://www.javatpoint.com/what-is-core-java'>Go to Javapoint</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem' }} className='card'>
      <Card.Img variant="top" src={checkData}/>
      <Card.Body>
        <Card.Title>Learn Advance Java</Card.Title>
        <Card.Text>
        It is the next step after completing the Core Java.Advance Java covers the advanced topics and concepts of the Java programming language.
        </Card.Text>
        <Button variant="primary" href='https://www.javatpoint.com/what-is-core-java'>Go to Javapoint</Button>
      </Card.Body>
    </Card>
    </div>
  );
};

export default SubjectCard;
