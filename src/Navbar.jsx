import React, { useState } from "react";
import "./navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <span>S</span>ony
            <span>B</span>outique
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">about</NavLink>
            </li>
            <li>
              <NavLink to="/service">services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">contact</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.facebook.com"
                target="_ansari">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/ansari_shahnawaaz_123/"
                target="_ansari">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
           
          </ul>

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};

export default Navbar;


// import React from "react";
// import { NavLink } from "react-router-dom";

// const Navbar =() =>{
//     return (
//         <>
//         <div className="container-fluid nav_bg">
//             <div className="row">
//                 <div className="col-10 mx-auto">
//             <nav className="navbar navbar-expand-lg bg-body-tertiary">
//   <div className="container-fluid">
//     <NavLink activeClassName="menu_active" className="navbar-brand" to="/">Navbar</NavLink>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <NavLink activeClassName="menu_active" className="nav-link active" aria-current="page" to="/">Home</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink activeClassName="menu_active" className="nav-link active" aria-current="page" to="/service">Service</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink activeClassName="menu_active" className="nav-link active" aria-current="page" to="/about">About</NavLink>
//         </li>
//         <li className="nav-item">
//           <NavLink activeClassName="menu_active" className="nav-link active" aria-current="page" to="/contact">Contact</NavLink>
//         </li>
        
//       </ul>
      
//     </div>
//   </div>
// </nav>
// </div>
//             </div>
//         </div>
//         </>
//     )
// }
// export default Navbar;