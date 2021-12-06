import React from 'react'
import { RowPrimary, RowSecundary } from '../../elementos/GE'


const Fila = ({data, index}) => {
    return (
        <>
         {(index%2==0) ? 
            (<><RowSecundary>
                   <td height='10'>{ data.actividad }</td>
                   <td height='7'>{ data.fecha }</td>
                   <td height='10'>{ data.recursos }</td>
                   <td height='10'>{ data.evaluacion }</td>
              </RowSecundary></>)
               :
            (<><RowPrimary>
                   <td height='10'>{ data.actividad }</td>
                   <td height='7'>{ data.fecha }</td>
                   <td height='10'>{ data.recursos }</td>
                   <td height='10'>{ data.evaluacion }</td>
            </RowPrimary></>)}   
        </>
    )
}

export default Fila
