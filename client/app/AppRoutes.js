import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../features/home/Home';
import FindOne from '../features/SinglePokemon/findOne';
import Compare from '../features/ComparePokemon/compare'
import Team from '../features/team/team';

/**
 * COMPONENT
 */

const AppRoutes = () => {


  return (
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route to="/home" element={<Home />} />
      <Route path="/find-mon" element={<FindOne />} />
      <Route path="/compare-mon" element={<Compare />} />
      <Route path="/team" element={<Team />} />
    </Routes>
  );
};

export default AppRoutes;
