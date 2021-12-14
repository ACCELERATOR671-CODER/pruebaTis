import React, { useState, useEffect } from 'react'

const SelectRua = ({name, defaultValue}) => {
    const [contenido, setContenido] = useState(null)

    useEffect(() => {
        const api = (name == 'carrera') ? 'getCarrera':'getGroups'
        fetch('api/'+api)
        .then((response) => response.json())
        .then((json) => {
            setContenido(json);
        })
    }, [])

    return (
        <select name = { name } defaultValue={ defaultValue } required>
            <option value = "">{ defaultValue }</option>
            {(contenido) && (contenido.map((data) => 
                (<option 
                    value = { data.idGrupo||data.idCarrera }>
                        {data.idGrupo || data.idCarrera}-{data.nomGrupo || data.nomCarrera}
                </option>)))}
        </select>
    )
}

export default SelectRua
