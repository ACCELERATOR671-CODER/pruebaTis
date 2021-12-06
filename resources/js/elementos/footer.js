import styled from "styled-components"
import { colorPrimary } from "../parametros/colores";

const FooterStyle = styled.footer`
    width: 100%;
    text-align: center;
    display: grid;
    grid-template-columns: 1fr;
    text-shadow: 0 0 black;
    background-color: rgb(${colorPrimary.r},${colorPrimary.g},${colorPrimary.b});
    min-width: 400px;
    bottom: 0;
`;

const Label = styled.label`
    margin:10px
`;

export {FooterStyle, Label};