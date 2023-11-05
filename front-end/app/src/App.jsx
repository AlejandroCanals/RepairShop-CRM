import React from 'react';
import {BrowserRouter,Routes, Route, Navigate} from 'react-router-dom'
import {Sidebar} from './components/sidebar';
import {Inicio} from './pages/Inicio';
import {Reportes} from './pages/Reportes';
import {CreateReport} from './pages/CrearReporte';



function App() {
  return(
    <BrowserRouter>
  
    <Sidebar/>
  


    <Routes>
      <Route path="/inicio" element={<Inicio/>} />
      <Route path="/reportes" element={<Reportes/>} />
      <Route path="/crear-reporte" element={<CreateReport/>} />
      <Route path="/editar-reporte/:id" element={<CreateReport />} />   
      </Routes>

 
    </BrowserRouter>

  );
}

export default App