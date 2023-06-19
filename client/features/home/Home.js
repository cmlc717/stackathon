import React, { useState } from 'react';
import AOS from 'aos';
AOS.init();

/**
 * COMPONENT
 */
const Home = () => {
  return (
    <div id="home">  
      <div id="bubble"> <p>Hi there! This is Rotom-dex! Explore my website to learn more about the amazing world of Pokemon!! </p></div>
      <img src='/Rotom-Pokédex.png' />
    </div>
  );
};

export default Home;
