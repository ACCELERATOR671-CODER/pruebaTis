import React,{ useRef, useState } from 'react'
import { InputImagen } from '../../elementos/registro'
import PropTypes from 'prop-types'
import MensajeAlerta from './MensajeAlerta'

const InputImg = ({name, estado, cambiarEstado, funcValidar, style = null}) => {
    const imagenCarg = useRef(null);
    const [logo, setLogo] = useState("./resources/logoDefecto.png");

    const onButtonClick = (e) => {    
        const img = document.getElementById('imagenGER')
        const files = imagenCarg.current.files;

        if(!files || !files.length){
            img.src = logo;
            cambiarEstado({valido:'false'});
            return;
        }
        cambiarEstado({valido:'true'})
        const image = files[0];
        const url = URL.createObjectURL(image);
        img.src = url;
    }
    console.log(style);
    return (
        <>
            <img
                style={style?(style):({position: 'relative'})} 
                id='imagenGER' 
                className='mb-2' 
                src={logo} 
                alt=""  
            />
            <InputImagen 
                         name={name} 
                         ref = {imagenCarg} 
                         onSubmit = {onButtonClick}
                         onChange={onButtonClick} 
                         accept="image/jpeg,image/jpg,image/png" 
                         type='file'/>
            {(estado) && (estado.valido === 'false') && (<MensajeAlerta mensajeRep={funcValidar(estado)}/>)}
        </>);
};

InputImg.prototype = {
    name: PropTypes.string, 
    estado: PropTypes.object, 
    cambiarEstado: PropTypes.func, 
    funcValidar: PropTypes.func
};

export default InputImg;
