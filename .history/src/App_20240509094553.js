import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import productsData from './Components/Body/HomeBody/productsData';


const App = () => {
    return (
        <Router>
            <Route path="/" exact component={() => <MainComponent products={productsData} />} />
            <Route path="/products/:id" component={ProductDetailsPage} />
        </Router>
    );
}

export default App;
