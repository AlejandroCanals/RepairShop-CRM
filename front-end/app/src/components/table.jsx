import React from 'react';
import { Content } from './content';

export function Table (){
  return (
    <Content>
        <table className="min-w-full divide-y divide-gray-200 ">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Client Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Device Model
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              IMEI
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Reason
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Technician
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Resolution
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Aquí puedes mapear tus datos para crear las filas */}
          {/* Ejemplo de una fila */}
          <tr className="">
            <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
            <td className="px-6 py-4 whitespace-nowrap">Device XYZ</td>
            <td className="px-6 py-4 whitespace-nowrap">1234567890</td>
            <td className="px-6 py-4 whitespace-nowrap">Repair</td>
            <td className="px-6 py-4 whitespace-nowrap">In Progress</td>
            <td className="px-6 py-4 whitespace-nowrap">Jane Smith</td>
            <td className="px-6 py-4 whitespace-nowrap">Repaired</td>
          </tr>
        </tbody>
      </table>  
        </Content>
  );
};