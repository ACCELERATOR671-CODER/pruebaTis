import React from 'react'
import { IconNav, LabelNav } from '../../elementos/navegador'
import { GrupoElement } from '../../elementos/navegador'

const BotonSession = ({link, name, contenido, img, action}) => {
    return (
        <GrupoElement id={ name }>
            <a className=' d-flex nav-link m-1 text-decoration-none w-100' href= { link } onClick = {action}>
                <IconNav icon = { img }/>
                <div className=' m-auto w-100'>
                    <LabelNav>{ contenido }</LabelNav>
                </div>
            </a>
        </GrupoElement>
    )
}

export default BotonSession
