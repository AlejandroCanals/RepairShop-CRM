import React, { useState } from 'react';

export function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setInput(searchTerm);
    onSearch(searchTerm);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar..."
        value={input}
        onChange={handleSearch}
        className="border p-2 text-black"
      />
    </div>
  );
}
