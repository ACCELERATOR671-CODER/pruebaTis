import styled, { css } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colorPrimary, colorSecundary } from "../parametros/colores";

const ContenedorDatos = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap : 20px;
    align-items: center;

    @media (max-width: 800px){
        grid-template-columns: 1fr;
    }
`;

const ContenedorBloque = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-column: span 2;
    @media (max-width: 800px){
        text-align: center;
        display: grid;
        grid-template-columns: 1fr;
    }
`;

const InputImagen = styled.input`
    color: transparent;
    margin: 0;
    padding: 0;
    width: 151.5px;
`;

const Titulo = styled.h1`
    margin-top: 50px;
`;

const Boton = styled.button`
    background-color: rgb(${colorSecundary.r} , ${colorSecundary.g}, ${colorSecundary.b});
    border-color: rgb(${colorSecundary.r} , ${colorSecundary.g}, ${colorSecundary.b});
    :hover{
        background-color: rgb(${colorPrimary.r}, ${colorPrimary.g}, ${colorPrimary.b});
    }
`;

const InputStyle = styled.input`
    transition: .3s ease all;
    color: black;
    border-color: rgb(${colorPrimary.r}, ${colorPrimary.g}, ${colorPrimary.b}, 0.4);
    border-bottom-color: black;
    width: 80%;
    &:focus{
        border-bottom: 4px solid rgb(${colorSecundary.r} , ${colorSecundary.g}, ${colorSecundary.b});
        outline: none;
        box-shadow: 5px 5px 5px;
    }

    ${props => props.valido ==='false' && css`
        border-bottom-color: red !important;
    `}

    ${props => props.valido ==='true' && css`
        border-bottom-color: #6aff00 !important;
    `}
`;

const TextA = styled.textarea`
    transition: .3s ease all;
    color: black;
    border-color: rgb(${colorPrimary.r}, ${colorPrimary.g}, ${colorPrimary.b}, 0.4);
    border-bottom-color: black;
    width: 80%;
    resize: none;
    &:focus{
        border-bottom: 4px solid rgb(${colorSecundary.r} , ${colorSecundary.g}, ${colorSecundary.b});
        outline: none;
        box-shadow: 5px 5px 5px;
    }

    ${props => props.valido ==='false' && css`
        border-bottom-color: red !important;
    `}

    ${props => props.valido ==='true' && css`
        border-bottom-color: #6aff00 !important;
    `}
`;

const MensajeRGE = styled.div`
    width: 100%;
    color : white;
    border-style: solid;
    border-radius: 10px;
    justify-content: center;
    text-align: center;
    margin-bottom: 50px;
`;

const MensajeGlobo = styled.div`
    position:absolute;
    display: none;
    width: 300px;
    color : white;
    background-color: red;
    border-style: solid;
    border-radius: 10px;
    justify-content: center;
    text-align: center;
    margin-bottom: 50px;
`;

const Icon = styled(FontAwesomeIcon)`
    margin-left: 10px;
    color:red;
`;



export { ContenedorDatos,
    ContenedorBloque,
    InputImagen,
    Titulo,
    Boton,
    InputStyle,
    MensajeRGE,
    Icon,
    MensajeGlobo,
    TextA};
