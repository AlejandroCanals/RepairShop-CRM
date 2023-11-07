
import React from 'react';

export function AreaField({ label, name, register, defaultValue, onChange, required, errors }) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-md font-semibold text-white">
        {label}
      </label>
      <textarea
        {...register(name, { required: required })}
        id={name}
        name={name}
        defaultValue={defaultValue}
        onChange={onChange}
        className="mt-1 p-2 block w-full border border-gray-300 rounded-md bg-gradient-to-br from-gray-800 to-gray-900 focus:ring-indigo-500 focus:border-indigo-500"
      />
      {errors[name] && <span>This field is required</span>}
    </div>
  );
}


// id  ?