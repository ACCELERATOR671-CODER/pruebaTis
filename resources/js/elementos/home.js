import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colorSecundary, colorPrimary } from "../parametros/colores";

const Button = styled.button`
    padding: 0;
    transition: ease 0.3s all;
    border-style: none;
    background-color: transparent;
    :hover{
        color: rgb(${colorSecundary.r},${colorSecundary.g},${colorSecundary.b});
    }

`;

const Icono = styled(FontAwesomeIcon)`
    font-size: 50px;
`;

const Contenedor = styled.div`
    display: flex;
    margin-top: 100px;
    margin-bottom: 50px;
    padding-left:20px;
    padding-right: 20px;
    justify-content: space-around;
    align-items: center;
    @media (max-width:991px){
        margin-top: 50px;
    }
`;

const PrimaryCard = styled.div`
    /*overflow-y: scroll;*/
    max-width: 500px;
    min-width: 500px;
    height: 350px;
    text-align: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    transition: .5s ease all;
    background-color: rgb(${colorPrimary.r}, ${colorPrimary.g}, ${colorPrimary.b}, 0.7);
    border-color: rgb(${colorPrimary.r}, ${colorPrimary.g}, ${colorPrimary.b}, 0.4);
    box-shadow: 10px 10px 10px;
    @media (max-width:600px){
        grid-template-columns: 1fr;
        min-width: 0;
        height: 700px;
        width: 100%;
        margin: auto;
    }
`;
const SecundaryCard = styled.div`
    max-width: 200px;
    min-width: 200px;
    text-align: center;
    transition: .5s ease all;
    background-color: rgb(${colorPrimary.r}, ${colorPrimary.g}, ${colorPrimary.b}, 0.7);
    border-color: rgb(${colorPrimary.r}, ${colorPrimary.g}, ${colorPrimary.b}, 0.4);
    box-shadow: 10px 10px 10px;
    @media (max-width:800px){
        position: absolute;
        z-index: -10;
    }
    @media (max-width:992px){
        max-width: 1000px;
        min-width: 0;
    }
    @media (max-width:600px){
        display: none;
    }
`;

const ImagenPrimary = styled.img`
    opacity: 0.5;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const ContenedorImagen = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;
`;

const ContenedorTexto = styled.div`
    padding: 5px;
    display: grid;
    align-items: center;
    justify-content: center;
`;

export {
        Icono, 
        Button,
        Contenedor,
        PrimaryCard,
        SecundaryCard,
        ImagenPrimary,
        ContenedorImagen,
        ContenedorTexto
}