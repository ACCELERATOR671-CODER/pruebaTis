import React from 'react';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { Icon, Number } from '../../elementos/notificacion';
const Bell = ({cant}) => {
    return (
        <div>
            <Icon icon={ faBell }/>
            { (cant>0) && <Number>{ cant }</Number>}
        </div>
    )
}

export default Bell;
