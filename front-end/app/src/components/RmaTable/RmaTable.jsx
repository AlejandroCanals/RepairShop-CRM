import React from 'react';
import { Content } from '../Common/content';
import { useTableData } from './useTableData';
import { RmaTableHeader } from './RmaTableHeader';
import { RmaTableRow } from './RmaTableRow';
import { PaginationContainer } from './PaginationContainer';
import { CreateButton } from '../Common/createButton';
import { SearchBar } from './SearchBar';


export function RmaTablee() {
  const { rmas, currentRmas, itemsPerPage, setCurrentPage, handleButtonClick, handleSearch, } = useTableData();
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (

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


      <div className="mt-6 ">

        <div className='absolute bottom-[15px] right-[750px]'>
          <PaginationContainer
            itemsPerPage={itemsPerPage} totalItems={rmas.length} paginate={paginate} />
        </div>
        <CreateButton text="Crear Nuevo Informe" className="absolute bottom-[15px] right-[100px] " onClick={handleButtonClick} />


      </div>

    </Content>


  );
}
