import logo from './logo.svg';
import Image from "./Assets/Convocation2.jpg";
import './App.css';
import "./style.css";
import Header from "./components/NavigationBar";
import Home from './components/Home/Home';
import NavBar from './components/NavigationBar';
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';

function App() {

 
  return(
    <BrowserRouter>
  
    <div clasName = "App">
      <NavBar />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path = "/about" element = {<About />} /> 
        <Route path="/projects" element={<Projects/>} />
        <Route path="/resume" element={<Resume />} />
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>



    </div>
    </BrowserRouter>

  )
  
}

export default App;
