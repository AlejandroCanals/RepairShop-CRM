import React from 'react';
import { Content } from '../content';
import { useTableData } from './useTableData';
import { RmaTableHeader } from './RmaTableHeader';
import { RmaTableRow } from './RmaTableRow';
import { PaginationContainer } from './PaginationContainer';
import { CreateButton } from '../createButton';
import { SearchBar } from './SearchBar';


export function RmaTablee() {
  const { rmas, currentRmas, itemsPerPage, setCurrentPage, handleButtonClick, handleSearch, } = useTableData();
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Content>

        <SearchBar onSearch={handleSearch} />

        
          <div id='Tabla-Rmas'>
            <table className="min-w-full divide-y divide-gray-600">
              <RmaTableHeader />
              <tbody>
                {currentRmas.map((rma) => (
                  <RmaTableRow key={rma.id} rma={rma} />
                ))}
              </tbody>
            </table>
          </div>
       


        <div className="mt-6 relative">
          <PaginationContainer
            itemsPerPage={itemsPerPage} totalItems={rmas.length} paginate={paginate} />

          <div className="relative">
            <CreateButton text="Crear Nuevo Informe" className="absolute bottom-0 right-2" onClick={handleButtonClick} />
            
          </div>
        </div>
      </Content>
    </div>
  );
}
