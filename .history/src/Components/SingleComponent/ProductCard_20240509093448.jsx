import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import productsData from '../Body/HomeBody/productsData';

const ProductCard = ({ productsData }) => {
    return (
        <div className="products" key={productsData.id}>
            <Link to={`/products/${productsData.id}`}>
                {/* Render product details */}
                <Card.Title>{productsData.title}</Card.Title>
                {/* Add other details as needed */}
            </Link>
        </div>
    );
}

export default ProductCard;
