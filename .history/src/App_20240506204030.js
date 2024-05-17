import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MainBody from './Components/Body/MainBody';
import Footer from './Components/Footer/footer';
import Header from './Components/Header/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Java from './Components/Body/Java';
import SpringBoot from './Components/Body/SpringBoot';
import OtherCourses from './Components/Body/OtherCourses';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/othercourses' element={<OtherCourses />} />
          <Route path='/java' element={<Java />} />
          <Route path='/springboot' element={<SpringBoot />} />
          {/* Add a default route for the main body */}
          <Route path='/' element={<MainBody />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
