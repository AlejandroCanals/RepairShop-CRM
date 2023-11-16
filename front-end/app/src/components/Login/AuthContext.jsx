// AuthContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  // Intentar obtener el usuario desde localStorage al cargar la página
  const storedUser = JSON.parse(localStorage.getItem('user')) || null;

  const [user, setUser] = useState(storedUser);

  // Guardar el usuario en localStorage cada vez que cambia
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  const login = (userData) => {
    // Lógica para manejar el inicio de sesión, establecer el usuario, etc.
    setUser(userData);
  };

  const logout = () => {
    // Lógica para manejar el cierre de sesión, eliminar el usuario, etc.
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser utilizado dentro de un AuthProvider');
  }
  return context;
}
