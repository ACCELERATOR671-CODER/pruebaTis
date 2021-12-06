import React, { useRef } from 'react'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { Icon, MensajeGlobo } from '../../elementos/registro';

const MensajeAlerta = ({mensajeRep}) => {
    const mensaje = useRef(null);

    const onMouseOver = () => {
        mensaje.current.style = 'display:block';
    };

    const onMouseOut = () => {
        mensaje.current.style = 'display:none';
    };

    return (
        <>
            <Icon icon={faExclamationTriangle} onMouseOver={onMouseOver} onMouseOut={onMouseOut}/>
            <MensajeGlobo ref = {mensaje}>
                <ol>
                    {
                        mensajeRep.map((datos) => {
                            return (<li>{datos}</li>);
                        })
                    }
                </ol>
            </MensajeGlobo>
        </>
    )
}

export default MensajeAlerta;