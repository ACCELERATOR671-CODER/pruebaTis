import styled, { css } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colorPrimary, colorSecundary } from "../parametros/colores";

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

export { 
    InputStyle,
    Boton
    };