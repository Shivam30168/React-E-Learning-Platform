import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MainBody from './Components/Body/Layout/MainBody';
import Footer from './Components/Footer/footer';
import Header from './Components/Header/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Java from './Components/Body/Java/Java';
import SpringBoot from './Components/Body/SpringBoot/SpringBoot';
import OtherCourses from './Components/Body/OtherCourses/OtherCourses';
import ReactCourse from './Components/Body/React/ReactCourse';
import About from './Components/About/About';
import TreeView from './Components/TreeView';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <DisplayTree/>
        <Routes>
          <Route path='/othercourse' element={<OtherCourses />} />
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
