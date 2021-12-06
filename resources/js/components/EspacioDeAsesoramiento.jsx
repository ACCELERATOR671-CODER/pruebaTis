import React,{useState, useEffect} from 'react'
import { ContenedorTab } from '../elementos/TabGE'
import CalendarioGE from './CalendarioGE/CalendarioGE'
import Espacio from './EspacioDeAsesoramiento/Espacio'
import VistaGEEsp from './EspacioDeAsesoramiento/VistaGEEsp'

const EspacioDeAsesoramiento = () => {

  const [datosGE, setDatosGE] = useState(null)
    useEffect(() => {
      const datosGE = new FormData();
      datosGE.append('idUsuario', sessionStorage.getItem('id'));
      datosGE.append('nombreGE', nombreGE);  
      fetch('api/obtenerDatosGrupoEmpresa',{
        method:'POST',
        body:datosGE
      })
      .then((response) => response.json())
      .then((json) => {
        setDatosGE(json);
      })
    }, [])

    return (
        <main>
            {(datosGE) && ((datosGE.mensaje) ? (<h1 className=' mt-5'>{ datosGE.mensaje }</h1>)
            :
            (<ContenedorTab>
              <nav className=' w-100 d-flex justify-content-center'>
              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Grupo Empresa</a>
                <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Calendario</a>
                <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">WorkSpace</a>
              </div>
            </nav>
            <div id="contenido-GE" className="tab-content  d-flex justify-content-center" id="nav-tabContent">
              <div className="tab-pane fade show active w-100" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                  <div className='w-100 d-flex justify-content-center'>
                    <VistaGEEsp ge = { datosGE }/>
                  </div>
              </div>
              <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" style={{width: '90%', maxWidth: '620px'}}>
                <CalendarioGE></CalendarioGE>
              </div>
                <div className="tab-pane fade w-100" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                    {(datosGE) && (<Espacio id={ datosGE.duenio } />)}
                </div>
            </div>
            </ContenedorTab>))}
      </main>
    )
}

export default EspacioDeAsesoramiento
