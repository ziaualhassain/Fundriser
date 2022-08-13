import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './components/HeroSection/index';
import About from './components/About/about';
//This is about page from the components and styled using StyledComponents.
import Services from './Pages/services';
import Signup from './signup';


function App() {
  return (
    <Router>
      <Navbar/>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/about" element = {<About/>}/>
      <Route path="/services" element = {<Services/>}/>
      <Route path="/sign-up" element = {<Signup/>}/>
    </Routes>
       <About/>
    </Router>

  );
}

export default App;
