// PrivateRoute.js
import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useAuth } from "../Login/AuthContext";

export function PrivateRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    // Si el usuario no está autenticado, redirige a la página de inicio de sesión
    return <Navigate to="/log-in" replace={true} />;
  }

  // Si el usuario está autenticado, renderiza las rutas protegidas
  return <Routes>{children}</Routes>;
}
