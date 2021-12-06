import React from 'react';
import VistaGrupoEmpresa from './VistaGrupoEmpresa';
import { ContenedorTab } from '../elementos/TabGE';
import Socios from './DatosGrupoEmpresa/Socios';
import SociosAdmin from './DatosGrupoEmpresa/SociosAdmin';
import Invitaciones from './DatosGrupoEmpresa/Invitaciones';
import Solicitudes from './DatosGrupoEmpresa/Solicitudes';

const TabGE = () => {

    const usuario = sessionStorage.getItem('id');

    return (
      <main>
        <ContenedorTab>
            <nav className=' w-100 d-flex justify-content-center'>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Grupo Empresa</a>
                <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Socios</a>
                {(usuario == datos.duenio) &&
                  (<a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Solicitudes</a>)}
              </div>
            </nav>
            <div id="contenido-GE" className="tab-content  d-flex justify-content-center" id="nav-tabContent">
              <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                  <VistaGrupoEmpresa></VistaGrupoEmpresa>
              </div>
              <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                {(usuario == datos.duenio) ? (<><Invitaciones/><SociosAdmin/></>):(<Socios></Socios>)}
              </div>
              {(usuario == datos.duenio) &&
                (<div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <Solicitudes />
                </div>)}
            </div>
        </ContenedorTab>
      </main>
    )
}

export default TabGE
