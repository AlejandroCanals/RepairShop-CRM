import React from "react";
import { InputField } from "./InputField";
import { SelectField } from "./SelectField";
import { AreaField } from "./AreaField";
import { formdata } from "./formData";
import { useEffect } from "react";

export function RmaForm({}) {
  const {
    onSubmit,
    informe,
    informeId,
    handleInputChange,
    handleDelete,
    statusOptions,
    register,
    formState: { errors },
    
  } = formdata();



  return (
    <form onSubmit={onSubmit}>
      <InputField
        label="Nombre del Cliente"
        name="client_name"
        register={register}
        defaultValue={informe.client_name}
        onChange={handleInputChange}
        required={true}
        errors={errors}
      />

      <SelectField
        label="Modelo del Dispositivo"
        name="device_model"
        register={register}
        defaultValue={informe.device_model}
        onChange={handleInputChange}
        required={true}
        errors={errors}
        options={[
          { value: "Iphone", label: "Iphone" },
          { value: "Samsung", label: "Samsung" },
          { value: "Other", label: "Otro" },
        ]}
      />

      <InputField
        label="IMEI"
        name="imei"
        register={register}
        defaultValue={informe.imei}
        onChange={handleInputChange}
        required={true}
        errors={errors}
      />

      <AreaField
        label="Motivo"
        name="reason"
        register={register}
        defaultValue={informe.reason}
        onChange={handleInputChange}
        required={true}
        errors={errors}
      />

      <SelectField
        label="Estado"
        name="status"
        register={register}
        defaultValue={informe.status}
        onChange={handleInputChange}
        required={true}
        errors={errors}
        options={statusOptions}
      />

      <InputField
        label="Técnico"
        name="technician"
        register={register}
        defaultValue={informe.technician}
        onChange={handleInputChange}
        required={false}
        errors={errors}
      />

      <AreaField
        label="Resolución"
        name="resolution"
        register={register}
        defaultValue={informe.resolution}
        onChange={handleInputChange}
        required={false}
        errors={errors}
      />

      <div className="mb-4">
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-lg"
        >
          {informeId ? "Actualizar" : " Crear Informe RMA"}
        </button>
        {informeId && (
          <button
            type="button"
            onClick={handleDelete}
            className="bg-red-500 text-white px-4 py-2 ml-2 rounded-lg"
          >
            Eliminar
          </button>
        )}
      </div>
    </form>
  );
}
