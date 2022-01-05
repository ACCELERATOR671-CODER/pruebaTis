import React,{ useState, useEffect } from 'react'
import { RowPrimary, RowSecundary } from '../../elementos/GE'
import { TD } from '../../elementos/calendarioEG';
import { Trash } from '../../elementos/calendarioEG';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Fila = ({cambio, setCambio, data, index, rol}) => {
    const [actividades, setActividades] = useState([[],[],[]]);

    useEffect(() => {
        const eventos = data.eventos;
        const actividad = eventos.filter((obj) => obj.tipoOpcion == 'Actividad');
        const evaluacion = eventos.filter((obj) => obj.tipoOpcion == 'Evaluacion');
        const recurso = eventos.filter((obj) => obj.tipoOpcion == 'Recurso');
        setActividades([actividad, recurso, evaluacion]);
    }, [data])

    const eliminarFila = () => {
        if(confirm('¿Está Seguro de elminar este evento?')){
            const datos = new FormData();
            datos.append('idEvento', data.idEvento);
            datos.append('idOpcion',JSON.stringify(data.eventos));
            fetch('api/dropDate',{
                method:'POST',
                body:datos
            })
            .then((response) => {
                if(response.ok){
                    alert('Evento eliminado con exito');
                    setCambio(!cambio);
                } else {
                    alert("error interno del servidor, intentelo de nuevo mas tarde");
                }
            })
        }
    }

    return (
        <>
         {(index%2==0) ? 
            (<><RowSecundary>
                   <TD >{ data.fecha_final }</TD>
                   <TD >
                       <ul>
                           { actividades[0].map((obj) => <li>{obj.nombreOpcion}</li> ) }
                        </ul>
                    </TD>
                   <TD >
                       <ul>
                           { actividades[1].map((obj) => <li>{obj.nombreOpcion}</li> ) }
                        </ul>
                    </TD>
                   <TD >
                       <ul>
                        <div className='d-flex justify-content-end'>
                            {(rol == 'Consultor') && <button onClick={eliminarFila}>
                                <Trash icon={ faTrashAlt }/>
                            </button>}
                        </div>
                        <div>
                            { actividades[2].map((obj) => <li>{obj.nombreOpcion}</li> ) }
                        </div>  
                        </ul>
                    </TD>
              </RowSecundary></>)
               :
            (<><RowPrimary>
                   <TD >{ data.fecha_final }</TD>
                   <TD >
                       <ul>
                           { actividades[0].map((obj) => <li>{obj.nombreOpcion}</li> ) }
                        </ul>
                    </TD>
                   <TD >
                       <ul>
                           { actividades[1].map((obj) => <li>{obj.nombreOpcion}</li> ) }
                        </ul>
                    </TD>
                   <TD >
                        <div className='d-flex justify-content-end'>
                            {(rol == 'Consultor') && <button onClick={eliminarFila}>
                                <Trash icon={ faTrashAlt }/>
                            </button>}
                        </div>
                        <div>
                            { actividades[2].map((obj) => <li>{obj.nombreOpcion}</li> ) }
                        </div>  
                        </ul>
                    </TD>
            </RowPrimary></>)}   
        </>
    )
}

export default Fila
