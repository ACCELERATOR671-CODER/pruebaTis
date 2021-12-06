import React,{ useEffect, useRef, useState } from 'react';
import { InputImagen } from '../../elementos/editarGE';
import PropTypes from 'prop-types';
import MensajeAlertaGE from './MensajeAlertaGE';

const InputImg = ({ name, estado, cambiarEstado, funcValidar }) => {
    const imagenCarg = useRef(null);
    const [logoGE, setLogoGE] = useState("./resources/cargando.png");

    useEffect(() => {
        setLogoGE(estado.campo);
    }, [estado.campo])
    

    const onButtonClick = (e) => {
        const img = document.getElementById('imagenGER')
        const files = imagenCarg.current.files;

        if (!files || !files.length) {
            img.src = logoGE;
            cambiarEstado({...estado, valido: 'false' });
            return;
        }
        const image = files[0];
        const url = URL.createObjectURL(image);
        img.src = url;
        cambiarEstado({...estado, valido: 'true' })
    }

    return (
        <>
            <img id='imagenGER' className='mb-2' src={logoGE} alt="" />
            <InputImagen
                id={name}
                name={name}
                ref={imagenCarg}
                onSubmit={onButtonClick}
                onChange={onButtonClick}
                accept="image/jpeg,image/jpg,image/png"
                type='file'
            />
            {(estado) && (estado.valido === 'false') && (<MensajeAlertaGE mensajeRep={funcValidar(estado)}/>)}
        </>);
};

InputImg.prototype = {
    name: PropTypes.string,
    estado: PropTypes.object,
    cambiarEstado: PropTypes.func,
    funcValidar: PropTypes.func
};

export default InputImg;
