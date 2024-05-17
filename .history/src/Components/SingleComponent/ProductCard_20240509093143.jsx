// ProductCard.js

import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <div className="product" key={product.id}>
            <Link to={`/product/${product.id}`}>
                {/* Render product details */}
                <Card.Title>{product.title}</Card.Title>
                {/* Add other details as needed */}
            </Link>
        </div>
    );
}

export default ProductCard;
