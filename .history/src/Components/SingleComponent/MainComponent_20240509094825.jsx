// MainComponent.js

import React from 'react';
import ProductCard from './ProductCard';
import productsData from '../Body/HomeBody/productsData';


const MainComponent = () => {
    return (
        <div className='java-cards'>
            {console.log("Main component")}
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
