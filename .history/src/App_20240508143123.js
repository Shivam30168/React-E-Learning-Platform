import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import MainBody from "./Components/Body/Layout/MainBody";
import Footer from "./Components/Footer/footer";
import Header from "./Components/Header/header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import About from "./Components/About/About";
import LoginForm from "./Components/Login/LoginForm";
import NotFound from "./Components/NotFound/NotFound";
import Help from "./Components/Help/Help";
import CouseRoutes from "./Routes/CouseRoutes";
import HeaderRoutes from "./Routes/HeaderRoutes";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          {CouseRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={<route.component />}
            />
          ))}
          {HeaderRoutes.map((route,index)=>(
            <Route key={index} path={route.path} element={<route.component/>}/>
          ))}
          <Route path="/help" element={<Help />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
