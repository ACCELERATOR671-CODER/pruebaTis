import React, {useState, useEffect}  from 'react'
import { Card } from '../../elementos/card'
import { Cuadro } from '../../elementos/Solicitudes'
import { Titulo } from '../../elementos/registro'
import TarjetaSolicitud from './tarjetaSolicitud'
import { data } from 'jquery'

const Solicitudes = () => {

    const [solicitudes, setSolicitudes] = useState("cargando");

    useEffect(() => {
        const datS = new FormData();
        datS.append('ge', datos.nombre);
        fetch('api/obtenerSolicitudes',{
            method:'POST',
            body:datS
        }).then((response)=> response.json()).then((json)=>{
            setSolicitudes(json);
        })
    }, [])


    return (
            <Card>
                <div className='formStyle'>
                    <Titulo className=' mt-3'>Solicitudes de Ingreso</Titulo>
                    <Cuadro className=' mb-3'>
                        {(solicitudes == 'cargando') ? <h1>Cargando...</h1>
                        :((solicitudes.length>0) ? solicitudes.map((dat) => <TarjetaSolicitud 
                                                                nombre={ dat.nombreC } 
                                                                imagen = { dat.foto_perfil }
                                                                idInvitacion = { dat.idInvitacion }
                                                                setSolicitudes = {setSolicitudes}
                                                                solicitudes = { solicitudes }/>) :
                        <h1>No Hay Solicitudes Pendientes</h1>)
                                                                }
                    </Cuadro>        
                </div>
            </Card>
    )
}

export default Solicitudes
