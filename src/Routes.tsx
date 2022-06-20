import { Route, Routes } from 'react-router-dom';
import Layout from 'containers/Layout';
import Home from 'pages/Home';
import Dev from './pages/Dev';
import React from 'react';
import Game from './pages/Game/Game';

const AppRoutes: React.FC = () => {
  return (
    <Routes>

      <Route path='/dev' element={<Dev/>}/>

      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path={'/game/:gameName'} element={<Game/>}/>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
