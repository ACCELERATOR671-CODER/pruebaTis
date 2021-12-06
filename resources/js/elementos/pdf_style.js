import styled from "styled-components";
import { colorSecundary, colorPrimary } from "../parametros/colores";

const Pdf_style = styled.div`
    border-radius: 5px;
    text-decoration: none;
    transition: .3s ease all;

    a{
        color : rgb(${colorSecundary.r} , ${colorSecundary.g}, ${colorSecundary.b});
    }

    &:hover{
        background-color: rgb(${colorSecundary.r} , ${colorSecundary.g}, ${colorSecundary.b});
        a {
            color: rgb(${colorPrimary.r}, ${colorPrimary.g}, ${colorPrimary.b});
        }
    }
`;
export {
        Pdf_style
    };
