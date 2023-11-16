import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Login/AuthContext';

export function Bienvenido() {
  const { user } = useAuth();

  return (
    <h2 className='mt-2 text-lg'>
      {user ? (
        <>
          Bienvenido de nuevo <span className="font-bold">{user.username}</span>
        </>
      ) : (
        <>
          Bienvenido.{' '}
          <Link to="/log-in" className="text-blue-500 hover:underline">
            Inicia sesión
          </Link>{' '}
          para ver más información.
        </>
      )}
    </h2>
  );
}
