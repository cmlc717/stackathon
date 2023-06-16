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
        <source src="https://v4.cdnpk.net/videvo_files/video/free/video0485/large_watermarked/_import_61b58e251e5b68.14507349_FPpreview.mp44" type="video/mp4" />
      </video>        
      <img id='pokedex-logo' src='/pokedex.png'/>
      <nav>      
        <Link to='/home'> Home </Link>
        <Link to='/find-mon'> Find Pokemon </Link>
        <Link to='/compare-mon'> Compare Pokemon</Link>
      </nav>
    </div>
  );
};

export default Navbar;
