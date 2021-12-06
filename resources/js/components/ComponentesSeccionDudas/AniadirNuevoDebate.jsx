import React,{ useState, useRef } from 'react'
import { BotonSolicitud } from '../../elementos/GE';
import { ContenedorInputs, ContenedorBloqueForo } from '../../elementos/foro';
import { TextArea } from '../../elementos/foro';
import { ContenedorBotonesDeb } from '../../elementos/foro';
import { Boton } from '../../elementos/registro';

const AniadirNuevoDebate = ({state, setState}) => {
    const [desplegado, setDesplegado] = useState('false');
    const [debate, setDebate] = useState("");
    const [mensaje, setMensaje] = useState("");

    const botonSolicitud = useRef(null);
    const refImp = useRef(null);
    const refAr = useRef(null);

    const cambiarDebate = () => {
        if(refImp.current.value.length<=50){
            setDebate(refImp.current.value);
        }
    }

    const cambiarMensaje = () => {
        if(refAr.current.value.length<=200){
            setMensaje(refAr.current.value);
        }
    }

    const desplegar = () => {
        const formulario1 = document.getElementById('nuevoDebate');
        formulario1.classList.toggle("nuevoDebate--mostrar");
        formulario1.classList.toggle("nuevoDebate--ocultar");
        if(desplegado == 'false'){
            botonSolicitud.current.innerHTML = "Cancelar";
            setDesplegado('true');
        } else {
            setDebate("");
            setMensaje("");
            botonSolicitud.current.innerHTML = "Añadir un nuevo debate";
            setDesplegado('false');
        }
    }

    const enviar = () => {
        if(refImp.current.value.length == 0 || refAr.current.value.length== 0){
            alert("debes llenar todos los campos");
        } else {
            const formulario = new FormData();
            formulario.append('id', sessionStorage.getItem('id'));
            formulario.append('titulo', refImp.current.value);
            formulario.append('mensaje',refAr.current.value);
            fetch('api/registrarDebate',{
                method:'POST',
                body: formulario
            })
            .then((response) => response.json())
            .then((json) => {
                alert("Debate creado con exito!!!");
                setState([...state, json])
                desplegar();
            });
        }
    }

    return (
        <ContenedorBloqueForo>
            <BotonSolicitud ref = {botonSolicitud} 
                                    valido = { desplegado } 
                                    onClick={ desplegar }> Añadir un nuevo debate </BotonSolicitud>
               <div id='nuevoDebate' className='nuevoDebate--ocultar'>
                    <ContenedorInputs>
                        <label>Debate : </label><input ref={ refImp } 
                                                        type="text"  
                                                        onChange= { cambiarDebate }
                                                        value = { debate }
                                                        required/>
                        <label>Mensaje : </label><TextArea ref={ refAr } 
                                                            value = { mensaje }
                                                            onChange= { cambiarMensaje }
                                                            required></TextArea>
                    </ContenedorInputs>
                    <ContenedorBotonesDeb>
                        <Boton onClick= { enviar }>Enviar</Boton>
                    </ContenedorBotonesDeb>
                </div>
                
        </ContenedorBloqueForo>
    )
}

export default AniadirNuevoDebate
