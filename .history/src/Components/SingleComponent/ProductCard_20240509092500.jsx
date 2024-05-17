import { Card, Button } from 'react-bootstrap';
import '../Body/Java/Java.css'
const ProductCard = ({ imageUrl, title, description, link }) => {
    return (
        <Card  className='card' style={{width:"200px"}}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button variant="primary" href={link}>Go to {title}</Button>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;
