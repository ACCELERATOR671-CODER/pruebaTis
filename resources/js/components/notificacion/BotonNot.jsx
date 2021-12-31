import React,{ useState, useEffect } from 'react'
import { BotonNav } from '../../elementos/notificacion'
import { faCommentDots,
        faFileAlt,
        faAddressCard,
        faCalendarAlt,
        faCube,
        faFolderOpen,
        faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { IconNav, Link, IconTrash, GrupoElement, ContTrash,
        ButtonTrash } from '../../elementos/notificacion';


/*
    Comment = cuando un usuario responde a su debate tipo -> Debate
    File  = cuando se haya generado el contrato de su grupo empresa -> contrato
    Card = cuando se haya generado un rol adminitrador -> admin
    Calendar = cuando llegue a una fecha limite ->date
    cube = cuando se crea una grupo empresa -> ge
    imagen ge = cuando se valída su gripo empresa -> valida
    imagen usuario = cuando el usuario solicita ingresar a una grupo empresa -> solicitud
    cube = cuando una grupo empresa invita al usuario -> invitacion
    folder = cuando una grupo empresa registra un elemento -> elemento
*/
const BotonNot = ({ data, cambio, setCambio }) => {

    const [imagen, setImagen] = useState(null);
    const [item, setItem] = useState(data)

    useEffect(() => {
        let tipo = null;
        if(data.tipoNotificacion == 'debate'){
            tipo = faCommentDots;
        }
        else if(data.tipoNotificacion == 'contrato'){
            tipo = faFileAlt;
        }
        else if(data.tipoNotificacion == 'admin'){
            tipo = faAddressCard;
        }
        else if(data.tipoNotificacion == 'date'){
            tipo = faCalendarAlt;
        }
        else if(data.tipoNotificacion == 'elemento'){
            tipo = faFolderOpen;
        } 
        else if(data.tipoNotificacion == 'invitacion'){
            tipo = faCube;
        }
        else if(data.tipoNotificacion == 'ge'){
            tipo = faCube;
        }
        else {
            tipo = 'imagen';
        }
        setImagen(tipo);
    }, [])

    const dropNotification = () => {
        const dat = new FormData();
        dat.append('idNotificacion', data.idNotificacion);
        fetch('api/eliminarNotificacion',{
            method:'POST',
            body:dat
        })
        .then((response) => {
            if(!response.ok){
                alert("hubo un error interno en el servidor, intentelo de nuevo mas tarde");K
            } else {
                setCambio(!cambio);
            }
        })
    }

    const onClick = () => {
        const dat = new FormData();
        dat.append('idNotificacion', data.idNotificacion);
        dat.append('visto', true);
        fetch('api/actualizarNotificacion', {
            method:'POST',
            body: dat
        })
        .then((response) => {
            if(!response.ok){
                alert("Hubo un error interno con el servidor, intentelo de nuevo mas tarde");
            } else {
                window.location.href = data.link;
            }
        })
    }

    return (
        
            <GrupoElement>
                <Link className=' d-flex nav-link m-1 text-decoration-none w-100' onClick = { onClick }>
                    {(imagen) && (<IconNav icon={ imagen } style={{ color:(item.visto) ? 'black':'red'}}/>)}
                    {item.descNotificacion}
                </Link>
                <ContTrash className=' d-flex justify-content-center align-items-center p2 mr-2'>
                    <ButtonTrash onClick={ dropNotification }>
                        <IconTrash icon={ faTrashAlt }/>
                    </ButtonTrash>
                </ContTrash>
                    
            </GrupoElement>
        
    )
}

export default BotonNot
