import { useForm } from 'react-hook-form';
import { createRma } from '../api/rmas.api';
import { useNavigate } from 'react-router-dom';

export function CreateForm() {

  //Register se utiliza para registrar los campos del formulario 

  /*handleSubmit se encarga de manejar la lógica de envío del formulario. se encargará de validar los campos según las reglas de validación definidas en register
    y luego ejecutar la función de envío si la validación es exitosa.*/

  //formstate Este objeto proporciona información sobre el estado del formulario, como si hay errores de validación en los campos del formulario

  //con useform() inicializas las configuraciones del formulario y las funciones que quieres que se utilizen

  const { register, handleSubmit, formState: {
    errors
  } } = useForm();

  const navigate = useNavigate();

  //Cuando se ejecuta onsubmit podemos ver los datos por consola
  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await createRma(data);
      navigate("/reportes")
    } catch (error) {
      console.error('Error al crear el informe RMA', error);
    }

  });

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
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md  bg-gradient-to-br from-gray-800 to-gray-900 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="Iphone" className='text-black '>Iphone</option>
          <option value="Samsung " className='text-black'>Samsung</option>
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
          {...register("resolution", { required: false })}

          className="mt-1 p-2 block w-full border border-gray-300 bg-gradient-to-br from-gray-800 to-gray-900 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div className="mt-4">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 uppe"
        >
          Crear Informe RMA
        </button>
      </div>
    </form>
  );
}
