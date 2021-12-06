import React, { useRef, useState } from 'react'
import { InputStyle } from '../../elementos/editarGE';
import PropTypes from 'prop-types'
import MensajeAlertaGE from './MensajeAlertaGE';

const Input = ({ estado, cambiarEstado, tipo, nombre, placeholder, regex, funcValidar, estadoOrig }) => {

    const ref = useRef(null);
    const onChange = () => {
        cambiarEstado({...estado, campo: (ref.current.value !== '') ? ref.current.value : ''});
    };

    const validacion = () => {
        if(regex){
            if(regex.test(estado.campo)){ 
                if((nombre == 'nombre' || nombre == 'nombreAb' || nombre == 'email') 
                    && estado.campo.length > 0){
                        if (estado.campo != estadoOrig) {
                            const nombreCampo = (nombre == 'nombre') ? 'nombre':
                                        (nombre == 'nombreAb') ? 'nombreAb' : 'email'; 
                            const datos = new FormData();
                            datos.append('nombre', estado.campo);
                            datos.append('campo', nombreCampo);
                            fetch('api/nombreGE', {
                                method: 'POST',
                                body:datos
                            }).then((response) => response.json()).then((dat) => {
                                cambiarEstado({...estado, valido:dat.nombre, existe:dat.nombre });
                            }); 
                        } else {
                            cambiarEstado({...estado, valido:'true'});
                        }    
                } else {
                    cambiarEstado({...estado, valido:'true'});
                }
            } else {
                cambiarEstado({...estado, valido:'false'});
            }
        }
    };

    return (
        <>
            <InputStyle type={tipo}
                onChange={onChange}
                placeholder={placeholder}
                name={nombre}
                id={nombre}
                ref={ref}
                value={estado.campo}
                onBlur={validacion}
                valido={estado.valido}
                onSubmit={validacion}
            />
             {(estado.valido === 'false') && (<MensajeAlertaGE mensajeRep={funcValidar(estado, regex)} />)}
        </>
    )
}

Input.propTypes = {
    estado: PropTypes.object,
    cambiarEstado: PropTypes.func,
    tipo: PropTypes.string,
    nombre: PropTypes.string,
    placeholder: PropTypes.string,
    funcValidar: PropTypes.func
}

export default Input;
