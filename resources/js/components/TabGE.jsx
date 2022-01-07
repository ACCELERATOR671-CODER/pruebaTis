import React, { useEffect, useState } from 'react';
import VistaGrupoEmpresa from './VistaGrupoEmpresa';
import { ContenedorTab } from '../elementos/TabGE';
import Socios from './DatosGrupoEmpresa/Socios';
import SociosAdmin from './DatosGrupoEmpresa/SociosAdmin';
import Invitaciones from './DatosGrupoEmpresa/Invitaciones';
import Solicitudes from './DatosGrupoEmpresa/Solicitudes';

const TabGE = () => {

    const [fechaAct, setFechaAct] = useState(null);
    const [fechaLimite, setFechaLimite] = useState(null);

    const convertirDig = (n) => {
      return (n < 10) ? '0'+n : n;
    }

    useEffect(()=>{

      const data = new FormData();
      data.append('tipoOpcion','Actividad');
      data.append('nombreOpcion','Entrega de propuestas');

      fetch('api/obtenerEventoGeneral',{
        method: 'POST',
        body: data,
      })
      .then((res) => res.json())
      .then((datos) => {
        if (datos.idEvento) {
          setFechaLimite(datos.fecha_final);
        }
      });

      const date = new Date();
      const [dia, mes, anio] = [convertirDig(date.getDate()), 
                                convertirDig(date.getMonth()+1),
                                convertirDig(date.getFullYear())];
      
      setFechaAct(`${anio}-${mes}-${dia}`);
    },[])

    const usuario = sessionStorage.getItem('id');

    return (
      <main>
        <ContenedorTab>
            <nav className=' w-100 d-flex justify-content-center'>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Grupo Empresa</a>
                <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Socios</a>
                {(usuario == datos.duenio) && (fechaLimite) && (fechaAct) && (fechaAct <= fechaLimite) &&
                  (<a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Solicitudes</a>)}
              </div>
            </nav>
            <div id="contenido-GE" className="tab-content  d-flex justify-content-center" id="nav-tabContent">
              <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                  <VistaGrupoEmpresa></VistaGrupoEmpresa>
              </div>
              <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                {(usuario == datos.duenio)?(
                    ((fechaLimite)&&(fechaAct)&&(fechaAct <= fechaLimite))?(
                      <>
                        <Invitaciones/>
                        <SociosAdmin/>
                      </>
                    ):(<SociosAdmin/>)
                  ):(<Socios></Socios>)
                }
              </div>
              {(usuario == datos.duenio) && (fechaLimite) && (fechaAct) && (fechaAct <= fechaLimite) &&
                (<div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <Solicitudes />
                </div>)}
            </div>
        </ContenedorTab>
      </main>
    )
}

export default TabGE
