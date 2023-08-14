import logo from './logo.svg';
import Image from "./Assets/Convocation2.jpg";
import './App.css';
import Header from "./components/NavigationBar";
import Home from './components/Home/Home';
import NavBar from './components/NavigationBar';
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom';

function App() {

 
  return(
    <BrowserRouter>
  
    <div clasName = "App">
      <NavBar />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="*" element={<Navigate to="/"/>} />



      </Routes>



    </div>
    </BrowserRouter>

  )
  
}

export default App;
