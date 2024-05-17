import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../Body/HomeBody/productsData';

const ProductDetailsPage = () => {
    const { id } = useParams();

    // Fetch product details based on id from productsData or your API
    // For demonstration, let's assume productsData is an array of products
    const product = productsData.find(product => product.id === id);

    if (!product) {
        return <div>Loading...</div>; // Or handle product not found
    }

    return (
        <div>
            {console.log("2")}
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            {/* Render other product details */}
        </div>
    );
}

export default ProductDetailsPage;
