import React,{ useState, useEffect } from 'react'
import { MensajeDiv, ContenedorMensaje, ImagenMensaje } from '../../elementos/foro'

const Mensajes = ({ id, mensajes, setMensajes }) => {
    
    useEffect(() => {
        const post = new FormData();
        post.append('idDebate', id);
        fetch('api/obtenerMensajes', {
            method:'POST',
            body:post
        })
        .then((response) => response.json())
        .then((json) => {
            setMensajes(json);
        })
    }, [])

    return (<>
        {(mensajes) && mensajes.map((contenido) => {
            return (<>
            <ContenedorMensaje>
                
                <div>
                    <ImagenMensaje src={(contenido.foto_perfil) ? "./resources/socios/"+contenido.foto_perfil : "./resources/perfilDefecto.png"}/>
                </div>
                <MensajeDiv>
                    <div className=' d-flex justify-content-between'>
                        <h6>{ contenido.nombreC }</h6>
                        <p>{ contenido.fecha_creacion }</p>
                    </div>
                    <p>
                        { contenido.descripcion }
                    </p>
                </MensajeDiv>
        </ContenedorMensaje></>)})}</>
    )
}

export default Mensajes
