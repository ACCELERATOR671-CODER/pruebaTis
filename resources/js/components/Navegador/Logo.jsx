import React from 'react'
import { Log, Img } from '../../elementos/navegador';

const Logo = ({link}) => {

    const logo = './resources/LOGO.png';


    return (
        <Log>
            <a href={ link }>
                <Img src={ logo } />
            </a>
        </Log>
    )
}

export default Logo;
