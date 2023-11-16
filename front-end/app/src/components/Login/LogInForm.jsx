import React, { useState } from "react";
import {loginUser} from './useLogin'
import { useAuth } from './AuthContext';
import { useNavigate } from "react-router-dom";
import { navigateUtil } from "../navigateUtil";


export function LoginForm() {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(username, password);

      // Manejar la respuesta del backend (puede incluir redireccionamiento, guardar token, etc.)
      console.log(response);

      // Verificar si el inicio de sesión fue exitoso y el usuario está presente
      if (response && response.userData) {
        login(response.userData);

        // Navegar a la página de Inicio
        navigateUtil(navigate, "/Inicio");
      } else {
        // Si no hay datos de usuario en la respuesta, puedes manejarlo de alguna manera
        console.error("Inicio de sesión fallido. Datos de usuario no disponibles.");
      }
    } catch (error) {
      // Manejar errores (por ejemplo, mostrar un mensaje de error al usuario)
      console.error(error);
    }
  };




  return (
    <div className="w-[800px] px-8 md:px-32 lg:px-24 ">
      <form
        className="bg-white rounded-lg shadow-2xl p-5 bg-gradient-to-br from-gray-800 to-gray-900"
        onSubmit={(e) => handleLogin(e)} 
      >
        <h1 className="text-white font-bold text-2xl mb-1">Hola!</h1>

        <p className="text-sm font-normal text-white mb-8">
          Por favor, Introduce tu Usuario y Contraseña 
        </p>

        <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
            />
          </svg>

          <input
            id="username"
            className="pl-2 w-full outline-none border-none bg-gradient-to-br from-gray-800 to-gray-900"
            type="text"
            name="username"
            placeholder="Nombre de Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clipRule="evenodd"
            />
          </svg>
          <input
            className="pl-2 w-full outline-none border-none bg-gradient-to-br from-gray-800 to-gray-900"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
        >
          Login
        </button>
        <div className="flex justify-between mt-4">
          <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">
            ¿Olvidaste tu contraseña?
          </span>
          <a
            href="#"
            className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"
          >
            ¿Aún no tienes una cuenta?
          </a>
        </div>
      </form>
    </div>
  );
};
