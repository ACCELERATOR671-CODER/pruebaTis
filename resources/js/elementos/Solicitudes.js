import styled from "styled-components";
import { colorPrimary, colorSecundary } from "../parametros/colores"

const ImagenPerfilS = styled.img`
    border-radius: 50%;
    width: 30px;
    height: 30px;
    object-fit: cover;
    border-color: rgb(${colorSecundary.r}, ${colorSecundary.g}, ${colorSecundary.b});
    border-style: solid;
    background-color: black;
`;

const Cuadro = styled.div`
    border-style: solid;
    border-color: black;
    background-color: rgb(${colorPrimary.r}, ${colorPrimary.g}, ${colorPrimary.b});
    overflow-y: scroll;
    display: block;
    height: 300px;
    margin: 30px;
`;

const TarjetaSolcitudStyle = styled.div`  
    padding: 5px;
    margin:10px;
    display: grid;
    grid-template-columns: 1fr 3fr 2fr;
    gap: 20px;
    border-style: solid;
    border-color: black;
    border-radius: 20px;
`;

const ContenedorButtonS = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media (max-width:460px){
        grid-template-columns: 1fr;
    }
`;

export {Cuadro, TarjetaSolcitudStyle, ImagenPerfilS, ContenedorButtonS};

