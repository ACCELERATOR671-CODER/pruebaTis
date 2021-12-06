import React from 'react'
import Fila from './Fila'
import { Tabla, THead, GrupoTabla, Tbody } from '../../elementos/GE'
import { PanelInputs } from '../../elementos/calendarioEG'


const CalendarioEG = ({ges}) => {
    
    return (
        <>
            <GrupoTabla className='w-100'>
                <Tabla  className='w-100' cellPadding='10'>
                    <THead>
                        <tr>
                            <th>Actividad</th>
                            <th>Fecha</th>
                            <th>Recursos</th>
                            <th>Evaluacion</th>
                        </tr>
                    </THead>
                    <Tbody>
                    {(ges) ? 
                            ((ges.length>0) ? 
                                            (ges.map((data, index) => <Fila data = {data} 
                                                                            index = {index}/>)) 
                                : 
                                (<tr><td colSpan="5">No hay debates</td></tr>))
                        :
                        (<tr><td colSpan="5">Cargando...</td></tr>)}
                    </Tbody>
                </Tabla>
            </GrupoTabla>
            <PanelInputs>
                <div>
                    <label htmlFor="">Actividad</label><input type = 'text'/>
                </div>
                <div>
                    <label htmlFor="">Fecha</label><input type = 'date'/>
                </div>
                <div>
                    <label htmlFor="">Recursos</label><input type = 'text'/>
                </div>
                <div>
                    <label htmlFor="">Evaluacion</label><input type = 'text'/>
                </div>
            </PanelInputs>
        </>
    )
}

export default CalendarioEG
