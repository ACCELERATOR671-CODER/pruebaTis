import React, { useState, useEffect } from 'react'
import { Card } from '../elementos/card'
import AdminVal from './ImpExp/AdminVal';

const ImpExp = ({VentanaAdmin}) => {
    
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        const form = new FormData();
        form.append('idUsuario', sessionStorage.getItem('id'));
        fetch('api/getFullUser', {
            method:'POST',
            body:form
        })
        .then((response) => response.json())
        .then((json) => {   
            if(json.nombreRol == 'Administrador'){
                setUsuario({mensaje : 'valido'});
            } else {
                setUsuario({mensaje: 'no valido'});
            }
        })
    }, [])

    return (
        <main>
            <Card className=' p-4'>
                {(!usuario) ? (<h1>Cargando...</h1>)
                :((usuario.mensaje == 'valido') ? (<VentanaAdmin />)
                    :(<h1>No tienes Permisos Para esta Página</h1>))}
            </Card>
        </main>
    )
}

export default ImpExp
