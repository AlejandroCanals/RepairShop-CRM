import React from 'react';

export function RmaTableHeader() {
  return (
    <thead className='bg-blue-600 '> 
      <tr>
        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-100 uppercase tracking-wider   ">
          Nombre Cliente
        </th>
        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-100  uppercase tracking-wider">
          Modelo
        </th>
        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-100 uppercase tracking-wider">
          Imei
        </th>
        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-100  uppercase tracking-wider">
          Problema
        </th>
        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-100 uppercase tracking-wider">
          Estado
        </th>
  
        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-100 uppercase tracking-wider">
          Resolución / Comentario
        </th>
        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-100 uppercase tracking-wider">
          Fecha
        </th>
        <th className="px-6 py-3 text-left text-xs font-semibold text-gray-100 uppercase tracking-wider">
          Técnico
        </th>
        <th>
        </th>
      </tr>
    </thead>
  );
}
