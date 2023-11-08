import React from 'react';

export function InputField({ label, name, register, onChange, error, type = 'text' }) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-md font-semibold text-white">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        register={register} // Cambié register por ref
        onChange={onChange}
        className="mt-1 p-2 block w-full border border-gray-300 rounded-md bg-gradient-to-br from-gray-800 to-gray-900 focus:ring-indigo-500 focus:border-indigo-500"
      />
      {error && <span>{error.message}</span>}
    </div>
  );
}