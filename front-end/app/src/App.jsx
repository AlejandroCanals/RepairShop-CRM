import React from 'react';
import {BrowserRouter,Routes, Route, Navigate} from 'react-router-dom'
import {Sidebar} from './components/sidebar';
import {Inicio} from './pages/Inicio';
import {Reportes} from './pages/Reportes';
import {Content} from './components/content';



function App() {
  return(
    <BrowserRouter>
  
    <Sidebar/>


    <Routes>
      <Route path="/inicio" element={<Inicio/>} />
      <Route path="/reportes" element={<Reportes/>} />
    </Routes>

 
    </BrowserRouter>

  );
}

export default App