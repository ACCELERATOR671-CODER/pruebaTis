import React from 'react'
import Fila from './Fila'
import { Tabla, THead, GrupoTabla, Tbody } from '../../elementos/GE'
import { PanelInputs } from '../../elementos/calendarioEG'
import ModalC from './ModalC'

const CalendarioEG = ({user, ges, cambio, setCambio}) => {

    return (
        <>
            <GrupoTabla className='w-100'>
                <Tabla  className='w-100' cellPadding='10'>
                    <THead>
                        <tr>
                            <th>Fecha</th>
                            <th>Actividad</th> 
                            <th>Recursos</th>
                            <th>Evaluacion</th>
                        </tr>
                    </THead>
                    <Tbody>
                    {(ges) ? 
                            ((ges.length>0) ? 
                                            (ges.map((data, index) => <Fila rol = {user.nombreRol}
                                                                            data = {data} 
                                                                            index = {index}
                                                                            cambio={cambio}
                                                                            setCambio={setCambio}/>)) 
                                : 
                                (<tr><td colSpan="5">No hay debates</td></tr>))
                        :
                        (<tr><td colSpan="5">Cargando...</td></tr>)}
                    </Tbody>
                </Tabla>
            </GrupoTabla>
            { (user) && ((user.nombreRol == 'Consultor') && <ModalC cambio = { cambio } setCambio = { setCambio }/>)}
        </>
    )
}

export default CalendarioEG
