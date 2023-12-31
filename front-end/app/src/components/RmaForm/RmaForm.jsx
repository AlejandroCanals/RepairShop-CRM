
import { useRmaForm } from "./useRmaForm";


export function RmaForm() {
  const {
    informe,
    informeId,
    register,
    errors,
    onSubmit,
    handleInputChange,
    handleDelete,
    listaDeTecnicos,
  } = useRmaForm();

  return (

    <form onSubmit={onSubmit}  >



      <div className="mb-4">
        <label htmlFor="client_name" className="grid-cols-4 text-md font-semibold text-white">
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



      <div className="mb-4 ">
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
        <label htmlFor="assigned_date" className="block text-md font-semibold text-white">
          Fecha Asignada
        </label>
        <input
          {...register("assigned_date", { required: true })}
          type="date"
          id="assigned_date"
          name="assigned_date"
          defaultValue={informe.assigned_date}
          onChange={handleInputChange}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md bg-gradient-to-br from-gray-800 to-gray-900 focus:ring-indigo-500 focus:border-indigo-500"
        />
        {errors.assigned_date && <span>This field is required</span>}
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


    </form>
  );
}
