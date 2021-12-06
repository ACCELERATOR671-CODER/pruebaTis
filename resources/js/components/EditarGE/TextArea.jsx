import React,{ useRef } from 'react'
import PropTypes from 'prop-types'
import MensajeAlerta from './MensajeAlertaGE'
import { TextA } from '../../elementos/editarGE';

const TextArea = ({ estado, cambiarEstado, regex, funcValidar, nombre, placeholder }) => {
    const textArea = useRef(null);

    const onChangeup = () => {
        cambiarEstado({...estado, campo:(textArea.current.value !== ' ') ?
                                                textArea.current.value : ''});
    }

    const validacion =() => {
        if(regex){
            if(regex.test(estado.campo)){
                cambiarEstado({...estado, valido:'true'});
            } else {
                cambiarEstado({...estado, valido:'false'});
            }
        }
    };

    return (
        <>
            <TextA onBlur={ validacion }
                   ref= { textArea }
                   onChange={ onChangeup }
                   id={ nombre }
                   name={ nombre }
                   placeholder={ placeholder }
                   valido={estado.valido}
                   value={estado.campo}
                   onSubmit={validacion}/>
        </>
    )
}

TextArea.propTypes = {
    estado: PropTypes.object,
    cambiarEstado: PropTypes.func,
    funcValidar: PropTypes.func,
    nombre: PropTypes.string,
    placeholder: PropTypes.string,
    cambiarEstado: PropTypes.func
}

export default TextArea;
