import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Java.css'
import { useEffect, useState } from 'react';
import productsData from '../HomeBody/productsData';
function Java() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(productsData);
  }, []);
  return (
    <div className='java-cards'>
    <Card style={{ width: '20rem' }} className='card'>
      <Card.Img variant="top" src="https://ritjaipur.in/wp-content/uploads/2024/02/Core-Java-Pro.jpg" />
      <Card.Body>
        {/* <Card.Title>Learn Core Java</Card.Title> */}
        {products && products.length
          ?<Card.Title>{products[0].title}</Card.Title>
              
            
          : null}
        <Card.Text>
        It is the first step, to begin with, Java.Core Java covers the basic concepts of the Java programming language.
        </Card.Text>
        <Button variant="primary" href='https://www.javatpoint.com/what-is-core-java'>Go to Javapoint</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '20rem' }} className='card'>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDik_RIk3JSQFzJMLiwuKWpMS0z-Q2VLHEbOSsEBVVig&s" />
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
}

export default Java;