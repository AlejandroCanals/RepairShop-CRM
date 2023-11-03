import React, { useEffect, useState } from 'react';
import { Content } from './content';
import { getAllRmas } from '../api/rmas.api';
import { Pagination } from './pagination'; // I

export function RmaTable() {
  //Paginacion
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [rmas, setRmas] = useState([]);

  useEffect(() => {
    // Realiza una solicitud a la API para obtener los datos RMA cuando el componente se monta
    getAllRmas()
      .then((response) => {
        setRmas(response.data); // Guarda los datos en el estado
      })
      .catch((error) => {
        console.error('Error al obtener las RMA:', error);
      });
  }, []); // El segundo argumento [] asegura que esto solo se ejecute una vez al montar el componente.
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentRmas = rmas.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
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
        {currentRmas.map((rma) => (
            <tr key={rma.id}>
              <td className="px-6 py-4 whitespace-nowrap">{rma.client_name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{rma.device_model}</td>
              <td className="px-6 py-4 whitespace-nowrap">{rma.imei}</td>
              <td className="px-6 py-4 whitespace-nowrap">{rma.reason}</td>
              <td className="px-6 py-4 whitespace-nowrap">{rma.status}</td>
              <td className="px-6 py-4 whitespace-nowrap">{rma.technician}</td>
              <td className="px-6 py-4 whitespace-wrap overflow-hidden overflow-ellipsis">{rma.resolution}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination itemsPerPage={itemsPerPage} totalItems={rmas.length} paginate={paginate} />
    
    </Content>
  );
};

