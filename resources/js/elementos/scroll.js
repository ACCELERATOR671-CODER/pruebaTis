import styled, { css } from "styled-components";
import { colorPrimary, colorSecundary } from "../parametros/colores";

const ScrollDiv = styled.div`
    height: 300px;
    overflow: hidden;
    overflow-y: scroll;
    @media (max-width: 800px){
        grid-template-columns: 1fr;
    }
`;
const Boton = styled.button`
    background-color: rgb(${colorSecundary.r} , ${colorSecundary.g}, ${colorSecundary.b});
    border-color: rgb(${colorSecundary.r} , ${colorSecundary.g}, ${colorSecundary.b});
    :hover{
        background-color: rgb(${colorPrimary.r}, ${colorPrimary.g}, ${colorPrimary.b});
    }
`;
export {
    ScrollDiv,
    Boton
};
