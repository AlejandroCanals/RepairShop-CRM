import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function SidebarButton({ to, children }) {
  const [activeButton, setActiveButton] = useState(false);
  const location = useLocation();

  const handleButtonClick = () => {
    setActiveButton(true);
  };

  // Agrega una condición para quitar la clase activa cuando no es la ruta actual
  const isActive = activeButton && location.pathname === to;

  return (
    <Link to={to}>
      <button
        className={`middle none font-sans font-bold center transition-all text-xs py-3 rounded-lg ${
          isActive
            ? 'bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40'
            : ''
        } w-full flex items-center gap-4 px-4 capitalize`}
        type="button"
        onClick={() => {
          handleButtonClick();
          // Obtiene la función de logout del componente LogOutButton y la ejecuta
        }}
      >
        {children}
      </button>
    </Link>
  );
}
