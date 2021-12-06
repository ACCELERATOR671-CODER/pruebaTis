import React, { useEffect } from 'react';
import { ContenedorTab } from '../../elementos/TabGE';
import InvitacionesPerfil from './InvitacionesPerfil';
import PerfilUsuario from './perfilUsuario';

const usuario = sessionStorage.getItem('id');

const TabPerfil = () => {
    
    return(
        <ContenedorTab>
            <nav style={{ marginLeft:'9%', marginRight: '9%' }}>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Perfil</a>
              {
                  ((usuario == idUsuario) && (idGE == '' || idGE == null))?
                    (<a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Invitaciones</a>)
                :<></>
              }     
            </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    <PerfilUsuario></PerfilUsuario>
                </div>
                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                    {
                        ((usuario == idUsuario) && (idGE == '' || idGE == null))?
                            <InvitacionesPerfil></InvitacionesPerfil>
                        :<></>
                    }
                </div>
            </div>
        </ContenedorTab>
    );
};

export default TabPerfil;