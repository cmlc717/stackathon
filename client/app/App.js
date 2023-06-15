import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../features/home/Home';
import SinglePokemon from '../features/SinglePokemon/singlePokemon';

/**
 * COMPONENT
 */

const App = () => {


  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route to="/home" element={<Home />} />
    </Routes>
  );
};

export default App;
