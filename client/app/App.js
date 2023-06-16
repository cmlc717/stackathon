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
          Video by Pressmaster: https://www.pexels.com/video/digital-presentation-of-information-on-a-screen-monitor-3130182/
        </footer>
    </div>
  );
};

export default App;
