import React from 'react'
import { Caja, ImagenPerfil } from '../../elementos/TabGE'

const CajaBuscador = ({nombre, imagen, evento, setValor}) => {
    return (
        <>
            <Caja onClick = { () => evento(setValor, nombre) }>
                <ImagenPerfil src={(imagen) ? "./resources/socios/"+imagen:"./resources/perfilDefecto.png"}/>
                <label className=' ml-3'>{nombre}</label>
            </Caja>
        </>
    )
}

export default CajaBuscador
