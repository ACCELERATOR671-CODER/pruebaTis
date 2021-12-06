import React,{ useEffect, useState} from 'react'
import { ContenedorBloqueForo } from '../elementos/foro'
import AniadirNuevoDebate from './ComponentesSeccionDudas/AniadirNuevoDebate'
import TablaDebate from './ComponentesSeccionDudas/TablaDebate'

const SeccionDudas = () => {
   const [debates, setDebates] = useState(null);

   useEffect(() => {
       fetch('api/obtenerDebates')
       .then((response) => response.json())
       .then((json) => {
            setDebates(json);
       });
   }, [])


    return (
        <main>
            <ContenedorBloqueForo>
                <div className='d-flex justify-content-start w-100'>
                    <AniadirNuevoDebate state = { debates } setState = { setDebates }/>
                </div>
                <div className='d-flex justify-content-center'>
                    <TablaDebate ges = {debates}/>
                </div>
            </ContenedorBloqueForo>
        </main>
    )
}

export default SeccionDudas
