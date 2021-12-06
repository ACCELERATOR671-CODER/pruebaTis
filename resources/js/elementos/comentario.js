import styled, { css } from "styled-components";
import { colorPrimary, colorSecundary } from "../parametros/colores";

const TextA = styled.textarea`
    transition: .3s ease all;
    color: black;
    border-color: rgb(${colorPrimary.r}, ${colorPrimary.g}, ${colorPrimary.b}, 0.4);
    border-bottom-color: black;
    resize: none;
    &:focus{
        border-bottom: 4px solid rgb(${colorSecundary.r} , ${colorSecundary.g}, ${colorSecundary.b});
        outline: none;
        box-shadow: 5px 5px 5px;
    }`
const Icon = styled.img`
    /* max-width: 80px; */
    max-heigth: 20px
    /* width: 60px;
    heigth: 50px */
    `
export {
    TextA,
    Icon
};

