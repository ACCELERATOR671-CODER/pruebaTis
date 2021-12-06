import React,{useRef} from 'react'
import PropTypes from 'prop-types'

const OrganizacionJ = ({estado, cambiarEstado}) => {

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
                <option value={estado.campoOrig}>{estado.campoOrig}</option>
                {options.map((dat) => {
                    if(dat != estado.campoOrig){
                        return(<option value={dat}>{dat}</option>)
                    }
                })}
            </select>
        </>
    )
}

OrganizacionJ.prototype = {
    estado: PropTypes.object,
    cambiarEstado: PropTypes.func,
    funcValidar: PropTypes.func
};

export default OrganizacionJ;
