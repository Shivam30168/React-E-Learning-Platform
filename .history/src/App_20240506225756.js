import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MainBody from './Components/Body/MainBody';
import Footer from './Components/Footer/footer';
import Header from './Components/Header/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Java from './Components/Body/Java/Java';
import SpringBoot from './Components/Body/SpringBoot/SpringBoot';
import OtherCourses from './Components/Body/OtherCourses';
import ReactCourse from './Components/Body/ReactCourse';
import About from './Components/About/About';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/othercourses' element={<OtherCourses />} />
          <Route path='/reactcourse' element={<ReactCourse />} />
          <Route path='/java' element={<Java />} />
          <Route path='/springboot' element={<SpringBoot />} />
          <Route path='/about' element={<About />} />
          
          <Route path='/' element={<MainBody />} />
          <Route path='/home' element={<MainBody />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
