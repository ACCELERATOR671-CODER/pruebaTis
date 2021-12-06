import React,{ useState, useRef, useEffect } from 'react'
import { TarjetaDebate, 
         ImagenDebate, 
         ContenedorBloqueDebate, 
         ContenedorBloqueTitulo,
         TextAreaDebate,
         ContenedorImp,
         InputMensaje } from '../elementos/foro'
import { BotonSolicitud } from '../elementos/GE'
import { Boton } from '../elementos/registro'
import Mensajes from './ComponentesSeccionDudas/Mensajes'

const Debate = () => {
    const [desplegado, setDesplegado] = useState('false');
    const [mensajes, setMensajes] = useState(null);
    const botonSolicitud = useRef(null);
    const inputRef = useRef(null);
    const desplegar = () => {
        const formulario1 = document.getElementById('nuevoMensaje');
        formulario1.classList.toggle("nuevoDebate--mostrar");
        formulario1.classList.toggle("nuevoDebate--ocultar");
        if(desplegado == 'false'){
            botonSolicitud.current.innerHTML = "Cancelar";
            setDesplegado('true');
        } else {
            inputRef.current.value = "";
            botonSolicitud.current.innerHTML = "Responder";
            setDesplegado('false');
        }
    }

    const [debate, setDebate] = useState(null)

    const enviar = () => {
        if(inputRef.current.value.length > 1){
            const post1 = new FormData();
            post1.append('ìdUsuario', sessionStorage.getItem('id'));
            post1.append('idDebate', debate.idDebate);
            post1.append('descripcion', inputRef.current.value);
            fetch('api/registrarMensaje',{
                method:'POST',
                body:post1
            })
            .then((response) => response.json())
            .then((json) => {
                setMensajes([...mensajes, json]);
                desplegar();
            })
        }
    }

    useEffect(() => {
        const post = new FormData();
        post.append('idDebate', idDeb);
        fetch('api/obtenerDebate', {
            method:'POST',
            body:post
        })
        .then((response) => response.json())
        .then((json) => {
            setDebate(json);
        });
    }, [])

    return (
        <main>
            <TarjetaDebate>

                    {(debate) ? (<><ContenedorBloqueDebate> 
                        <div className=' d-flex' style={ {gap:"10px"}}>
                            <div className='d-flex align-items-center'>
                                <ImagenDebate src={(debate.foto_perfil) ? "./resources/socios/"+debate.foto_perfil : "./resources/perfilDefecto.png"}/>
                            </div>
                            <ContenedorBloqueTitulo className='d-block' s>
                                <h3>
                                    { debate.titulo }
                                </h3>
                                <h5>
                                    { '<'+debate.nombreC+'>' }
                                </h5>  
                            </ContenedorBloqueTitulo>
                        </div>
                        <div className='d-flex align-items-center'>
                            { debate.fecha_creacion }
                        </div>
                    </ContenedorBloqueDebate>
                    <TextAreaDebate className='contenedorDeP' disabled><p>{ debate.descripcion }</p></TextAreaDebate>
                    <Mensajes id={ debate.idDebate }
                               mensajes={ mensajes }
                               setMensajes = { setMensajes }/>
                    <div className=' d-flex justify-content-end'>
                        <BotonSolicitud ref = {botonSolicitud} 
                                        valido = { desplegado } 
                                        onClick={ desplegar }> Responder </BotonSolicitud>
                    </div>
                    <div id='nuevoMensaje' className='nuevoDebate--ocultar'>
                        <ContenedorImp>
                            <InputMensaje ref= {inputRef} type='text' className=' w-100' placeholder='Mensaje'/>
                            <Boton onClick= { enviar }>Enviar</Boton>
                        </ContenedorImp>
                    </div></>) : (<h2>Cargando...</h2>)}
            </TarjetaDebate>
        </main>
    )
}

export default Debate
