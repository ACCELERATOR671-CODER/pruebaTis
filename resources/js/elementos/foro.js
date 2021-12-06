import styled from "styled-components";
import { colorPrimary, colorSecundary } from "../parametros/colores"

const ContenedorBloqueForo = styled.div`
    width: 95%;
    display: block;
    gap: 40px;
    padding: 10px;
    margin: 10px;
    @media (max-width:611px){
        margin:10px;
        padding: 0;
        width: 100%;
    }
`;

const ContenedorInputs = styled.div`
    padding-top: 20px;
    transition: .3s ease all;
    padding-bottom: 20px;
    display: grid;
    grid-template-columns: 1fr 10fr;
    gap: 10px;
`;

const TextArea = styled.textarea`
    padding: 10px;
    resize: none;
`;

const ContenedorBotonesDeb = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: end;
`;

const TarjetaDebate = styled.div`
    display: grid;
    gap: 10px;
    background-color: rgb(${ colorPrimary.r }, ${ colorPrimary.g }, ${colorPrimary.b});
    margin: 100px;
    padding: 30px;
    border-style: solid;
    border-color: black;
    min-width: 700px;
    @media (max-width:700px){
        width: 100%;
        min-width: 403px;
    }
`;

const ImagenDebate = styled.img`
    width: 90px;
    height: 90px;
    border-radius: 50%;
    border-style: solid;
    border-color: rgb(${ colorSecundary.r},${colorSecundary.g},${colorSecundary.b});
`

const ContenedorBloqueDebate =styled.div`
    display: grid;
    grid-template-columns: 4fr 1fr;
    gap: 10px;
`;

const ContenedorBloqueTitulo = styled.div`
    display: block;
    padding: 7px;
`;

const TextAreaDebate = styled.div`
    border-style: solid;
    border-color: black;
    height: 200px;
    padding: 10px;
`;

const ContenedorImp = styled.div`
    width: 100%;
    display: flex;
`;

const InputMensaje = styled.input`
    border-color: black;
`;

const MensajeDiv = styled.div`
    width: 100%;
    border-style: solid;
    border-color: black;
    padding: 10px;
`;

const ContenedorMensaje = styled.div`
    display: flex;
    gap: 5px;
    margin-left: 5%;
`;

const ImagenMensaje = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border-style: solid;
    border-color: rgb(${ colorSecundary.r },${ colorSecundary.g },${ colorSecundary.b });
`;

export { ContenedorBloqueForo, 
         ContenedorInputs, 
         TextArea , 
         ContenedorBotonesDeb,
         TarjetaDebate,
         ImagenDebate,
         ContenedorBloqueTitulo,
         ContenedorBloqueDebate,
         TextAreaDebate,
         ContenedorImp,
         InputMensaje,
         MensajeDiv,
         ContenedorMensaje,
         ImagenMensaje};

