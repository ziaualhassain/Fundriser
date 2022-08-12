import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Pages/index';
import About from './Pages/about';
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
    </Router>
  );
}

export default App;
