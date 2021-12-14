import React, { useRef } from 'react'
import { InputStyle } from '../../elementos/registro';
import MensajeAlerta from '../RegistroGE/MensajeAlerta';
import PropTypes from 'prop-types'

const Input = ({estado, cambiarEstado, tipo, nombre, placeholder, regex, funcValidar}) => {
    
    const ref = useRef(null);
    const onChange = () => {
        cambiarEstado({...estado, campo:(ref.current.value !== ' ') ? 
                                                ref.current.value : ''});
    };

    const validacion =() => {
        cambiarEstado({...estado , valido: null, existe:'false'});
        if(regex){
            if(regex.test(estado.campo)){ 
                if((nombre == 'codsis' || nombre == 'email') 
                    && estado.campo.length > 0){
                    const nombreCampo = (nombre == 'codsis') ? 'verificarCodSis': 'verificarEmail'; 
                    const datos = new FormData();
                    datos.append( nombre,estado.campo);
                    fetch('api/'+ nombreCampo , {
                        method: 'POST',
                        body:datos
                    }).then((response) => response.json()).then((dat) => {
                        if(dat.mensaje == 'true'){
                            cambiarEstado({...estado, valido:'false', existe:'true' });
                        } else {
                            cambiarEstado({...estado, valido:'true', existe:'false' });
                        }           
                    });
                } else {
                    cambiarEstado({...estado, valido:'true'});
                }
            } else {
                cambiarEstado({...estado, valido:'false'});
            }
        }
    };

    return (
        <div className='d-flex'>
            <InputStyle type={tipo} 
                        onChange = {onChange}
                        placeholder={placeholder} 
                        name={nombre} 
                        id = {nombre}
                        ref={ref}
                        value={estado.campo} 
                        onBlur= {validacion}
                        valido={estado.valido}
                        onSubmit = {validacion}
                        />
           {(estado.valido === 'false') && (<MensajeAlerta mensajeRep={funcValidar(estado, regex)}/>)}
        </div>
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