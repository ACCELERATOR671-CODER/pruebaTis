import React from 'react'

const CheckBox = ({datos}) => {
    return (
        <label style={{textDecoration:(datos.idEvento) ? 'line-through': 'none'}}>
            <input type="checkbox" 
                    
                   id={ datos.idOption }
                   name='checkbox[]'
                   disabled={ (datos.idEvento) && true} 
                   defaultChecked={ (datos.idEvento) && true}
                   value={ datos.idOption }/>
            { datos.nombreOpcion }
        </label>
    )
}

export default CheckBox
