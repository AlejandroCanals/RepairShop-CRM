
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from "react-router-dom";
import { createRma, getRmaById, updateRma, deleteRma } from '../../api/rmas.api'
import { useEffect } from "react";
import { useState } from 'react'; // Añade la importación de useState

export function formdata(){
    
const {
    register, //Registra los campos de entrada y los vincula con las validaciones y los estados
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  // Obtiene el informeId de los parámetros de la URL con useparams
  const params = useParams();
  const informeId = params.id; 



  // Define un estado local para almacenar los datos del informe
  const [informe, setInforme] = useState({
    client_name: '', // Inicializa con valores por defecto
    device_model: '',
    imei: '',
    reason: '',
    status: '',
    technician: '', 
    resolution: '',

  });
  const statusOptions = [
    { value: 'Received', label: 'Recibido' },
    { value: 'In repair', label: 'En reparación' },
    { value: 'Repaired', label: 'Reparado' },
  ];


   // Función para cargar los datos del informe si estamos en modo de edición
   const cargarDatosDelInforme = () => {
    if (informeId) {
      getRmaById(informeId)
        .then((response) => {
          const informeData = response.data;
          console.log('Datos del informe cargados:', informeData);
          // Llena los campos del formulario con los datos del informe
          Object.keys(informeData).forEach((key) => {
            setValue(key, informeData[key]);
          });
        })
        .catch((error) => {
          console.error('Error al obtener los detalles del informe:', error);
        });
    }
  };

    // Carga los datos del informe si estamos en modo de edición
  useEffect(() => {
    cargarDatosDelInforme();
  }, [informeId]);



  //Segun el valor de informeId comprueba si esta en modo edicion o creación 
  const onSubmit = handleSubmit(async (data) => {
    try {
      if (informeId) {
        // Si tenemos un informeId, estamos en modo de edición
        await updateRma(informeId, data);
      } else {
        // Si no tenemos un informeId, estamos en modo de creación
        await createRma(data);
      }
      navigate('/reportes');
    } catch (error) {
      console.error('Error al crear o actualizar el informe RMA', error);
    }
  });

  // Función para guardar lo que escribe el usuario cuando edita el documento 
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInforme({
      ...informe,
      [name]: value,
    });
  };

  // Función para eliminar el informe
  const handleDelete = async () => {
    try {
      if (informeId) {
        await deleteRma(informeId);
        navigate('/reportes');
      }
    } catch (error) {
      console.error('Error al eliminar el informe RMA', error);
    }
  };

  return {
    informeId,
    informe,
    statusOptions,
    register,
    formState: { errors },
    onSubmit,
    handleDelete,
    handleInputChange,
  };
}
