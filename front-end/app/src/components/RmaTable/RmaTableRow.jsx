import React from 'react';
import { Link } from 'react-router-dom';
import { CreateButton } from '../createButton';

export function RmaTableRow({ rma }) {
  const maxCharsInView = 60; // Número máximo de caracteres para mostrar en la vista de la tabla

  // Truncar el texto para la vista de la tabla
  const truncatedReason = rma.reason.length > maxCharsInView
    ? `${rma.reason.substring(0, maxCharsInView)}...`
    : rma.reason;

    const truncatedResolution = rma.resolution.length > maxCharsInView
    ? `${rma.resolution.substring(0, maxCharsInView)}...`
    : rma.resolution;


  return (
    <tr key={rma.id}>
      <td className="px-5 py-4 whitespace-nowrap">{rma.client_name}</td>
      <td className="px-5 py-4 whitespace-nowrap">{rma.device_model}</td>
      <td className="px-5 py-4 whitespace-nowrap">{rma.imei}</td>
      <td className="px-5 py-4 whitespace-preline">{truncatedReason}</td>
      <td className="px-5 py-4 whitespace-nowrap">{rma.status}</td>
      <td className="px-5 py-4 whitespace-nowrap">{rma.technician}</td>
      <td className="px-5 py-4 whitespace-wrap overflow-preline overflow-ellipsis">{truncatedResolution}</td>
      <td className="px-5 py-4 whitespace-wrap overflow-hidden overflow-ellipsis">
      
        <Link to={`/editar-reporte/${rma.id}`}>
          <CreateButton text="Editar" className="py-0 px-1 font-normal bg-violet-400 text-gray-100" />
        </Link>
      </td>
    </tr>
  );
}
