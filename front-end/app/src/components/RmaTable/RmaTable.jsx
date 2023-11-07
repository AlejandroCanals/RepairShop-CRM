import React from 'react';
import { Content } from '../content';
import { useRmasData } from './useRmasData';
import { RmaTableHeader } from './RmaTableHeader';
import { RmaTableRow } from './RmaTableRow';
import { PaginationContainer } from './PaginationContainer';
import { CreateButton } from '../createButton';

export function RmaTablee() {
  const { rmas, currentRmas, itemsPerPage, setCurrentPage, handleButtonClick } = useRmasData();
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <Content>
        <div>
        <div>
          <table className="min-w-full divide-y divide-gray-200">
            <RmaTableHeader />
            <tbody>
              {currentRmas.map((rma) => (
                <RmaTableRow key={rma.id} rma={rma} />
              ))}
            </tbody>
          </table>
        </div>
</div>
        <div className="mt-6 relative">
          <PaginationContainer
            itemsPerPage={itemsPerPage} totalItems={rmas.length} paginate={paginate} />
          
          <div className="relative">
            <CreateButton text="Crear Nuevo Informe" className="absolute bottom-0 right-2" onClick={handleButtonClick}/>
          </div>
        </div>
      </Content>
    </div>
  );
}
