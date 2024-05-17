import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import productsData from './Components/Body/HomeBody/productsData';
import ProductDetailsPage from './Components/SingleComponent/ProductDetailsPage';
import MainComponent from './Components/SingleComponent/MainComponent';


const App = () => {
    return (
        <Router>
          <Routes>
            <Route path="/" exact component={() => <MainComponent products={productsData} />} />
            <Route path="/products/:id" component={ProductDetailsPage} />
            </Routes>
        </Router>
    );
}

export default App;
