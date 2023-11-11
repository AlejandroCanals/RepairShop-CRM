import { useEffect, useState } from 'react';
import { getAllRmas } from '../../api/rmas.api';
import { useNavigate } from 'react-router-dom';

export function useTableData() {
  //Creacion de estado para obtener los rmas
  const [rmas, setRmas] = useState([]);

  //Estado para obtener la pagina actual para el elemento paginacion
  const [currentPage, setCurrentPage] = useState(1);


  // Calcula los elementos a mostrar en la página actual
  const itemsPerPage = 9; // Número de elementos por página
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentRmas = rmas.slice(indexOfFirstItem, indexOfLastItem);


  //Navegacion a crear nuevo reporte 
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate('/crear-reporte');
  };

  // Realiza una solicitud a la API para obtener los datos RMA cuando el componente se monta
  useEffect(() => {
    getAllRmas()
      .then((response) => {
        setRmas(response.data); // Guarda los datos en el estado
        setOriginalRmas(response.data); // Guarda los datos originales para luego volver a mostrar cuando el campo busqueda vuelva a estar vacio
      })
      .catch((error) => {
        console.error('Error al obtener las RMA:', error);
      });
  }, []);

  //Barra de busqueda
  const [searchTerm, setSearchTerm] = useState('');

  const [originalRmas, setOriginalRmas] = useState([]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  
    const lowerCasedSearchTerm = term.toLowerCase();
  
    if (!lowerCasedSearchTerm.trim()) {
      setCurrentPage(1);
      setRmas(originalRmas); // Restablecer a todos los datos originales
      return;
    }
  
    const filteredRmas = originalRmas.filter((rma) =>
      rma.client_name.toLowerCase().includes(lowerCasedSearchTerm) ||
      rma.device_model.toLowerCase().includes(lowerCasedSearchTerm) ||
      rma.imei.toLowerCase().includes(lowerCasedSearchTerm)
    );
  
    setCurrentPage(1);
    setRmas(filteredRmas);
  };


  return {
    rmas,
    currentRmas,
    setCurrentPage, // Añade la función para cambiar currentPage
    itemsPerPage,
    handleButtonClick,
    handleSearch,
    searchTerm,
  };
}
