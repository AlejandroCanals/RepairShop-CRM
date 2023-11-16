import React from 'react';
import { UserIcon } from '../components/ui/UserIcon'
import { Content } from '../components/content';
import { StatusCard } from '../components/Inicio/StatusCard';
import { useStatusCounts } from '../components/Inicio/useStatusCount';
import { Bienvenido } from '../components/Common/Bienvenido';
import { useAuth } from '../components/Login/AuthContext';

//Imagenes
import tools from '../assets/tools.png'
import box from '../assets/package.png'
import done from '../assets/done.png'




export function Inicio() {

  const { statusCounts } = useStatusCounts();
  const { user } = useAuth();

  return (
    <div>
      <Content>

        <div className="flex flex-col items-center justify-center mt-[80px]" >

          <UserIcon />
          <Bienvenido />

        </div>
        {user && (
          <>
            <h1 className='text-center font-bold text-3xl mt-20 '>RESUMEN DEL ESTADO DE RMAS</h1>

            <div className='grid grid-cols-3 gap-4 ml-[230px] mt-20'>
              <StatusCard src={box} label="Recibidos" count={statusCounts.received_count} />
              <StatusCard src={tools} label="En Taller" count={statusCounts.in_repair_count} />
              <StatusCard src={done} label="Reparados" count={statusCounts.repaired_count} />
            </div>
          </>
        )}
      </Content>

    </div>
  );
}

