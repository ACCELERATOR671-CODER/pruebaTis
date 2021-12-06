import React,{ useState, useRef } from 'react'
import { Acordeon, Panel, MarcoIcono, TextArea } from '../../elementos/espacioGeneral';
import { Boton } from '../../elementos/registro';
import {faPlus, 
    faMinus } from '@fortawesome/free-solid-svg-icons';

const ItemAcord = ({ titulo, contenido }) => {
    const [desplegado, setDesplegado] = useState(false);
    const refOc = useRef(null);
    const desplegar = () => {
        setDesplegado(!desplegado);
        refOc.current.classList.toggle('nuevoDebate--ocultar');
    }
    return (
        <>
            <Acordeon onClick={ desplegar }>
                <h5>
                    {titulo}
                </h5>
                <MarcoIcono icon={ (!desplegado) ? faPlus:faMinus }/>
            </Acordeon>
                <div ref = { refOc } className='nuevoDebate--ocultar'>
                    <Panel>
                        {contenido()}
                    </Panel>
                </div>
        </>
    )
}

export default ItemAcord
