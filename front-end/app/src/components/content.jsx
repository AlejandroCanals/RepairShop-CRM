// Content.js
import React from 'react';

export function Content(props){
  return (
    <div className="content  w-screen h-screen flex items-center justify-center">
      <div className='mx-auto my-auto border-solid border-2 border-sky-500 w-content mr-10 h-contentHeight'>
       {props.children}
    
      </div>
    </div>
  );
};

 


//<div className="bg-gradient-to-br from-gray-800 to-gray-900  w-auto rounded-xl  h-screen flex items-center justify-center">
      

//<div class="contenido" className="relative border border-white border-solid w-custom  h-screen ml-80 ">