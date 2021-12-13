import React,{ useState, useEffect, useRef } from 'react';
import { PanelAdmin } from '../elementos/admin';
import {Boton} from '../elementos/registro';
import { Tabla, THead, RowPrimary, RowSecundary, GrupoTabla, Tbody } from '../elementos/GE';
import SelectRol from './Admin/SelectRol';
import { Card } from '../elementos/card'
import { filter } from 'lodash';


const FundaEmpresa = () => {

    const [usuarios, setUsuarios] = useState(null);
    const [contenido, setContenido] = useState(null);

    const ref = useRef(null);

    const buscar = () => {
        const datos = usuarios.filter((dato) => dato.nombreLargo.toLowerCase()
                                                    .includes(ref.current.value.toLowerCase()) ||
                                                dato.nombreCorto.toLowerCase()
                                                    .includes(ref.current.value.toLowerCase()));
        setContenido(datos);
    }

    useEffect(() => {
        fetch('api/obtenerDatosFE')
        .then((response) => response.json())
        .then((json) => {
            setUsuarios(json);
            setContenido(json);
        })
    }, [])

    return(
        <main>
            <Card>
            <PanelAdmin>
                    <div className='d-flex justify-content-center'>
                    <h1>FundaEmpresa</h1>
                    </div>
                    <div className=' d-flex justify-content-center align-items-center'>
                        <input type='search' placeholder='Busqueda por nombre' ref = { ref }/>
                        <Boton onClick={ buscar }>Buscar</Boton>
                    </div>
                    <div className='w-100'>
                        <GrupoTabla className='w-100'>
                            <Tabla  className='w-100' cellPadding='10'>
                                <THead>
                                    <tr>
                                        <th>#</th>
                                        <th>NombreCorto</th>
                                        <th>NombreLargo</th>
                                        <th>Gestion</th>
                                        <th>Docente</th>
                                    </tr>
                                </THead>
                                <Tbody>
                                {(contenido) ? ((contenido.length>0) ? (contenido.map((data, index) => {
                                    
                                    return (index%2==0) ? 
                                            (<><RowSecundary>
                                                <td width='60' height='10'>{index+1}</td>
                                                <td height='10'>{data.nombreCorto}</td>
                                                <td height='10'>{data.nombreLargo}</td>
                                                <td height='10'>{data.gestion}</td>
                                                <td height='10'>{data.docente}</td>
                                            </RowSecundary></>)
                                            :
                                            (<><RowPrimary>
                                                <td width='60' height='10'>{index+1}</td>
                                                <td height='10'>{data.nombreCorto}</td>
                                                <td height='10'>{data.nombreLargo}</td>
                                                <td height='10'>{data.gestion}</td>
                                                <td height='10'>{data.docente}</td>
                                            </RowPrimary></>)})) : (<tr><td colSpan="5">No hay Grupo Empresas</td></tr>)):
                                            (<tr><td colSpan="5">Cargando...</td></tr>)}
                                </Tbody>
                            </Tabla>
                        </GrupoTabla>
                    </div>
                </PanelAdmin>
            </Card>  
        </main>
    );

    

};

export default FundaEmpresa;