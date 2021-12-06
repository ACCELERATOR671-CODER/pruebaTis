import React,{ useEffect} from 'react'
import Socio from './socio'
import { ContenedorItems } from '../../elementos/socios'

const Pendientes = ({pendientes, setPendientes}) => {

    useEffect(() => {
        const data = new FormData();
        data.append('ge', sessionStorage.getItem('ge'));
        fetch('api/obtenerPendientes',{
            method: 'POST',
            body: data
        }).then((response) => response.json()).then((json) => {
            console.log(json);
            if(Object.keys(json).length >0){
                setPendientes(json);
            } else {
                setPendientes(null);
            }
        })
    }, [])

    const quitar = (id, pend, setPend) => {
        const data = new FormData();
        data.append('id', id);
        fetch('api/eliminarInvitacion', {
            method: 'POST',
             body: data
        }).then((response) => {
            if(response.ok){
                const nuevo = pend.filter((dat) => dat.idInvitacion != id);
                if(nuevo.length>0){
                    setPend(nuevo);
                } else {
                    setPend(null);
                }
              } else {    
                alert("error, vuelva a intentarlo luego");
              }
         })
    }

    return (
        <>
        {(pendientes) && (
        <>
            <h1 className= ' mb-5'>Pendientes</h1>
            <ContenedorItems>
                {pendientes.map((dato) => (<Socio id = { dato.idInvitacion }
                                            nombre = { dato.nombreC }
                                            imagen = { dato.foto_perfil }
                                            rol = { dato.estado }
                                            coleccion = { pendientes }
                                            quitar = { quitar }
                                            setColeccion = { setPendientes }/>))}  
            </ContenedorItems></>)}
        </>
    )
}

export default Pendientes
