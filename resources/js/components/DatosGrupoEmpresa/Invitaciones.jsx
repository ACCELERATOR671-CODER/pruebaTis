import React,{ useState } from 'react'
import Buscador from './Buscador'
import Pendientes from './Pendientes'

const Invitaciones = () => {

    const [pend,setPend] = useState(null);

    return (
        <div className=' text-center justify-content-center mt-5 mb-5'>
            <h1 className= ' mb-5'>Invitar Socios</h1>
            <Buscador pendientes = { pend } setPendientes = { setPend }/>
            <hr/>
            <Pendientes pendientes={ pend } setPendientes={ setPend }/>
        </div>
    )
}

export default Invitaciones
