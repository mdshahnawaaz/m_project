import React from 'react';
import {Switch ,Route , Redirect} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import Service from './Service';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';


const  App=()=> {
  return (
    <>
      <Navbar/>
      <Switch>
         <Route exact path='/' component={Home}/>
         <Route path='/contact' component={Contact}/>
         <Route path='/about' component={About}/>
         <Route path='/service' component={Service}/>
         <Route  path='/'><Home/></Route> 
      </Switch>
    </>
  );
}

export default App;
