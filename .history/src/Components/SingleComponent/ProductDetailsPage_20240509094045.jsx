import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../Body/HomeBody/productsData';
import ProductCard from './ProductCard';

const ProductDetailsPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Find the product with the matching id
        const foundProduct = productsData.find(product => product.id === id);
        setProduct(foundProduct);
    }, [id]);

    if (!product) {
        return <div>Loading...</div>; // Or any loading indicator
    }

    return (
        <div>
            <h1>{product.title}</h1>
            <p>{product.thumbnail}</p>
            {/* Render other product details */}
        </div>
    );
}

export default ProductDetailsPage;
