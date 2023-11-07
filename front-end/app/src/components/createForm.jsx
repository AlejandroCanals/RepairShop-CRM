import React, { useState } from 'react'; // Añade la importación de useState
import { useForm } from 'react-hook-form';
import { createRma, getRmaById, updateRma, deleteRma } from '../api/rmas.api';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";


export function CreateForm({ customContent }) {

  //Register se utiliza para registrar los campos del formulario 

  /*handleSubmit se encarga de manejar la lógica de envío del formulario. se encargará de validar los campos según las reglas de validación definidas en register
    y luego ejecutar la función de envío si la validación es exitosa.*/

  //formstate Este objeto proporciona información sobre el estado del formulario, como si hay errores de validación en los campos del formulario

  //con useform() inicializas las configuraciones del formulario y las funciones que quieres que se utilizen

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const params = useParams();
  const informeId = params.id; // Obtiene el informeId de los parámetros de la URL

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

  // Función para cargar los datos del informe si estamos en modo de edición
  const cargarDatosDelInforme = () => {
    if (informeId) {
      getRmaById(informeId)
        .then((response) => {
          const informeData = response.data;
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

  useEffect(() => {
    // Carga los datos del informe si estamos en modo de edición
    cargarDatosDelInforme();
  }, [informeId]);

  //Cuando se ejecuta onsubmit podemos ver los datos por consola
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

  return (

    <form onSubmit={onSubmit}>
      <div className="mb-4">
        <label htmlFor="client_name" className="block text-md font-semibold text-white">
          Nombre del Cliente
        </label>
        <input
          {...register("client_name", { required: true })}
          type="text"
          id="client_name"
          name="client_name"
          defaultValue={informe.client_name}
          onChange={handleInputChange}
          required
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md  bg-gradient-to-br from-gray-800 to-gray-900 focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.client_name && <span>This filed is required</span>}
      </div>

      <div className="mb-4 ">
        <label htmlFor="device_model" className="block text-md font-semibold text-white">
          Modelo del Dispositivo
        </label>
        <select
          {...register("device_model", { required: true })}

          id="device_model"
          name="device_model"
          defaultValue={informe.device_model}
          onChange={handleInputChange}

          className="mt-1 p-2 block w-full border border-gray-300 rounded-md  bg-gradient-to-br from-gray-800 to-gray-900 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="Iphone" className='text-black '>Iphone</option>
          <option value="Samsung" className='text-black'>Samsung</option>
          <option value="Other" className='text-black'>Otro</option>
        </select>
        {errors.device_model && <span>This filed is required</span>}

      </div>

      <div className="mb-4">
        <label htmlFor="imei" className="block text-md font-semibold  text-white">
          IMEI
        </label>
        <input
          type="text"
          id="imei"
          name="imei"
          defaultValue={informe.imei}
          onChange={handleInputChange}
          {...register("imei", { required: true })}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md  bg-gradient-to-br from-gray-800 to-gray-900 focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.imei && <span>This filed is required</span>}

      </div>

      <div className="mb-4">
        <label htmlFor="reason" className="block text-md font-semibold text-white">
          Motivo
        </label>
        <textarea
          id="reason"
          name="reason"
          defaultValue={informe.reason}
          onChange={handleInputChange}

          {...register("reason", { required: true })}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md  bg-gradient-to-br from-gray-800 to-gray-900 focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.reason && <span>This filed is required</span>}

      </div>

      <div className="mb-4">
        <label htmlFor="status" className="block text-md font-semibold text-white">
          Estado
        </label>
        <select
          id="status"
          name="status"
          defaultValue={informe.status}
          onChange={handleInputChange}

          {...register("status", { required: true })}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md bg-gradient-to-br from-gray-800 to-gray-900 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="Received" className='text-black' >Recibido</option>
          <option value="In repair" className='text-black' >En reparación</option>
          <option value="Repaired" className='text-black' >Reparado</option>
        </select>

      </div>

      <div className="mb-4">
        <label htmlFor="technician" className="block text-md font-semibold text-white">
          Técnico
        </label>
        <input
          type="text"
          id="technician"
          name="technician"
          defaultValue={informe.technician}
          onChange={handleInputChange}


          className="mt-1 p-2 block w-full border border-gray-300 rounded-md  bg-gradient-to-br from-gray-800 to-gray-900 focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.technician && <span>This filed is required</span>}

      </div>

      <div className="mb-4">
        <label htmlFor="resolution" className="block text-md font-semibold leading-6  " >
          Resolución
        </label>
        <textarea
          id="resolution"
          name="resolution"
          defaultValue={informe.resolution}
          onChange={handleInputChange}

          {...register("resolution", { required: false })}

          className="mt-1 p-2 block w-full border border-gray-300 bg-gradient-to-br from-gray-800 to-gray-900 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>
      <div className="mb-4">


        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg">
          {informeId ? 'Actualizar' : ' Crear Informe RMA'}
        </button>
        {informeId && (
          <button type="button" onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 ml-2 rounded-lg">
            Eliminar
          </button>
        )}
      </div>
      {customContent}

    </form>
  );
}
