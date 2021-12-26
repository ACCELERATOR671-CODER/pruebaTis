import React,{ useRef } from 'react'

const Reset = ({idUsuario}) => {

    const resetearUsuario = ()=>{
        const id = new FormData();
        id.append('idUsuario', idUsuario);
        fetch('api/resetear',{
            method:'POST',
            body:id
        })
        .then((response) => {
            if(!response.ok){
                alert("Usuario no se pudo reestablecer");
            }
        })
    }

    return (<>
        <button onClick={resetearUsuario}>
            Reset
        </button>
    </>)
}

export default Reset
