import React from "react";
import { useAuth } from "../Login/AuthContext";

export function LogoutButton() {
  const { logout } = useAuth();

  const handleLogout = () => {
    // Llama a la función de logout del contexto de autenticación
    logout();

    // Redirige a la página de inicio o a donde desees después de cerrar sesión
    history.push("/log-in");
  };

  return (
    <button
      onClick={handleLogout}
      className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-white hover:bg-white/10 active:bg-white/30 w-full flex items-center gap-4 px-4 capitalize"
      type="button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
        className="w-5 h-5 text-inherit"
      >
        <path d="M6.25 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM3.25 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM19.75 7.5a.75.75 0 00-1.5 0v2.25H16a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H22a.75.75 0 000-1.5h-2.25V7.5z"></path>
      </svg>
      <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
        Cerrar Sesión
      </p>
    </button>
  );
}
