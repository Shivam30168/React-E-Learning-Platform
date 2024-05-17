import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductCard = ({ products }) => {
    return (
        <div className="products" key={products.id}>
            <Link to={`/products/${products.id}`}>
                {/* Render product details */}
                <Card.Title>{products.title}</Card.Title>
                {/* Add other details as needed */}
            </Link>
        </div>
    );
}

export default ProductCard;
