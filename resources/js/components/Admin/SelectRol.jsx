import React, { useRef } from 'react'

const SelectRol = ({ rol, idUsuario }) => {

    const select = useRef(null)

    const actualizarRol = () => {
        const post = new FormData();
        post.append('idUsuario', idUsuario);
        post.append('nombreRol', select.current.value);
        fetch('api/actualizarRol', {
            method: 'POST',
            body: post
        })
            .then((response) => {
                if (!response.ok) {
                    alert("hubo un error en el servidor");
                }
            })
    }
    const resetearUsuario = () => {
        const id = new FormData();
        id.append('idUsuario', idUsuario);
        fetch('api/resetear', {
            method: 'POST',
            body: id
        })
            .then((response) => {
                if (!response.ok) {
                    alert("Usuario no se pudo reestablecer");
                }
            })
    }

    return (<>
        {(rol) ? ((idUsuario != sessionStorage.getItem('id')) ?
            (<>
                <select ref={select}
                    defaultValue={rol}
                    onChange={actualizarRol}>
                    <option value='Administrador'>Administrador</option>
                    <option value='Estudiante'>Estudiante</option>
                    <option value='Consultor'>Consultor</option>
                </select>
                <button onClick={resetearUsuario}>
                    Reset
                </button>
            </>
            ) : (<p>{rol}</p>)) : (<p>No Registrado</p>)}
    </>)
}

export default SelectRol
