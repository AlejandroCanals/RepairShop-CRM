import React from 'react';

export function Content(props) {
  return (
    <div className="container flex items-center justify-center  bg-gradient-to-br from-gray-800 to-gray-900">
      <div className=' content mx-auto my-auto '>
        {props.children}

      </div>
    </div>
  );
};
