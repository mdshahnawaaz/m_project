import React from 'react';
import web from "../src/images/qq.jpg";
import Common from './Common';
import { NavLink } from 'react-router-dom';
const Home = () =>{
    return (
        <>

        <Common  name="The Perfect Modern Wear For Divas" visit="/service" imgsrc={web} btname="GET STARTED"  text="One of the most bespoke one-stop bridal wear boutiques is sony boutique.
        The luxury boutique makes the special occassion moew memorable with the customized services.
        Sony boutique has been providing a huge variety of outfits for all kind of 
        occasions for every women and even all age groups"/>
         
        </>
    );
}

export default Home;