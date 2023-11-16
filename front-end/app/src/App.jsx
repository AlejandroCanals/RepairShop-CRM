import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Sidebar } from "./components/Sidebar/sidebar";
import { Inicio } from "./pages/Inicio";
import { Reportes } from "./pages/Reportes";
import { CreateReport } from "./pages/CrearReporte";
import { Toaster } from "react-hot-toast";
import { LogIn } from "./pages/LogIn";
import { AuthProvider } from "./components/Login/AuthContext";
import { PrivateRoute } from "./components/Routing/PrivateRoute"


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>

        <Sidebar />

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Inicio" element={<Inicio />} />
          <Route
            path="/reportes"
            element={
              <PrivateRoute>
                <Route index element={<Reportes />} />
              </PrivateRoute>
            }
          />
          <Route path="/crear-reporte"   element={
              <PrivateRoute>
                <Route index element={<CreateReport />} />
              </PrivateRoute>
            } />
          <Route path="/editar-reporte/:id" element={<CreateReport />} />
          <Route path="/log-in" element={<LogIn />} />
        </Routes>


        <Toaster></Toaster>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
