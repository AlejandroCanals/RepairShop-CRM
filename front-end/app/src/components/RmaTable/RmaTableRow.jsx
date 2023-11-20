import React from 'react';
import { Link } from 'react-router-dom';
import { CreateButton } from '../createButton';

export function RmaTableRow({ rma }) {
  const maxCharsInView = 20; // Número máximo de caracteres para mostrar en la vista de la tabla

  // Acortar el texto que se puede ver en la tablla 
  const truncatedReason = rma.reason.length > maxCharsInView
    ? `${rma.reason.substring(0, maxCharsInView)}...`
    : rma.reason;

    const truncatedResolution = rma.resolution.length > maxCharsInView
    ? `${rma.resolution.substring(0, maxCharsInView)}...`
    : rma.resolution;

    
    function mapStatusToText(status) {
      switch (status) {
        case 'Received':
          return 'Recibido';
        case 'In repair':
          return 'En Taller';
        case 'Repaired':
          return 'Reparado';
        default:
          return 'Desconocido';
      }
    }

  return (
    <tr key={rma.id}>
      <td className="px-5 py-4 whitespace-nowrap">{rma.client_name}</td>
      <td className="px-5 py-4 whitespace-nowrap">{rma.device_model}</td>
      <td className="px-5 py-4 whitespace-nowrap">{rma.imei}</td>
      <td className="px-5 py-4 whitespace-preline">{truncatedReason}</td>
      <td className="px-5 py-4 whitespace-nowrap">{mapStatusToText(rma.status)}</td>
      <td className="px-5 py-4 whitespace-nowrap">{rma.assigned_technician.username}</td>
      <td className="px-5 py-4 whitespace-wrap overflow-preline overflow-ellipsis">{truncatedResolution}</td>
      <td className="px-5 py-4 whitespace-wrap overflow-hidden overflow-ellipsis">
      
        <Link to={`/editar-reporte/${rma.id}`}>
          <CreateButton text="Editar" className="py-0 px-1 font-normal bg-violet-500 text-gray-100" />
        </Link>
      </td>
    </tr>
  );
}