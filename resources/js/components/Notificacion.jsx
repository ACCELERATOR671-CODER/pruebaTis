import React, { useState, useEffect } from 'react'
import Bell from './notificacion/Bell'
import { Desplegable } from '../elementos/notificacion'
import { ContenedorNavC } from '../elementos/notificacion'
import BotonNot from './notificacion/BotonNot'
const Notificacion = () => {

    const [notificaciones, setNotificaciones] = useState(null)

    useEffect(() => {
        const dat = new FormData();
        dat.append('idUsuario', sessionStorage.getItem('id'));
        fetch('api/obtenerNotificaciones',{
            method:'POST',
            body:dat
        })
        .then((response) => response.json())
        .then((json) => {
            setNotificaciones(json);
        })
    }, [])

    return (
        <>
        {(notificaciones) &&
            (<>
            
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navegadorNot" aria-controls="navegadorNot" aria-expanded="false" aria-label="Toggle navigation">
                <Bell cant={ notificaciones.length }/>
            </button>
                <div id='navegadorNot' className = "collapse navbar-collapse">
                <ul className="navbar-nav">
             
                <li className="nav-item dropdown" >
                    <a className=" d-flex nav-link dropdown-toggle-split text-dark" href="#" id="navbarDropdownNot" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <Bell cant={ notificaciones.length }/>
                    </a>
                    { notificaciones.length>0  && (
                         <ContenedorNavC  className=" dropdown-menu" aria-labelledby="navbarDropdownNot">
                            {notificaciones.map((data) => <BotonNot data = { data }/>)}
                            <div className='d-flex justify-content-end p-2' style={{ fontSize: '15px' }}>
                                <a href="#">ver todas las notificaciones</a>
                            </div>
                        </ContenedorNavC>)}
                </li>
            </ul>
        </div></>)}

        </>
    )
}

export default Notificacion
