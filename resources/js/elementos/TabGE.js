import styled from "styled-components";
import { colorSecundary, colorPrimary } from "../parametros/colores";

const ContenedorTab = styled.div`
    margin-top: 50px;
    
    width: 100%;
    @media (max-width: 992px){
        margin-top: 10px;
    } 

    nav div a {
        transition: .3s ease all;
        color: black;
        border-radius: 10px;
        :hover{
            border-color: rgb(${colorSecundary.r} , ${colorSecundary.g}, ${colorSecundary.b});
            background-color: rgb(${colorSecundary.r} , ${colorSecundary.g}, ${colorSecundary.b});
            color: rgb(${colorPrimary.r}, ${colorPrimary.g}, ${colorPrimary.b});
        }
    }

    nav, #contenido-GE {
        min-width: 403px;
    }
`;

const BotonStyled = styled.button`
    height: 30px;
`;

const InputBuscador = styled.input`
    width: 300px;
`;

const Caja = styled.div`
    text-align: left;
    color: black;
    transition: .3s ease all;
    background-color: rgb(${colorPrimary.r}, ${colorPrimary.g}, ${colorPrimary.b});
    :hover{
        background-color: rgb(${colorSecundary.r} , ${colorSecundary.g}, ${colorSecundary.b});
        color: rgb(${colorPrimary.r}, ${colorPrimary.g}, ${colorPrimary.b});
        border-color: rgb(${colorSecundary.r} , ${colorSecundary.g}, ${colorSecundary.b});;
        img {
            border-color: rgb(${colorPrimary.r}, ${colorPrimary.g}, ${colorPrimary.b});
        }
    }
`;

const ImagenPerfil = styled.img`
    border-radius: 50px;
    height: 35px;
    width: 35px;
    margin: 5px;
    object-fit: cover;
    border-style: solid;
    border-color: rgb(${colorSecundary.r} , ${colorSecundary.g}, ${colorSecundary.b});
`;


export {ContenedorTab, BotonStyled, InputBuscador, Caja, ImagenPerfil};