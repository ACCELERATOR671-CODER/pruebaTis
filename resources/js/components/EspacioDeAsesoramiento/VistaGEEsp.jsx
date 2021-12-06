import React,{ useState, useEffect } from 'react'
import { Card } from '../../elementos/espacioAsesoramient'
import { PanelCentral, PanelDatos, Img } from '../../elementos/espacioAsesoramient'
import { ContenedorItems } from '../../elementos/socios'
import Socio from '../DatosGrupoEmpresa/socio'
const VistaGEEsp = ({ge}) => {

    const [socios, setSocios] = useState(null);
    const [lider, setLider] = useState(null);
    useEffect(() => {
        const data = new FormData();
        data.append('nombre' , nombreGE);
        fetch('api/solicitarSocios', {
            method: 'POST',
            body:data
        }).then((response) => response.json()).then((json) => {
            setSocios(json.socios);
            setLider(json.lider);
        });
    }, [])
    return (
        <Card>
            <PanelCentral>
                <h1>{ ge.nombre }</h1>
                <PanelDatos>
                    <div className='contenedorDeP border border-dark bg-light p-2 text-center'>
                        <p> { ge.descripcion }</p>
                    </div>
                    <div>
                        <Img src={ `./resources/${ ge.logo }` } />
                    </div>
                </PanelDatos>
                <div className=' border border-dark bg-light p-4'>
                    <ContenedorItems>
                        {(socios) && socios.map((dato) => {
                            return (<Socio className=' border border-light' nombre={dato.nombreC} rol={(dato.idUsuario == lider) ? "Lider":"Socio"} imagen={dato.foto_perfil}/>)
                        })}
                    </ContenedorItems>
                </div>
            </PanelCentral>
        </Card>
    )
}

export default VistaGEEsp
