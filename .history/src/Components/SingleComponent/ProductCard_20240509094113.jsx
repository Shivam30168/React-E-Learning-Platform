import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <div className="products" key={product.id}>
            <Link to={`/products/${product.id}`}>
                <Card>
                    <Card.Img variant="top" src={product.thumbnail} />
                    <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        {/* Add other details as needed */}
                    </Card.Body>
                </Card>
            </Link>
        </div>
    );
}

export default ProductCard;
