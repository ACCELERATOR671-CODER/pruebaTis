import React,{useRef} from 'react'
import MensajeAlerta from './MensajeAlerta';
import PropTypes from 'prop-types'

const OrganizacionJ = ({estado, cambiarEstado, funcValidar}) => {

    const orgJur = useRef(null);
    const options = ['Sociedad de Responsabilidad limitada',
                    'Sociedad Coletiva',
                    'Sociedad Anonima',
                    'Sociedad Anonima Mixta'];

    const onChangeOption = () => {
        if(orgJur.current.value === 'false'){
            cambiarEstado({...estado, valido:'false'});
        } else {
            cambiarEstado({...estado, valido:'true'});
        }
    };

    return (
        <>
            <select ref = {orgJur} onChange={onChangeOption} id='orgJur' name='orgJur' onSubmit= {onChangeOption}>
                <option value='false' defaultValue>--Seleccione una opcion--</option>
                {options.map((dat) => {
                    return(<option value={dat}>{dat}</option>)
                })}
            </select>   
            {(estado.valido === 'false') && (<MensajeAlerta mensajeRep={funcValidar(estado)}/>)}
        </>
    )
}

OrganizacionJ.prototype = {
    estado: PropTypes.object, 
    cambiarEstado: PropTypes.func, 
    funcValidar: PropTypes.func
};

export default OrganizacionJ;
