import styled from "styled-components";
import { colorPrimary } from "../parametros/colores";
import { colorSecundary } from "../parametros/colores";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Bloque = styled.div`
    display: flex;
    justify-content: space-around;
    background-color: rgb(${colorPrimary.r}, ${colorPrimary.g}, ${colorPrimary.b}, 0.8);
    min-width: 402px;
    box-shadow: 5px 5px 5px;
    @media(max-width:600px){
        min-width: 0;
    }
`;

const ImagenPerfil = styled.img`
    border-radius: 50%;
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-color: rgb(${colorSecundary.r}, ${colorSecundary.g}, ${colorSecundary.b});
    border-style: solid;
    background-color: black;
`;

const Corona = styled(FontAwesomeIcon)`
    width: 80px;
    height: 80px;
`;

const Quitar = styled(FontAwesomeIcon)`
    font-size: 50px;
    color: red;
`;

const Aceptar = styled(FontAwesomeIcon)`
    font-size:  50px;
    color: green;
`;

const ContenedorItems = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap : 20px;
    align-items: center;

    @media (max-width: 992px){
        grid-template-columns: 1fr;
    }
`;

export {Bloque, ImagenPerfil, Corona, Quitar, Aceptar, ContenedorItems};