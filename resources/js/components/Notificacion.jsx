import React, { useState } from 'react'
import Bell from './notificacion/Bell'

const Notificacion = () => {

    const [notificaciones, setNotificaciones] = useState([
        {
            idNotificacion: 1,
            tipoNotificacion : 'fecha',
            descripcionNotificacion : 'se esta llegando al plazo limite de la notificacion',
            fecha_creacion: '12-12-2021 12:!2:!2',
            link:'#'
        },{
            idNotificacion: 2,
            tipoNotificacion : 'rol',
            descripcionNotificacion : 'se te a asignado el rol de administrador',
            fecha_creacion: '12-12-2021 12:12:!2',
            link:'#'
        }
    ])

    return (
        <div>
            {(notificaciones) && <Bell cant={ notificaciones.length }/>}
        </div>
    )
}

export default Notificacion
