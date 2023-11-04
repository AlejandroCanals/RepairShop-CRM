import React from 'react';

export function CreateButton(props) {
  return (
    <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded ${props.className}`} onClick={props.onClick}>
      {props.text}
    </button>
  );

};

