import React from 'react';
import Card from "./Card";
import Sdata from "./Sdata";

const Service = () =>{
    return (
        <>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
           <div className='my-5'>
            <h1 className='text-centre'>OUR SERVICES</h1>
           </div> 
           <div className='container-fluid mb-5'>
            <div className='row '>
                <div className='col-10 mx-auto'>
                    <div className='row gy-4'>
                        
                            {
                                Sdata.map((val,ind)=>{
                                    return <Card 
                                    id={ind}
                                    imgsrc={val.imgsrc}
                                    title={val.title}
                                    price={val.cost}/>
                                })
                            }
                                       
                       
                    </div>
                </div>
            </div>
           </div>
           </div>
           </div>
           </div>
        </>
    );
}

export default Service;