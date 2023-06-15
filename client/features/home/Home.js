import React, { useState } from 'react';
import AOS from 'aos';
AOS.init();
import FindOne from './findOne';
import Compare from './compare';

/**
 * COMPONENT
 */
const Home = () => {

  return (
    <div>
      <FindOne />
      <Compare />
      <footer>
        Pokemon
      </footer>
    </div>
  );
};

export default Home;
