import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainComponent from './MainComponent';
import ProductDetailsPage from './ProductDetailsPage';
import productsData from '../Body/HomeBody/productsData'; // Import your products data

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <MainComponent products={productsData} />
                </Route>
                <Route path="/products/:id">
                    <ProductDetailsPage />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
