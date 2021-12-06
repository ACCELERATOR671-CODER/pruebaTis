import styled from "styled-components";
import { colorPrimary, colorSecundary } from "../parametros/colores";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MarcoIcono = styled(FontAwesomeIcon)`
    font-size: 15px;
`;

const ContenedorElemento = styled.div`
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    cursor: default;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 5px;
`;

const Backgroundesp = styled.div`
    margin-top: 30px;
    padding: 30px;
    border-style: double;
    width: 100%;
    background-color: rgb(${colorPrimary.r},${colorPrimary.g},${colorPrimary.b});
`;

const MarcoEliminar = styled(FontAwesomeIcon)`
    font-size: 15px;
    color: red;
`;

const Select = styled.select`
    font-size: 30px;
    text-align: center;
    transition: .3s ease all;
    font-size: 20px;
    color: white;
    border-style: solid;
    background-color: rgb(${colorSecundary.r} , ${colorSecundary.g}, ${colorSecundary.b});
    border-color: black;
    :hover{
        color: black;
        border-color: black;
        background-color: rgb(${colorPrimary.r}, ${colorPrimary.g}, ${colorPrimary.b});
    }
`;

const PanelCentral = styled.div`
    min-width: 600px;
    display: grid;
    padding:40px;
    gap: 20px;
    @media(max-width:600px){
        min-width: 0;
    }
`;

const PanelDatos = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 20px;
    @media(max-width:600px){
        grid-template-columns: 1fr;
    }
`;


const Img = styled.img`
    width: 200px;
    height: 200px;
    object-fit: cover;
`;

const Card = styled.div`
    margin-top: 5%;
    text-align: center;
    transition: .5s ease all;
    background-color: rgb(${colorPrimary.r}, ${colorPrimary.g}, ${colorPrimary.b}, 0.7);
    border-color: rgb(${colorPrimary.r}, ${colorPrimary.g}, ${colorPrimary.b}, 0.4);
    border-radius: 30px;
    box-shadow: 10px 10px 10px;
    @media (max-width:700px){
        width: 100%;
        margin: auto;
    }
`;

export { MarcoIcono,
         ContenedorElemento,
         Backgroundesp,
         MarcoEliminar,
         Select,
         PanelCentral,
         PanelDatos,
         Img,
         Card };