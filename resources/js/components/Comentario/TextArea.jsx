import { TextA } from '../../elementos/comentario';

const TextArea = () => {
    return (
        <>
            <TextA
                className="float-left"
                placeholder="Escriba una respuesta"
            /*onBlur={validacion}
                ref={textArea}
                onChange={onChangeup}
                id={nombre}
                valido={estado.valido}
                value={estado.campo}
                onSubmit={validacion} */
            />
        </>
    )
}

export default TextArea;
