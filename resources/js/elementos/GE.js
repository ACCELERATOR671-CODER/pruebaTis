import styled, { css } from "styled-components"
import { colorPrimary, colorSecundary } from "../parametros/colores";

const GrupoTabla = styled.div`
    display: grid;

`;

const Tabla = styled.table`
    border-style: solid;
    border-color: black;
    color: black;
    text-align: center;
    td{
        word-break: break-word;
    }

`; 

const Tbody = styled.tbody`
    height: 300px;
    overflow-y: scroll;
`;

const THead = styled.thead`
    background-color: rgb(${colorPrimary.r}, ${colorPrimary.g}, ${colorPrimary.b});
    border-style: solid;
    border-color: black;
`; 

const RowPrimary= styled.tr`
    height: 44px;
    background-color: rgb(${colorPrimary.r}, ${colorPrimary.g}, ${colorPrimary.b});
`;

const RowSecundary = styled.tr`
    height: 44px;
    background-color: rgb(${colorSecundary.r}, ${colorSecundary.g}, ${colorSecundary.b});
`

const BotonSolicitud = styled.button`
    transition: .3s ease all;
    border-radius: 5px;
    color: white;
    border-style: solid;
    :hover{
        color: black;
        border-color: rgb(${colorPrimary.r}, ${colorPrimary.g}, ${colorPrimary.b});
        background-color: rgb(${colorPrimary.r}, ${colorPrimary.g}, ${colorPrimary.b});
    }

    ${props => props.valido ==='true' && css`
        border-bottom-color: red !important;
        background-color: red !important;
    `}

    ${props => props.valido ==='false' && css`
        background-color: rgb(${colorSecundary.r} , ${colorSecundary.g}, ${colorSecundary.b}) !important;
        border-color: rgb(${colorSecundary.r} , ${colorSecundary.g}, ${colorSecundary.b}) !important;
    `}
`;

export {
    Tabla,
    THead,
    RowPrimary,
    RowSecundary,
    GrupoTabla,
    BotonSolicitud,
    Tbody
}