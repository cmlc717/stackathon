import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Navbar from '../features/navbar/navbar';

/**
 * COMPONENT
 */

const App = () => {




  return (
    <div>
        <Navbar />
        <div className='content-body'>
          <AppRoutes />
        </div>
        <footer>
          <a href="https://www.freepik.com/free-video/futuristic-plexus-structure-loop_179351#position=1&term=technology%20background&from_view=search">Video by Freepik</a>
        </footer>
    </div>
  );
};

export default App;
