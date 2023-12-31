import React from 'react';
import { NavLink } from 'react-router-dom';
const Common = (props) =>{
    return (
        <>
        <section id="header" className='d-flex align-items-centre'>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                <div className='row'>
                    <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                        <h1>
                            {props.name} <br/> <strong className='brand-name ' style={{textAlign : "centre"}}>  SONY BOUTIQUE </strong>
                        </h1>
                        <h3 className='mv-3'>
                            {props.text}
                        </h3>
                        <div className='mt-3'>
                            <NavLink to={props.visit} className='btn-get-started'>
                                {props.btname}
                            </NavLink>
                        </div>
                    </div>
                        <div className='col-lg-6 order-1 order-kg-2 header-img'>
                            <img src={props.imgsrc} className='img-fluid animated'  id="img-hai" alt="photo"/>
                        </div>
                        </div>
                </div>
                </div>
                </div>
                </section>
         
        </>
    );
}

export default Common;