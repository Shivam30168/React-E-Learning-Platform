import ProductCard from './ProductCard';

const MainComponent = ({ products }) => {
    return (
        <div className='java-cards'>
            {products && products.length > 0 && products.map((product) => (
                <ProductCard
                    key={product.id}
                    imageUrl={product.thumbnail}
                    title={product.title}
                    // description={product.description}
                    // link={product.link}
                />
            ))}
        </div>
    );
}

export default MainComponent;
