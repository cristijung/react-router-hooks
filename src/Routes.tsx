import React from 'react';
import Header from './componentes/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './pages/Menu';
import Home from './pages/Home';
import Error from './pages/Error';
import Galeria from './pages/Galeria';
import Lista from './pages/Lista';


function AppRoutes() {
  return (
    <> 
    <BrowserRouter>
    <Header />
    <Menu />
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/galeria' element={<Galeria />}/>
        <Route path='/lista' element={<Lista />}/>
        <Route path='*' element={<Error />}/>
      </Routes>

    </BrowserRouter>

    </>
  );
}

export default AppRoutes;
