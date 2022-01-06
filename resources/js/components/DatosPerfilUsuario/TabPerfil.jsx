import React, { useEffect } from 'react';
import { ContenedorTab } from '../../elementos/TabGE';
import PerfilUsuario from './perfilUsuario';

const TabPerfil = () => {
    
    return(
        <ContenedorTab>
            <nav className='w-100 d-flex justify-content-center' style={{marginTop: '10%'}}>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Perfil</a>  
            </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                    <PerfilUsuario></PerfilUsuario>
                </div>
            </div>
        </ContenedorTab>
    );
};

export default TabPerfil;