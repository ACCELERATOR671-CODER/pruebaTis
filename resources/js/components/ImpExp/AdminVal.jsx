import React, {useState} from 'react'
import { Cuadro, 
    Icon, 
    ContenedorImportar, 
    CuadroInputs,
    Gap,
    IconoSubir,
    IconoCargar,
    IconoFallo,
    IconoSucc } from '../../elementos/impexp'
import { Boton } from '../../elementos/registro';
import { faExclamationTriangle,
    faUpload,
    faSpinner,
    faCheckCircle,
    faTimesCircle} from '@fortawesome/free-solid-svg-icons';

const AdminVal = () => {
    const [state, setState] = useState((<IconoSubir icon={faUpload}/>));
    const [state1, setState1] = useState((<IconoSubir icon={faUpload}/>));
    const subirUsuarios = (e) => {
        e.preventDefault();
        const datos = new FormData(e.currentTarget);
        setState(<IconoCargar icon= {faSpinner}/>);
        fetch('api/importarExelUsuarios', {
            method: 'POST',
            body: datos,
        })
        .then((response) => {
            if(response.ok){
                setState(<IconoSucc icon={ faCheckCircle }/>);
            } else {
                alert("error interno del servidor, intentelo de nuevo mas tarde");
                setState(<IconoFallo icon={ faTimesCircle }/>);
            }
            return response.json();
        })
        .then((json) => {
            if(json.mensaje){
                alert(mensaje);
            }
        })
    }

    const subirFunda = (e) => {
        e.preventDefault();
        e.preventDefault();
        const datos = new FormData(e.currentTarget);
        setState1(<IconoCargar icon= {faSpinner}/>);
        fetch('api/importarExelEmpresas', {
            method: 'POST',
            body: datos,
        })
        .then((response) => {
            if(response.ok){
                setState1(<IconoSucc icon={ faCheckCircle }/>);
            } else {
                alert("error interno del servidor, intentelo de nuevo mas tarde");
                setState1(<IconoFallo icon={ faTimesCircle }/>);
            }
            return response.json();
        })
        .then((json) => {
            if(json.mensaje){
                alert(mensaje);
            }
        })
    }
    return (
        <>
            <h1>Importar Datos</h1>
                <Cuadro>
                    <div className='d-flex justify-content-center align-items-center'>
                        <Icon icon={ faExclamationTriangle }/>
                    </div>
                    <ol className=' text-left'>
                        <li>Los archivos deben ser en formato Xlsx</li>
                        <li>Asegurese de que el archivo sea el correcto antes de subirlo</li>
                        <li>Verifique que los datos inician desde la primera columna del archivo Xlsx</li>
                        <li>No recargue ni cierre el navegador mientras se suben los datos</li>
                        <li>Los datos de fundaempresa se sobreescribiran con los datos del nuevo archivo</li>
                        <li>Solo se registrará a los usuarios cuyo codigo sis no exista en la base de datos</li>
                    </ol>
                </Cuadro>
                <ContenedorImportar>
                    <label htmlFor="">Usuarios</label>
                    <CuadroInputs 
                       id='formularioUs' 
                       onSubmit={subirUsuarios} 
                       method='POST' 
                       encType="multipart/form-data">
                        <input name='exel' type="file" accept=".xlsx,.xls" required/>
                        <Gap>
                            <Boton type='submit'>Subir Datos</Boton>
                            { state } 
                        </Gap>
                    </CuadroInputs>
                    <label htmlFor="">Fundaempresa</label>
                    <CuadroInputs 
                                    id='formularioFu' 
                                    onSubmit={subirFunda} 
                                    method='POST' 
                                    encType="multipart/form-data">
                        <input name='exel' type="file" accept=".xlsx,.xls" required/>
                        <Gap>
                            <Boton type='submit'>Subir Datos</Boton>
                            { state1 } 
                        </Gap>
                    </CuadroInputs>
                </ContenedorImportar>
        </>
    )
}

export default AdminVal
