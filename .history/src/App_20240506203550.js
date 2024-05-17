import { Route, Routes } from 'react-router-dom';
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
    <Routes>
        <Route path='/' element={<Header/>}/>
        <Route path='/othercourses' element={<OtherCourses />} />
        <Route path='/java' element={<Java />} />
        <Route path='/springboot' element={<SpringBoot />} />
      
    </Routes>
  )
}

export default App;
