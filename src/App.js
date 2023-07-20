import React from 'react';
import {Routes ,Route } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import Service from './Service';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
         <Route path='/' Component={Home}/>
         <Route path='/contact' Component={Contact}/>
         <Route path='/about' Component={About}/>
         <Route path='/service' Component={Service}/>
         
      </Routes>
    </>
  );
}

export default App;
