import React,{ useState } from 'react'
import { Tabla, THead, RowPrimary, RowSecundary, GrupoTabla, Tbody } from '../../elementos/GE'

const TablaDebate = ({ges}) => {
    return (
            <GrupoTabla className='w-100'>
                <Tabla  className='w-100' cellPadding='10'>
                    <THead>
                        <tr>
                            <th>Número</th>
                            <th>Debate</th>
                            <th>Autor</th>
                            <th>Respuestas</th>
                            <th>Fecha de Publicación</th>
                        </tr>
                    </THead>
                    <Tbody>
                    {(ges) ? ((ges.length>0) ? (ges.map((data, index) => {
                        
                        return (index%2==0) ? 
                                (<><RowSecundary>
                                    <td width='25' height='10'>{index+1}</td>
                                    <td height='10'><a href={`Debate-${ data.idDebate }`} >{data.titulo}</a></td>
                                    <td height='10'>{data.nombreC}</td>
                                    <td width='25' height='10'>{data.respuestas}</td>
                                    <td height='10'>{data.fecha_creacion}</td>
                                </RowSecundary></>)
                                :
                                (<><RowPrimary>
                                    <td width='25' height='10'>{index+1}</td>
                                    <td height='10'><a href={`Debate-${ data.idDebate }`} >{data.titulo}</a></td>
                                    <td height='10'>{data.nombreC}</td>
                                    <td width='25' height='10'>{data.respuestas}</td>
                                    <td height='10'>{data.fecha_creacion}</td>
                                </RowPrimary></>)})) : (<tr><td colSpan="5">No hay debates</td></tr>)):
                                (<tr><td colSpan="5">Cargando...</td></tr>)}
                    </Tbody>
                </Tabla>
            </GrupoTabla>
    )
}

export default TablaDebate
