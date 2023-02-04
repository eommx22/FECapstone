import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';

import About from './About';
import LoginForm from './LoginForm';
import Section2 from './Section2';

import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import Specials from './Specials';
import Main from './Main';


      const NavBar = () => {
        return (
          <>
          <header id="header">
            <img src="../assets/img/Logo.svg" alt="logo"/>
            <nav id="navbar">
            <ul>
                <li><Link to="/" className="nav-item">Home</Link></li>
                <li><Link to="/about" className="nav-item">About</Link></li>
                <li><Link to="/highlights" className="nav-item">Menu</Link></li>
                <li><Link to="/reservations" className="nav-item">Reservations</Link></li>
                <li><Link to="/order" className="nav-item">Order Online</Link></li>
                <li><Link to="/login" className="nav-item">Login</Link></li>
            </ul>

          </nav>
          </header>
          
          <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/highlights" element={<Specials/>} />
            <Route path="/reservations" element={<BookingPage/>} />
            <Route path="/confirmation" element={<ConfirmedBooking/>} />
            <Route path="/order" element={<Section2/>} />
            <Route path="/login" element={<LoginForm/>} />
         </Routes>
         </>
        );
      };

      export default NavBar;