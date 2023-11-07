import React from 'react';

export function PaginationContainer({itemsPerPage, totalItems, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }




  return (
    <div className="pagination text-center mt-2">
      {pageNumbers.map((number) => (
        <button
          key={number}
          className="px-3 py-2 mx-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={() => paginate(number)}
        >
          {number}
        </button>
        
      ))}
  
    </div>
  );
}
