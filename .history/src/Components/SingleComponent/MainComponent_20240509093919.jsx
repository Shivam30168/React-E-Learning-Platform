// MainComponent.js

import React from 'react';
import ProductCard from './ProductCard';
import productsData from './products.json'; // Assuming your JSON file is named products.json

const MainComponent = () => {
    return (
        <div className='java-cards'>
            {productsData.map((product) => (
                <ProductCard
                    key={product.id}
                    imageUrl={product.thumbnail}
                    title={product.title}
                    // Add other props as needed
                />
            ))}
        </div>
    );
}

export default MainComponent;
