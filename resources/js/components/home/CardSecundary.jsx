import React from 'react'
import { SecundaryCard, ContenedorImagen, ImagenPrimary } from '../../elementos/home'

const CardSecundary = ({dato}) => {
    return (
        <SecundaryCard>
            <ContenedorImagen>
                <ImagenPrimary src={ dato.img }/>
            </ContenedorImagen>
        </SecundaryCard>
    )
}

export default CardSecundary
