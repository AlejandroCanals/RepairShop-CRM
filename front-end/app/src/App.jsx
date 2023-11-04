import React from 'react';
import {BrowserRouter,Routes, Route, Navigate} from 'react-router-dom'
import {Sidebar} from './components/sidebar';
import {Inicio} from './pages/Inicio';
import {Reportes} from './pages/Reportes';
import {RmaForm} from './pages/CrearReporte';




function App() {
  return(
    <BrowserRouter>
  
    <Sidebar/>
  


    <Routes>
      <Route path="/inicio" element={<Inicio/>} />
      <Route path="/reportes" element={<Reportes/>} />
      <Route path="/crear-reporte" element={<RmaForm/>} />
      <Route path="/reportes/:id" element={<RmaForm/>} />


    </Routes>

 
    </BrowserRouter>

  );
}

export default App