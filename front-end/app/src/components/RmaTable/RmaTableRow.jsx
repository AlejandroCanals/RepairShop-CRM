import React from 'react';
import { Link } from 'react-router-dom';
import { CreateButton } from '../createButton';

export function RmaTableRow({ rma }) {
  return (
    <tr key={rma.id}>
      <td className="px-6 py-4 whitespace-nowrap">{rma.client_name}</td>
      <td className="px-6 py-4 whitespace-nowrap">{rma.device_model}</td>
      <td className="px-6 py-4 whitespace-nowrap">{rma.imei}</td>
      <td className="px-6 py-4 whitespace-nowrap">{rma.reason}</td>
      <td className="px-6 py-4 whitespace-nowrap">{rma.status}</td>
      <td className="px-6 py-4 whitespace-nowrap">{rma.technician}</td>
      <td className="px-6 py-4 whitespace-wrap overflow-hidden overflow-ellipsis">{rma.resolution}</td>
      <td className="px-6 py-4 whitespace-wrap overflow-hidden overflow-ellipsis">
      
        <Link to={`/editar-reporte/${rma.id}`}>
          <CreateButton text="Editar" className="py-0 px-1 font-normal bg-violet-400 text-gray-100" />
        </Link>
      </td>
    </tr>
  );
}
