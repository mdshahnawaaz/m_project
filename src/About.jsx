import React from 'react';
import web from "../src/images/review.webp";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Review from './Review';
import Common from './Common'; 

const About = () =>{
    return (
        <>
        
            <Common btname='Contact me' imgsrc={web} visit="/contact" name=" Welcome to About Page " />
            <Review/>
            
        </>
    );
}

export default About;