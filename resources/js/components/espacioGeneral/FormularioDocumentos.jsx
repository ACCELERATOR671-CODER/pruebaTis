import React from 'react'

const FormularioDocumentos = ({usuario}) => {

    const [contenido, setContenido] = useState([]);
    const [cambio, setCambio] = useState(true)
    const descripciRef = useRef(null);
    const Submit = () =>{
        if(descripciRef.current.value.length > 10){
            const data = new FormData ();
            data.append('anuncio',(descripciRef.current.value) ? descripciRef.current.value:".");
            fetch ('api/registrarAnuncio',{
                method:'POST',
                body:data
            })
            .then ((response) => {
                if(response.ok){
                    setCambio(!cambio);
                    alert("Anuncio registrado con exito")
                } else {
                    alert("Hubo un error con el servidor, intente mas tarde")
                }
            })
        } else {
            alert("el anuncio debe contener un minimo de 10 caracteres");
        }
    }

    useEffect(() => {
        fetch('api/getAnuncios')
        .then(response => response.json())
        .then((json) => {
            setContenido(json);
        })
    }, [cambio])

    return (<>
    
        { (usuario) && ((usuario.nombreRol == 'Consultor') && 
            (<>
        <TextArea ref = {descripciRef} id='anuncioId1'>

        </TextArea>
        <Boton type='button' onClick={Submit}>Enviar</Boton>
        </>))}   
        {contenido.map((data) => <div style={{borderStyle:'solid', padding: '10px'}}>{data.anuncio}<br/> {data.fecha_creacion} </div>)}
    </>)
}

export default FormularioDocumentos
