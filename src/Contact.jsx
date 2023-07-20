import React, { useState } from 'react';

const Contact = () =>{
    const [name1,setName]=useState({
       
        fname:"",
        fadd:"",
        fno:"",
        femail:"",
        ftext:"",
        
    })
    const InputEvent =(event)=>{
        const { name,value }= event.target;
        setName((preValue)=>{
            return {
                ...preValue,
                [name]:value,
            };
        });
        console.log(name1.fname);
    };
    const Inputchange=()=>{
        alert( ` My Name is  ${name1.fname} phone number is ${name1.fno} address is ${name1.fadd} ${name1.ftext}`);
    }
    const Inputchange1=(event)=>{
            event.preventDefault();
    }
    return (
        <>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
           <div className='my-5'>
            <h1 className="mb-3"> Contact US {name1.fname}</h1>
           </div>
           <div className='container contact_div'>
            <div className='row'>
            <div className='col-md-6 col-10 mx-auto'>
                <form onSubmit={Inputchange1}>
                <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Full Name</label>
  <input type="text"  name="name" onChange={InputEvent} class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name" defaultValue={name1.fname}/>
</div>
   <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Address</label>
  <input type="text"  name="address" onChange={InputEvent} class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Address" defaultValue={name1.fadd}/>
</div>
   <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
  <input type="number" name="number" onChange={InputEvent} class="form-control" id="exampleFormControlInput1" placeholder="Enter your Number" defaultValue={name1.fno}/>
</div>
   <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email"   name="email" onChange={InputEvent} class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" defaultValue={name1.femail}/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control"  name="textarea" onChange={InputEvent} id="exampleFormControlTextarea1" rows="3"  defaultValue={name1.ftext}></textarea>
</div>
<button type="submit"  onClick={Inputchange} class="btn btn-outline-primary">Submit</button>
                </form>
            </div>
             </div>
           </div>
           </div>
           </div>
           </div>
        </>
    );
}

export default Contact;