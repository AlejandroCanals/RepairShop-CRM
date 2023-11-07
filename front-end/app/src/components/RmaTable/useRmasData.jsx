import { useEffect, useState } from 'react';
import { getAllRmas } from '../../api/rmas.api';
import { useNavigate } from 'react-router-dom';

export function useRmasData() {
  //Creacion de estado para obtener los rmas
  const [rmas, setRmas] = useState([]);

  //Estado para obtener la pagina actual para el elemento paginacion
  const [currentPage, setCurrentPage] = useState(1); 


  // Calcula los elementos a mostrar en la página actual
  const itemsPerPage = 10; // Número de elementos por página
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentRmas = rmas.slice(indexOfFirstItem, indexOfLastItem);


  //Navegacion a nuevo reporte
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/crear-reporte');
  };


  useEffect(() => {
    // Realiza una solicitud a la API para obtener los datos RMA cuando el componente se monta
    getAllRmas()
      .then((response) => {
        setRmas(response.data); // Guarda los datos en el estado
      })
      .catch((error) => {
        console.error('Error al obtener las RMA:', error);
      });
  }, []);



  return {
    rmas,
    currentRmas,
    setCurrentPage, // Añade la función para cambiar currentPage
    itemsPerPage,
    handleButtonClick,
  };
}
