import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/footer";
import Header from "./Components/Header/header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import LoginForm from "./Components/Login/LoginForm";
import CouseRoutes from "./Routes/CouseRoutes";
import HeaderRoutes from "./Routes/HeaderRoutes";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          
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
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
