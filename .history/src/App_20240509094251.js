import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/footer";
import Header from "./Components/Header/header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import CouseRoutes from "./Routes/CouseRoutes";
import HeaderRoutes from "./Routes/HeaderRoutes";
import SideBarRoutes from "./Routes/SideBarRoutes";
import ProductDetailsPage from "./Components/SingleComponent/ProductDetailsPage";
import productsData from "./Components/Body/HomeBody/productsData";
import MainComponent from "./Components/SingleComponent/MainComponent";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          {SideBarRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
          {CouseRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
          {HeaderRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
          <Route path="/" exact>
                    <MainComponent products={productsData} />
                </Route>
                <Route path="/products/:id">
                    <ProductDetailsPage />
                </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
