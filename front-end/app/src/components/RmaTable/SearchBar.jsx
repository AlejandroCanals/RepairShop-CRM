import React, { useState } from 'react';

export function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSearch = (e) => {
    const searchTerm = e.target.value;

    setInput(searchTerm);
    
    onSearch(searchTerm);
  };

  return (
    <div  id='Buscador' className='mb-1'>
      <input
        type="text"
        placeholder="Buscar..."
        value={input}
        onChange={handleSearch}
        className=" p-2 text-white bg-[#1C2533] rounded-lg" 
      />
    </div>
  );
}
