import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import Section1 from './Section1';
import Section2 from './Section2';
//import Section3 from './Section3';
//import Section4 from './Section4';


      
      const NavBar = () => {
        return (
          <>
          <nav id="navbar">
            <ul>
                <li><Link to="#home" className="nav-item">Home</Link></li>
                <li><Link to="#about" className="nav-item">About</Link></li>
                <li><Link to="#menu" className="nav-item">Menu</Link></li>
                <li><Link to="#reservations" className="nav-item">Reservations</Link></li>
                <li><Link to="#order" className="nav-item">Order Online</Link></li>
                <li><Link to="#login" className="nav-item">Login</Link></li>
            </ul>
            
          </nav>
          <Routes>
            <Route path="#home" element={<Section1/>} />
            <Route path="#about" element={<Section2/>} />
         </Routes>
         </>
        );
      };
      
      export default NavBar;