import React, { useState } from 'react';
import AOS from 'aos';
AOS.init();
import { Link } from "react-router-dom";

/**
 * COMPONENT
 */
const Navbar = () => {

  return (
    <div className='content'>
      <video autoPlay muted loop id="myVideo">
        <source src="/yellow.mp4" type="video/mp4" />
      </video>        
      <img id='pokedex-logo' src='/pokedex.png'/>
      <nav>      
        <Link to='/home'> Home </Link>
        <Link to='/find-mon'> Find Pokemon </Link>
        <Link to='/compare-mon'> Compare Pokemon</Link>
        <Link to='/team'> Build a Team </Link>
      </nav>
    </div>
  );
};

export default Navbar;
