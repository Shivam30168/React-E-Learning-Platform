import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Java() {
  return (
    <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Learn Core Java</Card.Title>
        <Card.Text>
        It is the first step, to begin with, Java.Core Java covers the basic concepts of the Java programming language.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Java;