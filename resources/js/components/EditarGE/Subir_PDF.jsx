import React,{ useRef, useState } from 'react'
import MensajeAlerta from './MensajeAlerta';

const PDF = ({ name, estado, cambiarEstado }) => {
    const imagenCarg = useRef(null);

    const [logo, cambiarestado] = useState("./resources/logoDefecto.png");
    const onButtonClick = (e) => {
        const files = imagenCarg.current.files;

        if (!files || !files.length) {
            cambiarEstado({ valido: 'false' });
            return;
        }
        cambiarEstado({ valido: 'true' })
        const pdf = files[0];
        const url = URL.createObjectURL(pdf);
        console.log(url);
    }

    return (
        <>
            <input
                id={name}
                name={name}
                ref={imagenCarg}
                onSubmit={onButtonClick}
                onChange={onButtonClick}
                accept="application/pdf"
                type='file'
            />
            {(estado.valido === 'false') && (<MensajeAlerta mensajeRep={funcValidar(estado)} />)}
        </>);
};



export default PDF;
