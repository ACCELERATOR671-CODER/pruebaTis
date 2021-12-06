import React,{ useState, useEffect, useLayoutEffect } from 'react'
import { Card } from '../elementos/card'
import { Tabla, THead, RowPrimary, RowSecundary, GrupoTabla, Tbody } from '../elementos/GE'
import { Titulo } from '../elementos/registro'

const GrupoEmpresas = () => {

    const [ges, setGe] = useState(null);
    useEffect(() => {
        const dat = new FormData();
        dat.append('id', sessionStorage.getItem('id'));
        fetch('api/obtenerGrupoEmpresas',{
            method:'POST',
            body:dat
        }).then((response) => response.json()).then((json) => {
            setGe(json);
        });
    }, [])

    return (
        <main>
            <Card className=' text-center justify-content-center'>
                <><GrupoTabla>
                    <Titulo>Grupo Empresas En Tu Grupo de Asesoría</Titulo>
                    <Tabla  className=' m-3'>
                        <THead>
                            <tr>
                                <th>Numero</th>
                                <th>Grupo Empresas</th>
                                <th>Creador</th>
                                <th>Nro Integrantes</th>
                            </tr>
                        </THead>
                        <Tbody>
                        {(ges) ? ((ges.length>0) ? (ges.map((data, index) => {
                            
                            return (index%2==0) ? 
                                    (<><RowSecundary>
                                        <td>{index+1}</td><td><a href={`/GE-${data.nombre}`} >{data.nombre}</a></td><td>{data.creador}</td><td>{data.integrantes}</td>
                                    </RowSecundary></>)
                                    :
                                    (<><RowPrimary>
                                        <td>{index+1}</td><td><a href={`/GE-${data.nombre}`} >{data.nombre}</a></td><td>{data.creador}</td><td>{data.integrantes}</td>
                                    </RowPrimary></>)})) : (<tr><td colSpan="4">No hay grupo Empresas Registradas</td></tr>)):
                                    (<tr><td colSpan="4">Cargando...</td></tr>)}
                        </Tbody>
                    </Tabla>
                </GrupoTabla></>
            </Card>
        </main>
    )
}

export default GrupoEmpresas
